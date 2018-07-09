const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const { interface, bytecode } = require('../compile');

// beforeEach(async () => {
//   console.log('####################################');
//   console.log('####################################');
//   accounts = await web3.eth.getAccounts();
//   console.log(accounts);
//   console.log('####################################');
//   console.log('####################################');

//  /* bolao = await web3.eth.Contract(JSON.parse(interface))
//     .deploy({ data: bytecode })
//     .send({ from: accounts[0], gas: 1000000 ]);*/
// });
// /*
// describe('Testes do bolão', () => {
//   it('Deploy o contrato', () => {
//     assert.ok(bolao.option.address);
//   });

//   it('só permite uma pessoa entrar no bolão', () => {
//     await bolao.methods.enter().send({
//       from: accounts[0],
//       value: web3.utils.toWei('0.02', 'ether')
//     });    
//   });

//   it('tem que ter pessoas no bolão', () => {
//     const pessoas = await.bolao.methods.getPlayers().call({
//       from: accounts[0]
//     });

//     assert.equal(accounts[0], pessoas[0]);
//     assert.equal(1, pessoas.length);
//   });
// });
// */