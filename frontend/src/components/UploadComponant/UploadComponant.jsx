import React, { useState } from "react";

function Upload(recipe) {
  const { id } = recipe;
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const onSubmit = async () => {
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/recipe/${id}/upload`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.info("File uploaded successfully:", data);
      } else {
        console.error("Error uploading file:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button type="submit" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Upload;
