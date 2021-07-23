import {apiFailureMessage} from '../../common/constants'
import Config from'../../../config'
import HTTPService from "../../service/http-service";

export default class Manager {
    
    getWallet = async () => {
        const url =`https://api.tangany.com/v1/wallets?index=0&limit=10&sort=wallet`;

        const headers = {
                "Content-Type": "application/json",
                // "Access-Control-Allow-Origin": "*",
      "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
      "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
      "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
      "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91",
     
        }
        console.log("rsponsersponse",url,)

        let findObj ={}
        let rsponse = await HTTPService.executeHTTPRequest("GET", url, '', headers)
       console.log(rsponse,"rsponsersponse")
        return rsponse;
   
    }
    createWallet = async () => {
        const url =`https://api.tangany.com/v1/wallets`;

        const headers = {
                "Content-Type": "application/json",
                // "Access-Control-Allow-Origin": "*",
      "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
      "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
      "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
      "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91",
     
        }
        console.log("rsponsersponse",url,)

        let body ={
            "wallet": "test-wallet",
            "useHsm": false,
            "tags": [
                {"hasKYC": true}
            ]
        }
        let rsponse = await HTTPService.executeHTTPRequest("POST", url, body, headers)
       console.log(rsponse,"rsponsersponse")
        return rsponse;
   
    }
    getWalletName = async (params) => {
        const url =`https://api.tangany.com/v1/wallet/` + `${params.wallet}`;
        const headers = {
                "Content-Type": "application/json",
                // "Access-Control-Allow-Origin": "*",
      "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
      "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
      "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
      "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91",
        }
        console.log(url,"urlurlurl")
        let rsponse = await HTTPService.executeHTTPRequest("GET", url, '', headers)
       console.log(rsponse,"rsponsersponse")
        return rsponse;
    }
    deleteWallet = async (params) => {
        const url =`https://api.tangany.com/v1/wallet/` + `${params.wallet}`;
        const headers = {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "*",
            "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
            "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
            "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
            "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91"
    }
        let rsponse = await HTTPService.executeHTTPRequest("DELETE", url, '', headers)
       console.log(rsponse,"rsponsersponse")
        return rsponse;
    }
    verifySign = async (body,params) => {
        const url =`https://api.tangany.com/v1/wallet/` + `${params.wallet}` + `/verify`;
        const headers = {
            "Content-Type": "application/json",
            "tangany-ethereum-network": "https://rpc.apothem.network",
            "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
            "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
            "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
            "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91",
        }
        let data ={
            "payload": "Hello World",
            "signature": "MEYCIQCTZAxdTCaGTNn10ICLS+N1rL8p+9G4zDKiN4HeCRaGpQIhAPC0BBtnbW1ypXAjsLl6WehDQbZ507ZHWwCApBbI4GoP"
        
          }
        console.log(body,"bodybodybody")

        let rsponse = await HTTPService.executeHTTPRequest("POST", url, data, headers)
       console.log(rsponse,"rsponsersponse")
        return rsponse;
    }
    getWalletBalance = async (params) => {
        const url =`https://api.tangany.com/v1/eth/wallet/` + `${params.wallet}`;
        const headers = {
            "Content-Type": "application/json",
            "tangany-ethereum-network": "https://rpc.apothem.network",
            "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
            "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
            "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
            "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91",
        }
        console.log(url,"urlurlurl")
        let rsponse = await HTTPService.executeHTTPRequest("GET", url, '', headers)
       console.log(rsponse,"rsponsersponse")
        return rsponse;
    }
    signPayload = async (body,params) => {
        const url =`https://api.tangany.com/v1/wallet/` + `${params.wallet}` + `/sign`;
        console.log(body,"body")
        const headers = {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "*",
  "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
  "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
  "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
  "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91",
 
    }
    let bodyy ={
        "payload": "Hello World"
      }
        let rsponse = await HTTPService.executeHTTPRequest("POST", url, bodyy, headers)
       console.log(rsponse,"rsponsersponse")
        return rsponse;
    }
    verifySign = async (body,params) => {
        const url =`https://api.tangany.com/v1/wallet/` + `${params.wallet}` + `/verify`;
        const headers = {
            "Content-Type": "application/json",
            "tangany-ethereum-network": "https://rpc.apothem.network",
            "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
            "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
            "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
            "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91",
        }
        let data ={
            "payload": "Hello World",
            "signature": "MEYCIQCTZAxdTCaGTNn10ICLS+N1rL8p+9G4zDKiN4HeCRaGpQIhAPC0BBtnbW1ypXAjsLl6WehDQbZ507ZHWwCApBbI4GoP"
        
          }
        console.log(body,"bodybodybody")

        let rsponse = await HTTPService.executeHTTPRequest("POST", url, data, headers)
       console.log(rsponse,"rsponsersponse")
        return rsponse;
    }
    updateWallet = async (body,params) => {
        const url =`https://api.tangany.com/v1/wallet/` + `${params.wallet}` ;
        const headers = {
            "Content-Type": "application/json",
            "tangany-ethereum-network": "https://rpc.apothem.network",
            "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
            "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
            "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
            "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91",
        }
        let rsponse = await HTTPService.executeHTTPRequest("PATCH", url, body, headers)
       console.log(rsponse,"rsponsersponse")
        return rsponse;
    }
    replaceWallet = async (body,params) => {
        const url =`https://api.tangany.com/v1/wallet/` + `${params.wallet}`;
        const headers = {
            "Content-Type": "application/json",
            "tangany-ethereum-network": "https://rpc.apothem.network",
            "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
            "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
            "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
            "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91",
        }
        let data ={
            "useHsm": true,
            "tags": []
        }
        let rsponse = await HTTPService.executeHTTPRequest("PUT", url, data, headers)
       console.log(rsponse,"rsponsersponse")
        return rsponse;
    }   
    makeAsyncWalletTransactions = async (body,params) => {
        const url =`https://api.tangany.com/v1/eth/wallet/` + `${params.wallet}` + `/send-async`;
        const headers = {
            "Content-Type": "application/json",
            "tangany-ethereum-network": "https://rpc.apothem.network",
            "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
            "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
            "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
            "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91",
        }
        let bodyy={
            "amount": "0.000124",
            "to": "0xab174eAb6761d6525A8A3a2E065CA042e74D0025",
            "data": "0xf00ba7"
        }
        let rsponse = await HTTPService.executeHTTPRequest("POST", url, bodyy, headers)
       console.log(rsponse,"rsponsersponse")
        return rsponse;
    }   
    
