import './status.js'

class navbar extends HTMLDivElement {
    constructor() {
        super() 

        this.set()
    }

    async set() {
        return this.innerHTML = `
            <discord-status userId="760499240966684683"></discord-status>
                <div>
                    <a href="/" data-link>Home</a>
                    <a href="/about" data-link>About</a>
                    <a href="/contact" data-link>Contact</a>
                </div>
            </div>
        `
    }
}
customElements.define("atlas-navbar", navbar, { extends: "div" } )