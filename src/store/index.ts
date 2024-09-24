import axios, { AxiosError } from "axios";
import { createStore } from "vuex";
import { BusesResponse, ParsedBuses } from "@/types/types";

export default createStore<{
  buses: BusesResponse[];
  isLoading: boolean;
  isError: false | AxiosError;
}>({
  state: {
    buses: [],
    isLoading: false,
    isError: false,
  },
  getters: {
    buses(state) {
      return state.buses;
    },
    parsedBuses(state) {
      return state.buses.reduce((acc, current) => {
        if (!acc[current.line]) {
          acc[current.line] = [];
        }

        acc[current.line][current.order - 1] = {
          stop: current.stop,
          time: acc[current.line][current.order - 1]
            ? [...acc[current.line][current.order - 1].time, current.time]
            : [current.time],
        };

        return acc;
      }, {} as ParsedBuses);
    },
    isLoading(state) {
      return state.isLoading;
    },
  },
  mutations: {
    setBuses(state, list) {
      state.buses = list;
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setIsError(state, isError) {
      state.isError = isError;
    },
  },
  actions: {
    async getBuses(context) {
      const API_URL = "http://localhost:3000/stops";

      context.commit("setIsLoading", true);

      await axios
        .get<BusesResponse[]>(API_URL)
        .then((response) => {
          context.commit("setBuses", response.data);
        })
        .catch((error) => {
          console.error(error as AxiosError);
          context.commit("setIsError", error);
        });

      context.commit("setIsLoading", false);
    },
  },
  modules: {},
});
