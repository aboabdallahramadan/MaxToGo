import { useTranslations } from "next-intl";

const MovingabModal = ({ isOpen, onClose, content, buttonText, buttonLink }) => {
    const t = useTranslations("Header");
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-background  rounded-lg p-6 max-w-lg w-full">
        <div className="flex justify-center items-center w-full relative">
            <button onClick={onClose} className="text-right text-red-500 font-bold absolute right-0 top-0">X</button>
            <h2 className="text-2xl font-bold text-center text-primary">{t("Movingab")}</h2>
        </div>
        <div className="mt-4">
          <p className="text-foreground">{content}</p>
        </div>
        <div className="mt-6 text-center">
          <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="text-primary border border-primary hover:bg-primary hover:text-secondary py-2 px-4 rounded-lg">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovingabModal;