const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

    function reverseWords(statement)
    {
        let words = statement.split(' ');
        let reversed = words.map(word=> word.split('').reverse().join('')).join(' ');
        return reversed;
    }

    rl.question('Enter a sentence:',(statement)=>{

        console.log(reverseWords(statement));
        rl.close();
    });
