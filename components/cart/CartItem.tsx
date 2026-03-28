import { Release } from "@/types/release";
import { useCartStore } from "@/app/store/cart.store";
import ReleaseImage from "../shop/ReleaseImage";
import Price from "../shop/Price";


export default function CartItem({ item }: { item: Release }) {
    const cartState = useCartStore();
    console.log(item)
    return (
        <div className="flex gap-2 full pb-4 border-b-gray-100 border-b-2 mb-4">
            <div className="h-[50] w-[50]">
                <ReleaseImage src={item.cover} alt={item.name} width={50} height={50} />
            </div>
            <div className="grow">
                <h2>{item.artist} – {item.name}</h2>
                <p>Price: <Price prices={item.prices} /></p>
            </div>
            <div>
                <button onClick={()=>cartState.removeFromCart(item.id)}>Remove from Cart</button>
            </div>
        </div>
    );
}