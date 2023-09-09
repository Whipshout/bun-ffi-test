import { describe, expect, test } from "bun:test";

import { divide, multiply, substract, sum } from ".";

describe("Test functions from Zig", () => {
  test("Multiply", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test("Divide", () => {
    expect(divide(5, 2)).toBe(2.5);
  });
});

describe("Test functions from Rust", () => {
  test("Sum", () => {
    expect(sum(1, 8)).toBe(9);
  });

  test("Substract", () => {
    expect(substract(4, 11)).toBe(-7);
  });
});

