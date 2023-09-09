const std = @import("std");
const testing = std.testing;

export fn mul(lhs: i32, rhs: i32) i32 {
    return lhs * rhs;
}

export fn div(lhs: f32, rhs: f32) f32 {
    if (rhs == 0) return 0;
    return lhs / rhs;
}

test "basic mul functionality" {
    try testing.expect(mul(3, 7) == 21);
}

test "basic div functionality" {
    try testing.expect(div(5, 2) == 2.5);
}

test "div by zero functionality" {
    try testing.expect(div(8, 0) == 0);
}
