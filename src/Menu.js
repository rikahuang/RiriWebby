import { useState }from "react";
import { NavLink } from "react-router-dom";
import strawberri from "./strawberri1.png";

function Menu({showThirdPage}) {

    return (
        <>  
            <div id="menu" className="drop">
                <div className="centerText fontSZ50 pointer">MENU</div>
                {/*
                <div className="pointer">
                    <img src={strawberri} className="rotate45 width50px"/>
                    <span>About Me</span>
                </div>
                <div className="pointer">
                    <img src={strawberri} className="rotate45 width50px"/>
                    <span>Freelance Projects</span>
                </div>
                <div className="pointer">
                    <img src={strawberri} className="rotate45 width50px"/>
                    <span>Personal Projects</span>
                </div>
                */}
                <MenuItems item="About Me" linkpath="/aboutMe" showThirdPage={showThirdPage}></MenuItems>
                <MenuItems item="Projects" linkpath="/projects" showThirdPage={showThirdPage}></MenuItems>
                <MenuItems item="Tech Stack" linkpath="/techStack" showThirdPage={showThirdPage}></MenuItems>
            </div>
            
            
        </>
    );
}

function SecondPageMenu({showScd, showThirdPage}) {
    var hideClass;
    if (showScd) {
        hideClass = "";
    } else {
        hideClass = " hide";
    }

    return (
        <>  
            <div className={"centerElement content drop" + hideClass}>
                <Menu showThirdPage={showThirdPage}></Menu>
            </div>
            
        </>
    );
}

function MenuItems({item, linkpath, showThirdPage}) {
    return (
        <NavLink to={linkpath} exact>
            <div className="pointer" onClick={showThirdPage}>
                <img src={strawberri} className="rotate45 width50px"/>
                <span className="lftMargin15px">{item}</span>
            </div>
        </NavLink>  
    );
}

export {SecondPageMenu, Menu};