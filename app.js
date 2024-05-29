const questions =[{
    'ques': 'What does HTML stand for?',
    'a': 'Hyper Text Markup Language',
    'b': 'Home Tool Markup Language',
    'c': 'Hyperlinks and Text Markup Language',
    'd': 'Hyperlinking Text Marking Language',
    'correct': 'a'
},
{
    'ques': 'Which of the following HTML elements is used to create a hyperlink',
    'a': '<link>',
    'b': '<a>',
    'c': '<href>',
    'd': '<hyperlink>',
    'correct': 'b'
},
{
    'ques': 'What does CSS stand for?',
    'a': 'Colorful Style Sheets',
    'b': 'Creative Style Sheets',
    'c': 'Cascading Style Sheets',
    'd': 'Computer Style Sheets',
    'correct': 'c'
},
{
    'ques': 'Which attribute is used to specify an alternate text for an image, if the image cannot be displayed?',
    'a': 'title',
    'b': 'src',
    'c': 'alt',
    'd': 'longdesc',
    'correct': 'c'
},
{
    'ques': 'Which of the following is used to create a checkbox in HTML?',
    'a': '<input type="checkbox">',
    'b': '<input type="check">',
    'c': '<checkbox>',
    'd': '<check>',
    'correct': 'a'
},
{
    'ques': 'Which CSS property controls the text size?',
    'a': 'text-size',
    'b': 'font-size',
    'c': 'text-style',
    'd': 'font-style',
    'correct': 'B'
},
{
    'ques': 'How do you add a background color for all <h1> elements?',
    'a': 'all.h1 {background-color:#FFFFFF;}',
    'b': 'h1.all {background-color:#FFFFFF;}',
    'c': 'h1 {background-color:#FFFFFF;}',
    'd': 'h1 {color:background-color:#FFFFFF;}',
    'correct': 'c'
},
{
    'ques': 'What is the default value of the position property in CSS?',
    'a': 'absolute',
    'b': 'fixed',
    'c': 'relative',
    'd': 'static',
    'correct': 'd'
}
]
let index = 0;
let total = questions.length;
let right = 0, wrong =0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');
const loadQuestion = () => {
    if (index === total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
    quesBox.innerText = `${index+1}) ${data.ques}`;

    optionInputs[0].nextElementSibling.innerText =data.a;
    optionInputs[1].nextElementSibling.innerText =data.b;
    optionInputs[2].nextElementSibling.innerText =data.c;
    optionInputs[3].nextElementSibling.innerText =data.d;
}

const submitQuiz = () =>{
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () =>{
    let answer
    optionInputs.forEach(
        (input) =>{
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () =>{
    optionInputs.forEach(
        (input) =>{
            input.checked = false
        }
    )
}
const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3> Thank you for playing the quiz </h3>
    <h2>${right} / ${total} are correct </h2>
    </div>
    ` 
}


loadQuestion();