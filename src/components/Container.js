import Component from "./Component.js";

export default class Container extends Component {
    constructor(htmlContainer) {
        super(htmlContainer, 'div');
        this.htmlElement.classList.add('container');
    }
}