import '../index.css';
import Title from "./Title";
import Nav from "./Nav";
import CartIcon from "./CartIcon";

export default function Header({basket}){

    return(
        <div className={"text-center grid grid-cols-5 bg-black white text-white text-center items-center p-4 sticky top-0 z-10"}>
            <Title/>
            <Nav />
            <CartIcon basket={basket}/>
        </div>
    )

}