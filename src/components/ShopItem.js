import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { items } from "./data";

export default function ShopItem(){

    const getItemById = (id) => {
        for(let item of items){
            if(item.id===id){
                return item;
            }
        }
    }

    const params = useParams();
    const [shopItem, setShopItem] = useState(getItemById(Number(params.id)));

    const onClickIncreaseQuantity = () => {
        let updatedItem = {...shopItem}
        updatedItem.quantity ++;
        setShopItem(updatedItem);
    }

    const onClickDecreaseQuantity = () => {
        let updatedItem = {...shopItem}
        updatedItem.quantity = updatedItem.quantity === 0 ? 0 : updatedItem.quantity - 1;
        setShopItem(updatedItem);
    }

    const onInputChange = () => {

    }

    return(
        <div className={"border border-black shadow-lg rounded-lg flex flex-col gap-6 p-6 m-8 hover:shadow-xl cursor-pointer"}>
            <h1>{shopItem.title}</h1>
            <img alt={"pic"} src={shopItem.imgUrl} className={"w-64 h-64"}/>
            <p>{shopItem.description}</p>
            <div className={"flex justify-around items-center"}>
                <div className={"flex gap-4 items-center"}>
                    <button onClick={onClickDecreaseQuantity}>-</button>
                    <input className={"w-6 text-center"} value={shopItem.quantity} onChange={onInputChange}/>
                    <button onClick={onClickIncreaseQuantity}>+</button>
                </div>
                <button className={"rounded-full bg-white-500 border-2 text-orange-400 border-orange-400 p-2 transition ease-out duration-300  hover:bg-orange-400 hover:text-white"}>Add to basket</button>
            </div> 
        </div>
    )
}