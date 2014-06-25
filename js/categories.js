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
var TEST_QUESTIONS1 = ["System: How may I help you?", 
"User: i want a flight reservation from duluth minnesota to chicago", 
"System: okay from Duluth to Chicago. What date will you be travelling?", 
"User: twenty nine november and i would like to fly american airlines", 
"System: okay, American flights from Duluth to Chicago on Thursday November 29. One moment please.", 
"System: I have 3 nonstop flights, arriving in Chicago O'Hare: a flight leaving at 6:22 a.m., a flight leaving at 12:15 p.m., and a flight leaving at 5:05 p.m. Please select one of these flights or change any constraint you have already specified.", 
"User: i would like to arrive in chicago around six thirty p m", 
"System: I have a nonstop American flight leaving at 5:05 p.m. and arriving at 6:30 p.m. to Chicago O'Hare? Would that work?", 
"User: that is fine", 
"System: American flight 4016 has been added to your itinerary. you depart Duluth at 5:05 pm and arrive in Chicago O'Hare at 6:30 pm. What date will you be returning on?", 
"User: i would like to depart chicago on one december and leave in the afternoon going to new orleans louisiana", 
"System: okay, flights from Chicago to New Orleans departing between noon and 6:00 pm on Saturday December first. One moment please.", 
"System: I have 2 nonstop flights, departing from Chicago O'Hare: a Nippon Airways flight leaving at noon, and an American flight leaving at 3:15 p.m. Please select one.", 
"User: the american flight", "System: American flight 1021 has been added to your itinerary. you depart Chicago O'Hare at 3:15 pm and arrive in New Orleans at 5:37 pm. Where would you like to go next?", 
"User: i would like to leave new orleans to go back to duluth on six december and i would like to leave in the morning and fly american airlines", 
"System: okay, American flights from New Orleans to Duluth departing between 5:00 am and noon on Thursday December sixth. One moment please.", 
"System: There are no nonstop flights. I have a flight connecting in Chicago O'Hare leaving at 7:58 a.m. and arriving at 4:35 pm? Would that work?", 
"User: yes", 
"System: American flight 826 connecting to American flight 4019 in Chicago O'Hare has been added to your itinerary. you depart New Orleans at 7:58 am and arrive in Duluth at 4:35 pm. Would you like me to find out how much your trip will cost?", 
"User: can i get a rental car", 
"System: I don't have any information on rental cars.", 
"User: price my itinerary", 
"System: the cheapest price for your trip is $647.00. Your itinerary has been emailed to you."];

// var TEST_ANSWERS1 = ["Initiate", "Modify", "Modify", "Answer", "Modify", "Select", "Modify", "Answer", "Ask", "Ask"];
var TEST_ANSWERS1 = [0, 1, 1, 4, 1, 2, 1, 4, 5, 5];

