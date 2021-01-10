function showAnswersBasedOnType(questionType, questions, numberOfQuestions){

    $('#questionsPage').hide();
    $('#answersPage').show();

    $('#goHomeButtonAnswers').click(function(){
        location.reload();
    })

    if(questionType == "shortAnswers"){
        $('#shortAnswersAnswers').show();
        $('#shortAnswersAnswers').html('');
        for(var i=0;i<numberOfQuestions;i++){
           questionHTML = `
           <div class='shortAnswerQuestionAndInput'>
            <div id='shortAnswerQuestion${i+1}' class='shortAnswerQuestions'>${i+1}. When was Athena born</div>
            <span class='shortAnswerAnswerLabel'>Correct answer:</span><span class="shortAnswerAnswer">${questions[i].correctAnswer}</span>
            </br>
            <span class='shortAnswerAnswerLabel shortAnswerAnswerLabelUser'>Your answer:</span><span class="shortAnswerAnswer shortAnswerAnswerUser">${questions[i].userAnswer}</span>
           </div>
           ${i != numberOfQuestions-1?'<div class="dividingLine"></div>':""}`;
           $('#shortAnswersAnswers').append(questionHTML);
        }
    }
    else if (questionType == "multipleChoice"){

        $('#multipleChoiceAnswers').show();
        $('#multipleChoiceAnswers').html('');
        for(var i=0;i<numberOfQuestions;i++){
           questionHTML = `
            <div class="multipleChoiceQuestionAndInput">
                <div class="multipleChoiceQuestionAndTag">
                    <div id="multipleChoiceQuestion${i+1}" class="multipleChoiceQuestions">${i+1}. When was Athena born</div>${answerCorrectOrIncorrect(questions[i].correctAnswer, questions[i].userAnswer)}
                </div>
                <div class="multipleChoiceChoice" id="multipleChoiceChoice0${i+1}" style="opacity:${answerColor(questions[i].correctAnswer, questions[i].userAnswer, 0)}">
                    <button id="multipleChoiceButton0${i+1}" class="multipleChoiceButton" ></button>
                    <span id="multipleChoiceAnswer0${i+1}" class="multipleChoiceAnswers" >2001</span>
                    ${questions[i].userAnswer == 0?'<span class="multipleChoiceAnswers" ">Your answer</span>':''}
                    ${questions[i].correctAnswer == 0?'<span class="multipleChoiceAnswers" ">Correct answer</span>':''}
                </div>
                <div class="multipleChoiceChoice" id="multipleChoiceChoice1${i+1}" style="opacity:${answerColor(questions[i].correctAnswer, questions[i].userAnswer, 1)}">
                    <button id="multipleChoiceButton1${i+1}" class="multipleChoiceButton" ></button>
                    <span id="multipleChoiceAnswer1${i+1}" class="multipleChoiceAnswers" >2001</span>
                    ${questions[i].userAnswer == 1?'<span class="multipleChoiceAnswers" ">Your answer</span>':''}
                    ${questions[i].correctAnswer == 1?'<span class="multipleChoiceAnswers" ">Correct answer</span>':''}
                </div>
                <div class="multipleChoiceChoice" id="multipleChoiceChoice2${i+1}" style="opacity:${answerColor(questions[i].correctAnswer, questions[i].userAnswer, 2)}">
                    <button id="multipleChoiceButton2${i+1}" class="multipleChoiceButton" ></button>
                    <span id="multipleChoiceAnswer2${i+1}" class="multipleChoiceAnswers" >2001</span>
                    ${questions[i].userAnswer == 2?'<span class="multipleChoiceAnswers" ">Your answer</span>':''}
                    ${questions[i].correctAnswer == 2?'<span class="multipleChoiceAnswers" ">Correct answer</span>':''}
                </div>
                <div class="multipleChoiceChoice" id="multipleChoiceChoice3${i+1}" style="opacity:${answerColor(questions[i].correctAnswer, questions[i].userAnswer, 3)}">
                    <button id="multipleChoiceButton3${i+1}" class="multipleChoiceButton" ></button>
                    <span id="multipleChoiceAnswer3${i+1}" class="multipleChoiceAnswers" >2001</span>
                    ${questions[i].userAnswer == 3?'<span class="multipleChoiceAnswers" ">Your answer</span>':''}
                    ${questions[i].correctAnswer == 3?'<span class="multipleChoiceAnswers" ">Correct answer</span>':''}
                    </div>
            </div>
            ${i != numberOfQuestions-1?'<div class="dividingLine"></div>':""}`;
           $('#multipleChoiceAnswers').append(questionHTML);


        }


        // TODO remove onClick when go home or jump to answers



    }

    else if (questionType == "trueFalse"){
        $('#trueFalseAnswers').show();
        $('#trueFalseAnswers').html('');
        for(var i=0;i<numberOfQuestions;i++){
            questionHTML = `
            <div class="multipleChoiceQuestionAndInput">
            <div class="multipleChoiceQuestionAndTag">
                <div id="multipleChoiceQuestion${i+1}" class="multipleChoiceQuestions">${i+1}. When was Athena born</div>${answerCorrectOrIncorrect(questions[i].correctAnswer, questions[i].userAnswer)}
            </div>
            <div class="multipleChoiceChoice" id="multipleChoiceChoice0${i+1}" style="opacity:${answerColor(questions[i].correctAnswer, questions[i].userAnswer, 0)}">
                <button id="multipleChoiceButton0${i+1}" class="multipleChoiceButton" ></button>
                <span id="multipleChoiceAnswer0${i+1}" class="multipleChoiceAnswers" >2001</span>
                ${questions[i].userAnswer == 0?'<span class="multipleChoiceAnswers" ">Your answer</span>':''}
                ${questions[i].correctAnswer == 0?'<span class="multipleChoiceAnswers" ">Correct answer</span>':''}
            </div>
            <div class="multipleChoiceChoice" id="multipleChoiceChoice1${i+1}" style="opacity:${answerColor(questions[i].correctAnswer, questions[i].userAnswer, 1)}">
                <button id="multipleChoiceButton1${i+1}" class="multipleChoiceButton" ></button>
                <span id="multipleChoiceAnswer1${i+1}" class="multipleChoiceAnswers" >2001</span>
                ${questions[i].userAnswer == 1?'<span class="multipleChoiceAnswers" ">Your answer</span>':''}
                ${questions[i].correctAnswer == 1?'<span class="multipleChoiceAnswers" ">Correct answer</span>':''}
            </div>
        </div>
        ${i != numberOfQuestions-1?'<div class="dividingLine"></div>':""}`;
            $('#trueFalseAnswers').append(questionHTML);
        }


    }

    setUserScore(questions, questionType);
}

