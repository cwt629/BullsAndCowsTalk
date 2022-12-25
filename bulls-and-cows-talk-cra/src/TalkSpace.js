export default function TalkSpace({ talks, bottomRef }) {
    // 스크롤을 맨 아래로 내려주기 위해, 요소의 맨 끝에 ref를 가지는 빈 div 생성!
    return (
        <div id="talkspace">
            <ul>{talks}</ul>
            <div ref={bottomRef}></div>
        </div>
    )
}