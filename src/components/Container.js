import Component from "./Component.js";

const templateHtmlElement = document.createElement('template');

templateHtmlElement.innerHTML = `
    <style>
        .container {
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        ::slotted(h1) {
            text-align: center;
        }
    </style>

    <div class="container">
        <slot></slot>
    </div>
`;

export default class Container extends Component {
    constructor(htmlContainer) {
        super(htmlContainer);
    }

    render() {
        this.renderUsingTemplate(templateHtmlElement);
    }
}

customElements.define('container-div', Container);