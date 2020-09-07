//DOM: 각 태그에 대한 정보를 가지고 있는 JS 객체
const num = document.getElementById('num')
const inc = document.getElementById('inc')
const dec = document.getElementById('dec')

// id가 없을 경우 -> querySelectorAll 이용
// const btns = document.querySelectorAll('button')
// const [inc, dec] = btns


// 해당 값을 콘솔에 출력
inc.onclick = () => {
    const current = parseInt(num.innerText, 10)//문자열->숫자(바꿀 문자열,n진수)
    num.innerText = current + 1
}// 클릭 이벤트 설정

dec.onclick = () => {
    const current = parseInt(num.innerText, 10)//문자열->숫자(바꿀 문자열,n진수)
    num.innerText = current - 1
}

// console.log() : console에 내용 출력
// .id : 해당 DOM의 id 조회
// .offsetTop : top값
//.innerText : 해당 태그 안에 있는 텍스트 읽기