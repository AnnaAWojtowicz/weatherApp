import ExitIcon from "@mui/icons-material/Close";


export default function Details() {

    let detailsStyles = {
        common: "flex justify-between text-[var(--anti-flash-white-500)] font-light text-base",
        date: "text-[var(--anti-flash-white-500)] font-light text-3xl items-center",
    };




    return (
        <div className="flex items-center justify-center">
            <div className="w-[290px] min-h-[270px] p-[10px] rounded-md border-ghost_white/30 bg-black/20 flex items-center justify-center">
                <div className="w-[270px] min-h-[270px] rounded-md border-ghost_white/30 bg-black/40 flex items-center justify-center">
                    <div className="container w-full flex flex-col items-center p-[10px]">
                        <div className="flex flex-col gap-3 w-full">
                            <div>
                                <div className={`${detailsStyles.date} text-right`}>
                                    <ExitIcon />
                                </div>
                                <div className={`${detailsStyles.date} text-left`}>
                                    1 May
                                </div></div>
                            <div>
                                <div className={`${detailsStyles.common}`}><span>Temperature</span><span>23°C</span></div>
                                <div className={`${detailsStyles.common}`}><span>Feels like</span><span>20°C</span></div>
                                <div className={`${detailsStyles.common}`}><span>Wind</span><span>5m/s</span></div>
                                <div className={`${detailsStyles.common}`}><span>Rain</span><span>0mm</span></div>
                            </div>
                            <div>
                                <div className={`${detailsStyles.common}`}><span>Pressure</span><span>1023hPa</span></div>
                                <div className={`${detailsStyles.common}`}><span>Humidity</span><span>23%</span></div>
                                <div className={`${detailsStyles.common}`}><span>Cloud cover</span><span>53%</span></div>
                            </div>
                            <div>
                                <div className={`${detailsStyles.common}`}><span>Sunrise</span><span>23:00</span></div>
                                <div className={`${detailsStyles.common}`}><span>Sunset</span><span>23:00</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}