// [1차] 비밀지도
// 비밀지도
// 네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다. 다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

// 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
// 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
// "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
// 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.
function solution(n, arr1, arr2) {
  var answer = [];
  for (var i = 0; i < n; i++) {
    let a = arr1[i].toString(2).padStart(n, '0')
    let b = arr2[i].toString(2).padStart(n, '0')
    var c = ''
    for (var k = 0; k < n; k++) {
      c += a[k] === '1' || b[k] === '1' ? '#' : ' '
    }
    answer.push(c)
  }
  return answer;
}

var solution = (n, a, b) => a.map((a, i) => (a | b[i]).toString(2).padStart(n, 0).replace(/1|0/g, a => +a ? '#' : ' '));

// 시저 암호
// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.


// 첫번째 오답
function solution(s, n) {
  let list = Array.from(s).map((val, i) => {
    var p = val === 'z' | val === 'Z' ? val.charCodeAt(0) - 26 : val.charCodeAt(0)
    return val.charCodeAt(0) === 32 ? ' ' : String.fromCharCode(p + n)
  })
  return list.join('');
}

// 두번쨰 정답
function solution(s, n) {
  var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          "
  return s.split('').map(e => chars[chars.indexOf(e) + n]).join('');
}