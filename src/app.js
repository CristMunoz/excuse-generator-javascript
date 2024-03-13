/* eslint-disable */
import "bootstrap";
import "./style.css";

// Arrays utilizados para el Excuse Generator
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

// Función para generar excusas
function excuseGenerator(who, action, what, when) {
  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);
  return (
    who[randomWho] +
    " " +
    action[randomAction] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen]
  );
}

// Función para cargar el generador
function loadGenerator() {
  let excuse = document.querySelector("#excuse");
  excuse.innerHTML = excuseGenerator(who, action, what, when);
}

window.onload = loadGenerator;
