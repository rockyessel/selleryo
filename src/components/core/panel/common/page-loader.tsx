import { Loader2 } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p className="text-lg">Loading Page...</p>
      <Loader2 size={30} className="animate-spin text-teal-600" />
    </div>
  );
};

export default PageLoader;
