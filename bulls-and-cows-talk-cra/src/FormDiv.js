export default function FormDiv({ input, correctFlag, handleInputChange, handleFormSubmit }) {
    // 정답을 아직 못 맞춘 경우와 맞춘 경우에 대해 따로 설정한다
    let inputLength = 3, holderGuide = "3자리 숫자 입력", buttonValue = "전송";
    if (correctFlag) {
        inputLength = 0;
        holderGuide = "정답을 맞추셨습니다!";
        buttonValue = "재시작";
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={input} name="number" maxLength={inputLength} placeholder={holderGuide} onChange={handleInputChange} />
            <input type="submit" value={buttonValue} />
        </form>
    )
}