let body = document.body;

let num;
let numArr;

function game() {
    num = [1,2,3,4,5,6,7,8,9];
    numArr = [];

    for (let i = 0; i < 4; i++) {
    // num에 없는 값이 랜덤으로 나오면 undefined가 나오기때문에 -i를 해줘야한다
    let pick = num.splice(Math.floor(Math.random() * 9 - i), 1)[0];
    numArr.push(pick);
    // push:마지막에 추가, pop:마지막 것 추출
    // unshift:처음에 추가, shift:처음 것 추출
    // splice(위치,개수):위치로부터 개수만큼 추출
    }
}
game();

let h3 = document.createElement('h3');
body.append(h3);
h3.textContent = numArr;

let form = document.createElement('form');
body.append(form);
let input = document.createElement('input');
input.maxLength = 4;
let btn = document.createElement('button');

form.append(input);
form.append(btn);
btn.textContent = '입력';

let result = document.createElement('div');
body.append(result);

let errCount = 0; // 틀린횟수 

btn.onclick = function (e) {
    e.preventDefault();
    
    let div = input.value; 

    // 문자.split(구분자) -> 배열
    // 배열.join(구분자) -> 문자 

    // 입력한 숫자와 제시된 숫자가 완전 일치
    if(div === numArr.join('')) {
        result.textContent = '홈런!!!!!';
        input.value = null;
        input.focus();

        game();
        errCount = 0;
    }
    else{ // 답이 틀릴 경우 
       let divArr = div.split('');
       let strike = 0;
       let ball = 0;

       errCount += 1;
       if(errCount > 3) {
        result.textContent = `3번 오답 입력하셨습니다. 답은 ${numArr.join(',')} 입니다`;
        input.value = null;
        input.focus();
        
        game();
        errCount = 0; // 틀린 횟수 초기화
        }
        else {
        for (let i = 0; i < 4; i++) {
            // 입력한 숫자의 length길이가 같으면
            if(Number(divArr[i]) === numArr[i]){ 
                strike++;
            }

            //   같은 length길이가 아니지만
            //   입력한 숫자 중 일치하는 숫자가 하나라도 있으면
            else if(numArr.indexOf(Number(divArr[i])) > - 1) {
                ball++;
                // indexOf(값) -> 값의 위치를 알 수 있고
                //                없으면 -1이 뜬다
            }
           result.textContent = `${strike} strike ${ball} ball!`;
           input.value = null;
           input.focus(); 
            }
        }
    }
}