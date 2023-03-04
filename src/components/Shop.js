import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { items } from "./data"

export default function Shop(){
   
    const [shopItems, setShopItems] = useState([]);

    useEffect(() => {
        setShopItems(items);
    }, [])

    const displayItems = () => {
        const mappedItems = shopItems.map( (item) =>
        <div key={item.id}>
            <Link to={'/shop/' + item.id}>
                <div className={"font-jakarta border-2 border-slate-800 shadow-lg rounded-lg flex flex-col gap-6 p-6 hover:shadow-xl hover:scale-105 cursor-pointer"}>
                    <div className={"flex flex-col items-center"}>
                        <h3 className={"text-center"}>{item.title}</h3>
                        <img className={"w-64 h-64"} alt={"tshirt"} src={"https://www.hammondmotorcycles.co.uk/wp-content/uploads/2022/03/t-shirt-with-logo-1.jpg"}/>
                        <p>£{item.price}</p>
                    </div>
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