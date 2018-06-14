const asset = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

class Bolo {
   tipo(){
     return 'pote';
   }
  
  sabor(){
    return 'kitkat'
  }
}

describe('Teste do destemido bolo de pot3', () => {
  it('tem que ser bolot de pote', () => {
    const bolo = new Bolo();
    assert.equal(bolo.tipo(), 'pote');
  });
});
