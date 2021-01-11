let body = document.body;
let div = document.createElement('div');
div.textContent = '개발자';

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
    
    if(div.textContent[div.textContent.length - 1] == input.value[0]){
        div.textContent = input.value;

        result.textContent = div.textContent;

        input.value = null;
        result.textContent = null;
        input.focus();

    }else {
        result.textContent = '제시어의 마지막 글자로 시작해주세요';
        input.value = null;
        input.focus();
    }
}

/* 초기 코드 
let start = '개발자';
while(true){
    let answer = prompt(`제시어는 '${start}' 입니다`);
    if(start[start.length - 1] == answer[0]){
        start = answer;
    }
    else {
        alert(`제시어는 '${start}' 입니다.\n제시어의 마지막 글자로 시작해야합니다`);
    }
}
*/