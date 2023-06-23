import { useState }from "react";
import strawberri from "./strawberri1.png";
import speechBubble from "./speechBubble.png";

function Strawberri({showFst, showSecondPage}) {
    
    const [isShowBubble, setIsShowBubble] = useState(false);
    
    var hideClass;
    if (isShowBubble) {
        hideClass = "";
    } else {
        hideClass = " hide";
    }

    function showBBL() {
        setIsShowBubble(!isShowBubble);
    }

    var showFstClass;
    if (showFst) {
        showFstClass = "";
    } else {
        showFstClass = "hide";
    }

 
    return (
        <>
            <div className={showFstClass}>
                <div className="content centerElement">
                    <img src={strawberri} className="rotate45 pointer SB" onMouseEnter={showBBL} onClick={showSecondPage}/>
                </div>
                <div className={"bubbleFrame centerElement" + hideClass}>
                    <div className="ri fontSZ50">strawberRI</div>
                    <img src={speechBubble} className="bubble"/>
                </div>
            </div>
        </>
    );
}

export {Strawberri};