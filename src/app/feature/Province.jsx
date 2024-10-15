"use client";

import { useState } from "react";

export default function Province({ setSelectedProvince }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const provinces = [
    "กรุงเทพมหานคร",
    "กระบี่",
    "จันทบุรี",
    "ฉะเชิงเทรา",
    "ชลบุรี",
    "ชัยนาท",
    "ชัยภูมิ",
    "ชุมพร",
    "ตรัง",
    "ตราด",
    "ตาก",
    "นครนายก",
    "นครปฐม",
    "นครราชสีมา",
    "นครศรีธรรมราช",
    "นครสวรรค์",
    "นราธิวาส",
    "น่าน",
    "บุรีรัมย์",
    "ปทุมธานี",
    "ประจวบคีรีขันธ์",
    "ปราจีนบุรี",
    "พะเยา",
    "พังงา",
    "พิจิตร",
    "พิษณุโลก",
    "เพชรบุรี",
    "เพชรบูรณ์",
    "แม่ฮ่องสอน",
    "ระนอง",
    "ระยอง",
    "ราชบุรี",
    "ลำปาง",
    "ลำพูน",
    "เลย",
    "ศรีสะเกษ",
    "สกลนคร",
    "สงขลา",
    "สมุทรปราการ",
    "สมุทรสงคราม",
    "สมุทรสาคร",
    "สระแก้ว",
    "สระบุรี",
    "สิงห์บุรี",
    "สุพรรณบุรี",
    "สุราษฎร์ธานี",
    "สุรินทร์",
    "อ่างทอง",
    "อำนาจเจริญ",
    "อุดรธานี",
    "อุตรดิตถ์",
    "อุทัยธานี",
    "เชียงใหม่",
    "เชียงราย",
    "ภูเก็ต"
  ];

  const filteredProvinces = provinces.filter((province) =>
    province.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProvinceChange = (province) => {
    setSelectedProvince(province);
    setIsModalOpen(false);
  };

  return (
    <div className="dark:bg-black text-black dark:text-white">
      {/* ปุ่มสำหรับเปิด popup */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="rounded-full bg-gray-800 p-2.5 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>

      {/* Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">ค้นหาจังหวัด</h2>

            <input
              type="text"
              placeholder="ค้นหาจังหวัด"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 mb-4 border border-black dark:border-white rounded text-black w-full"
            />

            <div className="max-h-60 overflow-y-auto">
              {filteredProvinces.length > 0 ? (
                filteredProvinces.map((province, index) => (
                  <div
                    key={index}
                    onClick={() => (setIsModalOpen(false),handleProvinceChange(province))}

                    className="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                    
                  >
                    {province}
                    
                  </div>
                ))
              ) : (
                <p>ไม่พบจังหวัด</p>
              )}
            </div>
            {/* ปุ่มปิด popup */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 p-2 bg-red-500 text-white rounded"
            >
              ปิด
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
