import { axiosinstance } from "../interceptors";

export const login = (data) => {
 return axiosinstance.post("auth/login",data);
};

export const productList = async(skip) => {
    return await axiosinstance.get("products?limit=10&skip="+skip);
};


export const productDetail = async(data1) => {
    return await axiosinstance.get("products/" + data1);
};
   