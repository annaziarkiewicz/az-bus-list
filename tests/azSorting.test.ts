import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/vue";

import AzSorting from "@/components/azSorting.vue";

const props = {
  activeOrder: "asc",
};

describe("AzSorting", () => {
  test("it should match snapshot", () => {
    // Act
    const { container } = render(AzSorting, {
      props,
    });

    // Assert
    expect(container).toMatchSnapshot();
  });

  test('it should emit "sorting" event when clicked on desc', async () => {
    // Arrange
    const { emitted } = render(AzSorting, {
      props,
    });

    // Act
    await fireEvent.click(screen.getByTestId("az-sorting-desc"));

    // Assert
    expect(emitted().sorting).toEqual([["desc"]]);
  });

  test('it should emit "sorting" event when clicked on asc', async () => {
    // Arrange
    const { emitted } = render(AzSorting, {
      props,
    });

    // Act
    await fireEvent.click(screen.getByTestId("az-sorting-asc"));

    // Assert
    expect(emitted().sorting).toEqual([["asc"]]);
  });
});
