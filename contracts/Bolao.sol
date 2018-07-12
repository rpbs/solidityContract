contract Bolao {
    address public manager;
    address[] public pessoas;    
    address public vencedor;

    function Bolao() public {
        manager = msg.sender;
    }

    function entrar() public payable {
        require(msg.value > 0.1 ether);
        
        pessoas.push(msg.sender);
    }
    
    function random() private view returns(uint){
        return uint(keccak256(block.difficulty, now, pessoas));
    }
    
    function obterGanhador() public {
        require(manager == msg.sender);
        uint idx = random() % pessoas.length;        
        pessoas[idx].transfer(this.balance);
        vencedor = pessoas[idx];
        pessoas = new address[](0);                
    }

    function getPessoas() public view returns (address[]) {
        return pessoas;
    }
}
