import { checkIntermediateInput } from "./validate"

export default function InputShow({ input }) {
    return (
        <div id="inputshow">
            <h2>나의 입력</h2>
            <div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
            <p>{getErrorMessage(input)}</p>
        </div>
    )
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