import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { items } from "./data"

export default function Shop(){
   
    const [shopItems, setShopItems] = useState([]);

    useEffect(() => {
        setShopItems(items);
    }, [])

    const onClickAddToBasket = id => {

    }

    const onClickIncreaseQuantity = id => {
        const updatedItems = [...shopItems];
        let index = 0;
        for(let i = 0; i < shopItems.length; i++){
            if(shopItems[i].id===id){
                index = i;
            }
        }
        let updatedItem = {...updatedItems[index]};
        updatedItem.quantity ++;
        updatedItems[index] = updatedItem;
        setShopItems(updatedItems);
    }

    const onClickDecreaseQuantity = id => {
        const updatedItems = [...shopItems];
        let index = 0;
        for(let i = 0; i < shopItems.length; i++){
            if(shopItems[i].id===id){
                index = i;
            }
        }
        let updatedItem = {...updatedItems[index]};
        updatedItem.quantity = updatedItem.quantity === 0 ? 0 : updatedItem.quantity - 1;
        updatedItems[index] = updatedItem;
        setShopItems(updatedItems);
    }

    const displayItems = () => {
        const mappedItems = shopItems.map( (item) =>
        <div key={item.id}>
            <Link to={'/shop/' + item.id}>
                <div className={"border border-black shadow-lg rounded-lg flex flex-col gap-6 p-6 hover:shadow-xl hover:scale-105 cursor-pointer"}>
                    <div className={"flex flex-col items-center"}>
                        <h3 className={"text-center"}>{item.title}</h3>
                        <img className={"w-64 h-64"} alt={"tshirt"} src={"https://www.hammondmotorcycles.co.uk/wp-content/uploads/2022/03/t-shirt-with-logo-1.jpg"}/>
                        <p>{item.description}</p>
                    </div>
                    {/* <div className={"flex justify-around items-center"}>
                        <div className={"flex gap-4 items-center"}>
                            <button onClick={() => onClickDecreaseQuantity(item.id)}>-</button>
                            <input className={"w-6 text-center"} value={item.quantity} onChange={onEditQuantity}/>
                            <button onClick={() => onClickIncreaseQuantity(item.id)}>+</button>
                        </div>
                        <button className={"rounded-full bg-white-500 border-2 text-orange-400 border-orange-400 p-2 transition ease-out duration-300  hover:bg-orange-400 hover:text-white"}>Add to basket</button>
                    </div> */}
                </div>
            </Link>
        </div>
        
            
        )
        return mappedItems;
    }

    return(
        <div className={"grid grid-cols-1 gap-10 m-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
            {displayItems()}
        </div>
    )
}