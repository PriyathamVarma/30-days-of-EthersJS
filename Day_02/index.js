// This file is about getting the wallet address and balance
// Creating a node server
// IMPORTS

// Constants
const { ethers } = require("ethers");
// Get environment variables from .env file
require("dotenv").config({
    path: "../.env", // Specify path according to the .env file location
});


// Environment variables
// Getting the public key from the .env file
const publicKey = process.env.PUBLIC_KEY;
// Getting the private key from the .env file
const privateKey = process.env.PRIVATE_KEY;
// Getting the alchemy key from the .env file
const alchemyKey = process.env.ALCHEMY_KEY;
// Getting the alchemy api key from the .env file
const alchemyApi = process.env.ALCHEMY_API;


// Get a provider --> Alchemy
// Provider helps to interact with the blockchain
const provider = new ethers.providers.AlchemyProvider(  "maticmum" , alchemyApi  );

console.log(provider);

// Get a wallet --> Wallet is a wrapper around a private key
// It helps to interact with the blockchain
// Get balance of the wallet
// Get the wallet address

console.log( provider.getBalance(publicKey));






