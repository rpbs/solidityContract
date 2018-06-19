const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

const VALOR_INICIAL = 'aopa';

beforeEach( async () =>{
  accounts = await web3.eth.getAccounts();

  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [VALOR_INICIAL] })
    .send({ from: accounts[0], gas: 1000000 });
});

describe('Inbox', () => {
  it('DEPLOY CONTRATO', () => {
    assert.ok(inbox.options.address)
  });

  it('tem valor default', async () => {
    const message = await inbox.methods.message().call();
    assert.ok(message);
    assert.equal(message, VALOR_INICIAL)
  });

  it('modificar valor', async() => {
    await inbox.methods.setMessage('OPA').send({
      from: accounts[0]
    });
    let msg = await inbox.methods.message().call();
    assert.ok(msg);
    assert.equal(msg, 'OPA');
  });
});