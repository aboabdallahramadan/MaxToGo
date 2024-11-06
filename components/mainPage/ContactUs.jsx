"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import SectionHeader from "./SectionHeader";
import { toast } from "react-toastify";
import Spinner from "@/components/Spinner";
import FormContainer from "@/components/FormContainer";

const ContactUs = () => {
    const t = useTranslations("Contact");
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        location: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success(t("SuccessMessage"));
                // Optionally reset form
                setFormData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    location: '',
                    message: ''
                });
            } else {
                toast.error(t("ErrorMessage"));
            }
        } catch (error) {
            toast.error(t("ErrorMessage"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact">
            <SectionHeader name={t("Contact")}></SectionHeader>
            <div className="container pb-8">
                <p className="text-primary text-center text-lg mb-4">
                    {t("ContactInfo")}
                </p>

                <FormContainer>
                    <form onSubmit={handleSubmit} className="bg-gray-800 p-12 rounded-lg shadow-lg border border-primary">
                        <div className="flex justify-between items-center gap-4 flex-col sm:flex-row">
                            <div className="flex flex-col items-start justify-between">
                                <label htmlFor="firstName">{t("FirstName")}</label>
                                <input className="bg-transparent border-b-primary border-b focus:outline-none" type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                            </div>
                            <div className="flex flex-col items-start justify-between">
                                <label htmlFor="lastName">{t("LastName")}</label>
                                <input className="bg-transparent border-b-primary border-b focus:outline-none" type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-between mt-6 w-full">
                            <label htmlFor="phone">{t("PhoneNumber")}</label>
                            <input className="bg-transparent border-b-primary border-b focus:outline-none w-full" id="phone" type="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className="flex flex-col items-start justify-between mt-6 w-full">
                            <label htmlFor="email">{t("Email")}</label>
                            <input className="bg-transparent border-b-primary border-b focus:outline-none w-full" id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="flex flex-col items-start justify-between mt-6 w-full">
                            <label htmlFor="location">{t("Location")}</label>
                            <input className="bg-transparent border-b-primary border-b focus:outline-none w-full" id="location" type="text" name="location" value={formData.location} onChange={handleChange} required />
                        </div>
                        <div className="flex flex-col items-start justify-between mt-6 w-full">
                            <label htmlFor="message">{t("Message")}</label>
                            <textarea className="bg-transparent border-primary border focus:outline-none w-full" id="message" name="message" value={formData.message} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="mt-6 bg-primary text-secondary px-4 py-2 rounded">{loading ? <Spinner /> :t("Submit")}</button>
                    </form>
                </FormContainer>
            </div>
        </section>
    );
};

export default ContactUs;
