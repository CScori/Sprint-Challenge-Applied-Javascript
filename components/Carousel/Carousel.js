/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below. new function done
    2. You will need to grab a reference to all of the images create array?
    3. Create a current index for loop index?
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/



function CreateCarousel (data) {
  const carousel = document.querySelector('.carousel-container')
  const newCar = document.createElement('div')
  const left = document.createElement('div')
  const right = document.createElement('div')
  const img0 = document.createElement('img')
  const img1 = document.createElement('img')
  const img2 = document.createElement('img')
  const img3 = document.createElement('img')

  newCar.classList.add('carousel')
  left.classList.add('left-button')
  right.classList.add('right-button')

  carousel.appendChild(newCar)
  newCar.appendChild(left)
  newCar.appendChild(img0)
  newCar.appendChild(img1)
  newCar.appendChild(img2)
  newCar.appendChild(img3)
  newCar.appendChild(right)

  img0.setAttribute(`src, ${data}`)
  img1.setAttribute(`src, ${data}`)
  img2.setAttribute(`src, ${data}`)
  img3.setAttribute(`src, ${data}`)
}