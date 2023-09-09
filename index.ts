import { dlopen, suffix } from "bun:ffi";

// -------------------- Zig FFI ---------------------
const {
  symbols: { mul, div },
} = dlopen(`./libutils_zig.${suffix}`, {
  mul: {
    args: ["i32", "i32"],
    returns: "i32",
  },
  div: {
    args: ["f32", "f32"],
    returns: "f32",
  },
});

export function multiply(lhs: number, rhs: number): number {
  return mul(lhs, rhs);
}

export function divide(lhs: number, rhs: number): number {
  return div(lhs, rhs);
}
// --------------------------------------------------

// -------------------- Rust FFI --------------------
const {
  symbols: { add, sub },
} = dlopen(`./libutils_rust.${suffix}`, {
  add: {
    args: ["i32", "i32"],
    returns: "i32",
  },
  sub: {
    args: ["i32", "i32"],
    returns: "i32",
  },
});

export function sum(lhs: number, rhs: number): number {
  return add(lhs, rhs);
}

export function substract(lhs: number, rhs: number): number {
  return sub(lhs, rhs);
}
// --------------------------------------------------

console.log("Add 3 + 4:", sum(3, 4))
console.log("Substract 5 - 12:", substract(5, 12))
console.log("Multiply 2 * 8:", multiply(2, 8))
console.log("Divide 15 / 2:", divide(15, 2))