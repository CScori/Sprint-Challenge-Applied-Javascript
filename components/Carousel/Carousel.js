/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below. new function done
    2. You will need to grab a reference to all of the images create array done
    3. Create a current index for loop and call function
    4. Those buttons are gonna need some click handlers. event listener done
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you! scale transform done
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

let imgArray = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg']

function CreateCarousel(data) {
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
  left.textContent = `<`
  right.textContent = `>`

  left.addEventListener('click', e => {
    console.log('left Click')
    left.style.transform = 'scale(1.1)';
    left.style.transition = 'transform 0.5s';
  });

  right.addEventListener('click', e => {
    console.log('Right Click')
    right.style.transform = 'scale(1.1)';
    right.style.transition = 'transform 0.5s';
  });

  return newCar
};

CreateCarousel(imgArray)
