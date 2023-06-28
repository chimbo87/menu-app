import './MenuList.css';
import { useState, useEffect } from "react";
const MenuList = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {

        const response = await fetch(
            "http://localhost:5000/api/users/products"
        ).then((response) => response.json());
        setProducts(response)
        console.log('our products list:', response);
    };
    useEffect(() => {
        getProducts()

    }, []);
    const handleFilter = (event) => {
        const newData = products.filter(row => row.name.toLowerCase().includes(event.target.value.toLowerCase()))
        setProducts(newData);
    }
    return (
        <div>
              <div id='menuListInput' >
                    <input type='text' placeholder='Search...' onChange={handleFilter} style={{ padding: '6px 15px', border: '1px solid gray', margin: '4px 4px' }} />
                </div>
            <table class="table table-striped  table-hover">
               
              
                <thead >
                    <tr >
                        <th scope="col">ID</th>
                        <th scope="col">TITLE</th>
                        <th scope="col">NAME</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">DATE</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
               
                {
                    products.map((product)=>{
                        return(
                            <tbody>
                            <tr>
                                <td><small>{product._id}</small></td>
                                <td><small>{product.title}</small></td>
                                <td><small>{product.name}</small></td>
                                <td><small>R{product.price}</small></td>
                                <td><small>{product.createdAt}</small></td>
                                <td><small>Update<span></span>Remove</small></td>
                            </tr>
        
                        </tbody>
                        )
                    })
                }
               
            </table>
        </div>
    )
}
export default MenuList;