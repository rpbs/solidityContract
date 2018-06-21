contract Bolao {
    address public manager;
    address[] public pessoas;

    function Bolao() public {
        manager = msg.sender;
    }

    function entrar() public payable {
        pessoas.push(msg.sender);
    }
}