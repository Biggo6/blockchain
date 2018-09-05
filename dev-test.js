const Block = require('./block')

const fooBlock = Block.mineBlock(Block.genesis(), 'for');

console.log(fooBlock.toString())