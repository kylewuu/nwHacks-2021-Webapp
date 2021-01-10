class MultipleChoice{
    constructor(correctAnswer, userAnswer = -1){
        this.correctAnswer = correctAnswer;
        this.userAnswer = userAnswer;
    };

    setUserAnswer(userAnswer, questionNumber){
        this.userAnswer = userAnswer;
        // console.log(`#multipleChoiceButton${this.userAnswer}${questionNumber}`);
        $(`#multipleChoiceButton${this.userAnswer}${questionNumber}`).css('background-color','#61A8F8');
        $(`#multipleChoiceChoice${this.userAnswer}${questionNumber}`).css('opacity','1.0');
        for(var i=0;i<4;i++){
            if(i != this.userAnswer){
                $(`#multipleChoiceButton${i}${questionNumber}`).css('background-color','#E1E1E1');
                // console.log(`#multipleChoiceChoice${i}${questionNumber}`);
                $(`#multipleChoiceChoice${i}${questionNumber}`).css('opacity','0.5');
            }
        }
    }
}