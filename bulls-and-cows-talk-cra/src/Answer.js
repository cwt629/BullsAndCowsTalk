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