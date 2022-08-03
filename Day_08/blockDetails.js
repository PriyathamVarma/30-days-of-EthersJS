// This page is for connecting with metamask provider and getting block details

const provider = new ethers.providers.Web3Provider(window.ethereum); // Connecting to the metamask provider using window.ethereum object

// Function to connect with metamask provider
const connect = async() =>{
    console.log("Connecting to the blockchain...");

    const enabled = await window.ethereum.enable();

    if(enabled){
        console.log("Connected to the blockchain");
    }
    else{
        console.log("Failed to connect to the blockchain");
    }

}

// Get contract details
const getContractAddress = async() =>{
        // We need to get address, abi, signer/provider from the contract

        // get the provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        document.getElementById('provider').innerHTML = provider.connection.url;

        // get the signer
        const signer = provider.getSigner();
        console.log(signer._isSigner);
        document.getElementById('signer').innerHTML = signer._isSigner;

        // Get the contract address
        const contractAddress = "0x67194ACaCA9e49540662D17AF7C012dF709047E4";
        document.getElementById('contract').innerHTML = contractAddress;

        // Get the contract ABI
        const ABI = [
            {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "author",
                    "type": "address"
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "postId",
                    "type": "uint256"
                  },
                  {
                    "indexed": false,
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                  }
                ],
                "name": "NewPost",
                "type": "event"
              },
              {
                "inputs": [
                  {
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "content",
                    "type": "string"
                  }
                ],
                "name": "createPost",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "postId",
                    "type": "uint256"
                  }
                ],
                "name": "getPostById",
                "outputs": [
                  {
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "content",
                    "type": "string"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "author",
                    "type": "address"
                  }
                ],
                "name": "getPostIdsByAuthor",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "latestPostId",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "postId",
                    "type": "uint256"
                  },
                  {
                    "internalType": "string",
                    "name": "content",
                    "type": "string"
                  }
                ],
                "name": "modifyPostContent",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "postId",
                    "type": "uint256"
                  },
                  {
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                  }
                ],
                "name": "modifyPostTitle",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "name": "posts",
                "outputs": [
                  {
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "content",
                    "type": "string"
                  },
                  {
                    "internalType": "address",
                    "name": "author",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "created",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "string",
                    "name": "bio",
                    "type": "string"
                  }
                ],
                "name": "updateBio",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "string",
                    "name": "username",
                    "type": "string"
                  }
                ],
                "name": "updateUsername",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "name": "users",
                "outputs": [
                  {
                    "internalType": "string",
                    "name": "username",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "bio",
                    "type": "string"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              }
        ];

                  

        // Getting the contract details
        const contract = new ethers.Contract( contractAddress, ABI, signer );
        console.log(contract);

    
}

