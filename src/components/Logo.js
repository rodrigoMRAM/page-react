export default function Logo({size, height, logo= "logopng.PNG"}){
    return(
        <div className="logo">
                <img src={logo} alt="logo de flor olguin" srcSet="" width={size} height={height} />
        </div>
    )
}