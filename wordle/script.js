// 현재 정답
var answer = "think";
// 입력된 단어들을 담을 변수
var input = document.querySelectorAll(".check");
// 제출 버튼
var submitBtn = document.querySelector(".submit-btn");
// 시도 횟수
var trialCount = 1;

// 제출 버튼 클릭 시 이벤트 리스너
submitBtn.addEventListener("click", function () {
  // 입력된 단어들 가져오기
  input = document.querySelectorAll(".check");
  var check = 0;
  // 입력된 단어들 검사
  for (let i = 0; i < 5; i++) {
    // 단어가 입력되지 않았을 경우
    if (input[i].value == "") {
      alert("5개의 칸을 모두 채워주세요.");
      break;
    }
    // 제자리에 맞는 글자일 경우 녹색
    if (input[i].value == answer[i]) {
      input[i].style.background = "green";
      input[i].classList.remove("check");
      check++;
    } else if (answer.includes(input[i].value)) {
      // 글자가 포함은 되지만 제자리가 아닐 경우 노란색
      input[i].style.background = "yellow";
      input[i].classList.remove("check");
    } else {
      // 정답이 없는 글자일 경우 회색
      input[i].style.background = "grey";
      input[i].classList.remove("check");
    }
    // 마지막 입력 단어까지 검사한 경우
    if (i == 4) {
      if (check == 5) {
        // 모든 단어를 맞춘 경우
        alert(trialCount + "번 만에 정답을 맞췄습니다!");
        location.reload();
      } else if (trialCount == 6) {
        // 모든 시도를 사용한 경우
        alert("정답을 맞추지 못하였습니다. 정답은 " + answer + "입니다.");
        location.reload();
      } else {
        // 다음 시도를 위해 단어 입력 칸 추가
        var template =
          '<div class="input-container"><input class="check" maxlength="1"  /><input class="check" maxlength="1" /><input class="check" maxlength="1"  /><input class="check" maxlength="1"  /><input class="check" maxlength="1" /></div>';

        document
          .querySelector(".inner-container")
          .insertAdjacentHTML("beforeend", template);
      }
    }
  }
  // 시도 횟수 증가
  trialCount++;
});
