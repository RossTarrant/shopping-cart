import '../index.css';
import Title from "./Title";
import Nav from "./Nav";
import CartIcon from "./CartIcon";

export default function Header({basketQuantity}){

    return(
        <div className={"font-jakarta text-center grid grid-cols-5 bg-slate-800 white text-white items-center p-4 sticky top-0 z-10"}>
            <Title/>
            <Nav />
            <CartIcon basketQuantity={basketQuantity}/>
        </div>
    )

}