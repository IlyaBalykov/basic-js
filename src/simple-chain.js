const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (value === true) {
      this.chain.push(`( true )`)
    } else if(value === false) {
      this.chain.push(`( false )`)
    } else if (value === undefined) {
      this.chain.push(`( undefined )`)
    } else if (value === null) {
      this.chain.push(`( null )`)
    } else if (String(value) == "NaN") {
      this.chain.push(`( NaN )`)
    } else if (value === 0) {
      this.chain.push(`( 0 )`)
    } else if (!value) {
      this.chain.push(`( )`)
    } else {
      this.chain.push(`( ${String(value)} )`)
    }
    return this
  },
  removeLink(position) {
    if(this.chain[position-1]) {
      this.chain.splice(position - 1, 1)
    } else {
      this.chain = []
      throw new Error ('You can\'t remove incorrect link!');
    }
    return this
    },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let str = "";
    str += this.chain.join('~~')
    this.chain = []
    return str
  }
};

module.exports = {
  chainMaker
};
