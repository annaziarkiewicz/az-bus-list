import { describe, test, expect } from "vitest";
import { render } from "@testing-library/vue";

import AzContainer from "@/components/azContainer.vue";

const props = [
  {
    bg: false,
    display: "col",
    outline: false,
  },
  {
    bg: true,
    display: "row",
    outline: true,
  },
];
describe("AzContainer", () => {
  test.each(props)("it should match snapshot", (propsCase) => {
    // Act
    const { container } = render(AzContainer, {
      props: propsCase,
    });

    // Assert
    expect(container).toMatchSnapshot();
  });
});
