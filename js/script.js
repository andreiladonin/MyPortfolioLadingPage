new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    autoplay: {
      delay: 2000,
    },
  })


let whoItems = document.querySelectorAll('.whom__item');

whoItems[0].addEventListener("click", () => {
  if (!whoItems[0].classList.contains("who__item-active"))
  {
    whoItems[0].classList.add("who__item-active")
    whoItems[1].classList.remove("who__item-active")
    switchWhom(whomItemOne, whomItemTwo)
  }
})

whoItems[1].addEventListener("click", () => {
  if (!whoItems[1].classList.contains("who__item-active"))
  {
    whoItems[1].classList.add("who__item-active")
    whoItems[0].classList.remove("who__item-active")
    switchWhom(whomItemTwo, whomItemOne)
  }
})



let whomItemOne = document.querySelector(".whom__one")
let whomItemTwo = document.querySelector(".whom__two")



function switchWhom(block1, block2) {
  block1.style.display = "block"
  block2.style.display = "none"
}