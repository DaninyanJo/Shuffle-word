// ! Sortable init
let el = document.getElementById("items");
let sortable = Sortable.create(el);
// ! ##########
const output = document.querySelector("#items");
const shuffleBtn = document.querySelector("#shuffleBtn");
const shuffleInput = document.querySelector("#shuffleInput");

shuffleBtn.addEventListener("click", () => {
  shuffle(shuffleInput.value);
});

function shuffle(str) {
  cheker()
  let currentStr = str
  let word = str.split("");
  for (let i = 0; i < word.length; i++) {
    let currentValue = word[i];
    let randomIndex = Math.floor(Math.random() * word.length);
    word[i] = word[randomIndex];
    word[randomIndex] = currentValue;
  }
  (function addElement() {
    output.innerHTML = ''
    word.forEach((element) => {
      const li = document.createElement("li");
      li.innerText = element;
      output.appendChild(li);
      li.addEventListener('drop', () => cheker())
    });
  })()
  function cheker() {
    let lis = document.getElementsByTagName('li')
    arr = []
    for (let i = 0; i <lis.length; i++){
        arr.push(lis[i].textContent)
    }
    let tstWord = arr.join('')
    if (tstWord == currentStr){
        document.getElementById('items').classList.add('complete')   
    } else{
        document.getElementById('items').classList.remove('complete')
    }
  }
  cheker()
  
  


}


