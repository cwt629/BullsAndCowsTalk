export default function FormDiv() {
    return (
        <form>
            <input type="text" name="number" maxlength="3" placeholder="3자리 숫자 입력" />
            <input type="submit" value="전송" />
        </form>
    )
}