import React, { useState } from 'react';
import OfferItem from './OfferItem';
import { useTranslations } from 'next-intl';

const TaskOffers = ({ task }) => {
    const t = useTranslations("Application.AvailableTasks");
  const [offers, setOffers] = useState(task.offers || []);

  const handleAcceptOffer = async (offerId) => {
    try {
      // Here you would implement the API call to accept the offer
      const response = await fetch(`/api/offers/${offerId}/accept`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Update the local state to reflect the acceptance
        setOffers(offers.map(offer => 
          offer.id === offerId 
            ? { ...offer, status: 'accepted' }
            : { ...offer, status: 'rejected' }
        ));
      }
    } catch (error) {
      console.error('Error accepting offer:', error);
    }
  };

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-6">{t("Offers")} ({offers.length})</h2>
      {offers.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          {t("NoOffersYetForThisTask")}
        </p>
      ) : (
        <div className="space-y-4">
          {offers.map((offer) => (
            <OfferItem
              key={offer.id}
              offer={offer}
              onAccept={handleAcceptOffer}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskOffers;
