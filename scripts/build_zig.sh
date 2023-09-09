#!/bin/bash

cd utils-zig
zig build && mv ./zig-out/lib/libutils_zig.so ..