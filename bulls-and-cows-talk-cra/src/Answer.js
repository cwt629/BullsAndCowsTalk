/**
 * 숫자야구 게임의 무작위 정답을 만들어 반환하는 함수
 * @returns {number[]} 서로 다른 3자리 숫자의 자리수들을 담은 배열
 */
export function generateAnswer() {
    let answers = [];

    while (answers.length < 3) {
        // 첫자리는 0이 되지 않는다
        const randomDigit =
            (answers.length > 0) ? Math.floor(Math.random() * 10) : Math.floor(Math.random() * 9) + 1;

        if (!answers.includes(randomDigit))
            answers.push(randomDigit);
    }

    return answers;
}

/**
 * 입력과 정답을 비교한 결과를 반환하는 함수
 * @param {string} input 
 * @param {number[]} answer 
 * @returns 비교 결과 객체
 */
export function compareWithAnswer(input, answer) {
    let result = {
        strike: 0,
        ball: 0
    };

    for (let i = 0; i < input.length; i++) {
        const currentInputDigit = parseInt(input.charAt(i));

        // strike
        if (currentInputDigit === answer[i]) result.strike++;

        // ball
        else if (answer.includes(currentInputDigit)) result.ball++;
    }

    return result;
}

export function getCompareResult(input, answer) {
    let messages = []
    const result = compareWithAnswer(input, answer); // 결과 받아오기

    if (result.strike > 0) messages.push(`${result.strike} Strike`);
    if (result.ball > 0) messages.push(`${result.ball} Ball`);

    // 스트라이크나 볼 결과를 ,로 이어준다. 아무 결과도 없으면 Out.
    return (messages.length > 0) ? messages.join(", ") : "Out";
}