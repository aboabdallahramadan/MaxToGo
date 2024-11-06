"use client";
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import QRCode from 'react-qr-code';

const DownloadAppButton = () => {
    const t = useTranslations('Hero');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <button
                onClick={toggleModal}
                className="bg-primary text-secondary flex justify-center items-center px-3 py-2 whitespace-nowrap rounded text-xs sm:text-base"
            >
                {t("Downland")}
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-background p-6 rounded-lg shadow-xl">
                        <div className="flex flex-col items-center gap-4">
                            <h3 className="text-lg font-bold">{t("ScanQRCode")}</h3>
                            <div className="bg-white p-4 rounded">
                                <QRCode 
                                    value="https://yourapplink.com" 
                                    size={250}
                                />
                            </div>
                            <button 
                                onClick={toggleModal}
                                className="mt-4 bg-primary text-secondary px-4 py-2 rounded hover:bg-hoverPrimary"
                            >
                                {t("Close")}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DownloadAppButton;
