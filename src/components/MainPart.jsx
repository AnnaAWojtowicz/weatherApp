import CloudIcon from "@mui/icons-material/Cloud";
import ArrowDown from "@mui/icons-material/ArrowDropDown";

export default function MainPart({ executeHandleDetails }) {

    let mainPartStyles = {
        common: "text-[var(--anti-flash-white-500)] font-light",
        twoLinesStyle: "flex flex-col items-center justify-center",
        mainTemp: "text-6xl",
    };

    return (

        <div className="flex items-center justify-center">
            <div className="w-[290px] h-[290px] rounded-full border-ghost_white/30 bg-black/20 flex items-center justify-center">
                <div className="w-[270px] h-[270px] rounded-full border-ghost_white/30 bg-black/40 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className={`${mainPartStyles.common} ${mainPartStyles.tempIcon}`}><CloudIcon sx={{ fontSize: "4rem" }} /></div>
                        <div>
                            <div className="flex items-center gap-5">
                                <span className={`${mainPartStyles.twoLinesStyle} text-sm`}><div className={`${mainPartStyles.common}`}>wind</div><div className={`${mainPartStyles.common}`}>5m/s</div></span>
                                <span className={`${mainPartStyles.twoLinesStyle}`}><div className={`${mainPartStyles.common} ${mainPartStyles.mainTemp}`}>23°C</div></span>
                                <span className={`${mainPartStyles.twoLinesStyle} text-sm`}><div className={`${mainPartStyles.common}`}>percip.</div><div className={`${mainPartStyles.common}`}>0 mm</div></span>
                            </div>
                            <div className={`${mainPartStyles.common} text-center`}>feels like 20°C</div>
                        </div>
                        <button className={`${mainPartStyles.twoLinesStyle}`} onClick={executeHandleDetails}>
                            <div className={`${mainPartStyles.common} text-sm`}>details</div>
                            <div className={`${mainPartStyles.common}`}><ArrowDown /></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}