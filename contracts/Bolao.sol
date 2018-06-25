
contract Bolao {
    address public manager;
    address[] public pessoas;

    function Bolao() public {
        manager = msg.sender;
    }

    function entrar() public payable {
        require(msg.value > 0.1 ether);
        
        pessoas.push(msg.sender);
    }
    
    function random() private view returns(uint){
        return uint(keccak256(block.difficulty, now, players));
    }
    
    function obterGanhador() public {
        uint idx = random() % players.length;        
        players[idx].transfer(this.balance);
    }
}
