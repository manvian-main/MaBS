import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="bg-[#121212] text-white min-h-screen pt-32 pb-20 px-6 md:px-20 lg:px-40">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
                <p className="text-gray-400 mb-10">Last Updated: March 31, 2026</p>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <p>These Terms & Conditions govern all services provided by Manvian. By using our services, you agree to the following terms.</p>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Service Agreement</h2>
                        <p>All services including Business Consulting, Recruitment (RAAS), Digital Marketing, Technology, and Multimedia are delivered based on agreed proposals and timelines.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Scope of Work</h2>
                        <p>Clients must ensure all requirements are clearly defined. Any additional changes or revisions beyond the agreed scope may result in extra charges.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Payments</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Payments must be made as per agreed terms</li>
                            <li>Delays in payment may affect project timelines</li>
                            <li>Additional work will be billed separately</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
                        <p>All designs, content, and development work remain the property of Manvian unless otherwise agreed in writing.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Project Timelines</h2>
                        <p>We strive to meet deadlines, but delays may occur due to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Changes in requirements</li>
                            <li>Delayed client feedback</li>
                            <li>External factors</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Third-Party Services</h2>
                        <p>We may integrate third-party tools (ads, hosting, software). We are not responsible for issues caused by third-party services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
                        <p>Manvian is not liable for indirect or consequential losses arising from the use of our services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Termination</h2>
                        <p>Either party may terminate the project under agreed conditions. Payments made for completed work are non-refundable.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">9. Acceptance</h2>
                        <p>By engaging with Manvian, you acknowledge that you have read and agreed to these terms.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
