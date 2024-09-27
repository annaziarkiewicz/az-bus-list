import { describe, test, expect } from "vitest";
import { fireEvent, render } from "@testing-library/vue";

import AzSearchBar from "@/components/azSearchBar.vue";

describe("AzSearchBar", () => {
  test("it should match snapshot", () => {
    // Act
    const { container } = render(AzSearchBar);

    // Assert
    expect(container).toMatchSnapshot();
  });

  test("it should emit input event", async () => {
    // Arrange
    const { getByTestId, emitted } = render(AzSearchBar);
    const input: HTMLInputElement = getByTestId("az-search-bar");

    // Act
    await fireEvent.input(input, { target: { value: "test" } });
    await fireEvent.keyUp(input, { key: "Enter" });

    // Assert
    expect(input.value).toBe("test");
    expect(emitted().search).toEqual([["test"]]);
  });
});
