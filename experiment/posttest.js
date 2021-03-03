/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [
        
        
                
        {
            question: "1. Algorithm used for converting time series EEG data to power spectral density:", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "ICA", ///// Write the option 1 inside double quotes
                b: "Bandpass filter", ///// Write the option 2 inside double quotes
                c: "IR filter", ///// Write the option 2 inside double quotes
                d: "FFT", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },



        {
            question: "2. Power spectrum density indicates:", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "Power distribution of EEG data series in time domain", ///// Write the option 1 inside double quotes
                b: "Power distribution of EEG series in the frequency domain", ///// Write the option 2 inside double quotes
                c: "Coherence of EEG series", ///// Write the option 2 inside double quotes
                d: "None of the above", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },




        {
            question: "3. Unit for PSD measurement in EEG data:", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "µVolts square per dB", ///// Write the option 1 inside double quotes
                b: " µVolts sqaure per Hz", ///// Write the option 2 inside double quotes
                c: "Volts sqaure per sec", ///// Write the option 2 inside double quotes
                d: "µVolts", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },



        {
            question: "4. Which of the following is a real function of frequency ?", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "PSD", ///// Write the option 1 inside double quotes
                b: "FFT", ///// Write the option 2 inside double quotes
                c: "PCA", ///// Write the option 2 inside double quotes
                d: "None of the above", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },



        {
            question: "5. Power spectrum density method used for feature extraction of raw EEG signal", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "Welch’s Method", ///// Write the option 1 inside double quotes
                b: "K-nearest neighbors classifier", ///// Write the option 2 inside double quotes
                c: "Bartlett method", ///// Write the option 2 inside double quotes
                d: "None of the above", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },


        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
