import '../index.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{ faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function CartIcon({basketQuantity, switchBasketView}){

    const onClickBasket = () => {
        switchBasketView();
    }

    return(
        <div className={"flex gap-2 justify-center content-center"}>
            <FontAwesomeIcon icon={faShoppingCart} size="2xl" onClick={onClickBasket} className={"cursor-pointer hover:scale-110"}/>
            <Link to={"/cart"}><span className={"text-xl bg-red-600 font-bold rounded-full w-8 h-8 flex items-center justify-center"}>{basketQuantity}</span></Link>
        </div>
    )
}