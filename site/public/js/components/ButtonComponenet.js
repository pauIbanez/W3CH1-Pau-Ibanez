import Component from "./Component.js";

class ButtonComponent extends Component {
    constructor(parentElement, className, text, actions, htmlTag = "div") {
        super(parentElement, className, htmlTag);

        this.generatreHTML(text);
        this.addEventListeners(actions);
    }

    generatreHTML(text) {
        this.element.textContent = text;
    }

    addEventListeners(actions) {
        actions.forEach((action) => {
            this.element.addEventListener(action.event, action.action);
        });
    }
}

export default ButtonComponent;
