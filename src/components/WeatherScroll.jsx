import CloudIcon from "@mui/icons-material/Cloud";


export default function WeatherScroll({ style }) {

    let smallInfoStyles = {
        common: "text-[var(--anti-flash-white-500)] font-light text-sm",
    }


    return (
        <div className={`${style} ${smallInfoStyles.common} flex flex-col items-center justify-between`}>
            <div>1 May</div>
            <div>20°C</div>
            <div><CloudIcon /></div>
        </div>
    )
}