import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const ProductCard = ({ product }) => {
	const { user } = useUserStore();
	const { addToCart } = useCartStore();
	const handleAddToCart = () => {
		if (!user) {
			toast.error("Please login to add products to cart", { id: "login" });
			return;
		} else {
			// add to cart//
			addToCart(product);
		}
	};

	return (
		<div className='relative flex flex-col w-full overflow-hidden border border-gray-700 rounded-lg shadow-lg'>
			<div className='relative flex mx-3 mt-3 overflow-hidden h-60 rounded-xl'>
				<img className='object-cover w-full' src={product.image} alt='product image' />
				
			</div>

			<div className='px-5 pb-5 mt-4'>
				<h5 className='text-xl font-semibold tracking-tight text-white'>{product.name}</h5>
				<div className='flex items-center justify-between mt-2 mb-5'>
					<p>
						<span className='text-3xl font-bold text-emerald-400'>₹{product.price}</span>
					</p>
				</div>

				<div className='flex items-center justify-between py-3 lg:grid-cols-3'>
				<button
					className='flex items-center justify-center px-3 py-3 text-sm font-medium text-center text-white rounded-lg bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300'
					onClick={handleAddToCart}
				>
					<ShoppingCart size={18} className='mr-2' />
					Add to cart
				</button>

				{/* <Link to={'/Product/' + product.name}>
				<button className="flex justify-center py-3 text-sm font-medium text-center bg-white rounded-lg items-centert px-11 text-emerald-700 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-emerald-300"
					  >View</button>
				</Link> */}
				
				</div>
				
				
			</div>
		</div>
	);
};
export default ProductCard;
