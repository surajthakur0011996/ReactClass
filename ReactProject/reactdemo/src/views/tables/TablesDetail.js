import React, { useState } from 'react';
import { productDetail } from '../../services/http'; 
import { useEffect } from 'react';
import { useParams } from 'react-router';


function TablesDetail() {
    const [productDetails, setproductDetails] = useState();
    const params = useParams();

    useEffect(() => {
        const getApi = async () => {
            const response = await productDetail(params.id)
            if (response) {
                setproductDetails(response?.data)
                console.log(response) 
            }
        }
        getApi();
    }, [])
    console.log(productDetails)
    return (
        <> 
        <div className='pl-4 pr-4'>
            <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                    <div className='form-group'>
                        <div className='row'>
                            <div className='col-sm-5'>
                                <img src={productDetails?.thumbnail} />    
                            </div>  
                            <div className='col-sm-6'>
                                <label className='w100p'><b>Brand: </b>{productDetails?.brand}</label>                            
                                <label className='w100p'><b>Category:</b> {productDetails?.category}</label>                            
                                <label className='w100p'><b>Description: </b>{productDetails?.description}</label>                               
                                <label className='w100p'><b>Price:</b> {productDetails?.price}</label>                            
                                <label className='w100p'><b>Rating:</b> {productDetails?.rating}</label>                            
                                <label className='w100p'><b>Stock:</b>{productDetails?.stock}</label>   
                            </div>   
                        </div>
                    </div>
                </div> 
            </div> 
        </div>           
        </>
    )

   
   
     
 
}
export default TablesDetail

