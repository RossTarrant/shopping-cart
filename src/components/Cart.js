import { useEffect, useState } from "react"

export default function Cart({basketVisible}){

    const [basketClass, setBasketClass] = useState(null);

    useEffect(() => {
        let hidden = "absolute top-0 right-0 w-0 h-screen bg-slate-800 transition-all ease-in-out duration-1000";
        let visible = "absolute top-0 right-0 w-1/3 h-screen bg-slate-800 transition-all ease-in-out duration-1000";
        basketVisible ? setBasketClass(visible) : setBasketClass(hidden);
    }, [basketVisible])

    return(
        <div className={basketClass}>
            <h2>Your Basket</h2>
        </div>
    )
}