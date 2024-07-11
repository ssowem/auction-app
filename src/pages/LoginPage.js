import { useState } from "react"

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const onSubmitHandler = (e) => {
        if(!username || !password){
            alert("로그인 정보를 확인해주세요.")
            e.preventDefault();
        } else {
            alert("로그인 성공!!!!!!!")
        }
        

    }


    console.log(username)
    return (
        <div className="md-container">
            <form className="form login">
                <div className="form__title">야채박스 로그인</div>
                <div className="form__flex-column">
                    <input type="text" placeholder="아이디" value={username} onChange={handleUsernameChange}/>
                    <input type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange }/>
                    <button type="submit" className="form__submit-btn" onClick={onSubmitHandler}>로그인</button>
                </div>
                <div className="form__flex-row">
                    <div className="form__save-id">
                        <input type="checkbox" />
                        <label for="">아이디 저장하기</label>
                    </div>
                    <div>회원가입</div>
                </div>
            </form>
        </div>
    )
}