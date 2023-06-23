import { Routes, Route } from "react-router-dom";
import { Menu } from "./Menu";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { TechStack } from "./TechStack";

function ThirdPage({showThd}) {

    var hideClass;
    if (showThd) {
        hideClass = "";
    } else {
        hideClass = " hide";
    }
    
    return (
        <>
            <div className={"contentFrame" + hideClass}>
                <div className="topMenu fixed">
                    <Menu></Menu>
                </div>

                <div className="topMenu"></div>

                <div className="mainContent">
                    <Routes>
                        <Route path="/aboutMe" element={<AboutMe></AboutMe>}></Route>
                        <Route path="/projects" element={<Projects></Projects>}></Route>
                        <Route path="/techStack" element={<TechStack></TechStack>}></Route>
                    </Routes>

                </div>

            </div>
        </>
    );

}

export {ThirdPage};