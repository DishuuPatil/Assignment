
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function sortInDescending(array)
{
    return array.sort((a,b) => b-a);
}

rl.question('Enter number of elements in the array:', (numOfElements)=>{
    let inputArray = [];
    let count=0;

    const getInput = ()=>{
        if(count<numOfElements)
        {
            rl.question(`Enter element ${count + 1}: `,(input)=>{
                inputArray.push(parseInt(input));
                count++;
                getInput();
            });
        }else{
            rl.close();
            let sortedArray = sortInDescending(inputArray);
            console.log(sortedArray);
        }
    };
    getInput();
});

