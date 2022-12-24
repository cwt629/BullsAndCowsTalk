import { getCompareResult } from "./Answer";

// export const gameExplanation = {
//     class: "guide",
//     text: "숫자야구톡에 오신 것을 환영합니다!\n아래는 게임에 대한 설명입니다.\n1. 자리수가 서로 다른 3자리 숫자를 맞춰야 합니다.\n2. 3자리 숫자를 유추하여 입력하면, 다음과 같이 힌트가 주어집니다.\n- 해당 숫자가 존재하고 자리까지 일치하면: Strike\n- 해당 숫자가 다른 자리에 존재하면: Ball\n- 어느 숫자도 정답에 존재하지 않으면: Out\n3. 주어지는 힌트들로 정답을 유추하여 맞춰보세요!"
// }

export const gameExplanation = (
    <li className="guide" key="guide">
        숫자야구톡에 오신 것을 환영합니다!<br />
        아래는 게임에 대한 설명입니다.<br />
        1. 자리수가 서로 다른 3자리 숫자를 맞춰야 합니다.<br />
        2. 3자리 숫자를 유추하여 입력하면, 다음과 같이 힌트가 주어집니다.<br />
        - 해당 숫자가 존재하고 자리까지 일치하면: Strike<br />
        - 해당 숫자가 다른 자리에 존재하면: Ball<br />
        - 어느 숫자도 정답에 존재하지 않으면: Out<br />
        3. 주어지는 힌트들로 정답을 유추하여 맞춰보세요!
    </li>
)

export function generateTalksAboutInput(input, answer, counter) {
    let talks = [];

    const result = getCompareResult(input, answer);

    // input과 guide에 대해 메시지 추가
    talks.push((
        <li className="input" key={input}>{input}</li>
    ));

    talks.push((
        <li className="guide" key={input + result}>
            입력: {input}<br />
            결과: {result}
        </li>
    ));

    // 정답을 맞춘 경우
    if (result === "3 Strike") {
        talks.push((
            <li className="guide correct" key={input + result + `${counter}`}>
                축하드립니다! 정답을 맞추셨습니다!<br />
                시도 횟수: {counter}회
            </li>
        ))
    }

    return talks;
}