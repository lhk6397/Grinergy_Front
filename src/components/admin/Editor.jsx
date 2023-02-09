import ReactQuill from "react-quill";
import { formats, modules } from "../../utils/editorModule";

const Editor = ({ value = "", handleChange }) => {
  return (
    <ReactQuill
      value={value}
      onChange={handleChange}
      modules={modules}
      formats={formats}
    />
  );
};

export default Editor;
