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
    }

    struct User {
        string name;
        bool voted;
    }

    mapping (address => Candidate) public candidates;
    mapping (address => User) public users;

    constructor() {
        owner = msg.sender;
    }

     function createBallot(string memory _varient,string memory _position,string memory _state, string memory _hash, string memory _status,string memory _date) public returns(uint256) {
        require(msg.sender == owner, "Not the chairperson");
        address[] memory dummy;
        ballots.push(Ballot(ids.current(), _varient, _position,_state, _hash, _status,dummy,_date));
        ids.increment();
        return 1;
    }

    function addCandidate(uint256 _index, address candidate) public {
        ballots[_index].c.push(candidate);
    }


    function getBallots() view public returns (Ballot[] memory) {
        return ballots;
    }

    function candidateRegister(string memory _name,string memory _hash) public payable {
        // require(bytes(user[msg.sender]).length == 0, "Already registered!");
        Candidate memory newCandidate = Candidate(_name,0,_hash);
        candidates[msg.sender] = newCandidate;
    }

    function userRegister(string memory _name) public payable {
        // require(bytes(user[msg.sender]).length == 0, "Already registered!");
        
        User memory newUser = User(_name,false);
        users[msg.sender] = newUser;
    }

    function voteSimple(address _add) public returns (uint256) {
        require(users[msg.sender].voted == false, "Already voted");
        candidates[_add].votes++;
        return candidates[_add].votes;
    }

    function voteApproval(address[] memory _adds) public {
        require(users[msg.sender].voted == false, "Already voted");
        for(uint i=0;i<_adds.length;i++) {
            candidates[_adds[i]].votes++;
        }
    }

    function voteRank(address[] memory _adds) public {
        require(users[msg.sender].voted == false, "Already voted");
        for(uint i=0;i<_adds.length;i++) {
            candidates[_adds[i]].votes = candidates[_adds[i]].votes + (_adds.length-i);
        }
    }

    function result(address[] memory _adds) public returns(address[] memory) {
        sort(_adds);
        return _adds;
    }



    modifier onlyOwner() {
        require (msg.sender == owner, "only owner");
        _;
    }


    function getCandidate(address _add) view public returns (Candidate memory) {
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
        while (candidates[arr[uint(i)]].votes < candidates[pivot].votes) i++;
        while (candidates[pivot].votes < candidates[arr[uint(j)]].votes) j--;
        if (i <= j) {
            (candidates[arr[uint(i)]].votes, candidates[arr[uint(j)]].votes) = (candidates[arr[uint(j)]].votes, candidates[arr[uint(i)]].votes);
            i++;
            j--;
        }
    }
    if (left < j)
        quickSort(arr, left, j);
    if (i < right)
        quickSort(arr, i, right);
}


    function sort(address[] memory data) public returns (address[] memory) {
        quickSort(data, int(0), int(data.length - 1));
        return data;
    }

}