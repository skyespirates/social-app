import { FileInput, Box, Button } from "@mantine/core";
import { useState } from "react";

import api from "../utils/api";
import { useSelector } from "react-redux";

const Upload = () => {
  const userId = useSelector((state) => state._id);
  const [file, setFile] = useState(null);
  const handleChange = (e) => {
    setFile(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (file !== null) {
      let formData = new FormData();
      formData.append("file", file);
      formData.append("userId", userId);
      api("/uploads/excel", {
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      })
        .then((res) => {
          if (res.status === 200) {
            console.log("data uploaded successfully");
            setFile(null);
          }
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FileInput placeholder="Create Ticket" onChange={handleChange} />
        <Button type="submit">Upload</Button>
      </form>
    </Box>
  );
};

export default Upload;
