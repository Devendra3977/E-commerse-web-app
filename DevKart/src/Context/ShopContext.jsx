import React, { createContext, useEffect, useState } from 'react'
import BASE_URL from '../config/api';

// import all_product from '../assets/images/all_product';

export const shopContext = createContext(null);

  const getDefaultcart =()=>{
        let cart ={};
        for(let index=0; index<300+1; index++){
            cart[index] =0;
        }
        return cart;
    }

const ShopContextProvider = (props) =>{

    const [all_product, setAll_product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultcart())

    useEffect(()=>{
        fetch(`${BASE_URL}/allproducts`)
        .then((resp)=>(resp.json()))
        .then((data)=>setAll_product(data));

        if(localStorage.getItem('auth-token')){
            fetch(`${BASE_URL}/getcart`,{
                method:"POST",
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:"",
            })
            .then((resp)=>(resp.json()))
            .then((data)=>setCartItems(data));

        }
    },[])
   

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] +1}));
        if(localStorage.getItem('auth-token')){
            fetch(`${BASE_URL}/addtocart`,{
                method:"POST",
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((resp)=>(resp.json()))
            .then((data)=>console.log(data));
        }
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
           fetch(`${BASE_URL}/removefromcart`,{
                method:"POST",
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((resp)=>(resp.json()))
            .then((data)=>console.log(data)); 
        }
    }

    // total cart amount

    const totalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id === Number(item));
                totalAmount+= itemInfo.new_price * cartItems[item]
            }
           
        }
         return totalAmount;
    }

    // total cart items

    const totalCartItems = () =>{
        let totalItems = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItems+= cartItems[item];
            }
        }
        return totalItems;
    }

     const contextValue = {all_product, cartItems, addToCart, removeFromCart, totalCartAmount,totalCartItems};
     
     return (
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>
     )

}

export default ShopContextProvider;