    eastimateTransactionFee = async (body,params) => {
        const url =`https://api.tangany.com/v1/eth/wallet/` + `${params.wallet}` + `/estimate-fee`;
        const headers = {
            "Content-Type": "application/json",
            "tangany-ethereum-network": "https://rpc.apothem.network",
            "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
            "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
            "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
            "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91",
        }
        let data={
            "amount": "0.00012",
            "to": "0xab174eAb6761d6525A8A3a2E065CA042e74D0025",
            "data": "0xf00ba7"
        }
        let rsponse = await HTTPService.executeHTTPRequest("POST", url, data, headers)
       console.log(rsponse,"rsponsersponse")
        return rsponse;
    }  

    // {{baseUrl}}/eth/wallet/:wallet/monitors?index=0&limit=10
    getMonitors = async (params) => {
        const url =`https://api.tangany.com/v1/eth/wallet/` + `${params.wallet}` + `/monitors`;
        const headers = {
            "Content-Type": "application/json",
            "tangany-ethereum-network": "https://rpc.apothem.network",
            "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
            "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
            "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
            "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91",
        }
        let rsponse = await HTTPService.executeHTTPRequest("GET", url, '', headers)
       console.log(rsponse,"rsponsersponse")
        return rsponse;
    }  
    getStatus = async (params) => {
        let hash ="0xf3a7187b6bdb284cca6d15e95793b8bc095e9c4f5ec587c31df85105f21900fb"
        // const url =`https://api.tangany.com/v1/eth/transaction/` + `${params.hash}`;
        const url =`https://api.tangany.com/v1/eth/transaction/` + `${hash}`;

        const headers = {
            "Content-Type": "application/json",
            "tangany-ethereum-network": "https://rpc.apothem.network",
            "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
            "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
            "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
            "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91",
        }
        let rsponse = await HTTPService.executeHTTPRequest("GET", url, '', headers)
        return rsponse;
    }
    getERC20TokenBalance = async (params) => {
        let token="0xC32AE45504Ee9482db99CfA21066A59E877Bc0e6"
        const url =`https://api.tangany.com/v1/eth/erc20/` + `${token}`+ `/` + `${params.wallet}`;
        // const url =`https://api.tangany.com/v1/eth/erc20/` + `${params.token}`+ `/` + `${params.wallet}`;
        const headers = {
            "Content-Type": "application/json",
            "tangany-ethereum-network": "https://rpc.apothem.network",
            "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
            "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
            "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
            "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91",
        }
        let rsponse = await HTTPService.executeHTTPRequest("GET", url, '', headers)
        return rsponse;
    }
    walletBasedSmartContract = async (params) => {
        let contract="0xC32AE45504Ee9482db99CfA21066A59E877Bc0e6";
        let walletName= "my-wallet";
        let method="balanceOf";
        const url =`https://api.tangany.com/v1/eth/contract/` + `${contract}`+ `/` + `${walletName}` + `/call/` + `${method}`;
        // const url =`https://api.tangany.com/v1/eth/contract/` + `${params.contract}`+ `/` + `${params.wallet}` + `/call/` + `${params.wallet}`;
        let bodyy ={
            "function": "getVaultsWithTime()",
            "inputs": [],
            "outputs": [
                "address[]",
                "uint"
            ]
        }
        const headers = {
            "Content-Type": "application/json",
            "tangany-ethereum-network": "https://rpc.apothem.network",
            "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
            "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
            "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
            "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91",
        }
        let rsponse = await HTTPService.executeHTTPRequest("GET", url, '', headers)
        return rsponse;
    }
    walletBasedSmartContractMethod = async (params) => {
        let contract="0xC32AE45504Ee9482db99CfA21066A59E877Bc0e6";
        let method="balanceOf"
        const url =`https://api.tangany.com/v1/eth/contract/` + `${contract}`+ `/`  + `/call/` + `${method}`;
        // const url =`https://api.tangany.com/v1/eth/contract/` + `${params.contract}`+ `/` + `${params.wallet}` + `/call/` + `${params.wallet}`;
        
        const headers = {
            "Content-Type": "application/json",
            "tangany-ethereum-network": "https://rpc.apothem.network",
            "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
            "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
            "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
            "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91",
        }
        let rsponse = await HTTPService.executeHTTPRequest("GET", url, '', headers)
        return rsponse;
    }
    getEthereumSmarctContract = async (params) => {
        let contract="0xC32AE45504Ee9482db99CfA21066A59E877Bc0e6";
        let wallet= "my-wallet"
        const url =`https://api.tangany.com/v1/eth/contract/` + `${contract}`+ `/` + `${params.wallet}` + `/send-async` ;
        const headers = {
            // "Content-Type": "application/json",
            "tangany-ethereum-network": "https://rpc.apothem.network",
            "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
            "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
            "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
            "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91",
        }
        let bpdy ={
            "function": "mint(address,uint256)",
            "inputs": [
                "0xab174eAb6761d6525A8A3a2E065CA042e74D0025",
                "10000000000000"
            ]
        }
        
            let rsponse = await HTTPService.executeHTTPRequest("POST", url, bpdy, headers)
       console.log(rsponse,"rsponsersponse")
        return rsponse;
    }
    eastimateEthSmartContract = async (params) => {
        let contract="0xC32AE45504Ee9482db99CfA21066A59E877Bc0e6";
        let wallet= "my-wallet"
        const url =`https://api.tangany.com/v1/eth/contract/` + `${contract}`+ `/` + `${params.wallet}` + `/estimate-fee` ;
        const headers = {
            "Content-Type": "application/json",
            "tangany-ethereum-network": "https://rpc.apothem.network",
            "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
            "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
            "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
            "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91",
        }
        let body={
            "function": "approve(address,uint256)",
            "inputs": [
                "0xab174eAb6761d6525A8A3a2E065CA042e74D0025",
                "0x0"
            ]
        }
        let rsponse = await HTTPService.executeHTTPRequest("POST", url, body, headers)
       console.log(rsponse,"rsponsersponse")
        return rsponse;
    }
    // {{baseUrl}}/eth/contract/:contract/call
    // {{baseUrl}}/eth/contract/:contract/call/:method?type=string
    callSmartContractMethod = async (params) => {
        const url =`https://api.tangany.com/v1/eth/contract/` + `${params.contract}` + `/call` ;
        const headers = {
            "Content-Type": "application/json",
            "tangany-ethereum-network": "https://rpc.apothem.network",
            "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
            "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
            "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
            "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91",
        }
        let body={
            "function": "callFlattenAddressArray(address[][2])",
            "inputs": [
                [
                    [
                        "0x0120000000000000000000000000000000000000",
                        "0x0340000000000000000000000000000000000000"
                    ],
                    [
                        "0x1330000000000000000000000000000000000000",
                        "0x1440000000000000000000000000000000000000",
                        "0x1550000000000000000000000000000000000000"
                    ]
                ]
            ],
            "outputs": [
                "address[]"
            ]
        }
        let rsponse = await HTTPService.executeHTTPRequest("POST", url, body, headers)
       console.log(rsponse,"rsponsersponse")
        return rsponse;
    }
    callNamedSmartContractMethod = async (params) => {
        let contract="0xC32AE45504Ee9482db99CfA21066A59E877Bc0e6";
        let method= "symbol"
        const url =`https://api.tangany.com/v1/eth/contract/` + `${params.contract}` + `/call/`+`${method}` ;
        const headers = {
            "Content-Type": "application/json",
            "tangany-ethereum-network": "https://rpc.apothem.network",
            "tangany-client-id":"35af20c2-4435-4918-afe5-826e80c84bef",
            "tangany-client-secret":"AFO41oKOiB.nzNTbdhEe_7kZ~AOQ7re0g~",
            "tangany-vault-url":"https://cw-keyv-demo-xinfins.vault.azure.net",
            "tangany-subscription":"7406fd8b6ca24eeda240a20a9b9a5a91",
        }
        
        let rsponse = await HTTPService.executeHTTPRequest("GET", url, '', headers)
        return rsponse;
    }
}

