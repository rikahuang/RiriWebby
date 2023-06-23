import left from "./left.png";
import top from "./top.png";
import right from "./right.png";
import bottom from "./bottom.png";

function Borders({showScd, showTrd}) {

    var hideClass;
    if (showScd || showTrd) {
        hideClass = "";
    } else {
        hideClass = " hide";
    }

    return (
        <>
            <div className={hideClass}>
                <div>
                    <img src={left} className="leftVine"/> 
                    <img src={top} className="topVine"/> 
                </div>
                <div>
                    <img src={right} className="rightVine"/> 
                    <img src={bottom} className="bottomVine"/> 
                </div>
            </div>
            
        </>

    );
}

export {Borders};