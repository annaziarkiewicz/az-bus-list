import { describe, test, expect } from "vitest";
import { render } from "@testing-library/vue";

import AzViewTitle from "@/components/azViewTitle.vue";

const props = {
  title: "tested title",
};

describe("AzViewTitle", () => {
  test("it should match snapshot", () => {
    // Act
    const { container } = render(AzViewTitle, {
      props,
    });

    // Assert
    expect(container).toMatchSnapshot();
  });
});
