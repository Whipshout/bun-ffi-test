#[no_mangle]
pub extern "C" fn add(lhs: i32, rhs: i32) -> i32 {
    lhs + rhs
}

#[no_mangle]
pub extern "C" fn sub(lhs: i32, rhs: i32) -> i32 {
    lhs - rhs
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn add_test() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }

    #[test]
    fn sub_test() {
        let result = sub(2, 2);
        assert_eq!(result, 0);
    }
}
