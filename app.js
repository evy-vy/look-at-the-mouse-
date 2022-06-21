const container = document.querySelector('.container');
const balls = document.querySelectorAll('.ball');

container.addEventListener('mousemove', (e) => {

  //valeur de départ * 100 / valeur totale
  //e.clientX = position sur X de gauche à droite * 100 divisé par la largeur total (window.innerWidth) exprimé en pourcentage.indique ou je suis (en pourcentage) avec ma souris. 
  const x = `${e.clientX * 100 / window.innerWidth}%`
  const y = `${e.clientY * 100 / window.innerHeight}%`

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    //mise à jour du "transform = translate" quand on déplace la souris pour ne pas rester bloquer sur le transform: translate(-50%, -50%) défini à la base
    balls[i].style.transform = `translate(-${x}, -${y})`;
  }
})