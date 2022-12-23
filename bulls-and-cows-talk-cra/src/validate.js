/**
 * 주어진 입력이 0으로 시작하는지 판단하는 함수
 * @param {string} input 
 * @returns {boolean} 주어진 입력이 0으로 시작하는지 여부
 */
function startsWithZero(input) {
    return (input.charAt(0) == "0");
}

/**
 * 주어진 입력이 숫자로만 이루어 있는지 판단하는 함수
 * @param {string} input 
 * @returns {boolean} '숫자로만 이루어져 있지 않다'에 대한 판단 결과
 */
function isNotNumberInput(input) {
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input.charAt(i))) return true;
    }

    return false;
}

/**
 * 주어진 숫자 입력에 중복되는 숫자가 있는지 판단하는 함수
 * @param {string} input 
 * @returns {boolean} 중복되는 숫자가 있는지 여부
 */
function hasRedundancy(input) {
    let numbers = [];
    for (let i = 0; i < input.length; i++) {
        if (numbers.includes(input.charAt(i))) return true;
        numbers.push(input.charAt(i));
    }

    return false;
}

/**
 * 주어진 입력이 3자리 입력이 맞는지 판단하는 함수
 * @param {string} input 
 * @returns {boolean} '3자리 입력이 아니다'에 대한 판단 결과
 */
function hasIncorrectLength(input) {
    return (input.length !== 3);
}

/**
 * 입력이 바뀔 때마다 호출되어 해당 입력이 올바른지 판단하는 함수
 * @param {string} input 
 * @returns {string} 문제가 있는 부분을 일컫는 문자열
 */
export function checkIntermediateInput(input) {
    if (startsWithZero(input)) return "zerostart";

    if (isNotNumberInput(input)) return "number";

    if (hasRedundancy(input)) return "redundancy";

    return "none";
}

/**
 * 최종적으로 제출된 입력이 올바른지 판단하는 함수
 * @param {string} input 
 * @returns {string} 문제가 있는 부분을 일컫는 문자열
 */
export function checkSubmittedInput(input) {
    if (startsWithZero(input)) return "zerostart";

    if (isNotNumberInput(input)) return "number";

    if (hasRedundancy(input)) return "redundancy";

    if (hasIncorrectLength(input)) return "length";

    return "none";
}