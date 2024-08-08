import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        // 로그인 파라미터 유효성 검사
        const isValid = loginValidationCheck();
        if (!isValid) {
            return;
        }
        // api 호출을 한다. 
        const body = {
            "username": username,
            "password": password
        }

        const options = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const response = await axios.post("http://172.30.1.76:8080/vegetable-auction/api/v1/auth/signin", body, options);
            navigate('/Home')
            console.log("response", response);
        } catch (e) {
            console.log(e);
        }

    }

    const loginValidationCheck = () => {
        if (!username || !password) {
            alert("로그인 정보를 확인해주세요.")
            return false;
        }
        return true;
    }


    console.log(username)
    return (
        <div className="md-container">
            <form className="form login">
                <div className="form__title">야채박스 로그인</div>
                <div className="form__flex-column">
                    <input type="text" placeholder="아이디" value={username} onChange={handleUsernameChange} />
                    <input type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange} />
                    <button type="button" className="form__submit-btn" onClick={onSubmitHandler}>로그인</button>
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