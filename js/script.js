// var num1 = +prompt("What is your first number?")
// var num2 = +prompt("What is your second number?")
// var operator = prompt("Operator")

// if(operator==="+") {
//     alert(num1 + num2)
// } else if(operator==="-") {
//     alert(num1 - num2)
// } else if(operator==="*") {
//     alert(num1 * num2)
// } else {
//     alert(num1 / num2)
// }




var A = "Ayla: "
var name = prompt('What is your name?');
var askName = confirm('Is your name ' + name + '?' );
if(askName === true) {
    var askContinue = confirm('Would you like to continue on the story?');
} else {
    var name = prompt('What is your name?');
    var askContinue = confirm('Would you like to continue on the story?');
}

if(askContinue === true) {
    alert('Hey! ' + name);
    alert('*Your friend Ayla was coming your way*');
    var askHomework = confirm(A + "Did you do your Homework for today's math lesson?");
    if(askHomework===true) {
        var askHelp = confirm(A + "Can you help me with the last question?");
        if(askHelp === true) {
            alert('"Its 1293 over 32"');
            alert(A + "Um");
            alert(A + "That's an odd number you got there");
            var confirmAnswer = confirm(A + name + " are you sure about that one?");
            if(confirmAnswer===true){
                alert(A + "Well, good for you, because there's no way answer is 1293 over whatever number you got over there");
                var askTools = confirm(A + "Can you get the calculator for me?");
                if(askTools===true){
                    alert("*You pulled out calculator from your bag*");
                    
                } else {
                    alert(A + name + "! You are so useless");
                    alert(A + "I will do it myself then");
                }
            } else {
                alert(A + "Let's do it together then");
            }
        } else {
            alert(A + "Maybe, " + name + " would like to become friendless?");
            alert('"Sorry, sorry"');
            alert('"Do you want to solve it together?"');
            alert("*Ayla silently nodded*");
        }
    } else {
        alert(A + "Oh, wow");
        alert(A + "That was unexpected");
        var hwCheat = confirm("|Do you want to ask Ayla the answers for your homework?|");
        if(hwCheat===true) {
            alert(' "Ayla, can just I copy yours?" ');
            alert(A + "I am sorry, " + name +", but there's no way I can let this happen");
        } 
        alert(A + "If you are this hopeless, then why wont we solve the last question together?");
        alert("*Ayla pulled out her calculator and handed it to you*");
    }
    alert("| Calculate the following numbers! |");
    alert(A + "The question is 27 multiplied by 0.73");
    var num1 = +prompt("What is your first number?");
    var num2 = +prompt("What is your second number?");
    var operator = prompt("Operator");
    if(operator==="+") {
        var hwAnswer = (num1 + num2);
        alert(hwAnswer);
    } else if(operator==="-") {
        var hwAnswer = (num1 - num2);
        alert(hwAnswer);
    } else if(operator==="*") {
        var hwAnswer = (num1 * num2);
        alert(hwAnswer);
    } else {
        var hwAnswer = (num1 / num2);
        alert(hwAnswer);
    }
    if(hwAnswer===19.71){
        alert("|You got it correct!|");
        alert(A + hwAnswer + " is the aswer?");
        alert(A + "That sounds about right");
    } else {
        alert("|You got it incorrect|");
        alert(A + hwAnswer + " is the aswer?");
        alert(A + name + " are you sure that the aswer is " + hwAnswer + "?");
    }

    alert("*You heard the bell rang, it was time to go to your class*");
    var callAyla = confirm("|Do you want to call Ayla to go to class together?|");
    if(callAyla===true) {
        var sayAyla = prompt("Call Ayla by her name");
        if(sayAyla=='Ayla') {
            alert(A + "Yes?");
            alert(' "Do you want to go together?" ');
            alert(A + "Oh, sure");
        } else {
            alert(sayAyla + ": you called?");
            alert(' "..." ');
            alert("*You could see Ayla laughing at you*");
            var takeAyla = confirm("|Would you want to leave with Ayla?|");
            if(takeAyla===true) {
                alert("*You grabbed Ayla by hand and left from there as fast as you could*");
                alert(A + name + " Wait!, I forgot my bag over there");
                alert("*You let Ayla's hand go and continued going to your class on your own*");
            }else {
                alert("*You left from there as fast as you could, leaving Ayla on her own*");
            }
        }
    } else {
        alert("*You left the place without waiting for Ayla, you could hear her calling you, but you just ignored it.*");
    }

    alert("*After a while Ayla came to the class and sat infront of you*");
    alert("*Teacher told the class that they are going to do exam*");
    alert("*You could notice Ayla shaking infront of you*");
    var checkAyla = confirm("|Do you want to check on Ayla?|");
    if(checkAyla===true){
        alert('"Ayla, are you ok?"');
        alert(A + "Yes, " + name);
    }else {
        alert(name + " decided to ignore it");
    }
    alert("*The test was hard for you*");
    var testCheat = confirm("|Do you want to cheat on your test?|");
    if(testCheat===true){
        alert("*You pulled out calculator*");
        alert("| Calculate the following numbers! |");
        alert("The word problem:  Gabby has 42 books on her bookshelf. Her dad gives her 23 more for her birthday. How many books does Gabby have now?");
        var q1num1 = +prompt("What is your first number?");
        var q1num2 = +prompt("What is your second number?");
        var q1operator = prompt("Operator");
        if(q1operator==="+") {
            var q1_Answer = (q1num1 + q1num2);
            alert(q1_Answer);
        } else if(q1operator==="-") {
            var q1_Answer = (q1num1 - q1num2);
            alert(q1_Answer);
        } else if(q1operator==="*") {
            var q1_Answer = (q1num1 * q1num2);
            alert(q1_Answer);
        } else {
            var q1_Answer = (q1num1 / q1num2);
            alert(q1_Answer);
        }
        if(q1_Answer==65){
            var correctAnswers1 = 1;
            alert("|You got it correct!|");
        } else{
            var correctAnswers1 = 0;
            alert("|You got it incorrect!|");
        }
        alert("Correct Answers: " + correctAnswers1 + "/3");
        alert("The word problem:  Hayden has 610 stickers. There are 250 in a white box and some in a yellow box. How many are in the yellow box?");
        var q2num1 = +prompt("What is your first number?");
        var q2num2 = +prompt("What is your second number?");
        var q2operator = prompt("Operator");
        if(q2operator==="+") {
            var q2_Answer = (q2num1 + q2num2);
            alert(q2_Answer);
        } else if(q2operator==="-") {
            var q2_Answer = (q2num1 - q2num2);
            alert(q2_Answer);
        } else if(q2operator==="*") {
            var q2_Answer = (q2num1 * q2num2);
            alert(q2_Answer);
        } else {
            var q2_Answer = (q2num1 / q2num2);
            alert(q2_Answer);
        }
        if(q2_Answer==360){
            var correctAnswers2 = (correctAnswers1 + 1);
            alert("|You got it correct!|");
        } else{
            var correctAnswers2 = (correctAnswers1 + 0);
            alert("|You got it incorrect!|");
        }
        alert("Correct Answers: " + correctAnswers2 + "/3")
        alert("The word problem:   Maria has 56 gummy bears. She will give all the gummy bears to 8 of her friends. Each friend will get the same number. How many gummy bears will each friend receive?");
        var q3num1 = +prompt("What is your first number?");
        var q3num2 = +prompt("What is your second number?");
        var q3operator = prompt("Operator");
        if(q3operator==="+") {
            var q3_Answer = (q3num1 + q3num2);
            alert(q3_Answer);
        } else if(q3operator==="-") {
            var q3_Answer = (q3num1 - q3num2);
            alert(q3_Answer);
        } else if(q3operator==="*") {
            var q3_Answer = (q3num1 * q3num2);
            alert(q3_Answer);
        } else {
            var q3_Answer = (q3num1 / q3num2);
            alert(q3_Answer);
        }
        if(q3_Answer==7){
            var correctAnswers3 = (correctAnswers2 + 1);
            alert("|You got it correct!|");
        } else{
            var correctAnswers3 = (correctAnswers2 + 0);
            alert("|You got it incorrect!|");
        }
        alert("Correct Answers: " + correctAnswers3 + "/3");
        if(correctAnswers3===3){
            alert("You are a genius!");
        } else if(correctAnswers3===2){
            alert("Not bad!")
        } else if(correctAnswers3===1){
            alert("You still need practice");
        } else  {
            alert("Have you ever considered taking extra math classes?");
        }
        alert("*You noticed Ayla was having problems*");
        var testHelp = confirm("|Do you want to help Ayla?|");
        if(testHelp===true){
            alert("*Teacher saw you*");
            alert("Teacher: " + name + "!");
            alert("You reached ending 1! 'Getting caught' ");
        } else {
            alert("*You decided to not help Ayla*");
            alert("*During the lesson, you saw Anna's face of surprise, she saw you*");
            var bribeAnna = confirm("|Would you like to bribe Anna?|");
            if(bribeAnna===true){
                alert('"Dont tell teacher, I will pay you"');
                alert("Anna: How much?");
                var moneyAnna = +prompt("How much would you like to give Anna?");
                if(moneyAnna > 500){
                    alert("*Anna agreed*");
                    alert("You reached ending 6! 'Having Teacher's Pet on your side'");
                } else {
                    alert("*Anna disagreed*");
                    alert("*Anna stood up and went to the teacher*");
                    alert("*Teacher made an eye contact with you*");
                    alert("Teacher: " + name + "!");
                    alert("You reached ending 7! 'Teacher's Pet ruining all fun'");
                }
            } else {
                alert("*You rolled your eyes and continued cheating,*");
                alert("*When Anna stood up and went to the teacher*");
                alert("*Teacher made an eye contact with you*");
                alert("Teacher: " + name + "!");
                alert("You reached ending 7! 'Teacher's Pet ruining all fun'");
            }
        }

        alert("|Extra|");
        var extra = confirm("Do you want to go through extra?");
        if(extra===true){
            alert("*You were going home together with Ayla*");
            alert(A + "Why would you cheat on your exam?");
            if(correctAnswers3 > 1){
                alert("*You passed your exams because of cheating*");
            }else {
                alert("*You failed your exams even though you were cheating*");
            }
            alert(A + "Anna told me.");
            var cheatExplain = confirm("|Would you like to explain yourself to Ayla?|");
            if(cheatExplain===true){
                prompt(A + "So?");
                alert(A + name + " That's a bad excuse");
            } else {
                alert(A + "Nevermind");
            }
            alert("*Ayla and " +name + " continued going to home*");
            alert("The end");
        }
    } else{
        alert("*You tried your best to answer the questions*");


        alert("| Calculate the following numbers without calculator! |");
        var q1_Answer = prompt("The word problem:  Gabby has 42 books on her bookshelf. Her dad gives her 23 more for her birthday. How many books does Gabby have now?");
        if(q1_Answer==65){
            var correctAnswers1 = 1;
            alert("|You got it correct!|");
        } else{
            var correctAnswers1 = 0;
            alert("|You got it incorrect!|");
        }
        alert("Correct Answers: " + correctAnswers1 + "/3");
        var q2_Answer = prompt("The word problem:  Hayden has 610 stickers. There are 250 in a white box and some in a yellow box. How many are in the yellow box?");
        if(q2_Answer==360){
            var correctAnswers2 = (correctAnswers1 + 1);
            alert("|You got it correct!|");
        } else{
            var correctAnswers2 = (correctAnswers1 + 0);
            alert("|You got it incorrect!|");
        }
        alert("Correct Answers: " + correctAnswers2 + "/3")
        var q3_Answer = prompt("The word problem:   Maria has 56 gummy bears. She will give all the gummy bears to 8 of her friends. Each friend will get the same number. How many gummy bears will each friend receive?");
        if(q3_Answer==7){
            var correctAnswers3 = (correctAnswers2 + 1);
            alert("|You got it correct!|");
        } else{
            var correctAnswers3 = (correctAnswers2 + 0);
            alert("|You got it incorrect!|");
        }
        alert("Correct Answers: " + correctAnswers3 + "/3");
        if(correctAnswers3===3){
            alert("You are a genius!");
        } else if(correctAnswers3===2){
            alert("Not bad!")
        } else if(correctAnswers3===1){
            alert("You still need practice");
        } else  {
            alert("Have you ever considered taking extra math classes?");
        }
        alert("*After exam*");
        alert("*" + name + " went to park with Ayla, you got results of your exams*");
        if(correctAnswers3 > 1){
            alert("*You passed*");
        }else {
            alert("*You failed*");
        }
        var resultsAyla = confirm("|Do you want to ask Ayla about her results?|");
        if(resultsAyla===true){
            alert(A + "I failed");
            var resultsSupport = confirm("|Would you like to support Ayla?|");
            if (resultsSupport===true){
                alert('"Hey, its ok, dont worry"');
                alert("You reached the ending 4! 'You can tell me everything'");
            } else {
                alert('"What a bad day to be you"');
                alert("*You could see Aylas eyes were getting wet, she was crying*");
                alert("*She ran off*");
                alert("You reached ending 2! 'Being a bad friend'");
            }
        } else {
            alert("*You could see Ayla being upset*");
            var hugAyla = confirm("|Would you want to hug Ayla?|");
            if(hugAyla===true){
                alert("*you hugged Ayla*");
                alert("*She cried to your shoulder*");
                alert("You reached the ending 3! 'I will be here for you'");
            } else {
                alert("*You put your hand on Ayla's shoulder*");
                alert("You reached the ending 5! 'I will be there for you' ");
            }
        }

        alert("|Extra|");
        var extra = confirm("Do you want to go through extra?");
        if(extra===true){
            alert("*You were going home together with Ayla*");
            alert("*She was still upset*");
            var extraSuppport = confirm("Would you like to talk to her about it?");
            if(extraSuppport===true){
                alert('"Ayla"');
                alert(A + name + "?");
                prompt("What would you like to tell her?");
                alert(A + "Thank you " + name + "! That means a lot to me");
                alert("*Ayla and " +name + " continued going to home*");
                alert("The end");
            } else {
                alert("*Ayla and " +name + " continued going to home*");
                alert("The end");
            }
        }
    }
    alert("You finished the story! There's 7 different endings in total, you might try to reach them all!");
    var review = confirm("Did you like my story?");
    if(review===false){
        alert("I am sorry to hear that!");
        var leaveReview = confirm("Would you like to leave Review?");
        if(leaveReview===true){
            prompt("Write your email address, we are going to contact you in the nearest time");
        } 
        alert("Have a good day" + name);
    }else {
        alert("i am happy to hear that!");
        var leaveReview = confirm("Would you like to leave Review?");
        if(leaveReview===true){
            prompt("Write your email address, we are going to contact you in the nearest time");
        } 
        alert("Have a good day" + name);
    }

} else {
    alert(':(');
    alert("What happened?");
    var endReason1 = confirm("Did you already went through my story?");
    if(endReason1 === true) {
        alert("Ohh, I see, that makes sense");
        var endReview = confirm("Did you like it?");
        if(endReview===true) {
            alert(":D");
        } else {
            alert(":(");
        }
    } else  {
        var endMistake = confirm("Did you press the wrong button?");
        if(endMistake===true) {
            alert("In that case, you can try to refresh the page!");
        } else {
            alert("Hmm");
            var endOther = confirm("Is there a problem?");
            if(endOther===true) {
                alert("Oh, no!");
                alert("I am sorry to hear that");
                prompt("Write your email address, we are going to contact you in the nearest time");
            }else {
                alert("I see");
                var askContact = confirm("Would you want us to contact you?");
                if(askContact===true) {
                    prompt("Write your email address, we are going to contact you in the nearest time");
                } else {
                    alert("Alright, have a good day then " + name);
                }
            }
        }
    }
}

