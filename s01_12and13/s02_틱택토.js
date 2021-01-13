let body = document.body;

let table = document.createElement('table');
body.append(table);

let boxes = []; 
let lines = [];
let turn = 'X';
let result = document.createElement('div');
body.append(result);
let callback = function (e) {
    e.preventDefault();
    
    // console.log(e.target); -> 클릭된 td 자체 
    // console.log(e.target.parentNode); -> 클릭된 td의 부모
    
    let isLines = lines.indexOf(e.target.parentNode);
    console.log('몇줄:'+isLines);

    let isBoxes = boxes[isLines].indexOf(e.target);
    console.log('몇칸:'+isBoxes);

    // 칸에 X 또는 O가 있는지 검사
    if(boxes[isLines][isBoxes].textContent != '') { 
        console.log('빈칸이 아닙니다.');
    }
    else {
        boxes[isLines][isBoxes].textContent = turn;

        // 한 줄에 세 칸이 전부 채워져있는지 검사
        let all = false;
        // 가로줄 검사
        if(boxes[isLines][0].textContent === turn && 
           boxes[isLines][1].textContent === turn && 
           boxes[isLines][2].textContent === turn) {

            all = true;
        }
        // 세로줄 검사
        else if(boxes[isBoxes][0].textContent === turn && 
                boxes[isBoxes][1].textContent === turn && 
                boxes[isBoxes][2].textContent === turn) {
            all = true;
        }
        // 대각선 검사
        else if(isLines - isBoxes === 0) {
            if(boxes[0][0].textContent === turn &&
               boxes[1][1].textContent === turn &&
               boxes[2][2].textContent === turn ) {

                all = true;
            }
        }
        else if(Math.abs(isLines - isBoxes) === 2) {
            if(boxes[0][2].textContent === turn &&
               boxes[1][1].textContent === turn &&
               boxes[2][0].textContent === turn ) {
 
                 all = true;
             } 
        }
        // 다 채워짐
        if(all) {
            result.textContent = `${turn} 님이 승리하셨습니다! 게임은 자동으로 다시 시작됩니다!`;
            turn = 'X';
            boxes.forEach(function (tr) {
                tr.forEach(function(td) {
                    td.textContent = '';
                });
            });
        }else { // 턴을 바꾸기 전에 한 줄이 다 찼는지 검사해야하기때문에 위치를 여기에 둔다
            if(turn === 'X'){
                turn = 'O';
            }else {
                turn = 'X';
            }
        }
    }
};

for (let i = 0; i < 3; i++) {
    let tr = document.createElement('tr');
    table.append(tr);
    boxes.push([]);
    lines.push(tr);

    for(let j = 0; j < 3; j++){
        let td = document.createElement('td');
        td.onclick = callback;

        tr.append(td);
        boxes[i].push(td); // 2차원 배열 모양으로 나온다
        // 2차원배열은 웬만하면 반복문이 2번들어간다 
        // 하지만 중첩 반복문 횟수를 줄일수록 bbbbb 
    }
}
console.log(boxes, lines);