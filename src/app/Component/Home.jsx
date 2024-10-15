"use client";

import { useState } from "react";
import Province from "../feature/Province";
import { newsData } from "../newsData"; // ข้อมูลข่าวเริ่มต้น
import AddNews from "../feature/Addnews";

export default function Home() {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [open, setOpen] = useState(false);
  const [newsList, setNewsList] = useState(newsData); // สร้าง state สำหรับเก็บข่าวทั้งหมด รวมถึงข่าวใหม่

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // ฟังก์ชันสำหรับเพิ่มข่าวใหม่
  const handleAddNews = (newNews) => {
    setNewsList((prevNews) => [newNews, ...prevNews]); // เพิ่มข่าวใหม่ไว้ที่ตำแหน่งบนสุด
    handleClose(); // ปิด popup หลังจากเพิ่มข่าว
  };

  const filteredNews = selectedProvince
    ? newsList.filter((news) => news.province === selectedProvince)
    : newsList;

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

      {/* ปุ่มเปิด popup และส่วนการส่งข่าว */}
      <AddNews 
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        handleAddNews={handleAddNews}
      />
    </div>
  );
}
