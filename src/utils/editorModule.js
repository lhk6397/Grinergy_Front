import ReactQuill from "react-quill";

const Font = ReactQuill.Quill.import("formats/font");
Font.whitelist = [
  "NotoSansKR-Regular",
  "NotoSansKR-Medium",
  "NotoSansKR-Bold",
  "UniversLTPro-BoldCond",
  "UniversLTPro-Condensed",
];
ReactQuill.Quill.register(Font, true);

export const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: Font.whitelist }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  },
};

export const formats = [
  "header",
  "font",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "background",
  "align",
  "code",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

// export const formats = [
//   "header",
//   "font",
//   "size",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "list",
//   "bullet",
//   "indent",
//   "link",
//   "image",
//   "video",
//   "color",
//   "background",
// ];
