import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React from "react";


export const BlogPost = ({ value, setValue }) => {
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  return (
    <ReactQuill
      modules={modules}
      value={value}
      onChange={setValue}
      theme="snow"
    />
  );
};
