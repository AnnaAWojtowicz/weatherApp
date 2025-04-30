import SearchIcon from "@mui/icons-material/Search";
import Button from "./Button";

export default function Search({ ...props }) {



    return (
        <div className="flex items-center justify-between mb-4">
            <input type="text" placeholder="Search city" {...props} />

            <Button>
                <SearchIcon className="text-[#1c1c1c]" />
            </Button>
        </div>
    )
}