// 문자열 다루기 기본
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true
// 문제가 잘 안풀린다면😢
// 힌트가 필요한가요? [코딩테스트 연습 힌트 모음집]으로 오세요! → 클릭

// 공지 - 2022년 7월 22일 테스트케이스가 추가되었습니다.
// 공지 - 2022년 7월 22일 제한 사항이 추가되었습니다.

// 정규식 정답

function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

// 나의 정답
function solution(s) {
  var answer = Array.from(s).filter((val) => val.charCodeAt(0) < 48 || val.charCodeAt(0) > 58)
  return answer.length === 0 && (s.length == 4 || s.length == 6);
}

