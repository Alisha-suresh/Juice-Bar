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
        <section className="relative mt-16 mb-8 overflow-hidden">
            {/* Yellow liquid drip effect at top */}
            <div className="absolute top-0 left-0 w-full overflow-hidden h-16">
                <div className="absolute -top-6 left-1/4 w-12 h-12 bg-yellow-400 rounded-full"></div>
                <div className="absolute -top-2 left-1/4 w-12 h-24 bg-yellow-400 rounded-b-full"></div>

                <div className="absolute -top-6 left-2/4 w-16 h-16 bg-yellow-400 rounded-full"></div>
                <div className="absolute -top-2 left-2/4 w-16 h-28 bg-yellow-400 rounded-b-full"></div>

                <div className="absolute -top-6 left-3/4 w-12 h-12 bg-yellow-400 rounded-full"></div>
                <div className="absolute -top-2 left-3/4 w-12 h-20 bg-yellow-400 rounded-b-full"></div>
            </div>

            <div className="container mx-auto px-4 pt-16">
                <h2 className="text-4xl font-black text-center mb-2">Get in Touch</h2>
                <p className="text-xl italic text-center mb-12 font-light">We'd love to hear from you!</p>

                <div className="flex flex-col lg:flex-row gap-8 mb-12">
                    {/* Contact Info Side */}
                    <div className="w-full lg:w-2/5 bg-white rounded-lg shadow-lg p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32">
                            <div className="absolute top-0 right-0 w-full h-full bg-yellow-400 rounded-bl-full opacity-20"></div>
                        </div>

                        <h3 className="text-2xl font-bold mb-6">Contact Details</h3>

                        <div className="flex items-start mb-6">
                            <div className="bg-yellow-400 p-2 rounded-full mr-4">
                                <MapPin size={20} className="text-black" />
                            </div>
                            <div>
                                <h4 className="font-bold">Our Location</h4>
                                <p className="text-gray-700">123 Juice Lane</p>
                                <p className="text-gray-700">Portland, OR 97201</p>
                            </div>
                        </div>

                        <div className="flex items-start mb-6">
                            <div className="bg-yellow-400 p-2 rounded-full mr-4">
                                <Phone size={20} className="text-black" />
                            </div>
                            <div>
                                <h4 className="font-bold">Phone Number</h4>
                                <p className="text-gray-700">(503) 555-1234</p>
                            </div>
                        </div>

                        <div className="flex items-start mb-6">
                            <div className="bg-yellow-400 p-2 rounded-full mr-4">
                                <Mail size={20} className="text-black" />
                            </div>
                            <div>
                                <h4 className="font-bold">Email Address</h4>
                                <p className="text-gray-700">hello@juicebar.com</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="font-bold mb-2">Hours</h4>
                            <p className="text-gray-700">Monday - Friday: 7am - 7pm</p>
                            <p className="text-gray-700">Saturday - Sunday: 8am - 6pm</p>
                        </div>
                    </div>

                    {/* Map Side */}
                    <div className="w-full lg:w-3/5 bg-white rounded-lg shadow-lg overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-12 bg-white z-10 flex items-center px-4">
                            <h3 className="text-lg font-bold">Find Us</h3>
                        </div>

                        {/* Mock Google Maps Embed - Replace with actual Google Maps embed */}
                        <div className="w-full h-full bg-gray-200 pt-12">
                            <iframe
                                title="Google Maps"
                                className="w-full h-96"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178832.0971758749!2d-122.7653295!3d45.5426312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f6d18591!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1652887635699!5m2!1sen!2sus"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 relative overflow-hidden">
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-400 opacity-20 rounded-full"></div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-400 opacity-20 rounded-full"></div>

                    <h3 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h3>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                                    placeholder="Your email"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={4}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                                placeholder="Your message"
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button
                                onClick={handleSubmit}
                                className="inline-flex items-center px-8 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition transform hover:scale-105"
                            >
                                Send Message
                                <Send size={18} className="ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Yellow liquid pool effect at bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <div className="w-full h-6 bg-cream-100 relative">
                    <div className="absolute -bottom-3 left-1/5 w-16 h-6 bg-yellow-400 rounded-t-full"></div>
                    <div className="absolute -bottom-2 left-2/5 w-12 h-4 bg-yellow-400 rounded-t-full"></div>
                    <div className="absolute -bottom-4 left-3/5 w-20 h-8 bg-yellow-400 rounded-t-full"></div>
                    <div className="absolute -bottom-3 left-4/5 w-16 h-6 bg-yellow-400 rounded-t-full"></div>
                </div>
            </div>
        </section>
    );
}