import { useParams } from "react-router";
import { useState } from "react";
import { items } from "./data";
import { Link } from "react-router-dom";

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
        <div className={"border border-black shadow-lg rounded-lg flex gap-6 m-8 overflow-hidden"}>
            <img alt={"pic"} src={shopItem.imgUrl} className={"w-1/2 border-black border-r"}/>
            <div className={"w-1/2 flex flex-col justify-center gap-14 relative text-center"}>
                <Link to={"/shop"} className={"absolute top-0 right-0 m-8"}>
                    <button className={"rounded-full bg-white-500 border-2 text-orange-400 border-orange-400 p-2 w-24 transition ease-out duration-300  hover:bg-orange-400 hover:text-white"}>Back</button>
                </Link>
                <h1 className={"text-6xl"}>{shopItem.title}</h1>
                <h2 className={"text-3xl"}>£{shopItem.price}</h2>
                <p className={"text-2xl"}>{shopItem.description}</p>
                <div className={"flex justify-evenly items-center"}>
                    <div className={"flex gap-4 items-center"}>
                        <button onClick={onClickDecreaseQuantity} className={"text-4xl"}>-</button>
                        <input className={"w-32 text-4xl text-center"} value={shopItem.quantity} onChange={onInputChange}/>
                        <button onClick={onClickIncreaseQuantity} className={"text-4xl"}>+</button>
                    </div>
                    <button className={"rounded-full bg-white-500 border-2 text-orange-400 border-orange-400 p-2 transition ease-out duration-300  hover:bg-orange-400 hover:text-white"}>Add to basket</button>
                </div> 
            </div>
        </div>
    )
}