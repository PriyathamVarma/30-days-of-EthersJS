
// This page is for connecting with metamask provider and getting balance of the wallet

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

// Function to get the balance of the wallet
const getBalance = async() =>{
    console.log("Getting the balance...");

    const provider = new ethers.providers.Web3Provider(window.ethereum); // Connecting to the metamask provider using window.ethereum object

    let accounts   = await provider.send("eth_requestAccounts", []);     // Requesting the accounts from the metamask provider
    const account  = accounts[0];                                        // Getting the first account from the accounts array
    document.getElementById('address').innerHTML = account;              // Displaying the balance of the wallet

    const balance = await provider.getBalance(account);                  // Getting the balance of the wallet 
    document.getElementById('balance').innerHTML = balance.toString();   // Displaying the balance of the wallet

}

