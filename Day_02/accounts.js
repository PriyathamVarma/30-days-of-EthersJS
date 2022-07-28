
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

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const address = await provider.getSigner();
    const balance = await address.getBalance();
    console.log(address);
    console.log(balance);
}