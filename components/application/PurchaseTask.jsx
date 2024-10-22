"use client";
import { useState } from "react";
import {BsInfoCircle, BsPerson, BsPhone} from "react-icons/bs";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import Spinner from "../Spinner";
import { useRouter } from "@/i18n/routing";
const PurchaseTask = ({task}) => {
const t = useTranslations("Application.AvailableTasks");
    // Error states for validation
  const [taskMasterError, setTaskMasterError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskMaster, setTaskMaster] = useState("");
  const [phone, setPhone] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // Function to handle "Purchase" button click
  const purchaseTask = () => {
    setIsModalOpen(true); // Show the modal
  };

  // Function to handle the modal's "Yes" button click
  const confirmPurchase = async () => {
    let isValid = true;

    // Validate TaskMaster
    if (!taskMaster) {
      setTaskMasterError(t("TaskMasterRequired"));
      isValid = false;
    } else {
      setTaskMasterError(""); // Clear error if valid
    }

    // Validate Phone
    if (!phone) {
      setPhoneError(t("PhoneRequired"));
      isValid = false;
    } else {
      setPhoneError(""); // Clear error if valid
    }

    if (!isValid) return; // If validation fails, do not proceed

    try {
        setIsLoading(true);
        // Construct the payload for the API request
        const payload = {
          taskMaster,
          phone,
          taskId: task.id,
        };
    
        // Make the POST request to your API
        const response = await fetch("/api/task/purchase", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
    
        // Parse the response
        const data = await response.json();
    
        if (response.ok) {
          // Show a success toast
          toast.success(t("PurchaseSuccess"));
          router.replace(`/application/purchases/${task.id}`,{scroll: true})

        } else {
          // Show an error toast with the message from the API
          toast.error(data.message || t("PurchaseFailed"));
        }
      } catch (error) {
        // Show a toast for network or other errors
        toast.error(t("PurchaseFailed"));
      } finally {
        setIsLoading(false);
      }
  };

  // Function to close the modal without confirming
  const cancelPurchase = () => {
    setIsModalOpen(false); // Close the modal
  };
  return (
    <>
        <button className="py-2 px-4 text-lg text-foreground border border-primary hover:text-secondary hover:bg-primary rounded-xl" onClick={purchaseTask}>{t("Purchase")}</button>
    {/* Modal for confirming purchase */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-secondary p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col justify-start gap-6 items-center">

            {/* Modal title */}
            <div className="flex justify-start gap-4 items-start">
              <BsInfoCircle className="text-primary text-5xl"/>
              <h2 className="text-lg font-bold mb-4">{t("ConfirmPurchase" , {action: task.type == "truck" ? t("buy") : t("offer"), type: task.type , price: task.price})}</h2>
            </div>

            {/* TaskMaster input */}
            <div className="mb-4 w-full">
              <div className="flex justify-start gap-2 items-center mb-2">
                <BsPerson className="text-primary text-lg"/>
                <label className="block mb-2 font-bold">{t("TaskMaster")}:</label>
              </div>
              <input
                type="text"
                className="bg-transparent border-b-primary border-b focus:outline-none text-primary w-full"
                value={taskMaster}
                onChange={(e) => setTaskMaster(e.target.value)}
              />
              {taskMasterError && <p className="text-red-600">{taskMasterError}</p>} {/* Error message */}
            </div>

            {/* Phone input */}
            <div className="mb-4 w-full">
              <div className="flex justify-start gap-2 items-center mb-2">
                <BsPhone className="text-primary text-lg"/>
                <label className="block mb-2 font-bold">{t("Phone")}:</label>
              </div>
              <input
                type="text"
                className="bg-transparent border-b-primary border-b focus:outline-none text-primary w-full"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {phoneError && <p className="text-red-600">{phoneError}</p>} {/* Error message */}
            </div>

            {/* Modal buttons */}
            <div className="flex justify-between w-full">
              <button className="py-2 px-4 bg-primary text-white rounded-lg" onClick={confirmPurchase}>
                {
                isLoading ? <Spinner/> :    t("Yes")
                }
              </button>
              <button className="py-2 px-4 bg-gray-300 text-gray-800 rounded-lg" onClick={cancelPurchase}>
                {t("No")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PurchaseTask