import React, {useEffect} from 'react'
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import {useRecoilState} from "recoil";
import {cartIsActiveState, cartItemsState} from "../../recoil/atoms/cartAtom";
import {useNavigate} from "react-router-dom";
import CartItem from "../../components/cartItem/CartItem";

const CartPage = ()=>{
    const [cartItems,setCartItems] = useRecoilState(cartItemsState);
    const [cartIsActive,setCartIsActive] = useRecoilState(cartIsActiveState);

    const navigate =useNavigate();

    useEffect(()=>{
        setCartIsActive(false);
    },[])

    return(
        <HomeLayout>
            <section className={"bg-secondaryBgColor text-white"}>
                <div className={"max-w-5xl mx-auto py-12"}>
                    <div className={"text-center mb-12 space-y-4"}>
                        <h1 className={"text-4xl font-bold"}>Shopping bag</h1>
                        <p className={"text-md"}>({cartItems.length} item{cartItems.length>1 && 's'})</p>
                    </div>
                    {
                        cartItems.length>0
                        ?
                        <div className={"p-2 mx-3 space-y-3 min-h-[350px]"}>
                            {cartItems?.map((item,index)=>{
                                return <CartItem key={index} item={item} isForPage={true}/>
                                })
                            }
                        </div>
                        :
                        <div className={"pb-[250px]"}>
                            <p className={"text-center"}>cart is empty</p>
                        </div>
                    }
                    <div className={"p-4 mt-4 flex flex-col sm:flex-row gap-4 items-center justify-between items-center"}>
                        <div className={"flex flex-row justify-between w-full sm:w-1/3 font-semibold text-2xl gap-2"}>
                            <h3>TOTAL :</h3>
                            <p>{cartItems.length>0 ? cartItems.map((item)=>item.quantity*item.price).reduce((sum,num)=>sum+num).toFixed(2):"0.00"}$</p>
                        </div>
                        <div className={"flex flex-col sm:flex-row w-full gap-2 justify-end"}>
                            <button className={"bg-white text-black p-3 hover:bg-black border-2 border-transparent hover:border-white hover:text-white transition-all font-semibold disabled:bg-gray-500 disabled:hover:bg-gray-500 disabled:hover:border-transparent disabled:hover:text-white/70 disabled:text-white/70"} onClick={()=>navigate("/")}>CONTINUE SHOPPING</button>
                            <button className={"bg-red-600 text-white p-3 hover:bg-black border-2 border-transparent hover:border-white hover:text-white transition-all font-semibold disabled:bg-gray-500 disabled:hover:bg-gray-500 disabled:hover:border-transparent disabled:hover:text-white/70 disabled:text-white/70"} disabled={cartItems.length<=0} onClick={()=>navigate("/checkout")}>PROCCED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </section>
        </HomeLayout>
    )
}

export default CartPage
