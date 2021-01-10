function showQuestionBasedOnType(){
    
    // pass these in as parameters
    var numberOfQuestions = 2;
    var questionType = "multipleChoice";
    // $('#shortAnswer').show();
    // show short answers

    if(questionType == "shortAnswer"){
        var questions = [];
        $('#shortAnswers').html('');
        for(var i=0;i<numberOfQuestions;i++){
           questions[i] = `<div class='shortAnswerQuestionAndInput'><div id='shortAnswerQuestion${i+1}' class='shortAnswerQuestions'>${i+1}. When was Athena born</div><input placeholder='' id='shortAnswerInput${i+1}' class='shortAnswerInputs'></div>`;
           $('#shortAnswers').append(questions[i]);
        }
    }
    else if (questionType == "multipleChoice"){
        var questions = [];
        $('#shortAnswers').html('');
        for(var i=0;i<numberOfQuestions;i++){
           questions[i] = `<div class='shortAnswerQuestionAndInput'><div id='shortAnswerQuestion${i+1}' class='shortAnswerQuestions'>${i+1}. When was Athena born MC</div><input placeholder='' id='shortAnswerInput${i+1}' class='shortAnswerInputs'></div>`;
           $('#shortAnswers').append(questions[i]);
        }
    }
}

