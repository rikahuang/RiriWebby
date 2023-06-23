import Typescript from "./Typescript.svg";
import MongoDB from "./MongoDB.svg";

function TechStack() {
    return (
        <div className="logoFrame flxDirCl drop">
            <div className="endText marginT50px">
                <i className="fa-brands fa-html5 htmlLogo fontSZ100 marginR100px"></i>
                <i className="fa-brands fa-css3-alt cssLogo fontSZ100 marginR100px"></i>
                <i className="fa-brands fa-square-js jsLogo fontSZ100"></i>
            </div>
            <div className="endText marginT100px">
                <i className="fa-brands fa-node nodeLogo fontSZ100 marginR100px"></i>
                <i className="fa-brands fa-python pyLogo fontSZ100 marginR100px"></i>
                <i className="fa-brands fa-react reactLogo fontSZ100"></i>
            </div>
            <div className="logoFrame marginT100px">
                <i className="fa-brands fa-github gitLogo fontSZ100 marginR100px"></i>
                <img src={Typescript} className="tsLogo marginR100px filterGS1"/>
                <img src={MongoDB} className="mongoLogo filterGS1"/>
            </div>
        </div>
    );
}

export {TechStack};