import React, { useState } from 'react';
import { productList } from '../../services/http';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

function Tables() {
    const [products, setProducts] = useState([]);
    const navigator = useNavigate ();
    useEffect(() => {
        const getApi = async () => {
            const response = await productList()
            if (response) {
                setProducts(response?.data?.products)
                // console.log(JSON.stringify(response));
                console.log(response)
                //   navigate('/dashboard');
                //   localStorage.setItem("token","dasdaDAsdsafas")
            }
        }
        getApi();
    }, [])

    console.log(products)
    return (
        <>
            <div class="container-fluid">
                <h1 class="h3 mb-2 text-gray-800">Tables</h1>
                <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                    For more information about DataTables, please visit the <a target="_blank"
                        href="https://datatables.net">official DataTables documentation</a>.</p>
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td onClick={ () => navigator('/tablesdetail/'+ product.id)}> {product.title}</td>
                                            <td>{product.description}</td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tables

