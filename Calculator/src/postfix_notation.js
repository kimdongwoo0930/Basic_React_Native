export function postfix(f) {
  // stack : 스택으로 사용할 배열을 선언
  let stack = [];
  // convert : 후위표기식으로 변환된 결과를 저장할 배열
  let convert = [];
  // temp : 두자릿수 이상의 숫자를 저장할 임시 변수
  let temp = "";

  // f = 계산할 괄호가 있는 식
  // f에 공백이 있다면 모두제거
  f = f.replace(/(\s*)/g, "");

  for (let i = 0; i < f.length; i++) {
    const char = f.charAt(i);
    switch (char) {
      case "(":
        stack.push(char);
        break;

      case "+":
      case "-":
      case "×":
      case "÷":
        // 스택이 비어있지 않는경우 현재의 연산자와 top의 우선순위를 비교
        while (
          stack[stack.length - 1] != null &&
          prec(char) <= prec(stack[stack.length - 1])
        ) {
          // 현재 연산자의 우선순위가 낮거나 같으면 temp에 pop한 값을 저장
          temp += stack.pop();
          // 다음에 연산자가 나오는 경우 temp를 convert에 push 해 줌.
          if (isNaN(stack[stack.length - 1])) {
            convert.push(temp);
            temp = "";
          }
        }
        stack.push(char);
        break;

      case ")":
        let returned_op = stack.pop();
        while (returned_op !== "(") {
          temp += returned_op;
          returned_op = stack.pop();

          if (isNaN(stack[stack.length - 1])) {
            convert.push(temp);
            temp = "";
          }
        }
        break;

      default:
        temp += char;
        if (isNaN(f.charAt(i + 1)) || i + 1 === f.length) {
          convert.push(temp);
          temp = "";
        }
        break;
    }
  }

  while (stack.length !== 0) {
    convert.push(stack.pop());
  }

  let result = "";
  for (let i in convert) {
    result += convert[i];
    result += " ";
  }
  return result;
}

// prec : 연산자와 괄호의 우선쉰위를 반환하는 함수
const prec = (op) => {
  switch (op) {
    case "(":
    case ")":
      return 0;
    case "+":
    case "-":
      return 1;
    case "×":
    case "÷":
      return 2;
  }
  return 999;
};
