// Maneiras de disparar eventos

function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag image
  const image = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem
    image.setAttribute("src", "./assets/Avatar2.png")
    image.setAttribute("alt" , "cachorro de orelhas pontudas")
  } else {
    // se tiver sem light mode manter a imagem normal
    image.setAttribute("src", "./assets/Avatar1.png")
    image.setAttribute(
      "alt","Cachorro da Inglaterra pique cabuloso em cima do gramado com sorriso no rosto e com orelhas nervosa")
  }
}
