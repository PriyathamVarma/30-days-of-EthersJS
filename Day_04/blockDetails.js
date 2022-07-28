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

const enterBlockNumber = async() =>{
    let latest = document.getElementById("numb").value;                 // Get the block number of users choice
    let latestBlockNumber = parseInt(latest);                           // Convert the block number to integer
    console.log(typeof(latestBlockNumber));

    const lastBlock = await provider.getBlock("latest");
    console.log(lastBlock.number);

    if(latestBlockNumber <= lastBlock.number){

        const block = await provider.getBlock(latestBlockNumber);           // Getting the latest block
        
        document.getElementById('number').innerHTML = latestBlockNumber;      // Displaying the difficulty on the page
        document.getElementById('latestBlock').innerHTML = lastBlock.number;

        const difficulty = block.difficulty;                               // Getting the difficulty of the block
        document.getElementById('difficulty').innerHTML = difficulty;      // Displaying the difficulty on the page

        const hash = block.hash;                                           // Getting the hash of the block
        document.getElementById('hash').innerHTML = hash;                 // Displaying the hash on the page

        const nonce = block.nonce;                                         // Getting the nonce of the block
        document.getElementById('nonce').innerHTML = nonce;               // Displaying the nonce on the page

        const parentHash = block.parentHash;                               // Getting the parent hash of the block
        document.getElementById('parentHash').innerHTML = parentHash;     // Displaying the parent hash on the page

        const timeStamp = block.timestamp;                                 // Getting the timestamp of the block
        document.getElementById('timeStamp').innerHTML = timeStamp;       // Displaying the timestamp on the page

        document.getElementById("numb").value = "";

    }
    else{
        alert("Block number is greater than the latest block");
        document.getElementById("numb").value = "";
    }

    

}
