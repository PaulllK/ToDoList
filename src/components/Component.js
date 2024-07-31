export default class Component {
    constructor(htmlContainer, htmlElementType) {
        this.htmlElement = document.createElement(htmlElementType);
        this.htmlContainer = htmlContainer;
        console.log(this.htmlContainer);
        this.htmlContainer.appendChild(this.htmlElement);
    }

    appendContent(content) {
        this.htmlElement.innerHTML += content;
    }
}