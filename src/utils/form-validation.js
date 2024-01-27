export function isEmail(value) {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
}

export function isNotEmpty(value) {
    return value.trim() !== '';
}

export function isPassword(password, minLength) { // check if password has the required number of characters, capital letter and lowercase letter
    return (
        password.length >= minLength 
        && /[A-Z]/.test(password) 
        && /[A-Z]/.test(password)
    )
}

export function minLength(password, minLength) { // check if password has the required number of characters, capital letter and lowercase letter
    return password.length >= minLength 
}

export function includesCapital (value) {
    return /[A-Z]/.test(value)
}

export function includesLowercase (value) {
    return /[a-z]/.test(value)
}

export function areEqual(firstValue, secondValue) {
    return firstValue === secondValue;
}

export function notNegative(value){
    return value >= 0
}

export function noEmptyValues(obj) {
    return Object.values(obj).every(value => value);
 }