// questions taken from data/72 and modified slightly
var TEST_QUESTIONS2 = ["System: How may I help you?", 
"User: i need to book a flight", 
"System: What city does the flight arrive in?", 
"User: portland oregon", 
"System: to Portland Oregon. What city does the flight depart from?", 
"User: alexandria", 
"System: okay from Alexandria. What date will you be travelling?", 
"User: october fifteenth", 
"System: okay, from Alexandria to Portland Oregon on Monday October fifteenth. Can you provide the approximate departure time or airline?", 
"User: one o+clock p m", 
"System: okay, flights from Alexandria to Portland Oregon departing at 1:00 pm on Monday October fifteenth. One moment please.", 
"System: What about a Delta flight connecting in Dallas Fort Worth leaving at 1:00 pm? Would that work?", 
"User: yes", 
"System: Delta flight 4162 connecting to Delta flight 905 in Dallas Fort Worth has been added to your itinerary. you depart Alexandria at 1:00 pm and arrive in Portland Oregon at 5:30 pm. What date will you be returning on?", 
"User: october nineteenth", 
"System: okay, Delta flights from Portland Oregon to Alexandria on Friday October nineteenth. One moment please.", 
"System: There are no nonstop flights. I have 2 flights. connecting in Dallas Fort Worth: a flight leaving at 6:15 a.m., and a flight leaving at 12:55 p.m. Please select one of these flights or change any constraint you have already specified.", 
"User: thanks", 
"System: I have 2 flights. connecting in Dallas Fort Worth: a flight leaving at 6:15 a.m., and a flight leaving at 12:55 p.m. Please select one.", 
"User: six fifteen a m", 
"System: Delta flight 329 connecting to Delta flight 4961 in Dallas Fort Worth has been added to your itinerary. you depart Portland Oregon at 6:15 am and arrive in Alexandria at 2:30 pm. Would you like me to find out how much your trip will cost?", 
"User: yes", 
"System: Pricing your itinerary will take a while. In the meantime I'll summarize your itinerary for you. on Monday October fifteenth on Delta flight 4162, you depart from Alexandria at 1:00 pm and arrive in Dallas Fort Worth at 2:37 pm., From there, on Delta flight 905 you depart at 3:30 pm and arrive in Portland Oregon at 5:30 pm., on Friday October nineteenth on Delta flight 329, you depart from Portland Oregon at 6:15 am and arrive in Dallas Fort Worth at 11:53 am., From there, on Delta flight 4961 you depart at 1:05 pm and arrive in Alexandria at 2:30 pm.", 
"System: the cheapest price for your itinerary is $279.00. Shall I email your itinerary to you?", 
"User: yes", 
"System: Your itinerary has been emailed to you."];

// var TEST_ANSWERS2 = ["Initiate", "Modify", "Modify", "Modify", "Modify", "Answer", "Modify", "Other", "Select", "Answer", "Answer"];
var TEST_ANSWERS2 = [0, 1, 1, 1, 1, 4, 1, 7, 2, 4, 4];

// questions taken from data/90 and modified slightly
var TEST_QUESTIONS3 = ["System: How may I help you?", 
"User: i need a flight to san francisco tomorrow morning", 
"System: okay, flights from Boston to San Francisco departing between 5:00 am and noon on Saturday August 31. One moment please.", 
"System: I have 3 nonstop United flights.: a flight leaving at 7:05 a.m., a flight leaving at 8:20 a.m., and a flight leaving at 11:40 a.m. Would one of these work?", 
"User: i will take the second one", 
"System: United flight 177 has been added to your itinerary. you depart Boston at 8:20 am and arrive in San Francisco at 11:43 am. What date will you be returning on?", 
"User: i would like to return on monday afternoon", 
"System: okay, flights from San Francisco to Boston departing between noon and 6:00 pm on Monday September second. One moment please.", 
"System: I have 2 nonstop flights.: a United flight leaving at 1:10 p.m., and an American flight leaving at 3:45 p.m. Do you like any of these?", 
"User: i will take the united flight", 
"System: United flight 170 has been added to your itinerary. you depart San Francisco at 1:10 pm and arrive in Boston at 9:41 pm. Would you like me to find out how much your trip will cost?", 
"User: yes please", 
"System: Pricing your itinerary will take a while. In the meantime I'll summarize your itinerary for you. on Saturday August 31 on United flight 177, you depart from Boston at 8:20 am and arrive in San Francisco at 11:43 am., on Monday September second on United flight 170, you depart from San Francisco at 1:10 pm and arrive in Boston at 9:41 pm.", 
"System: the cheapest price for your itinerary is $2443.50. Shall I email your itinerary to you?"];

// var TEST_ANSWERS3 = ["Initiate", "Select", "Modify", "Select", "Answer"];
var TEST_ANSWERS3 = [0, 2, 1, 2, 4];

