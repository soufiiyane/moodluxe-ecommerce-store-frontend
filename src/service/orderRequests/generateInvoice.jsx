import {axiosInstance} from "../apiService";
import {POST_GENERATE_INVOICE_URL} from "../../constants/apiUrlsConstants";

const generateInvoice = async(invoiceId)=>{
    let response = await axiosInstance.get(POST_GENERATE_INVOICE_URL+invoiceId,{responseType:"blob"});
    return response;
}

export default generateInvoice
