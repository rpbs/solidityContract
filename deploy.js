const HDWallet = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode} = require('./compile');

// Tendo acesso a uma account...
const provider = new HDWallet(
    'six stairs become melody steel thunder truck march grunt roof toast steel',
    'https://rinkeby.infura.io/9NWZODUWUqTOVKy6Oaws'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('tentando deployar a partir da conta', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode })
      .send({ from: accounts[0], gas: 1000000 });    

      console.log('Contrato  no endereço', result.options.address);
}

deploy();
