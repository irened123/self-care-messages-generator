const selfCareSuggestions = {
    thisDay: ['go to sleep early', 'listen to ethereal music', 'consume a delicious snack/beverage', 'practice mindful breathing'],
    thisWeek: ['watch the sunrise', 'practice a deep breathing session', 'organize your space', 'stroll through nature'],
    thisMonth: ['eat at a new restaurant', 'go hiking', 'check out a new bakery', 'explore a museum'],
}; 

const randomChoice = arr => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index]; 
}; 

const thisDayChoice = randomChoice(selfCareSuggestions.thisDay);
const thisWeekChoice = randomChoice(selfCareSuggestions.thisWeek);
const thisMonthChoice = randomChoice(selfCareSuggestions.thisMonth);
const message = `Today, you should ${thisDayChoice}.\nThis week, you should ${thisWeekChoice}.\nThis month, you should ${thisMonthChoice}.`

console.log(message); 