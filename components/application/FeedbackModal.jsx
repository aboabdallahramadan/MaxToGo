"use client";
import {useState} from 'react'
import { useTranslations } from 'next-intl';

const FeedbackModal = ({ isOpen, onClose }) => {
    const t = useTranslations("Application.Profile");
    const [feedback, setFeedback] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle feedback submission logic here
      onClose();
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-background p-6 rounded-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">{t("SendFeedback")}</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full h-40 p-3 border-2 border-primary rounded-lg bg-transparent text-foreground resize-none focus:outline-none"
              placeholder={t("WriteFeedbackHere")}
              required
            />
            <div className="flex justify-end gap-4 mt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-foreground border border-primary rounded-lg hover:bg-primary/10"
              >
                {t("Cancel")}
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-secondary rounded-lg hover:bg-primary/90"
              >
                {t("Submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default FeedbackModal