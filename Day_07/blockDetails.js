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

const enterAccountAddress = async() =>{

    let latest = document.getElementById("numb").value;
    const account  = latest;                                        // Getting the first account from the accounts array
    document.getElementById('account').innerHTML = account;              // Displaying the account on the page

    // Get the details of the user using provider
    const balance = await provider.getBalance(account);
    document.getElementById('balance').innerHTML = balance; 

    // This gets the transactions of the provider
    const Txns = await provider.getTransactionCount(account);
    document.getElementById('Txns').innerHTML = Txns;
    
    // Get the SIGNER ****************************
    const signer = await provider.getSigner();
    console.log(signer);

    // Get the chain ID of the network
    const chainId = await signer.getChainId();
    document.getElementById('chainId').innerHTML = chainId;

    // Get the gas price
    const gasPrice = await signer.getGasPrice();
    document.getElementById('gasPrice').innerHTML = gasPrice;

}

