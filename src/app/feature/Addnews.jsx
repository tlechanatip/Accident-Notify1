"use client";

import { Button } from "@mui/material";
import NewsPopup from "./Newspopup"; // Popup สำหรับส่งข่าวใหม่

export default function AddNews({ open, handleClickOpen, handleClose, handleAddNews }) {
  return (
    <div className="mt-6">
      <Button
        variant="contained"
        className="rounded-full bg-gray-800 p-2.5 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        onClick={handleClickOpen}
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
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </Button>

      <NewsPopup
        open={open}
        handleClose={handleClose}
        handleAddNews={handleAddNews}
      />
    </div>
  );
}
