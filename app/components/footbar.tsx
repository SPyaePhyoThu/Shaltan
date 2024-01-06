import { MasterCard } from "@/components/ui/MasterCard";
import { VisaCard } from "@/components/ui/VisaCard";

const Footbar = () => {
    return(
        <div className="h-10 w-full px-8 grid grid-cols-[1fr_min-content_min-content] items-center gap-4">
            <p className="text-xs font-semibold tracking-wide">© 2023 , ShalTan , All Right Reserved.</p>
            <MasterCard/>
            <VisaCard/>
        </div>
    )
}
export default Footbar;