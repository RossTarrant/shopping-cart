import '../index.css';
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <div className={"col-span-2"}>
            <nav>
                <ul className={"flex justify-evenly text-md lg:text-2xl"}>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/shop"}>Shop</Link>
                </ul>
            </nav>
        </div>
    )
}