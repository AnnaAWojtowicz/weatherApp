import CloudIcon from "@mui/icons-material/Cloud";
import ArrowDown from "@mui/icons-material/ArrowDropDown";

export default function MainPart() {

    let mainPartStyles = {
        common: "text-[var(--anti-flash-white-500)]",
        twoLinesStyle: "flex flex-col items-center justify-center",
        mainTemp: "text-6xl",
    };

    return (

        <div className="flex items-center justify-center">
            <div className="w-[290px] h-[290px] rounded-full border-ghost_white/30 bg-black/20 flex items-center justify-center">
                <div className="w-[270px] h-[270px] rounded-full border-ghost_white/30 bg-black/40 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <div className={`${mainPartStyles.common} ${mainPartStyles.tempIcon}`}><CloudIcon sx={{ fontSize: "3rem" }} /></div>
                        <div className="flex items-center">
                            <span className={`${mainPartStyles.twoLinesStyle}`}><div className={`${mainPartStyles.common}`}>wind</div><div className={`${mainPartStyles.common}`}>5m/s</div></span>
                            <span className={`${mainPartStyles.twoLinesStyle}`}><div className={`${mainPartStyles.common} ${mainPartStyles.mainTemp}`}>23°C</div><div className={`${mainPartStyles.common}`}>feels like 20°C</div></span>
                            <span className={`${mainPartStyles.twoLinesStyle}`}><div className={`${mainPartStyles.common}`}>percip.</div><div className={`${mainPartStyles.common}`}>0 mm</div></span>
                        </div>
                        <div className={`${mainPartStyles.twoLinesStyle}`}>
                            <div className={`${mainPartStyles.common}`}>more</div>
                            <div className={`${mainPartStyles.common}`}><ArrowDown /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}