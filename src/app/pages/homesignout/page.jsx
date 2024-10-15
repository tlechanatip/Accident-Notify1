"use client";

import { useState } from "react";
import Province from "@/app/feature/Province";
import { newsData } from "@/app/newsData";
export default function Homesignout() {
  const [selectedProvince, setSelectedProvince] = useState("");


  const filteredNews = selectedProvince
  ? newsData.filter((news) => news.province === selectedProvince)
  : newsData;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-200 py-8">
      <div className="flex justify-center w-full items-center mb-6 gap-6">
        <h1 className="text-2xl font-bold">ข่าวสารต่างๆ</h1>
        <Province setSelectedProvince={setSelectedProvince} />
      </div>
      <hr className="w-full border-t-2 border-gray-300 mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {filteredNews.map((news, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs"
          >
            <img
              src={news.image}
              alt={`รูปภาพข่าวจากจังหวัด ${news.province}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{news.province}</h2>
              <p className="text-sm text-gray-500 mb-2">
                อำเภอ: {news.district}
              </p>
              <p className="text-gray-700">{news.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
