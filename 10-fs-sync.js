const {readFileSync , writeFileSync, write} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/first.txt','utf8')
//console.log(first,second);

writeFileSync(
    './content/result-sync.txt',
    `Here is he result: ${first}, ${second}`,
    {flag : 'a'}
    )
    console.log('done with this task');
    console.log('starting the next one');
    //this is synchronous hence the program order is mantained