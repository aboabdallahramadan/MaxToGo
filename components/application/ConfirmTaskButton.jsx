import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";

const ConfirmTaskButton = ({task, userToRate}) => {
    const t = useTranslations("Application.AvailableTasks");
    const [showModal, setShowModal] = useState(false);
    const [rating, setRating] = useState(0);

    const handleRatingSubmit = () => {
        // Here you'll implement the API call to submit the rating
        setShowModal(false);
    };

    return (
        <>
            <button 
                onClick={() => setShowModal(true)} 
                className="bg-transparent text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-secondary"
            >
                {t("Confirm")}
            </button>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-background p-6 rounded-lg shadow-xl max-w-md w-full">
                        <div className="flex flex-col items-center gap-4">
                            <Image 
                                src={task.user.image} 
                                alt={task.user.name}
                                width={80}
                                height={80}
                                className="rounded-full"
                            />
                            <h3 className="text-xl font-semibold">{task.user.name}</h3>
                            
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        onClick={() => setRating(star)}
                                        className={`text-2xl ${rating >= star ? 'text-primary' : 'text-gray-300'}`}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-4">
                                <button
                                    onClick={handleRatingSubmit}
                                    className="bg-primary text-secondary px-4 py-2 rounded-lg hover:bg-hoverPrimary"
                                >
                                    {t("Submit")}
                                </button>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="bg-transparent text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-secondary"
                                >
                                    {t("Cancel")}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ConfirmTaskButton;
