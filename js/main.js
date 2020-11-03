var index = 0; // 0 .. 2

function changeImage(/*imgPath*/) {
  var images = ['cat', 'dog', 'humster'];

  index = (index + 1) % 3;

  document.getElementById('animalPhoto')
          .setAttribute('src', `./img/${images[index]}.jpg`); // './img/' + imgPath + '.jpg'

  //index = (index + 1) % 3;
  /*if (index > 2) {
    index = 0;
  }*/
}
