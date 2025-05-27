import ExitIcon from "@mui/icons-material/Close";


export default function Details({ executeHandleDetails, weatherData, sunriseSunsetData, feelsLikeTemp }) {
    console.log('Sunrise data structure:', {
        raw: sunriseSunsetData?.results?.sunrise,
        formatted: sunriseSunsetData?.results?.sunrise?.slice(0, 5)
    });

    let detailsStyles = {
        common: "flex justify-between text-[var(--anti-flash-white-500)] font-light text-sm",
        date: "text-[var(--anti-flash-white-500)] font-light text-3xl items-center",
    };


    if (!weatherData?.properties?.timeseries?.[0] || !sunriseSunsetData?.results) {
        console.log('Which data is missing:', {
            hasWeatherData: !!weatherData?.properties?.timeseries?.[0],
            hasSunriseSunset: !!sunriseSunsetData?.results
        });
        return (
            <div className="text-white text-center">Loading weather details...</div>
        );
    }


    // date formatting
    const apiDate = weatherData.properties.timeseries[0].time;
    const date = new Date(apiDate);

    const day = date.getUTCDate();
    const month = date.toLocaleString('en-GB', { month: 'short', timeZone: 'UTC' });

    const formattedDate = `${day} ${month}`;


    //weather details 
    const temp = Math.round(weatherData.properties.timeseries[0].data.instant.details.
        air_temperature);
    const wind = Math.round(weatherData.properties.timeseries[0].data.instant.details.
        wind_speed);
    const percip = Math.round(weatherData.properties.timeseries[0].data.next_1_hours.details.precipitation_amount)
    const pressure = Math.round(weatherData.properties.timeseries[0].data.instant.details.
        air_pressure_at_sea_level);
    const humidity = Math.round(weatherData.properties.timeseries[0].data.instant.details.relative_humidity);
    const cloudCover = Math.round(weatherData.properties.timeseries[0].data.instant.details.
        cloud_area_fraction);
    const sunrise = sunriseSunsetData.results?.sunrise?.slice(0, 5) || '--:--';
    const sunset = sunriseSunsetData.results?.sunset?.slice(0, 5) || '--:--';


    return (
        <div className="flex items-center justify-center">
            <div className="w-[290px] min-h-[270px] p-[10px] rounded-md border-ghost_white/30 bg-black/20 flex items-center justify-center">
                <div className="w-[270px] min-h-[270px] rounded-md border-ghost_white/30 bg-black/40 flex items-center justify-center">
                    <div className="container w-full flex flex-col items-center p-[10px]">
                        <div className="flex flex-col gap-3 w-full">
                            <div>
                                <button className={`${detailsStyles.date} w-full flex justify-end`} onClick={executeHandleDetails}>
                                    <ExitIcon />
                                </button>
                                <div className={`${detailsStyles.date} text-left`}>
                                    {formattedDate}
                                </div>
                            </div>
                            <div>
                                <div className={`${detailsStyles.common}`}><span>Temperature</span><span>{temp} °C</span></div>
                                <div className={`${detailsStyles.common}`}><span>Feels like</span><span>{feelsLikeTemp} °C</span></div>
                                <div className={`${detailsStyles.common}`}><span>Wind</span><span>{wind} m/s</span></div>
                                <div className={`${detailsStyles.common}`}><span>Rain</span><span>{percip} mm</span></div>
                            </div>
                            <div>
                                <div className={`${detailsStyles.common}`}><span>Pressure</span><span>{pressure} hPa</span></div>
                                <div className={`${detailsStyles.common}`}><span>Humidity</span><span>{humidity} %</span></div>
                                <div className={`${detailsStyles.common}`}><span>Cloud cover</span><span>{cloudCover} %</span></div>
                            </div>
                            <div>
                                <div className={`${detailsStyles.common}`}><span>Sunrise</span><span>{sunrise}</span></div>
                                <div className={`${detailsStyles.common}`}><span>Sunset</span><span>{sunset}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}