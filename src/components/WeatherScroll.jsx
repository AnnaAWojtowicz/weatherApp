import CloudIcon from "@mui/icons-material/Cloud";


export default function WeatherScroll({ snapStyle }) {

    let smallInfoStyles = {
        common: "text-[var(--anti-flash-white-500)] font-light text-sm w-[45px] h-[70px]",
    }


    return (
        <div className={`${smallInfoStyles.common} flex flex-col items-center justify-between ${snapStyle}`}>
            <div className="whitespace-nowrap">31 May</div>
            <div>20°C</div>
            <div><CloudIcon /></div>
        </div>
    )
}