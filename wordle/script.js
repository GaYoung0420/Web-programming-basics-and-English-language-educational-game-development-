var answer = "think";
var input = document.querySelectorAll(".check");
var submitBtn = document.querySelector(".submit-btn");
var trialCount = 1;

submitBtn.addEventListener("click", function () {
  input = document.querySelectorAll(".check");
  var check = 0;
  for (let i = 0; i < 5; i++) {
    if (input[i].value == "") {
      alert("5개의 칸을 모두 채워주세요.");
      break;
    }
    // 입력한 글자중 제자리에 맞는 글자가 있다면 녹색
    if (input[i].value == answer[i]) {
      input[i].style.background = "green";
      input[i].classList.remove("check");
      check++;
    } else if (answer.includes(input[i].value)) {
      // 글자가 포함은 되지만 제자리가 아니라면 노란색
      input[i].style.background = "yellow";
      input[i].classList.remove("check");
    } else {
      // 정답이 없는 글자라면 회색
      input[i].style.background = "grey";
      input[i].classList.remove("check");
    }
    if (i == 4) {
      if (check == 5) {
        alert(trialCount + "번 만에 정답을 맞췄습니다!");
        location.reload();
      } else if (trialCount == 6) {
        alert("정답을 맞추지 못하였습니다. 정답은 " + answer + "입니다.");
        location.reload();
      } else {
        var template =
          '<div class="input-container"><input class="check" maxlength="1"  /><input class="check" maxlength="1" /><input class="check" maxlength="1"  /><input class="check" maxlength="1"  /><input class="check" maxlength="1" /></div>';

        document
          .querySelector(".inner-container")
          .insertAdjacentHTML("beforeend", template);
      }
    }
  }
  trialCount++;
});
