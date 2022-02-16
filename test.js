let notes = document.getElementsByClassName("note");
let mybtn = document.getElementsByClassName("calculate");
console.log(mybtn);

console.log(notes);

mybtn[0].addEventListener("click", function () {
  let m = 0;

  for (let i = 0; i < notes.length; i++) {
    // m = m + +notes[i];
    m = m + Number(notes[i].innerHTML);
  }

  document.getElementById("moy").innerHTML = "Moy : " + m / notes.length;
});
