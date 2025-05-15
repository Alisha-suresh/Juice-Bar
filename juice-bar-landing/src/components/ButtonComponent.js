import React from 'react';

const Button = ({
    children,
    href,
    onClick,
    variant = "primary",
    size = "md",
    className = "",
    icon = null
}) => {
    const baseClasses = "inline-block font-bold rounded-full transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center";

    const variantClasses = {
        primary: "bg-yellow-400 hover:bg-yellow-500 text-black",
        secondary: "bg-black hover:bg-gray-800 text-white",
        outline: "bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
    };

    const sizeClasses = {
        sm: "py-2 px-4 text-sm",
        md: "py-3 px-6",
        lg: "py-4 px-8 text-lg"
    };

    const Tag = href ? 'a' : 'button';
    const linkProps = href ? { href } : { onClick };

    return (
        <Tag
            {...linkProps}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        >
            {children}
            {icon && <span className="ml-2">{icon}</span>}
        </Tag>
    );
};

// Call-to-Action Component
const CallToAction = ({
    title,
    subtitle,
    buttonText,
    buttonLink,
    buttonVariant = "secondary",
    bgColor = "bg-yellow-400"
}) => {
    return (
        <section className={`${bgColor} relative overflow-hidden py-16 px-6 md:px-12`}>
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full opacity-10"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">{title}</h2>
                    <p className="text-lg mb-8 text-black opacity-80">{subtitle}</p>
                    <Button
                        href={buttonLink}
                        variant={buttonVariant}
                        size="lg"
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export { Button, CallToAction };