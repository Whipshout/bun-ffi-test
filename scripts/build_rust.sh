#!/bin/bash

cd utils-rust
cargo build --release && mv ./target/release/libutils_rust.so ..