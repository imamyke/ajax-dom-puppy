let button = document.querySelector('.btn')
let show = document.querySelector('.image__group')

const randomDogPicture = () => {
  axios
    .get('https://webdev.alphacamp.io/api/dogs/random')
    .then((response) => {
      show.innerHTML = 
      `
      <div class="image__container">
          <div class="image" style="background-image: url('${response.data.message}');"></div>
      </div> 
      `
    })
    .catch((error) => {
      console.log(error);
    })
}

button.addEventListener('click', randomDogPicture)
