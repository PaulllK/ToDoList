export default class Component extends HTMLElement {
    constructor(htmlContainer) {
        super();
        this.attachShadow({ mode: 'open' });
        this.htmlContainer = htmlContainer;
    }

    renderUsingTemplate(templateHtmlElement) {
        this.shadowRoot.appendChild(templateHtmlElement.content.cloneNode(true));
        this.htmlContainer.appendChild(this);
    }

    appendContent(content) {
        this.innerHTML += content; // add content (html element or text) in the dom
        this.shadowRoot.querySelector('slot').appendChild += this.lastChild; // add the corresponding DOM node to the shadow root
    }
}