// questions taken from data/100 and modified slightly
var TEST_QUESTIONS4 = ["System: How may I help you?", 
"User: i would like to fly from boston to washington d c in national on august eighteenth", 
"System: okay, from Boston to Washington DC on Friday August 18. Can you provide the approximate departure time or airline?", 
"User: departing at two p m", 
"System: okay, flights from Boston to Washington DC departing at 2:00 pm on Friday August 18. One moment please.", 
"System: What about a U S Airways flight leaving at 2:00 pm? Would that work? I also have a U S Airways flight leaving at 2:15 p.m.", 
"User: the two fifteen flight please", 
"System: U S Airways flight 2451 has been added to your itinerary. you depart Boston at 2:15 pm and arrive in Washington Dulles at 3:55 pm. Where would you like to go next?", 
"User: i would like to fly from baltimore to boston", 
"System: What date will you be returning on?", 
"User: august twentieth", 
"System: okay, U S Airways flights from Baltimore to Boston on Sunday August 20. One moment please.", 
"System: Can you provide a departure or arrival time? the earliest nonstop flight leaves at 06:55 a.m. and arrives at 08:15 a.m.", 
"User: i would like to depart at ten p m", 
"System: okay, U S Airways flights from Baltimore to Boston departing at 10:00 pm on Sunday August 20. One moment please.", 
"System: I have a nonstop U S Airways flight leaving at 8:50 p.m. and arriving at 10:12 pm? Would that work?", 
"User: is there a later flight", 
"System: okay, U S Airways flights from Baltimore to Boston on Sunday August 20. One moment please.", 
"System: What about a flight connecting in Salisbury, and Philadelphia, leaving at 9:00 pm? Would that work? I also have a flight connecting in Buffalo leaving at 9:10 p.m.", 
"User: the third direct flight", 
"System: I don't know what flight you're referring to. third U S Airways flights from Baltimore to Boston on Sunday August 20.", 
"User: is there a direct flight", 
"System: okay, direct. Can you provide the approximate departure time or airline?", 
"User: departing at ten p m", 
"System: okay, direct flights from Baltimore to Boston departing at 10:00 pm on Sunday August 20. One moment please.", 
"System: I have a nonstop U S Airways flight leaving at 8:50 p.m. and arriving at 10:12 pm? Would that work?", 
"User: are there any later flights", 
"System: okay, direct flights from Baltimore to Boston on Sunday August 20. One moment please.", 
"System: sorry I could not find any direct flights from Baltimore to Boston on Sunday August 20.", 
"User: is that flight at ten p m", 
"System: I have a nonstop U S Airways flight leaving at 8:50 p.m. and arriving at 10:12 pm? Would that work?", 
"User: is there a later flight forty and the latest flight", 
"System: flight 40 from Baltimore to Boston. What airline are you interested in?", 
"User: any airline", 
"System: on Sunday August 20. Can you provide the approximate departure or arrival time?", 
"User: departing at ten p m", 
"System: okay, flights from Baltimore to Boston departing at 10:00 pm on Sunday August 20. One moment please.", 
"System: I have a nonstop U S Airways flight leaving at 8:50 p.m. and arriving at 10:12 pm? Would that work?", 
"User: yes", 
"System: U S Airways flight 948 has been added to your itinerary. you depart Baltimore at 8:50 pm and arrive in Boston at 10:12 pm. Would you like me to find out how much your trip will cost?", 
"User: yes please", 
"System: Pricing your itinerary will take a while. In the meantime I'll summarize your itinerary for you. on Friday August 18 on U S Airways flight 2451, you depart from Boston at 2:15 pm and arrive in Washington Dulles at 3:55 pm. on Sunday August 20 on U S Airways flight 948, you depart from Baltimore at 8:50 pm and arrive in Boston at 10:12 pm.", 
"System: the cheapest price for your trip is $301.00. Shall I email your itinerary to you?", 
"User: yes please", 
"System: Your itinerary has been emailed to you."];

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