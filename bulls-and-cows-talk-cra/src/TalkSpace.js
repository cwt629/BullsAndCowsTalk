export default function TalkSpace() {
    return (
        <div id="talkspace">
            <ul>
                <li class="guide">
                    숫자야구톡에 오신 것을 환영합니다!<br />
                    아래는 게임에 대한 설명입니다.<br />
                    1. 자리수가 서로 다른 3자리 숫자를 맞춰야 합니다.<br />
                    2. 3자리 숫자를 유추하여 입력하면, 다음과 같이 힌트가 주어집니다.<br />
                    - 해당 숫자가 존재하고 자리까지 일치하면: Strike<br />
                    - 해당 숫자가 다른 자리에 존재하면: Ball<br />
                    - 어느 숫자도 정답에 존재하지 않으면: Out<br />
                    3. 주어지는 힌트들로 정답을 유추하여 맞춰보세요!
                </li>
                <li class="input">
                    123
                </li>
                <li class="guide">
                    입력: 123<br />
                    결과: 1 Strike
                </li>
                <li class="input">
                    145
                </li>
                <li class="guide">
                    입력: 145<br />
                    결과: 3 Strike
                </li>
                <li class="guide correct">
                    축하합니다! 정답을 맞추셨습니다!<br />
                    시도 횟수: 2회
                </li>
            </ul>
        </div>
    )
}