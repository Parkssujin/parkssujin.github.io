const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // 이곳에 들어가는 함수 (하고싶은 것)는 '스크롤 되는 Y 좌표가 headerHeight 보다 크다면 다른 스타일링
    if (window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});
// function(){} 이름이 없는 함수이기 때문에 화살표함수로 대체 () => {} 로 대체

//Home 섹션을 아래로 스크롤시 투명하게 처리함
 const home = document.querySelector('.home__container');
 const homeHeight = home.offsetHeight;
 document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
 });

 //Arrow up버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight /2) {
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
    }
 });