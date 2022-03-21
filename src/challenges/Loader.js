import "./Loader.css";

export default function Loader() {
    return (
        <div className="Loader frame">
                <div className="center"> 
                {/* v html
                si dám className pro CESTY, a v CSS si z každé cesty udělám ::after pseudoefekt s kolečkem - kolečka maj stejné nastavení, max. se liší ve velikosti!. Pro každou cestu jinak delay*/}
                        <div className="ball"></div>
                        <div className="moving-big"></div>
                        <div className="moving-big"></div>
                        <div className="moving-big"></div>
                        <div className="moving-small"></div> {/*1 resp. 5*/}
                        <div className="moving-small"></div> {/*2 resp. 6*/}
                        <div className="moving-small"></div> {/*3/8*/}
                        <div className="moving-small"></div> {/*4/9*/}
                        <div className="moving-small"></div>
                        <div className="moving-small"></div>
                        <div className="moving-small"></div>
                 </div>
        </div>
    )
}