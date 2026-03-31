import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-[#121212] text-white min-h-screen pt-32 pb-20 px-6 md:px-20 lg:px-40">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-gray-400 mb-10">Last Updated: March 31, 2026</p>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <p>At Manvian, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name, email address, phone number</li>
                            <li>Business details and company information</li>
                            <li>Website usage data (IP address, browser, pages visited)</li>
                            <li>Any information you provide through forms or inquiries</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
                        <p className="mb-4">We use your information to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide and improve our services (Business Consulting, RAAS, Digital Marketing, Technology & Multimedia)</li>
                            <li>Respond to inquiries and provide support</li>
                            <li>Send updates, offers, or marketing communication</li>
                            <li>Improve user experience and website performance</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Data Protection</h2>
                        <p>We implement appropriate security measures to protect your data from unauthorized access, misuse, or disclosure.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Data Sharing</h2>
                        <p>We do not sell or trade your personal information. We may share data with trusted partners only when necessary to deliver our services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
                        <p className="mb-4">You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Access or update your information</li>
                            <li>Request deletion of your data</li>
                            <li>Opt out of marketing communications</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Cookies</h2>
                        <p>We use cookies to enhance user experience and analyze website traffic.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Changes to Policy</h2>
                        <p>We may update this policy from time to time. Please review it periodically.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                        <p>If you have any questions, contact us at:</p>
                        <p className="mt-2 text-white font-medium">Email: operations@manvian.com</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
