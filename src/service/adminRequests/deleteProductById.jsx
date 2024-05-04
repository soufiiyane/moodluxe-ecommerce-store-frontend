import {axiosInstance} from "../apiService";
import {PRODUCT_MAIN_URL} from "../../constants/apiUrlsConstants";

const deleteProductById = async(id)=>{
    const response = await axiosInstance.delete(PRODUCT_MAIN_URL+"/"+id);
    return response;
}

export default deleteProductById
