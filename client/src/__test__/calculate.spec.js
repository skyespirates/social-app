import { describe, it, expect } from "vitest";
import { sum, sub, mul, div } from "../utils/calculate";

describe("test calculation function", () => {
  it("should return addition result", () => {
    const a = 3;
    const b = 4;
    expect(sum(a, b)).toBe(a + b);
  });
  it("should return subtraction result", () => {
    const a = 15;
    const b = 6;
    expect(sub(a, b)).toBe(a - b);
  });
  it("sould return multiplication result", () => {
    const a = 4;
    const b = 5;
    expect(mul(a, b)).toBe(a * b);
  });
  it("should return division result", () => {
    const a = 8;
    const b = 4;
    expect(div(a, b)).toBe(a / b);
  });
  it("should return undefined when divided by 0", () => {
    const a = 4;
    const b = 0;
    expect(div(a, b)).toBe(undefined);
  });
});
