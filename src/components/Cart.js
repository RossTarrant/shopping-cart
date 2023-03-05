import { useEffect, useState } from "react"

export default function Cart({basketVisible}){

    const [basketClass, setBasketClass] = useState(null);

    useEffect(() => {
        let hidden = "bg-slate-800";
        let visible = "bg-slate-800";
        basketVisible ? setBasketClass(visible) : setBasketClass(hidden);
    }, [basketVisible])

    return(
        <div className="w-1/3 absolute">
            {basketVisible ? <div className={basketClass}>Shopping Basket</div> : null}
        </div>
    )
}