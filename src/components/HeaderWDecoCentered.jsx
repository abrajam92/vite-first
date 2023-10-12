import "./HeaderWDecoCentered.css";

function HeaderWDecoCentered({title, justifiedRight = false}){

    // Si justifiedRight, en .decorative-bars justify-content: end
    let assignedClassesCont = "decorative-bars";
    let assignedClassesHeader = "decoratedHeader syllable";

    if (justifiedRight){
        assignedClassesHeader += " alignRight";
        assignedClassesCont += " decorative-bars-justify-right";
    }

    else {
    }

    return (
        <div className={assignedClassesCont}>
            {/*<div className="decorative-bar-left"></div>*/}
            <h1 className={assignedClassesHeader}>{title}</h1>
        </div>
    );
}

export default HeaderWDecoCentered;