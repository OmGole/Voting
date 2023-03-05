pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/utils/Counters.sol";

contract Voting {
    address public owner;
    Ballot[] public ballots;
    using Counters for Counters.Counter;
    Counters.Counter private ids;

    // enum Varient { normal, approval, ranked };

    struct Ballot {
        uint256 id;
        string varient;
        string position;
        string state;
        string imageHash;
        string status;
        address[] c;
        string end;
    }

    struct Candidate {
        string name;
        uint256 votes;
        string hash;
        string role;
    }

    struct User {
        string name;
        bool voted;
        string role;
    }

    mapping(address => Candidate) public candidates;
    mapping(address => User) public users;

    constructor() {
        owner = msg.sender;
    }

    function createBallot(
        string memory _varient,
        string memory _position,
        string memory _state,
        string memory _hash,
        string memory _status,
        string memory _date
    ) public returns (uint256) {
        // require(msg.sender == owner, "Not the chairperson");
        address[] memory dummy;
        ballots.push(
            Ballot(
                ids.current(),
                _varient,
                _position,
                _state,
                _hash,
                _status,
                dummy,
                _date
            )
        );
        ids.increment();
        return 1;
    }

    function addCandidate(uint256 _index) public {
        ballots[_index].c.push(msg.sender);
    }

    function getBallots() public view returns (Ballot[] memory) {
        return ballots;
    }

    function candidateRegister(
        string memory _name,
        string memory _hash
    ) public payable {
        // require(bytes(user[msg.sender]).length == 0, "Already registered!");
        Candidate memory newCandidate = Candidate(_name, 0, _hash, "candidate");
        candidates[msg.sender] = newCandidate;
    }

    function userRegister(string memory _name) public payable {
        // require(bytes(user[msg.sender]).length == 0, "Already registered!");

        User memory newUser = User(_name, false, "user");
        users[msg.sender] = newUser;
    }

    function userLogin() public view returns (User memory) {
        // require(bytes(artist[msg.sender]).length != 0, "No User Found, Please Register");
        return users[msg.sender];
    }

    function candidateLogin() public view returns (Candidate memory) {
        // require(bytes(artist[msg.sender]).length != 0, "No User Found, Please Register");
        return candidates[msg.sender];
    }

    function voteSimple(address _add) public returns (uint256) {
        require(users[msg.sender].voted == false, "Already voted");
        candidates[_add].votes++;
        users[msg.sender].voted = true;
        return candidates[_add].votes;
    }

    function voteApproval(address[] memory _adds) public {
        require(users[msg.sender].voted == false, "Already voted");
        for (uint i = 0; i < _adds.length; i++) {
            candidates[_adds[i]].votes++;
        }
        users[msg.sender].voted = true;
    }

    function voteRank(address[] memory _adds) public {
        require(users[msg.sender].voted == false, "Already voted");
        for (uint i = 0; i < _adds.length; i++) {
            candidates[_adds[i]].votes =
                candidates[_adds[i]].votes +
                (_adds.length - i);
        }
        users[msg.sender].voted = true;
    }

    function result(address[] memory _adds) public returns (address[] memory) {
        sort(_adds);
        return _adds;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "only owner");
        _;
    }

    function getCandidate(address _add) public view returns (Candidate memory) {
        return candidates[_add];
    }

    function getid() public view returns (uint256) {
        return ids.current();
    }

    function quickSort(address[] memory arr, int left, int right) public {
        int i = left;
        int j = right;
        if (i == j) return;
        address pivot = arr[uint(left + (right - left) / 2)];
        while (i <= j) {
            while (candidates[arr[uint(i)]].votes < candidates[pivot].votes)
                i++;
            while (candidates[pivot].votes < candidates[arr[uint(j)]].votes)
                j--;
            if (i <= j) {
                (
                    candidates[arr[uint(i)]].votes,
                    candidates[arr[uint(j)]].votes
                ) = (
                    candidates[arr[uint(j)]].votes,
                    candidates[arr[uint(i)]].votes
                );
                i++;
                j--;
            }
        }
        if (left < j) quickSort(arr, left, j);
        if (i < right) quickSort(arr, i, right);
    }

    function sort(address[] memory data) public returns (address[] memory) {
        quickSort(data, int(0), int(data.length - 1));
        return data;
    }
}
