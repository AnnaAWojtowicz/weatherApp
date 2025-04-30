import SearchIcon from "@mui/icons-material/Search";
import Button from "./Button";

export default function City({ executeHandleShowSearch, city }) {
    return (
        <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl text-[#1c1c1c] display: inline">{city}</h1>
            <SearchIcon className="text-3xl text-[#1c1c1c]" onClick={executeHandleShowSearch} />
        </div>
    )
}