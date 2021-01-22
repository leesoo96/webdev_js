let exec = document.querySelector('#exec');
let tbody = document.querySelector('#table tbody');

// 지뢰 테이블 만들기 
let dataset = [];

exec.onclick = function () {
    let hor = Number(document.querySelector('#hor').value); // 가로
    let ver = Number(document.querySelector('#ver').value); // 세로
    let mine = Number(document.querySelector('#mine').value); // 지뢰

    // 지뢰 위치 뽑기 부분 
    // -- 특정 값이 들어있는 배열을 만들고싶을 때 유용한 코드!
    //          가로 * 세로 => 칸 개수 
    let filed = Array(hor * ver) // 빈 배열을 만듦
                .fill() // undefined로 채운다
                .map(function (ele, index) { // 1대1로 매핑
                    return index; // 0부터 99까지 채워짐
                });  
    // --
    let random = [];
    while (filed.length > 80) { // 20개만 숫자를 랜덤하게 뽑는다 
        let move = filed.splice(Math.floor(Math.random() * filed.length), 1)[0];
        random.push(move);
    }
    // console.log(random); 랜덤하게 1~100까지의 숫자들이 채워진다 

    // 입력받은 hor, ver값에 따라 동적으로 tr과 td가 생성된다 
    for (let i = 0; i < ver; i++) {
        let arr = [];
        let tr = document.createElement('tr');
        dataset.push(arr);

        for (let j = 0; j < hor; j++) {
            arr.push(1);   

            let td = document.createElement('td');
            td.addEventListener('contextmenu', function (e) {
                e.preventDefault();
                
                let click_td = e.currentTarget;
                let column = click_td.cellIndex;
                let row = click_td.parentNode.rowIndex - 1;
                // console.log(column, row); 오른쪽 마우스 클릭해서 누른 칸의 위치
            
                click_td.textContent = '?';
                dataset[row][column] = '?';
                console.log(dataset);
            }); // 지뢰인지아닌지 확실하지않을 경우 ? 입력
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    // console.log(dataset); 2차원배열로 값이 형성됨

    // 지뢰 심기 
    for (let k = 0; k < random.length; k++) { // ex) 60
        let 세로 = Math.floor(random[k] / 10); // ex) 7 -> 6
        let 가로 = random[k] % 10; // ex) 0 -> 0
        // => 6번째줄 0번째칸 
        console.log(가로, 세로);

        tbody.children[세로].children[가로].textContent = 'X';
        dataset[세로][가로] = 'X';
    }
    console.log(dataset);
}

// contextmenu -> 마우스 오른쪽 클릭 이벤트 

