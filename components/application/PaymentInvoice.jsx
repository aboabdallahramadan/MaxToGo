"use client";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const PaymentInvoice = ({ invoice }) => {
  const t = useTranslations("Application.Profile.Payment");
  const componentRef = useRef(null);

  const dummyInvoice = {
    receiptNumber: "12345",
    date: "04.05.2021",
    company: {
      name: "Exempelföretag Ab",
      address: "Företagsgatan 2",
      postcode: "123 45 Hemstad",
      country: "Sverige",
      orgNumber: "123456-7890",
      vatNumber: "SE1234567890",
      contact: {
        name: "Freddy Företagare",
        phone: "+46-123456789",
        email: "freddy@foretag.se",
        website: "www.foretag.se"
      }
    },
    client: {
      name: "Kundföretag Ab",
      contactPerson: "Bengt Betalarson",
      address: "Köpvägen 12",
      postcode: "123 45 Köpstad"
    },
    items: [
      {
        description: "Arbete",
        quantity: 5,
        unit: "h",
        price: 60,
        vat: 25,
        vatAmount: 75.00,
        total: 375.00
      },
      {
        description: "Produkt",
        quantity: 10,
        unit: "st",
        price: 105,
        vat: 25,
        vatAmount: 265.50,
        total: 1312.50
      }
    ],
    totals: {
      subtotal: 1350.00,
      vatTotal: 337.50,
      total: 1687.50
    }
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef,
    contentRef: componentRef,
    documentTitle: `invoice-${dummyInvoice.invoiceNumber}`,
  });

  return (
    <div>
      <div ref={componentRef} className="max-w-4xl mx-auto p-8 bg-white text-black shadow-lg rounded-lg print:shadow-none">
        {/* Header */}
          <div className='flex items-center gap-4 justify-between'>
            <h1 className="text-3xl font-bold mb-4 text-primary">{t("SiteName")}</h1>
            <Image src="/images/logo.png" alt={t("CompanyLogo")} width={80} height={80} />
          </div>
        <div className="grid grid-cols-2 gap-8 my-16">
          <div className="text-left flex flex-col gap-4">
            <p className='flex flex-col gap-2'><span className="font-bold">{t("InvoiceDate")}: </span>{dummyInvoice.date}</p>
            <p className='flex flex-col gap-2'><span className="font-bold">{t("ReceiptNumber")}: </span>{dummyInvoice.receiptNumber}</p>
          </div>
          {/* Client Details */}
          <div>
            <p className="font-bold">{dummyInvoice.client.name}</p>
            <p>{dummyInvoice.client.contactPerson}</p>
            <p>{dummyInvoice.client.address}</p>
            <p>{dummyInvoice.client.postcode}</p>
          </div>
        </div>

        {/* Items Table */}
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-secondary text-foreground text-nowrap">
                <th className="text-left py-2 px-2">{t("Description")}</th>
                <th className="text-right py-2 px-2">{t("Quantity")}</th>
                <th className="text-right py-2 px-2">{t("Unit")}</th>
                <th className="text-right py-2 px-2">{t("UnitPrice")}</th>
                <th className="text-right py-2 px-2">{t("VATPercent")}</th>
                <th className="text-right py-2 px-2">{t("VATAmount")}</th>
                <th className="text-right py-2 px-2">{t("Amount")}</th>
              </tr>
            </thead>
            <tbody>
              {dummyInvoice.items.map((item, index) => (
                <tr key={index} className="border-b text-nowrap">
                  <td className="py-2 px-2">{item.description}</td>
                  <td className="text-right py-2 px-2">{item.quantity}</td>
                  <td className="text-right py-2 px-2">{item.unit}</td>
                  <td className="text-right py-2 px-2">{item.price} kr</td>
                  <td className="text-right py-2 px-2">{item.vat} %</td>
                  <td className="text-right py-2 px-2">{item.vatAmount} kr</td>
                  <td className="text-right py-2 px-2">{item.total} kr</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-end mb-8">
          <div className="w-64">
            <div className="flex justify-between mb-2">
              <span>{t("Subtotal")}:</span>
              <span>{dummyInvoice.totals.subtotal} kr</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>{t("TotalVAT")}:</span>
              <span>{dummyInvoice.totals.vatTotal} kr</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>{t("Total")}:</span>
              <span>{dummyInvoice.totals.total} kr</span>
            </div>
          </div>
        </div>

        {/* Company Details */}
        <div className='grid grid-cols-2 gap-8 pt-4 border-t-2 border-gray-200 text-sm'>
          <div className="mb-4">
            <p className="font-bold">{dummyInvoice.company.name}</p>
            <p>{dummyInvoice.company.address}</p>
            <p>{dummyInvoice.company.postcode}</p>
            <p>{dummyInvoice.company.country}</p>
            <p>{t("OrgNumber")}: {dummyInvoice.company.orgNumber}</p>
            <p>{t("VATNumber")}: {dummyInvoice.company.vatNumber}</p>
          </div>
          <div className="text-right">
            <div className="mb-4">
              <p className="font-bold">{t("ContactInfo")}</p>
              <p>{dummyInvoice.company.contact.name}</p>
              <p>{t("Phone")}: {dummyInvoice.company.contact.phone}</p>
              <p>{t("Email")}: {dummyInvoice.company.contact.email}</p>
              <p>{dummyInvoice.company.contact.website}</p>
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

export default PaymentInvoice;