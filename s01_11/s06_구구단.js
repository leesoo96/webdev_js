let num1 = Math.ceil(Math.random() * 9 + 1);
let num2 = Math.ceil(Math.random() * 9 + 1);
let multi = num1 * num2;

let body = document.body;
let div = document.createElement('div');
div.textContent = `${num1} 곱하기 ${num2} 는?`;

let form = document.createElement('form');
body.append(form);
let input = document.createElement('input');
let btn = document.createElement('button');

form.append(input);
form.append(btn);
btn.textContent = '입력';
body.append(div);

let result = document.createElement('div');
body.append(result);

btn.onclick = function (e) {
    e.preventDefault(); // 새로고침 방지
    
    if(multi === Number(input.value)){
        num1 = Math.ceil(Math.random() * 9 + 1);
        num2 = Math.ceil(Math.random() * 9 + 1);
        multi = num1 * num2;
        div.textContent = `${num1} 곱하기 ${num2} 는?`;

        result.textContent = '정답입니다^~^';
        input.value = null;
        input.focus();
    }else {
        result.textContent = '오답입니다ㅜ_ㅜ';
        input.value = null;
        input.focus();
    }
}
// while(true){ 초기 코드
//     let num1 = Math.ceil(Math.random() * 9 + 1);
//     let num2 = Math.ceil(Math.random() * 9 + 1);
//     let multi = num1 * num2;
//     let boolean = true;

//     while(boolean){
//      let result = prompt(`${num1} 곱하기 ${num2} 는?`);

//      if(result) {
//          if (multi === result) {
//              alert('정답!');  
//          }else {
//              alert('오답!');
//          }
//      }
//      }
//  }