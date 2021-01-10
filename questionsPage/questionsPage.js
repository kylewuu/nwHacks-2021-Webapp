var questions;

function showQuestionBasedOnType(){
    questions = [];
    // pass these in as parameters
    var numberOfQuestions = 5;
    var questionType = "multipleChoice";
    // $('#shortAnswer').show();
    // show short answers

    if(questionType == "shortAnswers"){
        questions = [];
        $('#shortAnswers').show();
        $('#shortAnswers').html('');
        for(var i=0;i<numberOfQuestions;i++){
           questions[i] = `<div class='shortAnswerQuestionAndInput'><div id='shortAnswerQuestion${i+1}' class='shortAnswerQuestions'>${i+1}. When was Athena born</div><input placeholder='' id='shortAnswerInput${i+1}' class='shortAnswerInputs'></div>`;
           $('#shortAnswers').append(questions[i]);
        }
    }
    else if (questionType == "multipleChoice"){
        questions = [];
        $('#multipleChoice').show();
        $('#multipleChoice').html('');
        for(var i=0;i<numberOfQuestions;i++){
           questionHTML = `
            <div class="multipleChoiceQuestionAndInput">
                <div id="multipleChoiceQuestion${i+1}" class="multipleChoiceQuestions">${i+1}. When was Athena born</div>
                <div class="multipleChoiceChoice" id="multipleChoiceChoice0${i+1}">
                    <button id="multipleChoiceButton0${i+1}" class="multipleChoiceButton"></button>
                    <span id="multipleChoiceAnswer0${i+1}" class="multipleChoiceAnswers">2001</span>
                </div>
                <div class="multipleChoiceChoice" id="multipleChoiceChoice1${i+1}">
                    <button id="multipleChoiceButton1${i+1}" class="multipleChoiceButton"></button>
                    <span id="multipleChoiceAnswer1${i+1}" class="multipleChoiceAnswers">2001</span>
                </div>
                <div class="multipleChoiceChoice" id="multipleChoiceChoice2${i+1}">
                    <button id="multipleChoiceButton2${i+1}" class="multipleChoiceButton"></button>
                    <span id="multipleChoiceAnswer2${i+1}" class="multipleChoiceAnswers">2001</span>
                </div>
                <div class="multipleChoiceChoice" id="multipleChoiceChoice3${i+1}">
                    <button id="multipleChoiceButton3${i+1}" class="multipleChoiceButton"></button>
                    <span id="multipleChoiceAnswer3${i+1}" class="multipleChoiceAnswers">2001</span>
                </div>
            </div>`;
           $('#multipleChoice').append(questionHTML);
           questions[i] = new MultipleChoice(1);

        }

        $(".multipleChoiceChoice").click(function(){
            var questionNumber = parseMultipleChoiceQuestionNumber(this.id);
            questions[questionNumber-1].setUserAnswer(parseMultipleChoiceChoice(this.id), questionNumber);
            // console.log("question number: " + questionNumber + " user choice is: " + parseMultipleChoiceChoice(this.id));
        })

        // TODO remove onClick when go home or jump to answers



    }

    else if (questionType == "trueFalse"){
        questions = [];
        $('#trueFalse').show();
        $('#trueFalse').html('');
        for(var i=0;i<numberOfQuestions;i++){
            questionHTML = `
           <div class="multipleChoiceQuestionAndInput">
                <div id="multipleChoiceQuestion${i+1}" class="multipleChoiceQuestions">${i+1}. When was Athena born</div>
                <div class="multipleChoiceChoice" id="multipleChoiceChoice0${i+1}">
                    <button id="multipleChoiceButton0${i+1}" class="multipleChoiceButton"></button>
                    <span id="multipleChoiceAnswer0${i+1}" class="multipleChoiceAnswers">True</span>
                </div>
                <div class="multipleChoiceChoice" id="multipleChoiceChoice1${i+1}">
                    <button id="multipleChoiceButton1${i+1}" class="multipleChoiceButton"></button>
                    <span id="multipleChoiceAnswer1${i+1}" class="multipleChoiceAnswers">False</span>
                </div>
            </div>`;
            $('#trueFalse').append(questionHTML);
            questions[i] = new TrueFalse(1);
        }

        $(".multipleChoiceChoice").click(function(){
            var questionNumber = parseMultipleChoiceQuestionNumber(this.id);
            questions[questionNumber-1].setUserAnswer(parseMultipleChoiceChoice(this.id), questionNumber);
            // console.log("question number: " + questionNumber + " user choice is: " + parseMultipleChoiceChoice(this.id));
        })

        // TODO remove onClick when go home or jump to answers
    }

    $('#questionsSubmitButton').click(function(){
        showAnswersBasedOnType(questionType, questions, numberOfQuestions);
    })
}


function parseMultipleChoiceChoice(id){
    return parseInt(id.charAt(id.length - 2));
}
function parseMultipleChoiceQuestionNumber(id){
    return parseInt(id.charAt(id.length - 1));
}