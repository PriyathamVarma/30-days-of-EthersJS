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

const getLatestBlock = async() =>{

    
    let accounts   = await provider.send("eth_requestAccounts", []);     // Requesting the accounts from the metamask provider
    const account  = accounts[0];                                        // Getting the first account from the accounts array
    document.getElementById('account').innerHTML = account;              // Displaying the account on the page

    const latestBlock = await provider.getBlockNumber();                // Getting the latest block number
    document.getElementById('latestBlock').innerHTML = latestBlock;     // Displaying the latest block number on the page
    console.log(latestBlock);

}

const getLatestBlockDetails = async() =>{

    const block = await provider.getBlock("latest");                    // Getting the latest block
    console.log(block);

    const difficulty = block.difficulty;                               // Getting the difficulty of the block
    document.getElementById('difficulty').innerHTML = difficulty;      // Displaying the difficulty on the page

    const hash = block.hash;                                           // Getting the hash of the block
    document.getElementById('hash').innerHTML = hash;                 // Displaying the hash on the page

}
