import Toast from "react-native-toast-message";
export const useToast = () => {
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "회원가입 성공",
      text2: "로그인 해주세요.",
    });
  };
  return { showToast };
};
