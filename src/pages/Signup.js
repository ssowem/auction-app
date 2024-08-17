import { useState } from "react"

export default function Signup() {
    const [username, setUsername] = useState("");
    const [usernameErrorText, setUsernameErrorText] = useState("");

    const [password, setPassword] = useState("");
    const [passwordErrorText, setPasswordErrorText] = useState("");

    const [checkPassword, setCheckPassword] = useState("");
    const [checkPasswordErrorText, setCheckPasswordErrorText] = useState("");

    const [nickname, setNickname] = useState("");
    const [nicknameErrorText, setNicknameErrorText] = useState("");


    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        // 아이디 형식 확인
        if (name === "username") {
            setUsername(value);
            // 유효성 검사: 4자 이상 13자 미만, 영소문자이거나 영소문자와 숫자 조합
            const usernameRegex = /^(?=.*[a-z])[a-z0-9]{4,12}$/;
            if (!usernameRegex.test(value)) {
                setUsernameErrorText("아이디 형식을 확인해주세요.")
            } else {
                setUsernameErrorText("");
            }
        }

        if (name === "password") {
            setPassword(value);
            if (value.length < 6) {
                setPasswordErrorText("6글자 이상으로 입력해주세요")
            } else {
                setPasswordErrorText("");
            }

            // 비밀번호 재확인이 된 상태에서 다시 초기비밀번호가 수정되었을때 유효성체크
            if ( checkPassword && checkPassword !== value) {
                setCheckPasswordErrorText("비밀번호가 일치하지 않습니다.")
            } else {
                setCheckPasswordErrorText("");
            }
        }


        //비밀번호 재확인
        if (name === "checkPassword") {
            console.log("비번확인 작동")
            setCheckPassword(value);
            if (password !== value) {
                setCheckPasswordErrorText("비밀번호가 일치하지 않습니다.")
            } else {
                setCheckPasswordErrorText("");
            }
        }



        if (name === "nickname") {
            setNickname(value);
            const nicknameRegex = /^[가-힣a-z]{2,8}$/;
            if (!nicknameRegex.test(value)) {
                setNicknameErrorText("한글이나 영소대문자 2~8글자 내외로 입력해주세요.")
            } else {
                setNicknameErrorText("");
            }
        }
    }



    return (
        <div className="md-container">
            <form className="form signup">
                <div className="form__title">야채박스 회원가입</div>
                <div className="form__flex-column">
                    <label>아이디</label>

                    <div className="form-group form__flex-row">
                        <input className="input-id" type="text" placeholder="아이디" name="username" value={username} onChange={onChangeHandler} />
                        <button className="check-btn" type="button">중복체크</button>
                    </div>

                    <p className="error-text">
                        {/* 이미 존재하는 아이디입니다. */}
                        {usernameErrorText}
                    </p>

                </div>
                <div className="form__flex-column">
                    <label>비밀번호</label>
                    <div className="form-group">
                        <input type="password" placeholder="비밀번호를 입력해주세요" name="password" value={password} onChange={onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <p className="error-text">
                            {passwordErrorText}
                        </p>
                    </div>
                </div>

                <div className="form__flex-column">
                    <label>비밀번호 확인</label>
                    <div className="form-group">
                        <input type="password" placeholder="비밀번호를 한번 더 입력해주세요" name="checkPassword" value={checkPassword} onChange={onChangeHandler} />
                    </div>
                    <p className="error-text">
                        {/* 비밀번호가 일치하지 않습니다. */}
                        {checkPasswordErrorText}
                    </p>
                </div>

                <div className="form__flex-column">
                    <label>별명</label>
                    <div className="form-group">
                        <input type="text" placeholder="별명을 입력해주세요." name="nickname" value={nickname} onChange={onChangeHandler} />
                    </div>
                    <p className="error-text">
                        {/* 한글 혹은 영소문자 2~8글자 내외 */}
                        {nicknameErrorText}
                    </p>
                </div>

                <button type="submit" className="signup-btn">가입하기</button>

            </form>
        </div>
    )
}