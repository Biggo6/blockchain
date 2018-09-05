const Blockchain = require('./blockchain');


const bc = new Blockchain();

for(let i=0; i<10; i++){
    const block = bc.addBlock(`foo ${i}`);
    console.log(block.toString());
}