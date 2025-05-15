import { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';

export default function NewsletterPopup() {
    // Initialize hasClosed from localStorage
    const [hasClosed, setHasClosed] = useState(() => {
        return localStorage.getItem('newsletter_closed') === 'true';
    });

    // Show popup only if not closed
    const [showPopup, setShowPopup] = useState(() => !hasClosed);

    const [email, setEmail] = useState(() => localStorage.getItem('newsletter_email') || '');
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Save email when changed
    useEffect(() => {
        localStorage.setItem('newsletter_email', email);
    }, [email]);

    // Show popup on scroll near bottom or after 3 seconds if not closed and popup hidden
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const clientHeight = document.documentElement.clientHeight;

            if ((scrollTop + clientHeight) / scrollHeight > 0.95) {
                if (hasClosed) {
                    setHasClosed(false);
                    localStorage.setItem('newsletter_closed', 'false');
                }
                setShowPopup(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        const timeout = setTimeout(() => {
            if (!showPopup) setShowPopup(true);
        }, 3000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeout);
        };
    }, [hasClosed]);

    const handleSubmit = () => {
        if (email && email.includes('@')) {
            const storedEmails = JSON.parse(localStorage.getItem('newsletter_emails') || '[]');
            if (!storedEmails.includes(email)) {
                storedEmails.push(email);
                localStorage.setItem('newsletter_emails', JSON.stringify(storedEmails));
            }

            setIsSubmitted(true);

            setTimeout(() => {
                setShowPopup(false);
                setIsSubmitted(false);
                setEmail('');
                localStorage.removeItem('newsletter_email');
            }, 3000);
        }
    };

    const exportToCSV = () => {
        const emails = JSON.parse(localStorage.getItem('newsletter_emails') || '[]');
        if (emails.length === 0) {
            alert('No emails to export!');
            return;
        }

        const csvContent =
            'data:text/csv;charset=utf-8,' +
            ['Email', ...emails].join('\n');

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'newsletter_emails.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleClose = () => {
        setShowPopup(false);
        setHasClosed(true);
        localStorage.setItem('newsletter_closed', 'true');
    };

    if (!showPopup || hasClosed) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 max-w-sm w-full animate-slide-in-right">
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-cream"></div>
                    <div
                        className="absolute top-0 right-0 w-2/3 h-full bg-lemon transform rotate-6 origin-bottom-left translate-x-1/4 translate-y-1/4"
                        style={{ borderRadius: '100% 0 0 0' }}
                    ></div>
                    <div
                        className="absolute bottom-0 left-0 w-32 h-32 bg-accent-green rounded-full opacity-30 -ml-16 -mb-16"
                    ></div>
                </div>

                <button
                    onClick={handleClose}
                    className="absolute right-2 top-2 z-[9999] p-1 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    style={{ pointerEvents: 'auto' }}
                    aria-label="Close newsletter popup"
                >
                    <X size={16} className="text-black" />
                </button>

                <div className="relative z-10 p-6">
                    {!isSubmitted ? (
                        <>
                            <div className="mb-4">
                                <h2 className="text-3xl font-extrabold text-black mb-1">Newsletter.</h2>
                                <div className="flex items-center space-x-2 mb-4">
                                    <span className="text-sm font-medium text-black">Sign up today and get a juicy</span>
                                    <span className="inline-block bg-lemon px-2 py-1 text-black font-bold rounded">10% off</span>
                                </div>

                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full pr-10 py-2 pl-3 bg-white border-b-2 border-lemon rounded focus:outline-none focus:ring-1 focus:ring-lemon"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button
                                        onClick={handleSubmit}
                                        className="absolute right-0 top-0 h-full px-2 text-lemon hover:text-accent-green transition-colors"
                                        aria-label="Submit email"
                                    >
                                        <Send size={18} />
                                    </button>
                                </div>

                                <div className="mt-4 text-xs text-gray-500">
                                    By signing up, you agree to receive email marketing
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center space-x-1">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-lemon">
                                        <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,18c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6 S15.31,18,12,18z"></path>
                                    </svg>
                                    <span className="text-xs">Fresh Offers</span>
                                </div>

                                <div className="flex items-center space-x-1">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-accent-green">
                                        <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22L6.66,19.7C7.14,19.87,7.64,20,8,20C19,20,22,3,22,3C21,5,14,5.25,9,6.25C4,7.25,2,11.5,2,13.5 C2,15.5,3.75,17.25,3.75,17.25C7,8,17,8,17,8z"></path>
                                    </svg>
                                    <span className="text-xs">Seasonal Flavors</span>
                                </div>

                                <div className="flex items-center space-x-1">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-lemon">
                                        <path d="M12,2.08L5.5,8.58C1.91,12.17,1.91,17.83,5.5,21.41C7.3,23.21,9.65,24,12,24s4.7-0.79,6.5-2.59 c3.59-3.58,3.59-9.24,0-12.82L12,2.08z"></path>
                                    </svg>
                                    <span className="text-xs">Recipes</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-2">
                            <div className="inline-block p-2 rounded-full bg-accent-green bg-opacity-20 mb-3">
                                <svg className="w-8 h-8 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-2">Thank you!</h3>
                            <p className="text-sm text-gray-600">Your discount code is on its way.</p>

                            {/* Export button after submission */}
                            <button
                                onClick={exportToCSV}
                                className="mt-4 bg-lemon text-black px-4 py-2 rounded shadow hover:bg-accent-green transition-colors"
                            >
                                Export Emails to CSV
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
