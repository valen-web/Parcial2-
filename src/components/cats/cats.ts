import { api_catas } from "../../services/apis";
import { img_catas } from "../../services/apis";

export enum cats_propieties{
    "fact" = "fact",
    "img" = "img"
}
export class cats extends HTMLElement {
    propieties: Record <cats_propieties, string> = {
        fact: "",
        img: ""
    }

    static get observedAttributes(){
        const attrs : Record<cats_propieties, null> = {
            fact: null,
            img: null
        }; return Object.keys(attrs)
    }

    attributeChangedCallback(propName:cats_propieties, _:unknown, newValue: string ){
        switch (propName) {
            case cats_propieties.fact:
                this.propieties.fact = newValue
                break;

            case cats_propieties.img:
                this.propieties.img = newValue
                break;
            default:
                break;
        }
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <div>
            <h1>
            ${this.propieties.fact}
            </h1>
            <img src="${this.propieties.img}" alt="">
            </div>
            `
        }
    }
}

customElements.define('cats-container', cats)