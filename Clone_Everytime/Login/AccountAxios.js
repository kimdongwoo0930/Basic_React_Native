import axios from "axios";

const CheckValidation = (Id, Pw, CheckPw, Nickname) => {
  // 맨앞글자는 영어 , 영어 숫자만 사용 가능
  // 6자 ~ 12자 사이 가능
  const RegId = /^[a-zA-Z]+[A-Za-z0-9]{5,11}$/g;
  // 맨앞글자는 영어 , 하나 이상의 대소문자 및 하나의 숫자, 하나의 특수문자
  // 8자 ~ 20자 사이 가능
  const RegPw =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,19}$/;
  // 아이디 조건 체크
  if (!RegId.test(Id)) return "아이디 조건이 틀림";
  // 비밀번호 조건 체크
  if (!RegPw.test(Pw)) return "비밀번호 조건이 틀림";
  //확인 비밀번호 체크
  if (!(Pw === CheckPw)) return "확인 비밀번호가 틀림";
  // 닉네임 조건 체크
  if (Nickname.trim() === "" || Nickname.length < 2 || Nickname > 15)
    return "닉네임 확인 필요";
  return "Pass";
};

export const useAccount = () => {
  const Signup = (Id, Pw, CheckPw, Nickname) => {
    const result = CheckValidation(Id, Pw, CheckPw, Nickname);
    if (result !== "Pass") {
      console.log(result);
    } else {
      console.log("성공");

      // 서버 통신 시작
      let SignUpData = {
        user_id: Id,
        user_password: Pw,
        checked_password: CheckPw,
        nickname: Nickname,
      };
      console.log(SignUpData);

      axios
        .post(
          "http://192.168.0.138:8080/account/sign-up",
          JSON.stringify(SignUpData),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((resp) => {
          console.log(resp.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return { Signup };
};
