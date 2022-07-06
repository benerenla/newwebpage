class Status extends HTMLElement {
    constructor() {
        super()

        this.userId = this.getAttribute("userId");
        this.getData()
    }
    async fetchData() {
        const data = await fetch("https://api.lanyard.rest/v1/users/"+ this.userId);
        const body = await data.json();
        return body;
    }
    async getData() {
        const { data }= await this.fetchData()
        console.log(data.activities[0] && !data.listening_to_spotify)
        if (data.activities[0] && !data.listening_to_spotify) {
            return this.innerHTML = `
                <div class="status">
                    <img src="https://cdn.discordapp.com/app-assets/${data.activities[0].application_id}/${data.activities[0].assets.large_image}.png">
                    <div class="details">
                    <h1>${data.activities[0].name ? data.activities[0].name: null}</h1>
                    <p>${data.activities[0].details}</p>
                    </div>
                </div>
            `
        } else if(data.activities[0] && data.activities[0].name === "Spotify") {
            return this.innerHTML= `
            <div class="status">
                <img src="https://cdn.discordapp.com/app-assets/${data.activities[0].application_id}/${data.activities[0].assets.large_image}.png">
                <div class="details">
                <h1>Listening On Sotify</h1>
                <p>${data.spotify.song}</p>
                <p>By ${data.spotify.artist}</p>
                </div>
            </div>
            `
        }
    }
}

customElements.define("discord-status", Status)