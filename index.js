const text = [`HELLO EVERYONE THIS IS RINKU PANDEY ...
I AM DEVOPS ENGINEER I WORK ON VARIOUS TECHONOLOGY AS WELL AS TECHSTACK`]
let line = 0
let index = 0
let out = ''
let outHtml = document.querySelector('.out')

function typeLine() {
  let interval = setTimeout(() => {
    out += text[line][index]
    outHtml.innerHTML = out + ' |'
    index++
    if(index >= text[line].length){
      index = 0
      line++
      if(line == text.length){
        clearTimeout(interval)
        outHtml.innerHTML = out
        return true
      }
    }
    typeLine()
  }, getRandomInt(getRandomInt(250*0.5)))
}
typeLine()
function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max))
}