function answerColor(correctAnswer, userAnswer, answerNumber){
    // console.log(correctAnswer, userAnswer, answerNumber);
    if(correctAnswer != userAnswer && correctAnswer != answerNumber && answerNumber != userAnswer) return 0.25; // no response on this question, leave gray
    else if(correctAnswer == userAnswer && correctAnswer == answerNumber && answerNumber == userAnswer) return 1.0; // right answer, user gets correct answer
    else if(correctAnswer != userAnswer && correctAnswer != answerNumber && answerNumber == userAnswer) return 0.5; // wrong answer, but user chose this one
    else if(correctAnswer != userAnswer && correctAnswer == answerNumber && answerNumber != userAnswer) return 1.0; // wrong answer, but show green for correct answer
    return 0.25;
}

function answerCorrectOrIncorrect(correctAnswer, userAnswer){
    if(correctAnswer == userAnswer) return '<span class="correctAnswerTag">Correct</span>'
    else return '<span class="incorrectAnswerTag">Incorrect</span>';
}

function setUserScore(questions, questionType){
    var score = 0;
    if(questionType == "shortAnswers"){
        $('#scoreInput').html('<input id="scoreInputInput" class="score"/>');
        $('#scorePercentage').html("");
        $('#scoreInputInput').change(function(){
            if(Number.isInteger(parseInt($('#scoreInputInput').val()))){
                $('#scorePercentage').html("("+((parseInt($('#scoreInputInput').val())/questions.length) * 100) + "%" + ")")
            }
        })
    }
    else {
        for(var i=0;i<questions.length;i++){
            if(questions[i].userAnswer == questions[i].correctAnswer) score++;
        }
        $('#scoreInput').html(score);
        $('#scorePercentage').html("("+((score/questions.length) * 100) + "%" + ")")
    }
    $('#scoreTotal').html('/'+questions.length);
    


}