var myQuestions = [
    {
        question: "Which player is affectionately known as 'The King' to Manchester United fans?",
        answer: {
            a: "Eric Contonna",
            b: "David Beckham",
            c: "Wayne rooney"
        },
        correctAnswer: 'a'

    },

    {
        question: "Which two players were suspended for Manchester United's 1999 Champions League final triumph?",
        answer: {

            a: "Rayan Giggs and Paul Scholes ",
            b: "Roy keane and Paul Scholes ",
            c: "Ole Gunnar Solskjaer and Paul Scholes"
        },
        correctAnswer: 'b'

    },

    {
        question: "Who scored the winning goal for Manchester United in their 2-1 Champions League final victory in 1999?",
        answer: {

            a: "Ole Gunnar Solskjaer",
            b: "David Beckham",
            c: "Jaap Stam"
        },
        correctAnswer: 'a'

    },
    {
        question: "Alex Ferguson famously kicked a boot at which player, injuring his eye?",
        answer: {
            a: "Cristiano Ronaldo",
            b: "David Beckham",
            c: "Rio Ferdinand"
        },
        correctAnswer: 'b'

    }
];
$("#btn2").hide()

$('#btn1').click(function () {
    // $('body').replaceWith('myQuestions');
    $("#first").hide()
    myQuestions.map(function (question) {
        $('#quiz').append("<div class='qa'><div class='question'>" + question.question + "</div><div class='answer'><div class='content-sug'><div class='suggestion1'>" + question.answer.a + "<input type='checkbox' ></div><div class='content-sug'><div class='suggestion2'>" + question.answer.b + "<input type='checkbox' ></div><div class='content-sug'><div class='suggestion3'>" + question.answer.c + "<input type='checkbox' ></div></div></div></div>")

    })
    $("#btn2").show()
});








var quizContainer = $('#quiz');
var resultsContainer = $('#results');
var submitButton = $('submit');
