import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

export default function NewsPopup({ open, handleClose, handleAddNews }) {
  const [newsContent, setNewsContent] = React.useState({
    image: "https://via.placeholder.com/300",
    province: "",
    district: "",
    details:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewsContent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const newNews = {
      image: "https://via.placeholder.com/300",
      province: newsContent.province,
      district: newsContent.district,
      details: newsContent.details,
    };
  
    handleAddNews(newNews); // เรียกใช้ฟังก์ชันเพื่อเพิ่มข่าวใหม่
    setNewsContent({
      image: "https://via.placeholder.com/300",
      province: "",
      district: "",
      details:"",
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>เพิ่มข่าวสาร</DialogTitle>
      <DialogContent>
        <DialogContentText>
          กรอกข้อมูลข่าวสาร
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="province"
          name="province"
          label="จังหวัด"
          type="text"
          fullWidth
          variant="standard"
          value={newsContent.title}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="district"
          name="district"
          label="อำเภอ"
          type="text"
          fullWidth
          variant="standard"
          value={newsContent.content}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="details"
          name="details"
          label="รายละเอียดด"
          type="text"
          fullWidth
          variant="standard"
          value={newsContent.email}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>ยกเลิก</Button>
        <Button onClick={handleSubmit}>ส่งข่าว</Button>
      </DialogActions>
    </Dialog>
  );
}
