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
    "Bad": "a <strong>Bad</strong> answer to the question.",
    "Potential": "a <strong>Potential</strong> answer to the question.",
    "Good": "a <strong>Good</strong> answer to the question (correct OR incorrect).",
    "Dialog": "a <strong>Dialog</strong> starting a different conversation.",
    "Notenglish": "a <strong>Not English</strong> answer to the question.",
    "Other": "<strong>Other</strong>"
};

var examples = {
    "Bad": [
        "<strong>Question:</strong> Any suggestions for Spas having the facility of Oil Baths?",
        "<strong>Comment Subject:</strong> Brit",
        "<strong>Comment Body:</strong> It could be a good defence against intruders if any .."
    ],
    "Potential": [
        "<strong>Question:</strong> Any suggestions for Spas having the facility of Oil Baths?",
        "<strong>Comment Subject:</strong> Please be careful. Remember",
        "<strong>Comment Body:</strong> Please be careful. Remember that crude oil can seep into the pores and can be toxic :O("
    ],
    "Good": [
        "<strong>Question:</strong> Any suggestions for Spas having the facility of Oil Baths?",
        "<strong>Comment Subject:</strong> There is Turkish Hamams, I",
        "<strong>Response:</strong> There is Turkish Hamams, I will have to check with my QL buddy Kellyheroes and get back to you!"
    ],
    "Dialog": [
        "<strong>Question:</strong> My ASUS laptop screen does not work, but everything else works still. Is there anywhere I can go to get it fixed?",
        "<strong>Comment Subject:</strong> RE: Where can I get an ASUS laptop fixed?",
        "<strong>Response:</strong> do you have directions?"
    ],
    "Notenglish": [
        "<strong>Question:</strong> Hi all, Please advise, is it possible that a Filipina and a Nepalie can get married in Qatar even civil wedding only?",
        "<strong>Comment Subject:</strong> RE: Nepalie and Filipina, How to get married?",
        "<strong>Response:</strong> kabayan nagtanung kna lang sa embasy natin,,alam nla yan kung anu dapat nyo gawin,,god bless you"
    ],
    "Other": [
        "We don't expect you to have anything that fits in this cateogry"
    ]
};

var _T = {
    qnum: function (index, total) {
        return "Question " + (index + 1) + "/" + total;
    },
    pretext: "The response is a...",
    hide: "HIDE",
    show: "SHOW"
};