// list of categories ("cats" for short)
var cats = [
    "Bad",
    "Potential",
    "Good",
    "Author",
    "Dialog",
    "Ad",
    "Other"
];

var catDescriptions = [ 
	"Potentially answers the question (attempts to provide a relevant answer, but is insufficient in some way)",
	"Badly answers the question (does not attempt to provide a relevant answer)",
	"Appropriately answers the question (attempts to provide a relevant answer)",
	"the Author commenting on the question",
	"a Dialog starting a different conversation than the question",
	"an Ad regarding the question"
];


var catsText = {
    "Bad": "<strong>Not Helpful</strong> in answering the question.",
    "Potential": "<strong>Possibly Helpful</strong> in answering the question.",
    "Good": "<strong>Appropriate</strong> in answering the question.",
    "Author": "the <strong>Author</strong> commenting on the question.",
    "Dialog": "a <strong>Dialog</strong> starting a different conversation.",
    "Ad": "an <strong>Ad</strong> regarding the question.",
    "Other": "<strong>Other</strong>"
};

var examples = {
    "Bad": [
        "<strong>Question:</strong> Any suggestions for Spas having the facility of Oil Baths?",
        "<strong>Response:</strong> It could be a good defence against intruders if any .."
    ],
    "Potential": [
        "<strong>Question:</strong> Any suggestions for Spas having the facility of Oil Baths?",
        "<strong>Response:</strong> Please be careful. Remember that crude oil can seep into the pores and can be toxic :O("
    ],
    "Good": [
        "<strong>Question:</strong> Any suggestions for Spas having the facility of Oil Baths?",
        "<strong>Response:</strong> There is Turkish Hamams"
    ],
    "Author": [
        "<strong>Question:</strong> Any suggestions for Spas having the facility of Oil Baths?",
        "<strong>Response:</strong> Thank you all.  I can do it in my home itself but takes too much time for cleaning afterwards.."
    ],
    "Dialog": [
        "<strong>Question:</strong> My ASUS laptop screen does not work, but everything else works still. Is there anywhere I can go to get it fixed?",
        "<strong>Response:</strong> do you have directions?"
    ],
    "Ad": [
        "<strong>Question:</strong> My ASUS laptop screen does not work, but everything else works still. Is there anywhere I can go to get it fixed?",
        "<strong>Response:</strong> am serivce call me 33943252"
    ],
    "Other": [
        "We don't expect you to have anything that fits in this cateogry"
    ]
};

// questions taken from data/61 and modified slightly
var TEST_QUESTIONS1 = ["Today for breakfast I had a bowl of cereal (Cheerios) with milk and a glass of pulp free OJ."];

// var TEST_ANSWERS1 = ["Initiate", "Modify", "Modify", "Answer", "Modify", "Select", "Modify", "Answer", "Ask", "Ask"];
var TEST_ANSWERS1 = [0, 1, 1, 4, 1, 2, 1, 4, 5, 5];

// questions taken from data/72 and modified slightly
var TEST_QUESTIONS2 = [""];

// var TEST_ANSWERS2 = ["Initiate", "Modify", "Modify", "Modify", "Modify", "Answer", "Modify", "Other", "Select", "Answer", "Answer"];
var TEST_ANSWERS2 = [0, 1, 1, 1, 1, 4, 1, 7, 2, 4, 4];

// questions taken from data/90 and modified slightly
var TEST_QUESTIONS3 = [""];

// var TEST_ANSWERS3 = ["Initiate", "Select", "Modify", "Select", "Answer"];
var TEST_ANSWERS3 = [0, 2, 1, 2, 4];

// questions taken from data/100 and modified slightly
var TEST_QUESTIONS4 = [""];

// var TEST_ANSWERS4 = ["Initiate", "Modify", "Select", "Modify", "Modify", "Modify", "Modify", "Select", "Modify", "Modify", "Modify", "Ask", "Unknown", "Modify", "Modify", "Answer", "Answer", "Answer"];
var TEST_ANSWERS4 = [0, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 5, 6, 1, 1, 4, 4, 4];

var TEST_QUESTIONS = TEST_QUESTIONS1.concat(TEST_QUESTIONS2, TEST_QUESTIONS3, TEST_QUESTIONS4);
var TEST_ANSWERS = TEST_ANSWERS1.concat(TEST_ANSWERS2, TEST_ANSWERS3, TEST_ANSWERS4);

var _T = {
    qnum: function (index, total) {
        return "Question " + (index + 1) + "/" + total;
    },
    pretext: "The response is ...",
    hide: "HIDE",
    show: "SHOW"
};