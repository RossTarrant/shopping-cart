import '../index.css';
import Title from "./Title";
import Nav from "./Nav";
import CartIcon from "./CartIcon";

export default function Header(){

    return(
        <div className={"text-center grid grid-cols-3 bg-black white text-white content-center p-4"}>
            <Title className={"bg-red-400"}/>
            <Nav />
            <CartIcon />
        </div>
    )

}