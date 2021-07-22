/**
 * Created by AyushK on 18/09/20.
 */

import CategoryModule from "../app/modules/categories";


module.exports = (app) => {
    app.get('/', (req, res) => res.send(stringConstants.SERVICE_STATUS_HTML));

    /**
     * route definition
     */
   
    app.get("/wallets", new CategoryModule().getWallet);
    app.post("/wallets", new CategoryModule().createWallet);
    app.get("/wallet/:wallet", new CategoryModule().getWalletName);
    app.put("/update-wallet/:wallet", new CategoryModule().updateWallet);
    app.put("/replace-wallet/:wallet", new CategoryModule().replaceWallet);
    app.delete("/delete-wallet/:wallet", new CategoryModule().deleteWallet);

    app.get("/wallet-balance/:wallet", new CategoryModule().getWalletBalance);
    app.post("/sign-payload/:wallet", new CategoryModule().signPayload);
    app.post("/verify-sign/:wallet", new CategoryModule().verifySign);
   
    app.post("/make-async-wallet-transaction/:wallet", new CategoryModule().makeAsyncWalletTransactions);
    app.post("/estimate-transaction-fee/:wallet", new CategoryModule().eastimateTransactionFee);
    app.get("/monitors/:wallet", new CategoryModule().getMonitors);
    app.get("/get-status", new CategoryModule().getStatus);

    app.get("/erc20-token-balance/:token/:wallet", new CategoryModule().getERC20TokenBalance);

    app.get("/wallet-based-smart-contract/:contract/:wallet", new CategoryModule().walletBasedSmartContract);
    app.get("/wallet-based-smart-contract-method/:contract/:wallet", new CategoryModule().walletBasedSmartContractMethod);

    
    app.get("/ethereum-smart-contract/:contract/:wallet", new CategoryModule().getEthereumSmarctContract);
    app.get("/estimmate-eth-smart-contract/:contract/:wallet", new CategoryModule().eastimateEthSmartContract);
    app.get("/call-smart-contract/:contract", new CategoryModule().callSmartContractMethod);
    app.get("/call-nammed-smart-contract/:contract", new CategoryModule().callNamedSmartContractMethod);


    
    
    

};
