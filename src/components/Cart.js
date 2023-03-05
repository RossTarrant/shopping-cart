export default function Cart({basket}){

    const getTotal = () => {
        let total = 0;
        basket.forEach(item => {
            total += (item.quantity * item.price);
        });
        return total;
    }

    const onClickRemoveItem = () => {
        // Remove item from list by id
        // Must call to remove item from App.js
    }

    const onClickIncreaseQuantity = () => {
        // Increase quantity of item from list by id
        // Must call to remove item from App.js
    }

    const onClickDecreaseQuantity = () => {
        // Increase quantity of item from list by id
        // Must call to remove item from App.js
    }

    const onClickProceedToPayment = () => {
        // Alert saying thanks
        // Basket emptied
        // User returned to homepage
    }

    const getBasket = () => {
        const itemBasket = basket.map((item) => 
            <div key={item.id} className={"border-black border-2 flex w-96 h-64"}>
                <img alt={"pic"} src={item.imgUrl} className={"w-32 h-32"}/>
                <div className={"flex flex-col items-center"}>
                    <h1 className={""}>{item.title}</h1>
                    <h2 className={""}>£{item.price}</h2>
                    <div className={"flex items-center gap-8"}>
                        <div className="flex">
                            <button onClick={onClickDecreaseQuantity} className={"text-center"}>-</button>
                            <span className={"text-center w-16"} >{item.quantity}</span>
                            <button onClick={onClickIncreaseQuantity} className={"text-center"}>+</button>
                        </div>
                        <button onClick={onClickRemoveItem} className={"text-sm rounded-full bg-white-500 border-2 text-white border-red-600 bg-red-600 p-1 transition ease-out duration-300 hover:bg-red-800 hover:border-red-800"}>Delete</button>
                    </div> 
                </div>
            </div>
        )

        return itemBasket;
    }

    return(
        <div className={"flex flex-col items-center justify-center"}>
            <h2>Your Shopping Basket</h2>
            <p>Your total is £{getTotal()}.00</p>
            <p>Check the basket below and then click proceed button</p>
            <button onClick={onClickProceedToPayment} className={"border-black border-2 bg-slate-800 text-white rounded-full p-2"}>Proceed to payment</button>
            <div className={"flex flex-col gap-10 items-center font-jakarta"}>
                {getBasket()}
            </div>
        </div>
    )
}