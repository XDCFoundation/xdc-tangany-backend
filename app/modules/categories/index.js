import Utils from "../../utils";
import {apiFailureMessage, apiSuccessMessage, httpConstants} from "../../common/constants";
import BLManager from "../categories/manager";

export default class Index {
    
    async getWallet(req, res) {
        let response = await new BLManager().getWallet().catch(err => {
            console.log(response)
            return Utils.response(res, {err}, apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        });
        if (!response)
            return Utils.response(res, {}, apiFailureMessage.NOT_FOUND, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);

        return Utils.response(res, JSON.parse(response), apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);

    }
    async createWallet(req, res) {
        let response = await new BLManager().createWallet().catch(err => {
            console.log(response)
            return Utils.response(res, {err}, apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        });
        if (!response)
            return Utils.response(res, {}, apiFailureMessage.NOT_FOUND, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);

        return Utils.response(res, response, apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);

    }
    async getWalletName(req, res) {
        let response = await new BLManager().getWalletName(req.params).catch(err => {
            console.log(response)
            return Utils.response(res, {err}, apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        });
        if (!response)
            return Utils.response(res, {}, apiFailureMessage.NOT_FOUND, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);

        return Utils.response(res, JSON.parse(response), apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);

    }
    async getWalletBalance(req, res) {
        let response = await new BLManager().getWalletBalance(req.params).catch(err => {
            console.log(response)
            return Utils.response(res, {err}, apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        });
        if (!response)
            return Utils.response(res, {}, apiFailureMessage.NOT_FOUND, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);

        return Utils.response(res, JSON.parse(response), apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);

    }
    async signPayload(req, res) {
        console.log(req.body,req.params,"params")
        let response = await new BLManager().signPayload(req.body,req.params).catch(err => {
            return Utils.response(res, {err}, apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        });
        if (!response)
            return Utils.response(res, {}, apiFailureMessage.NOT_FOUND, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);

        return Utils.response(res, response, apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);

    }   
    
    async deleteWallet(req, res) {
        let response = await new BLManager().deleteWallet(req.params).catch(err => {
            return Utils.response(res, {err}, apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        });
        if (!response)
            return Utils.response(res, {}, apiFailureMessage.NOT_FOUND, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);

        return Utils.response(res, JSON.parse(response), apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);

    }   
    async verifySign(req, res) {
        console.log(req,req.params)
        let response = await new BLManager().verifySign(req.body,req.params).catch(err => {
            console.log(response)
            return Utils.response(res, {err}, apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        });
        if (!response)
            return Utils.response(res, {}, apiFailureMessage.NOT_FOUND, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);

        return Utils.response(res, response, apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);

    }  
    async updateWallet(req, res) {
        console.log(req.body,req.params)
        let response = await new BLManager().updateWallet(req.body,req.params).catch(err => {
            console.log(response)
            return Utils.response(res, {err}, apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        });
        if (!response)
            return Utils.response(res, {}, apiFailureMessage.NOT_FOUND, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);

        return Utils.response(res, response, apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);

    }  
    async replaceWallet(req, res) {
        console.log(req.body,req.params)
        let response = await new BLManager().replaceWallet(req.body,req.params).catch(err => {
            console.log(response)
            return Utils.response(res, {err}, apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        });
        if (!response)
            return Utils.response(res, {}, apiFailureMessage.NOT_FOUND, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);

        return Utils.response(res, response, apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);

    }      
    async makeAsyncWalletTransactions(req, res) {
        console.log(req.body,req.params)
        let response = await new BLManager().makeAsyncWalletTransactions(req.body,req.params).catch(err => {
            console.log(response)
            return Utils.response(res, {err}, apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        });
        if (!response)
            return Utils.response(res, {}, apiFailureMessage.NOT_FOUND, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);

        return Utils.response(res, response, apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);

    }     
     
    async eastimateTransactionFee(req, res) {
        console.log(req.body,req.params)
        let response = await new BLManager().eastimateTransactionFee(req.body,req.params).catch(err => {
            console.log(response)
            return Utils.response(res, {err}, apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        });
        if (!response)
            return Utils.response(res, {}, apiFailureMessage.NOT_FOUND, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);

        return Utils.response(res, response, apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);
    }   
    
    async getMonitors(req, res) {
        console.log(req.body,req.params)
        let response = await new BLManager().getMonitors(req.params).catch(err => {
            console.log(response)
            return Utils.response(res, {err}, apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        });
        if (!response)
            return Utils.response(res, {}, apiFailureMessage.NOT_FOUND, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);

        return Utils.response(res, JSON.parse(response), apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);
    } 
    async getStatus(req, res) {
        let response = await new BLManager().getStatus(req.params).catch(err => {
            console.log(response)
            return Utils.response(res, {err}, apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        });
        if (!response)
            return Utils.response(res, {}, apiFailureMessage.NOT_FOUND, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);

        return Utils.response(res, JSON.parse(response), apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);
    } 
    async getERC20TokenBalance(req, res) {
        let response = await new BLManager().getERC20TokenBalance(req.params).catch(err => {
            console.log(response)
            return Utils.response(res, {err}, apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        });
        if (!response)
            return Utils.response(res, {}, apiFailureMessage.NOT_FOUND, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);

        return Utils.response(res, JSON.parse(response), apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);
    } 
    
    async walletBasedSmartContract(req, res) {
        let response = await new BLManager().walletBasedSmartContract(req.params).catch(err => {
            console.log(response)
            return Utils.response(res, {err}, apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        });
        if (!response)
            return Utils.response(res, {}, apiFailureMessage.NOT_FOUND, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);

        return Utils.response(res, JSON.parse(response), apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);
    } 
    
    async walletBasedSmartContractMethod(req, res) {
        let response = await new BLManager().walletBasedSmartContractMethod(req.params).catch(err => {
            console.log(response)
            return Utils.response(res, {err}, apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        });
        if (!response)
            return Utils.response(res, {}, apiFailureMessage.NOT_FOUND, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);

        return Utils.response(res, JSON.parse(response), apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);
    } 
    async getEthereumSmarctContract(req, res) {
        let response = await new BLManager().getEthereumSmarctContract(req.params).catch(err => {
            console.log(response)
            return Utils.response(res, {err}, apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        });
        if (!response)
            return Utils.response(res, {}, apiFailureMessage.NOT_FOUND, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);

        return Utils.response(res, response, apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);
    }
    
    async eastimateEthSmartContract(req, res) {
        let response = await new BLManager().eastimateEthSmartContract(req.params).catch(err => {
            console.log(response)
            return Utils.response(res, {err}, apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        });
        if (!response)
            return Utils.response(res, {}, apiFailureMessage.NOT_FOUND, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);

        return Utils.response(res, response, apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);
    }
    
    async callSmartContractMethod(req, res) {
        let response = await new BLManager().callSmartContractMethod(req.params).catch(err => {
            console.log(response)
            return Utils.response(res, {err}, apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        });
        if (!response)
            return Utils.response(res, {}, apiFailureMessage.NOT_FOUND, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);

        return Utils.response(res, response, apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);
    }
    async callNamedSmartContractMethod(req, res) {
        let response = await new BLManager().callNamedSmartContractMethod(req.params).catch(err => {
            console.log(response)
            return Utils.response(res, {err}, apiFailureMessage.INTERNAL_SERVER_ERROR, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        });
        if (!response)
            return Utils.response(res, {}, apiFailureMessage.NOT_FOUND, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);

        return Utils.response(res, JSON.parse(response), apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);
    }
}