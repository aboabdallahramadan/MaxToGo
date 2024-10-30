import { useTranslations } from "next-intl";
const OfferItem = ({ offer, onAccept }) => {
    const t = useTranslations("Application.AvailableTasks");
  return (
    <div className="border rounded-lg p-4 mb-4 border-primary shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-3">
            <img 
              src={offer.user.avatar || '/default-avatar.png'} 
              alt="User avatar" 
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-medium">{offer.user.name}</h3>
              <p className="text-sm text-gray-500">{offer.user.rating} ★</p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-primary">{offer.price} €</p>
          <button
            onClick={() => onAccept(offer.id)}
            className="mt-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-hoverPrimary transition-colors"
          >
            {t("AcceptOffer")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferItem;
