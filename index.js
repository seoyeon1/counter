//DOM: 각 태그에 대한 정보를 가지고 있는 JS 객체
const num = document.getElementById('num')
const inc = document.getElementById('inc')
const dec = document.getElementById('dec')

// 해당 값을 콘솔에 출력
console.log(num.innerText)//해당 태그 안에 있는 텍스트 읽기
console.log(inc.offsetTop)//top값
console.log(dec.id)//해당 DOM의 id 조회