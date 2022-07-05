import config from "../../config";
class Status extends HTMLElement {
    constructor() {
        super()

         this.setData()
    }
    async fetchData() {
        const data = await fetch("https://api.lanyard.rest/v1/users/760499240966684683");
        const body = await data.json();
        return body;
    }
    async setData() {
        const { data }= await this.fetchData()
        if (data.activities[0]) {
        this.innerHTML = `
            <div class="status">
                <img src="https://cdn.discordapp.com/app-assets/${data.activities[0].application_id}/${data.activities[0].assets.large_image}.png">
                <div class="details">
                <h1>${data.activities[0].name ? data.activities[0].name: null}</h1>
                <p>${data.activities[0].details}</p>
                </div>
            </div>
        `
        } else {
            this.innerHTML= `
                <h1>Not Activity</h1>
            `
        }
    }
}

customElements.define("discord-status", Status)