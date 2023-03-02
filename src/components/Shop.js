import { useState, useEffect } from "react";
import { items } from "./data"

export default function Shop(){

    const [shopItems, setShopItems] = useState(items);

    useEffect(() => {
        
    }, [shopItems])

    const onClickIncreaseQuantity = id => {
        const updatedItems = [...shopItems];
        let index = 0;
        for(let i = 0; i < shopItems.length; i++){
            if(shopItems[i].id===id){
                index = i;
            }
            else if(shopItems[i].edit===true){
                let currentItem = {...updatedItems[i]};
                currentItem.quantity = currentItem.quantity + 1;
                updatedItems[i] = currentItem;
            }
        }
        setShopItems(updatedItems);
    }

    const displayItems = () => {
        const mappedItems = items.map( (item) =>
            <div key={item.id} className={"border border-black shadow-lg rounded-lg flex flex-col gap-6 p-6 hover:shadow-xl"}>
                <div className={"flex flex-col items-center"}>
                    <h3 className={"text-center"}>{item.title}</h3>
                    <img className={"w-64 h-64"} alt={"tshirt"} src={"https://www.hammondmotorcycles.co.uk/wp-content/uploads/2022/03/t-shirt-with-logo-1.jpg"}/>
                    <p>{item.description}</p>
                </div>
                <div className={"flex justify-around items-center"}>
                    <div className={"flex gap-4 items-center"}>
                        <button className={""}>-</button>
                        <input className={"w-6 text-center border-2 border-gray-300"} value={0} />
                        <button onClick={() => onClickIncreaseQuantity(item.id)}>+</button>
                    </div>
                    <button className={"rounded-full bg-white-500 border border-2 border-orange-400 p-2 hover:bg-orange-400 hover:text-white"}>Add to basket</button>
                </div>
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