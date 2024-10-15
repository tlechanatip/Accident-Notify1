import React from "react";

export default function Page() {

  const contactData = [
    {
      title: "ติดต่อแจ้งเหตุเจ้าหน้าที่ตำรวจ",
      phone: "191 ",
    },
    {
      title: "เมื่อพบเจออุบัติเหตุทางน้ำ",
      phone: "1196",
    },
    {
      title: "สถาบันการแพทย์ฉุกเฉินแห่งชาติ",
      phone: "1669",
    },
    {
      title: "เบอร์โทรฉุกเฉินแจ้งเหตุด่วนบนท้องถนน",
      phone: "1137",
    },
    {
      title: "การไฟฟ้าส่วนภูมิภาค",
      phone: "1129",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-200 py-8 mb-6">
      <h1 className="text-2xl font-bold mb-8">เบอร์ฉุกเฉิน</h1>
      <hr className="w-full border-t-2 border-gray-300 mb-6" />
      <p className="text-gray-700 mb-4">
      ”เบอร์ฉุกเฉิน” มีไว้อุ่นใจ.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {contactData.map((contact, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{contact.title}</h2>
            <p className="text-sm text-gray-500">
              หมายเลขโทรศัพท์:{" "}
              <span className="text-blue-600 hover:underline">{contact.phone}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
