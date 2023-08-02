import React, { useState } from 'react';
import { productList } from '../../services/http';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Pagination from 'react-bootstrap/Pagination';


function Tables() {
    const [current,setCurrent] =useState(1);
    const [active,setActive]=useState(1);
    const [total,setTotal]=useState(0);
    const pages= Math.ceil(total/5);
    const pageNum =[];
    const [products,setProduct] =useState([]);
    const [skip,setSkip]=useState(0);
for (let number = 1; number <= pages; number++) {
    pageNum.push(
    <Pagination.Item key={number} active={number === active} onClick={()=>{
        setActive(number);
        // setSkip(number+10);
        }}>
      {number}
    </Pagination.Item>,
  );
}

    // const [products, setProducts] = useState([]);
    const navigator = useNavigate ();
    useEffect(() => {
        const getApi = async () => {
            const response = await productList(skip);
            console.log(response,"tables");
            if (response) {
                setTotal(response?.total);
                setProduct(response?.products)
                // console.log(JSON.stringify(response));
                // console.log(response.data.products)
                //   navigate('/dashboard');
                //   localStorage.setItem("token","dasdaDAsdsafas")
            }
        }
        getApi();
    }, [active])

    console.log(products,"Products"); 
//     let active = 2;
// let items = [];
// for (let number = 1; number <= 5; number++) {
//   items.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>,
//   );
// }

// console.log(items?.key)

    // console.log(products)
    return (
        <>
        <Pagination>{pageNum}</Pagination>
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
                                    {products?.map((product) => (
                                        <tr key={product.id}>
                                            <td onClick={ () => navigator('/tablesdetail/'+ product.id)}> {product.title}</td>
                                            <td>{product.description}</td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                    {/* {items && <Pagination onChange={(page)=>console.log(page)}>{items}</Pagination>}          */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tables

