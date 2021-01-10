// TODO renable this
// window.onbeforeunload = function() {
//     return "Data will be lost if you leave the page, are you sure?";
//   };
// testingShowQuestionPage();


document.getElementById("submitButton").onclick = function () {
    $('#uploadPage').hide();
    $('#loadingPage').show();
    loadQuestions();
}


function testingShowQuestionPage(){
    $('#uploadPage').hide();
    $('#questionsPage').show();
    showQuestionBasedOnType();
}