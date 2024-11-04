"use client";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Invoice = ({invoice}) => {
  const t = useTranslations("Application.Profile");
  const componentRef = useRef(null);

  const dummyInvoice = {
    invoiceNumber: "1436",
    customerNumber: "406",
    invoiceDate: "2024-08-23",
    deliveryDate: "2024-08-23",
    reference: "y",
    items: [
      {
        articleNumber: "2",
        description: "Flytthjälp",
        quantity: "3,00",
        unit: "tim",
        price: "2 000,00",
        total: "6 000,00"
      }
    ],
    company: {
      name: "Max To Go",
      address: "SÖDRA HUNNETORPSVÄGEN 72 D",
      postcode: "25662 HELSINGBORG",
      phone: "0733033044",
      email: "info@flyttpro.se",
      website: "www.flyttpro.se",
      orgNumber: "559317-7305",
      vatNumber: "SE559317730501"
    },
    client: {
      name: "FlyttPro",
      address: "Häradsgatan 4",
      postcode: "25659 HELSINGBORG"
    },
    payment: {
      subtotal: "6 000,00",
      vat: "1 500,00",
      rounding: "0,00",
      total: "7 500,00",
      dueDate: "2024-08-23",
      ocr: "143669",
      bankgiro: "5678-0562",
      swish: "1232469633"
    }
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef,
    contentRef: componentRef,
    documentTitle: `invoice-${invoice.invoiceNumber}`,
  });

  return (
    <div>
      

      <div ref={componentRef} className="max-w-4xl mx-auto p-8 bg-white text-black shadow-lg rounded-lg print:shadow-none">
        {/* Header Section */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
          <Image src="/images/logo.png" alt="Max To Go" width={80} height={80} />
            <h2 className="font-bold text-xl mb-4">{dummyInvoice.company.name}</h2>
            <p>{dummyInvoice.company.address}</p>
            <p>{dummyInvoice.company.postcode}</p>
          </div>
          <div className="text-right">
            <h1 className="text-2xl font-bold mb-2">{t("Invoice")}</h1>
            <p className="font-bold">{t("InvoiceNumber")}: {dummyInvoice.invoiceNumber}</p>
            <p>{t("CustomerNumber")}: {dummyInvoice.customerNumber}</p>
            <p>{t("InvoiceDate")}: {dummyInvoice.invoiceDate}</p>
            <p>{t("DeliveryDate")}: {dummyInvoice.deliveryDate}</p>
          </div>
        </div>

        {/* Client Details */}
        <div className="mb-8">
          <div className="border-b-2 border-gray-200 pb-4">
            <h3 className="font-bold mb-2">{dummyInvoice.client.name}</h3>
            <p>{dummyInvoice.client.address}</p>
            <p>{dummyInvoice.client.postcode}</p>
          </div>
        </div>

        {/* Items Table */}
        <table className="w-full mb-8">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-2">{t("ArticleNo")}</th>
              <th className="text-left py-2">{t("Description")}</th>
              <th className="text-right py-2">{t("Quantity")}</th>
              <th className="text-right py-2">{t("Unit")}</th>
              <th className="text-right py-2">{t("Price")}</th>
              <th className="text-right py-2">{t("Total")}</th>
            </tr>
          </thead>
          <tbody>
            {dummyInvoice.items.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{item.articleNumber}</td>
                <td className="py-2">{item.description}</td>
                <td className="text-right py-2">{item.quantity}</td>
                <td className="text-right py-2">{item.unit}</td>
                <td className="text-right py-2">{item.price}</td>
                <td className="text-right py-2">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Payment Details */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-2">{t("PaymentInfo")}</h3>
            <p>{t("DueDate")}: {dummyInvoice.payment.dueDate}</p>
            <p>{t("OCR")}: {dummyInvoice.payment.ocr}</p>
            <p>{t("Bankgiro")}: {dummyInvoice.payment.bankgiro}</p>
            <p>{t("Swish")}: {dummyInvoice.payment.swish}</p>
          </div>
          <div className="text-right">
            <div className="flex justify-end">
              <div className="w-64">
                <div className="flex justify-between mb-2">
                  <span>{t("Subtotal")}:</span>
                  <span>{dummyInvoice.payment.subtotal}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>{t("VAT")} (25%):</span>
                  <span>{dummyInvoice.payment.vat}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>{t("Rounding")}:</span>
                  <span>{dummyInvoice.payment.rounding}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>{t("TotalToPay")}:</span>
                  <span>{dummyInvoice.payment.total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-sm border-t-2 border-gray-200 pt-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p>{t("Phone")}: {dummyInvoice.company.phone}</p>
              <p>{t("Email")}: {dummyInvoice.company.email}</p>
              <p>{t("Website")}: {dummyInvoice.company.website}</p>
            </div>
            <div>
              <p>{t("OrgNumber")}: {dummyInvoice.company.orgNumber}</p>
              <p>{t("VATNumber")}: {dummyInvoice.company.vatNumber}</p>
              <p>{t("ApprovedForTax")}</p>
            </div>
            <div>
              <p>{t("LatePaymentInfo")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-4">
        <button 
          onClick={handlePrint}
          className="px-4 py-2 bg-primary text-secondary rounded-lg hover:bg-primary/90"
        >
          {t("DownloadPDF")}
        </button>
      </div>
    </div>
  );
};

export default Invoice;
