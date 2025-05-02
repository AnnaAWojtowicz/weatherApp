import ExitIcon from "@mui/icons-material/Close";


export default function Details() {

    let detailsStyles = {
        common: "flex justify-between text-[var(--anti-flash-white-500)] font-light text-base",
        date: "flex justify-between text-[var(--anti-flash-white-500)] font-light text-2xl items-center",
    };




    return (
        <div className="flex items-center justify-center">
            <div className="w-[290px] h-[290px] rounded-md border-ghost_white/30 bg-black/20 flex items-center justify-center">
                <div className="w-[270px] h-[270px] rounded-md border-ghost_white/30 bg-black/40 flex items-center justify-center">
                    <div className="conatiner w-full flex flex-col items-center">
                        <div className="flex flex-col gap-3 w-9/10">
                            <div className={`${detailsStyles.date}`}>
                                <span>1 May</span>
                                <span><ExitIcon /></span>
                            </div>
                            <div>
                                <div className={`${detailsStyles.common}`}><span>Temperature (feels like)</span><span>23°C (20°C)</span></div>
                                <div className={`${detailsStyles.common}`}><span>Wind</span><span>5m/s</span></div>
                                <div className={`${detailsStyles.common}`}><span>Rain</span><span>0mm</span></div>
                            </div>
                            <div>
                                <div className={`${detailsStyles.common}`}><span>Humidity</span><span>23%</span></div>
                                <div className={`${detailsStyles.common}`}><span>Pressure</span><span>1023hPa</span></div>
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