import { ImagePlus } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function CustomDropZone({ onDone }: { onDone: any }) {
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      acceptedFiles.forEach((file: any) => {
        const reader = new FileReader();
        // reader.onload = () => {
        //   // Do whatever you want with the file contents
        //   const binaryStr = reader.result;
        // };
        reader.readAsArrayBuffer(file);
      });
      onDone(acceptedFiles);
    },
    [onDone]
  );
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop,
  });

  return (
    <div
      className="border border-slate-200 p-2 h-40 cursor-pointer w-full bg-slate-50 space-y-3 flex flex-col justify-center items-center"
      {...getRootProps()}
    >
      <input {...getInputProps()} accept="image/*" />
      <ImagePlus width={32} height={32} className="text-zinc-400" />
      <p className="text-zinc-400 text-center text-sm">
        Drag &apos;n&apos; drop some images here, or click to select images
      </p>
    </div>
  );
}

export default CustomDropZone;
