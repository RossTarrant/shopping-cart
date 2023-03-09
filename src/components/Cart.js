import { Link } from "react-router-dom";

export default function Cart({basket, resetBasket, changeQuantity, removeFromBasket}){

    const getTotal = () => {
        let total = 0;
        basket.forEach(item => {
            total += (item.quantity * item.price);
        });
        return total;
    }

    const onClickRemoveItem = (id) => {
        removeFromBasket(id);
    }

    const onClickChangeQuantity = (id, button) => {
        changeQuantity(id, button);
    }

    const onClickProceedToPayment = () => {
        alert(`Thank you for your purchase! You were charged £${getTotal()}.`)
        resetBasket();
    }

    const getBasket = () => {
        const itemBasket = basket.map((item) => 
            <div key={item.id} className={"grid grid-cols-2 p-4 m-4 justify-between border-2 border-neutral-900 rounded-lg shadow-md overflow-hidden"}>
                <img alt={"pic"} src={item.imgUrl} className={"w-60 h-60"}/>
                <div className={"flex flex-col items-center justify-center gap-4"}>
                    <h1 className={"text-2xl"}>{item.title}</h1>
                    <h2 className={""}>£{item.price}</h2>
                    <div className={"flex items-center gap-8"}>
                        <div className="flex">
                            <button onClick={e => onClickChangeQuantity(item.id, e.target.innerText)} className={"text-center"}>-</button>
                            <span className={"text-center w-16"} >{item.quantity}</span>
                            <button onClick={e => onClickChangeQuantity(item.id, e.target.innerText)} className={"text-center"}>+</button>
                        </div>
                        <button onClick={() => onClickRemoveItem(item.id)} className={"text-sm rounded-full bg-white-500 border-2 text-white border-red-600 bg-red-600 p-1 transition ease-out duration-300 hover:bg-red-800 hover:border-red-800"}>Delete</button>
                    </div> 
                </div>
            </div>
        )

        return itemBasket;
    }

    return(
        <div className={"flex flex-col items-center justify-center gap-4 text-center"}>
            <h2 className=" text-5xl p-4">Your Shopping Basket</h2>
            {basket.length === 0 ? <p>Your basket is empty! Add some items in the shop!</p> : null}
            {basket.length !== 0 ? <p>Your total is £{getTotal()}.00</p> : null}
            {basket.length !== 0 ? <p>Check the basket below and then click proceed button</p> : null}
            {basket.length !== 0 ? <Link to={'/'}><button onClick={onClickProceedToPayment} className={"bg-slate-800 text-white rounded-full p-2 hover:bg-slate-700"}>Proceed to payment</button></Link> : null}
            <div className={"flex flex-col items-center font-jakarta"}>
                {getBasket()}
            </div>
        </div>
    )
}