function loadQuestions() {
    setTimeout(function(){
        // location.href = "questionsPage/questionsPage.html";
        $('#loadingPage').hide();
        $('#questionsPage').show();
        showQuestionBasedOnType();
    }, 500);

    
}