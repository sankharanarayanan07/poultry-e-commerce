import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
    { name: "Immuno Modulators" },
    { name: "Liver Stimulants" },
    { name: "Growth Promoters" },
    { name: "Electrolytes" },
    { name: "Detoxifiers" },
    { name: "Acidifiers" },
];

const HomePage = () => {
    const { fetchFeaturedProducts, products, isLoading } = useProductStore();

    useEffect(() => {
        fetchFeaturedProducts();
    }, [fetchFeaturedProducts]);

    return (
        <div className="relative min-h-screen overflow-hidden text-white">
            {/* Banner Section */}
<div className="relative px-24 pb-32 overflow-hidden text-emerald-400">
    <div className="relative bg-transparent">
        <div className="pt-8 container-custom md:pt-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
                {/* Text Content */}
                <div className="animate-fade-in">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl text-poultry-green">
                        Quality Poultry Products for Your Farm
                    </h1>
                    <p className="mb-4 text-lg text-white mt-11 front-medium">
                    Sri Anjaneya Poultry Care is your trusted partner in poultry farming.
We provide premium-quality feed, medicine, and equipment tailored to your needs.
Our live birds are carefully selected to ensure optimal health and productivity.
We focus on delivering products that meet the highest industry standards.
Our solutions are designed to support the success of your poultry business.
With fast delivery, we ensure freshness and reliability in every order.

                    </p>
                </div>

                {/* Image Content */}
                <div className="animate-slide-in">
                    <div className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-lg">
                        <img
                            src="../public/Close-Up White Chicken.jpeg"
                            alt="Poultry Farm"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                            <p className="font-medium text-white">
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      

            {/* Categories Section */}
            <div className="relative z-10 px-4 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h1 className="mb-4 text-4xl font-bold text-center sm:text-5xl text-emerald-400">
                    Explore Our Categories
                </h1>
                <p className="mb-12 text-xl text-center text-gray-300">
                    Discover the latest trends in eco-friendly fashion
                </p>

                <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
                    {categories.map((category) => (
                        <CategoryItem category={category} key={category.name} />
                    ))}
                </div>
            </div>


            <section className="pt-16 pb-32 bg-transparent">
          <div className="container-custom">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-4xl font-bold text-center sm:text-5xl text-emerald-400">Why Choose Us</h2>
              <p className="max-w-2xl mx-auto text-white">
                Sri Anjaneya Poultry Care offers numerous advantages for your poultry farming needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 px-32 md:grid-cols-3">
              <div className="p-6 text-center rounded-lg bg-slate-800">
                {/*<div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-poultry-green">
                  <img src="/placeholder.svg" alt="Quality" className="w-8 h-8" /> 
                </div>*/}
                <h3 className="mb-2 text-xl font-bold ">Premium Quality</h3>
                <p className="text-white">All our products meet the highest quality standards for poultry farming.</p>
              </div>
              
              <div className="p-6 text-center rounded-lg bg-slate-800">
                {/*<div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-poultry-green">
                  <img src="/placeholder.svg" alt="Quality" className="w-8 h-8" /> 
                </div>*/}
                <h3 className="mb-2 text-xl font-bold ">Fast Delivery</h3>
                <p className="text-white">We ensure prompt delivery to maintain the freshness of our products.</p>
              </div>
              
              <div className="p-6 text-center rounded-lg bg-slate-800">
                {/*<div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-poultry-green">
                  <img src="/placeholder.svg" alt="Quality" className="w-8 h-8" /> 
                </div>*/}
                <h3 className="mb-2 text-xl font-bold ">Expert Support</h3>
                <p className="text-white">Our team of poultry experts is always available to assist you.</p>
              </div>
            </div>
          </div>
        </section>

            

            {/* Footer Section */}
            <footer className="py-8 bg-gray-800">
                <div className="container mx-auto text-center text-gray-400">
                    <p>&copy; 2025 SRI ANJANEYA POULTRY CARE. All rights reserved.</p>
                    
                    <div className="flex justify-center mt-4 space-x-4">
                        <a href="#" className="text-emerald-400 hover:text-emerald-500">Facebook</a>
                        <a href="#" className="text-emerald-400 hover:text-emerald-500">Twitter</a>
                        <a href="#" className="text-emerald-400 hover:text-emerald-500">Instagram</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;