import chalk from 'chalk';

const selfCareSuggestions = {
    today: ['go to sleep early', 'listen to ethereal music', 'consume a delicious snack/beverage', 'practice mindful breathing'],
    thisWeek: ['watch the sunrise', 'practice a deep breathing session', 'organize your space', 'stroll through nature'],
    thisMonth: ['eat at a new restaurant', 'go hiking', 'check out a new bakery', 'explore a museum'],
}; 

// Returns a random choice from an array 
const randomChoice = arr => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index]; 
}; 

// Formats the message by applying colors from chalk 
const formatMessage = (label, item, labelColor, itemColor) => {
    return `${chalk.hex(labelColor)(label)} ${chalk.hex(itemColor)(item)}`;
};

// Displays randomly generated, self-care messages
const formatSelfCareMessage = () => {
    const thisDayChoice = randomChoice(selfCareSuggestions.today);
    const thisWeekChoice = randomChoice(selfCareSuggestions.thisWeek);
    const thisMonthChoice = randomChoice(selfCareSuggestions.thisMonth);

    const labelColor = '#9370DB'; // Medium Purple

    const dayMessage = formatMessage('Today:', thisDayChoice, labelColor, '#006994'); // Sea Blue
    const weekMessage = formatMessage('This Week:', thisWeekChoice, labelColor, '#FF4500'); // Deep Magenta Orange Shimmery Pink
    const monthMessage = formatMessage('This Month:', thisMonthChoice, labelColor, '#006400'); // Deep Emerald Green

    console.log(dayMessage);
    console.log(weekMessage);
    console.log(monthMessage);
};

formatSelfCareMessage();


