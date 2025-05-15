import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactSection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', { name, email, message });
        // Reset form
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section id="contact" className="pt-24 pb-16 bg-gradient-to-b from-white to-cream-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-32 bg-yellow-50 opacity-50 -skew-y-2 transform origin-top-right"></div>
            <div className="absolute top-24 right-0 w-32 h-32 bg-yellow-200 rounded-full opacity-20"></div>
            <div className="absolute bottom-24 left-0 w-48 h-48 bg-yellow-100 rounded-full opacity-30"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Page Title with subtle underline decoration */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">Get in Touch</h2>
                    <p className="text-xl text-gray-600 mt-2 italic">We'd love to hear from you!</p>
                    <div className="h-1 w-24 bg-yellow-400 mx-auto mt-4"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 mb-16">
                    {/* Contact Info Card */}
                    <div className="w-full lg:w-2/5">
                        <div className="bg-white rounded-xl shadow-lg p-8 h-full transform hover:scale-[1.02] transition-transform">
                            <div className="flex items-center mb-6">
                                <div className="bg-yellow-400 p-3 rounded-full">
                                    <Mail size={24} className="text-black" />
                                </div>
                                <h3 className="text-2xl font-bold ml-4">Contact Details</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-yellow-100 p-2 rounded-full mr-4 mt-1">
                                        <MapPin size={20} className="text-yellow-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Our Location</h4>
                                        <p className="text-gray-600">Coventry</p>
                                        <p className="text-gray-600">United Kingdom</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-yellow-100 p-2 rounded-full mr-4 mt-1">
                                        <Phone size={20} className="text-yellow-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Phone Number</h4>
                                        <p className="text-gray-600">(44) 7777777777</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-yellow-100 p-2 rounded-full mr-4 mt-1">
                                        <Mail size={20} className="text-yellow-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Email Address</h4>
                                        <p className="text-gray-600">hello@juicebar.com</p>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <h4 className="font-bold text-lg mb-2">Business Hours</h4>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-600">Monday - Friday:</span>
                                        <span className="font-medium">7am - 7pm</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Saturday - Sunday:</span>
                                        <span className="font-medium">8am - 6pm</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="w-full lg:w-3/5">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                            <div className="p-4 bg-yellow-50 border-b border-yellow-100">
                                <h3 className="text-xl font-bold flex items-center">
                                    <MapPin size={20} className="text-yellow-500 mr-2" />
                                    Find Us
                                </h3>
                            </div>
                            <div className="h-[400px]">
                                <iframe
                                    title="Google Maps"
                                    className="w-full h-full border-0"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77964.97055435945!2d-1.6017559745004206!3d52.40630604523535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b151698e1af9%3A0x4f66598ed0f82366!2sCoventry%2C%20UK!5e0!3m2!1sen!2sus!4v1652887635699!5m2!1sen!2sus"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen=""
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-100 rounded-bl-full opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-yellow-100 rounded-tr-full opacity-50"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                                            placeholder="Your email"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows={4}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                                        placeholder="Your message"
                                        required
                                    ></textarea>
                                </div>

                                <div className="text-center pt-4">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center px-8 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition transform hover:-translate-y-1 hover:shadow-lg"
                                        aria-label="Send message"
                                    >
                                        Send Message
                                        <Send size={18} className="ml-2" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer area with social icons */}
            <div className="container mx-auto px-4 mt-20">
                <div className="flex justify-center space-x-6">
                    <a href="#" className="bg-yellow-100 p-3 rounded-full hover:bg-yellow-400 transition-colors">
                        <svg className="w-5 h-5 text-yellow-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href="#" className="bg-yellow-100 p-3 rounded-full hover:bg-yellow-400 transition-colors">
                        <svg className="w-5 h-5 text-yellow-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href="#" className="bg-yellow-100 p-3 rounded-full hover:bg-yellow-400 transition-colors">
                        <svg className="w-5 h-5 text-yellow-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </a>
                    <a href="#" className="bg-yellow-100 p-3 rounded-full hover:bg-yellow-400 transition-colors">
                        <svg className="w-5 h-5 text-yellow-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>

                <div className="border-t border-gray-200 mt-10 pt-6 pb-4">
                    <div className="flex justify-center space-x-8 text-sm text-gray-500">
                        <a href="#" className="hover:text-yellow-600">Privacy Policy</a>
                        <a href="#" className="hover:text-yellow-600">Terms</a>
                        <a href="#" className="hover:text-yellow-600">Contact</a>
                    </div>
                    <p className="text-center text-gray-400 text-sm mt-4">© 2025 FreshSqueeze. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}