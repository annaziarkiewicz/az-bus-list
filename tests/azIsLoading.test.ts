import { describe, test, expect } from "vitest";
import { render } from "@testing-library/vue";

import AzIsLoading from "@/components/azIsLoading.vue";

describe("AzIsLoading", () => {
  test("it should match snapshot", () => {
    // Act
    const { container } = render(AzIsLoading);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
