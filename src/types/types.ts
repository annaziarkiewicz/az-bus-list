export type BusStopTimeline = {
  stop: string;
  time: string[];
};

export type BusesResponse = {
  stop: string;
  time: string;
  line: number;
  order: number;
};

export type ParsedBuses = Record<number, BusStopTimeline[]>;

export type TSort = "asc" | "desc";
