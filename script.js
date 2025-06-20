const btn = document.querySelector('.btn')
const flameWrapper = document.querySelector('.flame-wrapper')
const containerElem = document.querySelector('.container')
const popupElem = document.querySelector('.popup-cont')
const main = document.querySelector('main')
const snowFallAnimation = document.querySelector('.snow-ball-container')
const birthDayImg = document.querySelector('.popup-img > img')
let audio = new Audio
audio.src = `./audios/birthday song.unknown`
audio.preload = 'auto'

btn.addEventListener('click' , ()=>{
    flameWrapper.classList.add('hidden')
    btn.style.background = `linear-gradient(135deg, #f63b26 10%, #F5AF19 100%)`
    setTimeout(()=>{
        containerElem.children[0].classList.add('hidden')
        containerElem.children[1].classList.add('hidden')
        setTimeout(()=>{
            containerElem.classList.add('none')
            popupElem.classList.remove('none')
        },100)
    },700)
    setTimeout(()=>{
           audio.play()
            snowFallAnimation.innerHTML = `   <div class="snow-ball"></div>
      <div class="snow-ball"></div>
      <div class="snow-ball"></div>
      <div class="snow-ball"></div>
      <div class="snow-ball"></div>
      <div class="snow-ball"></div>
      <div class="snow-ball"></div>
      <div class="snow-ball"></div>
      <div class="snow-ball"></div>
      <div class="snow-ball"></div>
      <div class="snow-ball"></div>
      <div class="snow-ball"></div>
      <div class="snow-ball"></div>
      <div class="snow-ball"></div>
      <div class="snow-ball"></div>`
    },1000)
})


const receiverName = document.querySelector("#receiver");
const senderName = document.querySelector("#sender");
isGradient = JSON.parse(new URLSearchParams(location.search).get('isgradient'))
if(isGradient){
receiverName.style.webkitBackgroundClip = "text";
receiverName.style.webkitTextFillColor = "transparent";
receiverName.style.backgroundImage = `linear-gradient(135deg, #00dbde 10%, #fc00ff 100%)`;
}
receiverName.innerText = new URLSearchParams(location.search).get("receiver");
senderName.innerText = new URLSearchParams(location.search).get("sender") || 'Aditya kumar';
birthDayImg.src = new URLSearchParams(location.search).get('img') || 'https://i.pinimg.com/736x/f0/84/e7/f084e74fe8fa8f1ce92b9caf4ea06b0e.jpg'
