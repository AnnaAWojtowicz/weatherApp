import SearchIcon from "@mui/icons-material/Search";
import Button from "./Button";

export default function Search({ executeHandleShowSearch, ...props }) {

    let commonStyle = "px-4 py-2 bg-white/20 border border-platinum/70 text-ghost_white focus:outline-none focus:border-ghost_white/70 focus:ring-2 focus:ring-ghost_white/20";
    let styles = {
        common: "px-4 py-2 bg-white/20 border border-ghost_white/30 text-ghost_white focus:outline-none focus:border-ghost_white/70 focus:ring-2 focus:ring-ghost_white/20",
        input: "w-full placeholder-ghost_white/50 rounded-l-lg",
        button: "rounded-r-lg flex items-center justify-center",
        icon: "text-[var(--)]"
    };

    return (
        <div className="flex items-center justify-between mb-4">
            <input type="text" placeholder="Search city" {...props} className={`${styles.common} ${styles.input}`} />

            <Button style={`${styles.common} ${styles.button}`}>
                <SearchIcon className={`${styles.icon}`} onClick={executeHandleShowSearch} />
            </Button>
        </div>
    )
}