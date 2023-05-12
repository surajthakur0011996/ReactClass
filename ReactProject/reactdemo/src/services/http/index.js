import { axiosinstance } from "../instance";

export const login = (data) => {
 return axiosinstance.post("auth/login",data);
};

export const productList = async() => {
    return await axiosinstance.get("products");
};


export const productDetail = async(data1) => {
    return await axiosinstance.get("products/" + data1);
};
   