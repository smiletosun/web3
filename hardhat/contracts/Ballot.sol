//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Ballout {
    struct Voter {
        uint weight;
        bool voted;
        uint vote;
    }

    struct Proposal {
        string name;
        uint voteCount;
    }

    address chariman;

    mapping(address => Voter) voters;

    Proposal[] public proposals;

    constructor(string[] memory proposalNames) {
        chariman = msg.sender;
        voters[chariman].weight = 1;

        for (uint i = 0; i < proposalNames.length; i++) {
            proposals[i] = Proposal(proposalNames[i], 0);
        }
    }

    function vote(uint proposal) external {
        Voter storage voter = voters[msg.sender];
        require(!voter.voted, unicode"已经投票了");
        voter.voted = true;
        voter.vote = proposal;
        proposals[proposal].voteCount += voter.weight;
    }

    function giveRightToVote(address _voter) external {
        require(chariman == msg.sender, unicode"只有主席才有权分配投票权利");
        require(!voters[_voter].voted, unicode"已经投票了");
        voters[_voter].weight = 1;
    }

    function winningProposal() internal view returns (uint) {
        uint winnerVoteCount = 0;
        uint winnerIdx = 0;

        for (uint p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winnerVoteCount) {
                winnerVoteCount = proposals[p].voteCount;
                winnerIdx = p;
            }
        }

        return winnerIdx;
    }

    function winnerName() public view returns (string memory) {
        return proposals[winningProposal()].name;
    }

    function getUser() public view returns (Voter memory) {
        return voters[msg.sender];
    }
}
