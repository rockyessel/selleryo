import { Plus } from "lucide-react";
import { Country } from "@/interface";
import CountryCodeInput from "../global/country-code-input";
import { Dialog, DialogContent, DialogTrigger, DialogHeader } from "@/components/ui/dialog";

interface Props { countries: Country[] }

const UpdateNumberBtn = ({ countries }: Props) => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center justify-between">
          <Plus size={15} className="text-teal-600" />

          <span className="text-teal-600 text-center text-sm font-bold">
            Update
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader className="font-bold text-center">
          Update Contact
        </DialogHeader>

        <CountryCodeInput countries={countries} />
      </DialogContent>
    </Dialog>
  );
};

export default UpdateNumberBtn;
