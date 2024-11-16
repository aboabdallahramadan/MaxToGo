"use client"
import { useState } from "react";
import { useTranslations } from "next-intl";

const MyOffer = ({ offer, onDelete, onSave }) => {
  const t = useTranslations("Application.AvailableTasks");
  const [isEditing, setIsEditing] = useState(false);
  const [editedPrice, setEditedPrice] = useState(offer.price);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    <div className="w-full mt-[-5px]">
      <div className="flex justify-center items-center gap-4 p-4 border-2  border-foreground border-t-transparent rounded-lg transition-all duration-300">
        <p className="text-primary font-bold text-xl flex-1 text-start">{t("MyOffer")}</p>
        {isEditing ? (
          <input
            type="number"
            value={editedPrice}
            onChange={(e) => setEditedPrice(e.target.value)}
            className="text-primary bg-transparent font-bold text-xl border-b-2 border-primary focus:outline-none"
          />
        ) : (
          <p className="text-primary font-bold text-xl">{offer.price} kr</p>
        )}
        {isEditing ? (
          <button
            onClick={handleSaveClick}
            className="hover:text-secondary hover:bg-primary text-primary border border-primary px-2 py-1 rounded-md transition-all duration-300"
          >
            {t("Save")}
          </button>
        ) : (
          <button
            onClick={handleEditClick}
            className="border border-primary text-primary hover:text-secondary hover:bg-primary px-2 py-1 rounded-md transition-all duration-300"
          >
            {t("Edit")}
          </button>
        )}
        <button
          onClick={handleDeleteClick}
          className="border border-red-500 text-red-500 hover:text-foreground hover:bg-red-500 px-2 py-1 rounded-md transition-all duration-300"
        >
          {t("Delete")}
        </button>
      </div>
    </div>
  );
};

export default MyOffer;