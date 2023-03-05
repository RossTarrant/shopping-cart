import { useParams } from "react-router";
import { useState } from "react";
import { items } from "./data";
import { Link } from "react-router-dom";

export default function ShopItem({addToBasket}){

    const getItemById = (id) => {
        for(let item of items){
            if(item.id===id){
                return item;
            }
        }
    }

    const params = useParams();
    const [shopItem, setShopItem] = useState(getItemById(params.id));

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

    const onClickAddToBasket = () => {
        if(shopItem.quantity > 0){
            addToBasket(shopItem);
            let updatedItem = {...shopItem}
            updatedItem.quantity = 0;
            setShopItem(updatedItem);
        }
    }

    return(
        <div className={"border-4 border-slate-800 shadow-lg rounded-lg flex gap-6 m-8 overflow-hidden font-jakarta"}>
            <img alt={"pic"} src={shopItem.imgUrl} className={"w-1/2 border-slate-800 border-r-4"}/>
            <div className={"w-1/2 flex flex-col justify-center gap-14 relative text-center"}>
                <Link to={"/shop"} className={"absolute top-0 right-0 m-8"}>
                    <button className={"rounded-full bg-white-500 border-2 text-slate-800 border-slate-800 p-2 w-24 transition ease-out duration-300  hover:bg-slate-800 hover:text-white"}>Back</button>
                </Link>
                <h1 className={"text-6xl text-slate-700 font-bold"}>{shopItem.title}</h1>
                <h2 className={"text-3xl"}>£{shopItem.price}</h2>
                <p className={"text-2xl"}>{shopItem.description}</p>
                <div className={"flex justify-evenly items-center"}>
                    <div className={"flex gap-4 items-center"}>
                        <button onClick={onClickDecreaseQuantity} className={"text-4xl"}>-</button>
                        <span className={"w-32 text-4xl text-center"}>{shopItem.quantity}</span>
                        <button onClick={onClickIncreaseQuantity} className={"text-4xl"}>+</button>
                    </div>
                    <Link to={"/shop"}><button onClick={onClickAddToBasket} className={"rounded-full bg-white-500 border-2 text-slate-800 border-slate-800 p-2 transition ease-out duration-300  hover:bg-slate-800 hover:text-white"}>Add to basket</button></Link>
                </div> 
            </div>
        </div>
    )
}