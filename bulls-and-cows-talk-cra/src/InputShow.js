import { checkIntermediateInput } from "./validate"

export default function InputShow({ input }) {
    return (
        <div id="inputshow">
            <h2>나의 입력</h2>
            <div>
                {getNumbersToShow(input)}
            </div>
            <p>{getErrorMessage(input)}</p>
        </div>
    )
}

/**
 * 숫자가 들어갈 3칸에 출력할 요소들을 받아오는 함수
 * @param {string} input 
 * @returns {string[]} 3칸에 각각 들어갈 요소들
 */
function getShowboard(input) {
    let showboard = ["", "", ""]; // 기본적으로 비어있음

    // 올바른 입력인 경우에만 보여준다
    if (checkIntermediateInput(input) === "none") {
        for (let i = 0; i < input.length; i++) {
            showboard[i] = input.charAt(i);
        }
    }

    return showboard;
}

/**
 * 숫자가 들어갈 3칸에 대한 html 요소를 받아오는 함수
 * @param {string} input 
 * @returns 각 요소들을 span으로 감싼 배열
 */
function getNumbersToShow(input) {
    const showboard = getShowboard(input);

    return showboard.map((num) => (
        <span>{num}</span>
    ))
}

/**
 * 중간 입력 validate 결과에 따라 출력할 에러 메시지를 반환하는 함수
 * @param {string} input 사용자의 입력
 * @returns {string} 출력할 에러 메시지
 */
function getErrorMessage(input) {
    const result = checkIntermediateInput(input);

    switch (result) {
        case "zerostart":
            return "숫자는 0으로 시작하지 않습니다.";

        case "number":
            return "입력은 숫자여야 합니다.";

        case "redundancy":
            return "각 자리수는 중복되지 않아야 합니다.";

        default:
            return "";
    }
}