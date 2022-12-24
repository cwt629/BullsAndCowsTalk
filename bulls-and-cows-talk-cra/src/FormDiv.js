export default function FormDiv({ input, handleInputChange, handleFormSubmit }) {
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={input} name="number" maxLength="3" placeholder="3자리 숫자 입력" onChange={handleInputChange} />
            <input type="submit" value="전송" />
        </form>
    )
}