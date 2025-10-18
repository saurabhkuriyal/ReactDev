import { Mail } from 'lucide-react';

export default function page() {
    const emailAddress = "sourabhkuriyal77@gmail.com";

    return (
        <div className="bg-gradient-to-br from-black to-gray-900 text-white min-h-screen flex items-center justify-center p-4">
            <div className="bg-black p-8 sm:p-12 rounded-2xl shadow-2xl max-w-lg w-full text-center border-2 border-white/20">

                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    Under Development
                </h1>

                <p className="text-xl sm:text-2xl font-normal mb-6 text-gray-200">
                    Our website is getting a professional upgrade.
                </p>

                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                    This page is currently undergoing testing and we value your feedback. Thank you for your patience as we work to improve your experience.
                </p>

                <p className="text-sm font-light text-gray-500">
                    Please check back soon!
                </p>

                {/* The section with the mail icon */}
                <div className="mt-8 flex justify-center items-center">
                    {/* Wrap the icon in an anchor tag with the mailto: protocol */}
                    <a
                        href={`mailto:${emailAddress}`}
                        className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                    >
                        {/* The Lucide Mail icon */}
                        <Mail className="w-6 h-6" />
                        <span className="text-lg">{emailAddress}</span>
                    </a>
                </div>

            </div>
        </div>
    );
}
