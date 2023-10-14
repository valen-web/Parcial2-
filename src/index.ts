import { cats_propieties } from "./components/cats/cats";
import { cats } from "./components/cats/cats";
import { api_catas } from "./services/apis";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

     connectedCallback() {
        this.render()
    }

    async render() {
        if (this.shadowRoot) {
            const div =  this.ownerDocument.createElement("div")
            const btn = this.ownerDocument.createElement("button")
            const data = await api_catas();
            div.appendChild(btn)
            btn.textContent = "change"
            btn.addEventListener("click", () => {
                console.log(data)
                data.forEach((e: any) => {
                        const card = this.ownerDocument.createElement(`cats-container`) as cats
                        card.setAttribute(cats_propieties.fact, e.fact)
                        div.appendChild(card)
                     });
            }
            )
            this.shadowRoot.appendChild(div)
        }
        // const something = this.ownerDocument.createElement('div');
        // this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)