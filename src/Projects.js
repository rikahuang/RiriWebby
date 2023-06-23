import { useState }from "react";

function Projects() {

    var qAndAData = [
        {
            "name": "VAN CLEF & RPELS",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque turpis diam, efficitur vel ex ut, lobortis accumsan justo. Etiam tincidunt augue non ligula facilisis egestas. Pellentesque vitae tellus aliquam, viverra mi at, fermentum velit. Etiam bibendum velit diam, placerat dapibus nisi vestibulum quis. Nullam vestibulum diam nec augue molestie tincidunt. Sed pharetra, dui vitae iaculis blandit, erat sem mattis dui, eget sodales eros magna eget arcu. Donec dapibus dolor in sapien lacinia, ut sagittis eros condimentum. Duis suscipit dolor lorem, a sollicitudin purus tincidunt quis. Aliquam diam tortor, blandit ut rutrum at, iaculis ut enim. Vivamus euismod aliquam tortor in tristique. Morbi tristique efficitur rhoncus. Nunc cursus velit non suscipit fermentum. Pellentesque sodales tellus dolor, sed dictum purus faucibus ac. Donec non sapien pretium, malesuada erat vitae, laoreet lectus. Proin nisi ligula, laoreet vel nulla eu, rhoncus gravida justo.",
            "year": "2023"
        },
        {
            "name": "ROCK PAPER SCISSORS",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque turpis diam, efficitur vel ex ut, lobortis accumsan justo. Etiam tincidunt augue non ligula facilisis egestas. Pellentesque vitae tellus aliquam, viverra mi at, fermentum velit. Etiam bibendum velit diam, placerat dapibus nisi vestibulum quis. Nullam vestibulum diam nec augue molestie tincidunt. Sed pharetra, dui vitae iaculis blandit, erat sem mattis dui, eget sodales eros magna eget arcu. Donec dapibus dolor in sapien lacinia, ut sagittis eros condimentum. Duis suscipit dolor lorem, a sollicitudin purus tincidunt quis. Aliquam diam tortor, blandit ut rutrum at, iaculis ut enim. Vivamus euismod aliquam tortor in tristique. Morbi tristique efficitur rhoncus. Nunc cursus velit non suscipit fermentum. Pellentesque sodales tellus dolor, sed dictum purus faucibus ac. Donec non sapien pretium, malesuada erat vitae, laoreet lectus. Proin nisi ligula, laoreet vel nulla eu, rhoncus gravida justo.",
            "year": "2023"
        },
        {
            "name": "MOCHIYUKI'S WEBBY",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque turpis diam, efficitur vel ex ut, lobortis accumsan justo. Etiam tincidunt augue non ligula facilisis egestas. Pellentesque vitae tellus aliquam, viverra mi at, fermentum velit. Etiam bibendum velit diam, placerat dapibus nisi vestibulum quis. Nullam vestibulum diam nec augue molestie tincidunt. Sed pharetra, dui vitae iaculis blandit, erat sem mattis dui, eget sodales eros magna eget arcu. Donec dapibus dolor in sapien lacinia, ut sagittis eros condimentum. Duis suscipit dolor lorem, a sollicitudin purus tincidunt quis. Aliquam diam tortor, blandit ut rutrum at, iaculis ut enim. Vivamus euismod aliquam tortor in tristique. Morbi tristique efficitur rhoncus. Nunc cursus velit non suscipit fermentum. Pellentesque sodales tellus dolor, sed dictum purus faucibus ac. Donec non sapien pretium, malesuada erat vitae, laoreet lectus. Proin nisi ligula, laoreet vel nulla eu, rhoncus gravida justo.",
            "year": "2023"
        },
        {
            "name": "COLOR PICKER",
            "answer": "",
            "year": "2023"
        },
        {
            "name": "COUNTER",
            "answer": "",
            "year": "2023"
        },
        {
            "name": "SUN CAFE",
            "answer": "",
            "year": "2023"
        },
    ];

    let qAndAList = [];

    for (let i=0; i<qAndAData.length; i++) {
        qAndAList.push(<QandASet title={qAndAData[i].name} answer={qAndAData[i].answer} year={qAndAData[i].year}></QandASet>);
    }

    return (
        <>
            <div className="drop">
                {qAndAList}
            </div>
        </>
    );
}

function QandASet({title, answer, year}) {

    const [isShowAnswer, setIsShowAnswer] = useState(false);

    var answerClass;
    if (isShowAnswer) {
        answerClass = "";
    } else {
        answerClass = " hide";
    }

    function showAnswer() {
        setIsShowAnswer(!isShowAnswer);
    }

    return (
        <>
            <div>
                <div className="marginT50px pointer endText" onClick={showAnswer} key={"set0"}>
                    <span className="rgtMargin3em">{year}</span>
                    <span className="fontSZ50">{title}</span>
                </div>
                <div className={"width50pct marginT50px" + answerClass}>{answer}</div>
            </div>
        </>
    );
}

export {Projects};