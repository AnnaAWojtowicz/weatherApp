import SearchIcon from "@mui/icons-material/Search";
import Button from "./Button";

export default function City({ executeHandleShowSearch, city }) {

    let place = city ? city : "Oslo";


    return (
        <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl text-[var(--anti-flash-white-500)] display: inline">{place}</h1>
            <SearchIcon className="text-3xl text-[var(--anti-flash-white-500)]" onClick={executeHandleShowSearch} />
        </div>
    )
}