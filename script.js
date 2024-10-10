class WebComponentsTet  extends HTMLElement{
    constructor(){
        super()
        const data_shadow = {
                mode: "open"
            }

        const shadow = this.attachShadow(data_shadow)
        this.element = document.createElement("ul")
        this.elementStore = document.createElement("ul")
        this.elementStore.classList.add("content")
        shadow.appendChild(this.element)
        shadow.appendChild(this.elementStore)
    }

    connectedCallback(){
        // this.element.innerHTML = 
        // `<div>${this.getAttribute("data-api")}</div>`

        let urlStore = this.getAttribute("data-api")
        this.elementStore.innerHTML = ""
        this.classList.add("elements_store")
        fetch(urlStore)
        .then(req => req.json())
        .then(res => res.slice(0, 6).map(e => { 
            this.elementStore.innerHTML += 
                `
                <ul>
                    <p>${e.title}</p>
                    <p>${e.price}</p>
                    <img class="imagenes"  src="${e.image}" alt="">
                </ul>
            `
        })) 
        
    }
}

customElements.define("comp-test", WebComponentsTet)
