import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./DnD.css";

function Dropzone() {
  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader();

    reader.onabort = () => console.log("file reading was aborted");
    reader.onerror = () => console.log("file reading has failed");
    reader.onload = () => {
      // Do whatever you want with the file contents
      const binaryStr = reader.result;
      console.log(binaryStr);
    };

    acceptedFiles.forEach(file => reader.readAsBinaryString(file));
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="dnd" {...getRootProps()}>
      <input {...getInputProps()} />

      <p>Drag and Drop your files here, or Click to select files</p>
    </div>
  );
}
export default Dropzone;
