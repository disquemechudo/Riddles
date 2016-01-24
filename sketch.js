var button;
var input;
var textInput;
var answer;
var question;
var img;

function setup() {
  noCanvas();
  
  intro = createElement ("h1", "Answer these riddles! (only one word and no caps)")
  intro.class("questions");
  question = createElement ("h2", "The eight of us go forth not back to protect our king from a foes attack.");
  question.class("questions");
  
  textInput = "";

  input = createInput();
  input.class("inputs");
  
  button = createButton("Submit");
  button.class("buttons");
   
  button.mousePressed(riddle);
  
  answer = createP("");
  answer.class("answers");
  

}

 
 
function riddle() {
  textInput = input.value();
  if (textInput == "pawns"){
  answer.html("Yes!")
  question.html("What tastes better than it smells?");
  img = createImg('chess.gif');
  img.class("images");
  
 }else if (textInput == "tongue"){
      img.hide();
      answer.html("Yes!");
      question.html("What is brown and sticky?");
      img = createImg('tongue.gif');
      img.class("images");
 }
 else if (textInput == "stick"){
      img.hide();
      answer.html("Yes!");
      question.html("What is so delicate that saying its name breaks it?")
      img = createImg('stick.gif');
      img.class("images");
 } else if (textInput == "silence"){
      img.hide();
      answer.html("Yes!");
      img = createImg('silence.gif');
      img.class("images");
 }
 else {
      img.hide();
      answer.html("Nope");
      img = createImg('nope.gif');
      img.class("images");
    }
}