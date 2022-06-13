# Tangany-microservice

## Usage

In this microservice we are connecting with tangany vault to create a wallet in which we can store XDC network data. We have created methods to get your wallet data. Methods are -

- Wallet List
- Create Wallet
- Get Wallet
- Update Wallet
- Replace Wallet
- Delete Wallet
- Sign Payload
- Verify Signature
- Get Balance
- Make Async Wallet Transactions
- Eastimate Transaction Fee
- Get Monitors
- Get Status
- Get ERC20 Token Balance
- Get Wallet Based Smart Contract
- Get Wallet Based Smart Contract Method
- Get Ethereum Smart Contract
- Estimate Ethereum Smart Contract
- Call Smart Contract Method
- Call Nammed Smart Contract Method
- Get Wallet Transactions
- Create Monitor
- Get Smart Contract Events
- Get Transactions
- Get transaction Event

## Steps for local setup

- clone the repository in your local system
- run npm install : To install the dependencies
- run npm start : It will start your server on your local machine
- Configuration : config/env directory contains files to define environment specific variables
- Dependencies : Defined under package.json
- Database configuration : Defined under config/dbConnection
- Deployment instructions : Docker based deployment, Dockerfile is there in parent directory

## About env folder

This folder is having different type of variable like DB url, PORT, microservice url etc.

- development : Contain all variables which are used in development environment.
- local : Contain all variables which are used for local system.
- production : Contain all variables which are used for production environment.
- test : Contain all variables which are used for testing purpose.
