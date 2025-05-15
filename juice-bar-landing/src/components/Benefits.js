import { Button, CallToAction } from './ButtonComponent';
import { Link } from 'react-scroll';
import Header from './Navbar';
const BenefitsSection = () => {
    const benefits = [
        {
            id: 1,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: "Packed With Nutrients",
            description: "Our cold-pressed juices retain up to 5x more nutrients than traditional methods, giving your body exactly what it needs."
        },
        {
            id: 2,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "100% Organic",
            description: "We source only certified organic produce from local farms to ensure you get the cleanest, pesticide-free juice possible."
        },
        {
            id: 3,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Fresh Daily",
            description: "Every bottle is pressed fresh each morning, never from concentrate, and delivered to you within 24 hours of production."
        },
        {
            id: 4,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
            title: "Eco-Friendly Packaging",
            description: "Our bottles are made from 100% recycled materials, and we offer a bottle return program to minimize environmental impact."
        }
    ];

    return (
        <>
            <section id="benefits" className="py-20 px-6 md:px-12 bg-white relative overflow-hidden">
                {/* Yellow splash background decorations */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full -mr-32 -mt-32 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100 rounded-full -ml-48 -mb-48 opacity-40"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-yellow-500 font-serif italic text-2xl">Why Choose Us</span>
                        <h2 className="text-4xl font-extrabold mt-2 mb-4">The Benefits of Cold-Pressed</h2>
                        <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
                        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                            Our juicing process preserves vital nutrients and enzymes that would otherwise be destroyed by heat and oxidation from conventional methods.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {benefits.map((benefit) => (
                            <div key={benefit.id} className="flex space-x-6 items-start group">
                                <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-500 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-500 transition-colors">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Visual juice bottle element */}
                    <div className="mt-20 relative">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-yellow-50 rounded-2xl p-8 md:col-span-2 relative overflow-hidden">
                                <div className="absolute -bottom-8 -right-8 w-64 h-64">
                                    <svg viewBox="0 0 200 200" className="w-full h-full">
                                        <path d="M37.5,-48.1C52.9,-39.4,72.2,-33.9,78.9,-22C85.6,-10.2,79.8,8,70.3,21.1C60.9,34.2,47.8,42.3,34.5,51.2C21.2,60.1,7.6,69.9,-3.6,74.3C-14.8,78.7,-23.5,77.7,-34.4,72.7C-45.3,67.7,-58.3,58.7,-67.6,46.3C-76.9,33.9,-82.3,17,-80.5,1.1C-78.8,-14.9,-69.8,-29.8,-58.2,-40.2C-46.5,-50.6,-32.2,-56.6,-19.5,-64.2C-6.8,-71.9,5.3,-81.2,17,-79.4C28.7,-77.5,39.9,-64.6,45.1,-52.5C50.2,-40.4,49.4,-29.2,56.4,-18.9L65.5,-7.1L65.7,0.1L56.5,10.1Z" transform="translate(100 100)" className="fill-yellow-400" />
                                    </svg>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 relative z-10">Did you know?</h3>
                                <p className="text-lg text-gray-700 mb-6 relative z-10">
                                    Cold-pressed juices can deliver up to <span className="font-bold text-yellow-500">550% more nutrients</span> than juices made with traditional centrifugal juicers.
                                </p>
                                <p className="text-gray-600 relative z-10">
                                    Our special hydraulic press method gently extracts juice from fruits and vegetables without generating heat or exposing the ingredients to air, which preserves enzymes and prevents oxidation.
                                </p>
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="relative h-full w-full max-w-xs mx-auto">
                                    <div className="absolute inset-0 -ml-6 -mt-6">
                                        <svg viewBox="0 0 200 200" className="w-full h-full">
                                            <path d="M42.7,-65.4C56.9,-54.3,71.2,-42.6,77.8,-27.5C84.4,-12.3,83.5,6.4,77.7,22.6C71.9,38.9,61.1,52.8,46.8,63.6C32.4,74.5,14.5,82.3,-1.9,85.1C-18.4,87.9,-33.4,85.5,-45.6,77.3C-57.8,69.1,-67.2,55,-71.5,39.9C-75.9,24.8,-75.3,8.8,-72.1,-5.6C-68.9,-20,-63.2,-32.7,-54,-44.9C-44.7,-57.1,-31.9,-68.7,-17.1,-74.5C-2.3,-80.4,14.6,-80.4,29.2,-75.8L44,-67.4L51.7,-58.7Z" transform="translate(100 100)" className="fill-yellow-100" />
                                        </svg>
                                    </div>
                                    <img
                                        src="/assets/bottle.png"
                                        alt="Juice Bottle"
                                        className="relative z-10 transform hover:rotate-2 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* First CTA section */}
            <CallToAction
                title="Get Fresh Juices Delivered Weekly"
                subtitle="Subscribe to our juice plan and save 15%. Fresh, cold-pressed juices delivered to your door every week."
                buttonText="Start Your Subscription"
                buttonLink="#subscription"
                buttonVariant="secondary"
                bgColor="bg-yellow-400"
            />
        </>
    );
};
export default BenefitsSection;