import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="bg-[#121212] text-white min-h-screen pt-32 pb-20 px-6 md:px-20 lg:px-40">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund & Cancellation Policy</h1>
                <p className="text-gray-400 mb-10">Last Updated: March 31, 2026</p>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <p>At Manvian, we aim to deliver high-quality services and ensure client satisfaction. This policy outlines refund and cancellation conditions.</p>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Eligibility for Refunds</h2>
                        <p className="mb-4">Refunds may be considered if:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Services have not been started within the agreed timeline</li>
                            <li>There are major unresolved technical issues</li>
                            <li>The project is cancelled before significant work begins</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Refund Request Period</h2>
                        <p>Refund requests must be made within 15 days of service delivery.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Non-Refundable Cases</h2>
                        <p className="mb-4">Refunds will not be provided if:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Work has already started or is completed</li>
                            <li>Deliverables are approved by the client</li>
                            <li>Services are customized or tailored</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Cancellation Policy</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Clients can cancel before project initiation</li>
                            <li>Once work begins, cancellation charges may apply</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Refund Process</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Submit a request via email</li>
                            <li>Include payment proof and reason</li>
                            <li>Review will be completed within 5 business days</li>
                            <li>Approved refunds will be processed within 7–10 business days</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                        <p>For refund requests, contact:</p>
                        <p className="mt-2 text-white font-medium">Email: operations@manvian.com</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
