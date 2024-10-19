"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import Spinner from "../Spinner";


const Subscribe = () => {
  const t = useTranslations('footer');
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Validate email
    if (!email) {
      toast.error(t("EnterValidEmail"));
      setLoading(false);
      return;
    }

    try {
      // Make the API request
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(t("SuccessMessage"));
      } else {
        toast.error(data.message || t("ErrorMessage"));
      }
    } catch (error) {
      toast.error(t("ErrorMessage"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center gap-2 md:mt-4 xl:mt-auto">
      <h3 className="text-center text-xl mb-2">{t("Subscribe")}</h3>
      <form onSubmit={handleSubmit} className="flex flex-col justify-between items-center gap-2">
        <input
          type="email"
          name="email"
          id="email"
          className="border-2 border-primary bg-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("Email")}
          required
        />
        <button
          type="submit"
          className="bg-primary rounded py-1 px-3"
          disabled={loading}
        >
          {loading ? <Spinner /> : t("Subscribe")}
        </button>
      </form>
      <p>{t("SubscribeInfo")}</p>
    </div>
  );
};

export default Subscribe;
