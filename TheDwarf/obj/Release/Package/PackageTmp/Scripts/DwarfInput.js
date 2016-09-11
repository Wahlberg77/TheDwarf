
 var Dwarf = function(type, gender, name, age, sexual, interest, gay, hello, wrong) {
   this.type = type;
   this.gender = gender;
   this.name = name;
   this.age = age;
   this.sexual = sexual;
   this.interest = interest;
   this.gay = gay;
   this.hello = hello;
   this.wrong = wrong;

 }

 function dwarfClient() {

   var dwarf = new Dwarf("Dwarf", "male", "Leif", 259,
     //sexual
  "I really really really like women, yes indeed. Yihaaaa",
     //interest
  "Well... ask me a question about my sexual interests",
     //läggning (va det nu heter in engelska)
  "You know, my axe is very sharp, ohhh yes it is!!!",
     //hello
   "Hello to you, now get away, you´re in my way!",
     //wrong
  "Sorry, don´t understand you question. Type it in dwarfish");

   function logError(details) {
     $.post("/Dwarf/LogJavaScriptError", { message: details });
   }

   var getAnswer = function() {

       var answer = document.getElementById("answer");
       var question = document.getElementById("question").value;
       logError(question);

       var logAnswer = "";

       //type:
       if (question.indexOf("what are you") !== -1 || question.indexOf("type") !== -1) {
         logAnswer = "I am a fucking " + dwarf.type + " you stupid human!";
       }
       //gender:
       else if (question.indexOf("gender") !== -1) {
         logAnswer = "Of course I´m a " + dwarf.gender + ". Do you wanna check?";
       }
       //name:
       else if (question.indexOf("name") !== -1) {
         logAnswer = "My royal name is " + dwarf.name + ". Can I have a hug?";
       }
       //age:
       else if (question.indexOf("age") !== -1 || question.indexOf("old") !== -1) {
         logAnswer = "I am only " + dwarf.age + ". Like a teenager";
       }
       //sexual:
       else if (question.indexOf("sexual") !== -1 || question.indexOf("girls") !== -1) {
         logAnswer = dwarf.sexual;
       }
       //interest:
       else if (question.indexOf("interest") !== -1 || question.indexOf("hobby") !== -1) {
         logAnswer = dwarf.interest;
       }
       //angraquestion:
       else if (question.indexOf("gay") !== -1 || question.indexOf("boy") !== -1) {
         logAnswer = dwarf.gay;
       }
       else if (question.indexOf("hello") !== -1 || question.indexOf("hi") !== -1) {
         logAnswer = dwarf.hello;
       }

       //wrong:
       else {
         logAnswer = dwarf.wrong;
       }

     //Use http://localhost:54393/elmah.axd to se lo logfile. 
       answer.innerHTML = logAnswer;
       logError(logAnswer);
     }

      //button
     var button = document.getElementById("idButton");
     button.onclick = getAnswer;
     
      //Toggle speachbubble
     $(document).ready(function () {
       $("#idButton").on("click", function () {
         $("#answer").slideDown("slow");
       });
     });

     //Clear the question
     $("#question").focus(function () {
       $(this).val("");
     });
 }

 window.onload = dwarfClient;













