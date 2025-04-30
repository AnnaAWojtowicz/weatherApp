import SearchIcon from "@mui/icons-material/Search";
import Button from "./Button";

export default function Search({ executeHandleShowSearch, ...props }) {

    let commonStyle = "px-4 py-2 bg-white/20 border border-ghost_white/30 text-ghost_white focus:outline-none focus:border-ghost_white/70 focus:ring-2 focus:ring-ghost_white/20";

    return (
        <div className="flex items-center justify-between mb-4">
            <input type="text" placeholder="Search city" {...props} className={`w-full ${commonStyle} placeholder-ghost_white/50 rounded-l-lg`} />

            <Button style={`${commonStyle} rounded-r-lg flex items-center justify-center`}>
                <SearchIcon className="text-[#1c1c1c]" onClick={executeHandleShowSearch} />
            </Button>
        </div>
    )
}