class ShortAnswer{
    constructor(correctAnswer, userAnswer = ''){
        this.correctAnswer = correctAnswer;
        this.userAnswer = userAnswer;
    };

    setUserAnswer(userAnswer){
        this.userAnswer = userAnswer;

    }
}