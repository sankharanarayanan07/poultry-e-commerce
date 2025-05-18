import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
	return (
		<div className='relative w-full h-20 overflow-hidden rounded-lg group'>
			<Link to={"/category/" + category.name}>
				<div className='w-full h-full cursor-pointer'>
					<div className='absolute inset-0 z-10 bg-slate-800' />
					
					<div className='absolute inset-0 z-20 flex items-center justify-center p-4 transition-all duration-300 ease-in-out transform shadow-sm bg-gradient-to-t from-slate-800/70 to-transparent group-hover:scale-105'>
						<h3 className='mb-2 text-2xl font-bold text-white'>{category.name}</h3>
						
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CategoryItem;
