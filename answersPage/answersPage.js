function showAnswersBasedOnType(questionType, questions, numberOfQuestions){
    $('#questionsPage').hide();
    $('#answersPage').show();

    if(questionType == "shortAnswers"){

        $('#shortAnswersAnswers').show();
        $('#shortAnswersAnswers').html('');
        for(var i=0;i<numberOfQuestions;i++){
           questions[i] = `<div class='shortAnswerQuestionAndInput'><div id='shortAnswerQuestion${i+1}' class='shortAnswerQuestions'>${i+1}. When was Athena born</div><input placeholder='' id='shortAnswerInput${i+1}' class='shortAnswerInputs'></div>`;
           $('#shortAnswersAnswers').append(questions[i]);
        }
    }
    else if (questionType == "multipleChoice"){

        $('#multipleChoiceAnswers').show();
        $('#multipleChoiceAnswers').html('');
        for(var i=0;i<numberOfQuestions;i++){
           questionHTML = `
            <div class="multipleChoiceQuestionAndInput">
                <div id="multipleChoiceQuestion${i+1}" class="multipleChoiceQuestions">${i+1}. When was Athena born</div>
                <div class="multipleChoiceChoice" id="multipleChoiceChoice0${i+1}">
                    <button id="multipleChoiceButton0${i+1}" class="multipleChoiceButton" style="background-color:${answerColor(questions[i].correctAnswer, questions[i].userAnswer, 0)}"></button>
                    <span id="multipleChoiceAnswer0${i+1}" class="multipleChoiceAnswers" style="background-color:${answerColor(questions[i].correctAnswer, questions[i].userAnswer, 0)}">2001</span>
                    ${questions[i].userAnswer == 0?'<span class="multipleChoiceAnswers" style="background-color:'+answerColor(questions[i].correctAnswer, questions[i].userAnswer, 0)+'">Your answer</span>':''}
                    ${questions[i].correctAnswer == 0?'<span class="multipleChoiceAnswers" style="background-color:'+answerColor(questions[i].correctAnswer, questions[i].userAnswer, 0)+'">Correct answer</span>':''}
                </div>
                <div class="multipleChoiceChoice" id="multipleChoiceChoice1${i+1}">
                    <button id="multipleChoiceButton1${i+1}" class="multipleChoiceButton" style="background-color:${answerColor(questions[i].correctAnswer, questions[i].userAnswer, 1)}"></button>
                    <span id="multipleChoiceAnswer1${i+1}" class="multipleChoiceAnswers" style="background-color:${answerColor(questions[i].correctAnswer, questions[i].userAnswer, 1)}">2001</span>
                    ${questions[i].userAnswer == 1?'<span class="multipleChoiceAnswers" style="background-color:'+answerColor(questions[i].correctAnswer, questions[i].userAnswer, 1)+'">Your answer</span>':''}
                    ${questions[i].correctAnswer == 1?'<span class="multipleChoiceAnswers" style="background-color:'+answerColor(questions[i].correctAnswer, questions[i].userAnswer, 1)+'">Correct answer</span>':''}
                </div>
                <div class="multipleChoiceChoice" id="multipleChoiceChoice2${i+1}">
                    <button id="multipleChoiceButton2${i+1}" class="multipleChoiceButton" style="background-color:${answerColor(questions[i].correctAnswer, questions[i].userAnswer, 2)}"></button>
                    <span id="multipleChoiceAnswer2${i+1}" class="multipleChoiceAnswers" style="background-color:${answerColor(questions[i].correctAnswer, questions[i].userAnswer, 2)}">2001</span>
                    ${questions[i].userAnswer == 2?'<span class="multipleChoiceAnswers" style="background-color:'+answerColor(questions[i].correctAnswer, questions[i].userAnswer, 2)+'">Your answer</span>':''}
                    ${questions[i].correctAnswer == 2?'<span class="multipleChoiceAnswers" style="background-color:'+answerColor(questions[i].correctAnswer, questions[i].userAnswer, 2)+'">Correct answer</span>':''}
                </div>
                <div class="multipleChoiceChoice" id="multipleChoiceChoice3${i+1}">
                    <button id="multipleChoiceButton3${i+1}" class="multipleChoiceButton" style="background-color:${answerColor(questions[i].correctAnswer, questions[i].userAnswer, 3)}"></button>
                    <span id="multipleChoiceAnswer3${i+1}" class="multipleChoiceAnswers" style="background-color:${answerColor(questions[i].correctAnswer, questions[i].userAnswer, 3)}">2001</span>
                    ${questions[i].userAnswer == 3?'<span class="multipleChoiceAnswers" style="background-color:'+answerColor(questions[i].correctAnswer, questions[i].userAnswer, 3)+'">Your answer</span>':''}
                    ${questions[i].correctAnswer == 3?'<span class="multipleChoiceAnswers" style="background-color:'+answerColor(questions[i].correctAnswer, questions[i].userAnswer, 3)+'">Correct answer</span>':''}
                    </div>
            </div>`;
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
                <div id="multipleChoiceQuestion${i+1}" class="multipleChoiceQuestions">${i+1}. When was Athena born</div>
                <div class="multipleChoiceChoice" id="multipleChoiceChoice0${i+1}">
                    <button id="multipleChoiceButton0${i+1}" class="multipleChoiceButton"></button>
                    <span id="multipleChoiceAnswer0${i+1}" class="multipleChoiceAnswers">True</span>
                    ${questions[i].userAnswer == 0?'<span id="multipleChoiceAnswer0${i+1}" class="multipleChoiceAnswers">Your answer</span>':''}
                    ${questions[i].correctAnswer == 0?'<span id="multipleChoiceAnswer0${i+1}" class="multipleChoiceAnswers">Correct answer</span>':''}
                </div>
                <div class="multipleChoiceChoice" id="multipleChoiceChoice1${i+1}">
                    <button id="multipleChoiceButton1${i+1}" class="multipleChoiceButton"></button>
                    <span id="multipleChoiceAnswer1${i+1}" class="multipleChoiceAnswers">False</span>
                    ${questions[i].userAnswer == 0?'<span id="multipleChoiceAnswer0${i+1}" class="multipleChoiceAnswers">Your answer</span>':''}
                    ${questions[i].correctAnswer == 0?'<span id="multipleChoiceAnswer0${i+1}" class="multipleChoiceAnswers">Correct answer</span>':''}
                </div>
            </div>`;
            $('#trueFalseAnswers').append(questionHTML);
        }


    }
}

function answerColor(correctAnswer, userAnswer, answerNumber){
    console.log(correctAnswer, userAnswer, answerNumber);
    if(correctAnswer != userAnswer && correctAnswer != answerNumber && answerNumber != userAnswer) return '#E1E1E1'; // no response on this question, leave gray
    else if(correctAnswer == userAnswer && correctAnswer == answerNumber && answerNumber == userAnswer) return "#57FF73"; // right answer, user gets correct answer
    else if(correctAnswer != userAnswer && correctAnswer != answerNumber && answerNumber == userAnswer) return "#FF4040"; // wrong answer, but user chose this one
    else if(correctAnswer != userAnswer && correctAnswer == answerNumber && answerNumber != userAnswer) return "#57FF73"; // wrong answer, but show green for correct answer
}