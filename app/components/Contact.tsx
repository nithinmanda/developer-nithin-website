'use client';

import React, { useState } from "react";
import NoiseButton from "./shared/NoiseButton";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormStatus {
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState<FormStatus>({
        type: 'idle',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Reset status
        setStatus({ type: 'loading', message: 'Sending your message...' });

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
                });
                // Clear form
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                setStatus({
                    type: 'error',
                    message: data.error || 'Failed to send message. Please try again.'
                });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'An error occurred. Please check your connection and try again.'
            });
        }
    };

    return (
        <div id="contact" className="relative flex flex-col w-full">
            <div className="layout-container flex flex-col w-full max-w-[1200px] mx-auto px-4 lg:px-10 ">
                {/* Heading Section */}
                <div className="flex flex-col gap-4 mb-12 max-w-3xl animate-fade-in">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white">
                        Let's Build Something <span className="text-primary">Together</span>
                    </h1>
                    <p className="text-slate-500 dark:text-gray-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
                        Ready to start your next project? Fill out the form below or reach us directly. We typically respond within 24 hours.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left Column: Contact Form */}
                    <div className="lg:col-span-7 flex flex-col gap-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
                        <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#1a2632] border border-slate-200 dark:border-white/5 shadow-sm">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send us a message</h3>

                            {/* Status Messages */}
                            {status.type !== 'idle' && (
                                <div className={`mb-6 p-4 rounded-lg ${status.type === 'success'
                                        ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                                        : status.type === 'error'
                                            ? 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
                                            : 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                                    }`}>
                                    <p className={`text-sm font-medium ${status.type === 'success'
                                            ? 'text-green-800 dark:text-green-200'
                                            : status.type === 'error'
                                                ? 'text-red-800 dark:text-red-200'
                                                : 'text-blue-800 dark:text-blue-200'
                                        }`}>
                                        {status.message}
                                    </p>
                                </div>
                            )}

                            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                                <div className="flex flex-col md:flex-row gap-5">
                                    <label className="flex flex-col flex-1 gap-2">
                                        <span className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300">Full Name</span>
                                        <input
                                            className="w-full rounded-lg border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#111a22] h-12 px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-400 dark:placeholder:text-gray-500 transition-all text-gray-900 dark:text-white"
                                            placeholder="Jane Doe"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            disabled={status.type === 'loading'}
                                        />
                                    </label>
                                    <label className="flex flex-col flex-1 gap-2">
                                        <span className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300">Email Address</span>
                                        <input
                                            className="w-full rounded-lg border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#111a22] h-12 px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-400 dark:placeholder:text-gray-500 transition-all text-gray-900 dark:text-white"
                                            placeholder="jane@company.com"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={status.type === 'loading'}
                                        />
                                    </label>
                                </div>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300">Subject</span>
                                    <input
                                        className="w-full rounded-lg border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#111a22] h-12 px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-400 dark:placeholder:text-gray-500 transition-all text-gray-900 dark:text-white"
                                        placeholder="Project Inquiry: Web Application"
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        disabled={status.type === 'loading'}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300">Message</span>
                                    <textarea
                                        className="w-full rounded-lg border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#111a22] min-h-[160px] p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-400 dark:placeholder:text-gray-500 resize-y transition-all text-gray-900 dark:text-white"
                                        placeholder="Tell us about your project requirements, timeline, and goals..."
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        disabled={status.type === 'loading'}
                                    ></textarea>
                                </label>
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={status.type === 'loading'}
                                        className="w-full md:w-auto"
                                    >
                                        <NoiseButton
                                            text={status.type === 'loading' ? 'Sending...' : 'Send Message'}
                                            className="w-full md:w-auto"
                                        />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* Right Column: Info & Map */}
                    <div className="lg:col-span-5 flex flex-col gap-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                        {/* Contact Details Cards */}
                        <div className="grid grid-cols-1 gap-4">
                            {/* Email */}
                            <div className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#1a2632] p-4 transition-transform hover:-translate-y-1">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">email</span>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-sm font-bold text-slate-500 dark:text-gray-400">Email</h3>
                                    <a className="text-lg font-bold hover:text-primary transition-colors text-gray-900 dark:text-white" href="mailto:hello@developer.nithin.com">hello@developer.nithin.com</a>
                                </div>
                            </div>
                            {/* Phone */}
                            <div className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#1a2632] p-4 transition-transform hover:-translate-y-1">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">call</span>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-sm font-bold text-slate-500 dark:text-gray-400">Phone</h3>
                                    <a className="text-lg font-bold hover:text-primary transition-colors text-gray-900 dark:text-white" href="tel:+15550123456">+1 (555) 012-3456</a>
                                </div>
                            </div>
                            {/* Location */}
                            <div className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#1a2632] p-4 transition-transform hover:-translate-y-1">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-sm font-bold text-slate-500 dark:text-gray-400">Location</h3>
                                    <p className="text-lg font-bold text-gray-900 dark:text-white">123 Tech Boulevard, SF, CA</p>
                                </div>
                            </div>
                        </div>
                        {/* Map Section */}
                        <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-white/5 bg-[#1a2632] group mb-4">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                                data-alt="Dark stylized map view of San Francisco city streets"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTez15G2VNC5c2mTUD-PU3hMumxKW1ho2G4WATTmQPSjfa8xnwKxu2TZRlZhAEyfBlSijM532EL4_E6FeWZP9bp68_SX3QQVAgxD9L34mugJwcqJdKVHeJPp-woKUdpHhZnsDAR5pTRqR1O7phho-oJzZ2X0b26sDfLl87nzYGyn0N7Zc6r2Ievcj6213mrO9PImB62NiQ_arGRlhKSD9HwXehJt08vijZ09IktsT8Ch8mmXvVc275i9G_Kb3G3fLeA6pWToPEktXY")',
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#101922] to-transparent opacity-80"></div>
                            {/* Map Pin Overlay */}
                            <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-blue-500/50">
                                    <span className="material-symbols-outlined text-[20px]">business</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-primary">Headquarters</p>
                                    <p className="text-sm font-bold text-white">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
