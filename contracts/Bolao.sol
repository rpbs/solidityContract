
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
}
