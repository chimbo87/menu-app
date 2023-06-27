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
    return (
        <div>
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