export default function FormDiv({ onChange }) {
    return (
        <form>
            <input type="text" name="number" maxlength="3" placeholder="3자리 숫자 입력" onChange={onChange} />
            <input type="submit" value="전송" />
        </form>
    )
}