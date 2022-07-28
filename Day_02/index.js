// This file is about getting the wallet address and balance
// Creating a node server
// IMPORTS

// Constants
//const { AlchemyProvider } = require("@ethersproject/providers");
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







