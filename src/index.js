import React, { useState }from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Strawberri } from "./Strawberri";
import { Borders } from "./Borders";
import { SecondPageMenu } from "./Menu";
import { ThirdPage } from "./ThirdPage";

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <WebbyApp></WebbyApp>
    </React.StrictMode>
);

function WebbyApp() {

    const [isShowScd, setIsShowScd] = useState(false);
    const [isShowFst, setIsShowFst] = useState(true);
    const [isShowThird, setIsShowThird] = useState(false); 
    
    function showSecondPage() {
        setIsShowFst(false);
        setIsShowScd(true);
    }

    function showThirdPage() {
        setIsShowFst(false);
        setIsShowScd(false);
        setIsShowThird(true);
    }

    return (
        <>
            <BrowserRouter>
                <Strawberri showFst={isShowFst} showSecondPage={showSecondPage}></Strawberri>
                <Borders showScd={isShowScd} showTrd={isShowThird}></Borders>
                <SecondPageMenu showScd={isShowScd} showThirdPage={showThirdPage}></SecondPageMenu>
                <ThirdPage showThd={isShowThird}></ThirdPage>
            </BrowserRouter>
        </>
    );
}
