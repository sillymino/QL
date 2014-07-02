// list of categories ("cats" for short)
var cats = [
    "Bad",
    "Potential",
    "Good",
    "Dialog",
    "Notenglish",
    "Other"
];

var catDescriptions = [ 
	"Potentially answers the question (attempts to provide a relevant answer, but is insufficient in some way)",
	"Badly answers the question (does not attempt to provide a relevant answer)",
	"Appropriately answers the question (attempts to provide a relevant answer)",
	"a Dialog starting a different conversation than the question",
	"a Not English response to the question"
];


var catsText = {
    "Bad": "<strong>Bad</strong> answer to the question.",
    "Potential": "<strong>Potential</strong> answer to the question.",
    "Good": "<strong>Good</strong> answer to the question (correct OR incorrect).",
    "Dialog": "a <strong>Dialog</strong> starting a different conversation.",
    "Not English": "a <strong>Not English</strong> answer to the question.",
    "Other": "<strong>Other</strong>"
};

var examples = {
    "Bad": [
        "<strong>Question:</strong> Any suggestions for Spas having the facility of Oil Baths?",
        "<strong>Comment Subject:</strong> ",
        "<strong>Comment Body:</strong> It could be a good defence against intruders if any .."
    ],
    "Potential": [
        "<strong>Question:</strong> Any suggestions for Spas having the facility of Oil Baths?",
        "<strong>Comment Subject:</strong> ",
        "<strong>Comment Body:</strong> Please be careful. Remember that crude oil can seep into the pores and can be toxic :O("
    ],
    "Good": [
        "<strong>Question:</strong> Any suggestions for Spas having the facility of Oil Baths?",
        "<strong>Comment Subject:</strong> ",
        "<strong>Response:</strong> There is Turkish Hamams"
    ],
    "Dialog": [
        "<strong>Question:</strong> My ASUS laptop screen does not work, but everything else works still. Is there anywhere I can go to get it fixed?",
        "<strong>Response:</strong> do you have directions?"
    ],
    "Notenglish": [
        "<strong>Question:</strong> My ASUS laptop screen does not work, but everything else works still. Is there anywhere I can go to get it fixed?",
        "<strong>Comment Subject:</strong> ",
        "<strong>Response:</strong> am serivce call me 33943252"
    ],
    "Other": [
        "We don't expect you to have anything that fits in this cateogry"
    ]
};

var _T = {
    qnum: function (index, total) {
        return "Question " + (index + 1) + "/" + total;
    },
    pretext: "The response is ...",
    hide: "HIDE",
    show: "SHOW"
};