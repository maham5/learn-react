



function renderCustom(reactElement , container){

    /*const domElemnt = document.createElement(reactElement.type);
    domElemnt.innerHTML = reactElement.children;
    domElemnt.setAttribute("href" , reactElement.props.href)
    domElemnt.setAttribute("target" , reactElement.props.target);
    container.appendChild(domElemnt);*/

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
       if(prop === "children") continue;
       domElement.setAttribute(prop , reactElement.props[prop])
    }
    container.appendChild(domElement)


}

const reactElement = {
    type :"a",
    props:{
        href : "https://www.google.co.uk/webhp",
        target :"_blank"
    }, 
    children : "Click to vist this site"
}



const mainContainer = document.getElementById("root");

renderCustom(reactElement , mainContainer)