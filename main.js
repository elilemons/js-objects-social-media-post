class SocialMediaPost {
    constructor(caption, image, hashtags, platform) {
        this.caption = caption;
        this.image = image;
        this.hashtags = hashtags;
        this.platform = platform;
    }

    listOutHashtags() {
        let longHashTagString = "";
        for (let hashtag of this.hashtags) {
            longHashTagString += `#${hashtag} `;
        }
        return longHashTagString;
    }

    post() {
        return `You've posted ${this.image} with this caption: ${this.caption} to this platform: ${this.platform} with these tags: ${this.listOutHashtags()}!`;
    }
}

let ericsPost = new SocialMediaPost("Found these dope kicks yo", "dopeKicks.jpeg", ["dope", "lit", "fire"], "tumblr");

console.log(ericsPost);
console.log(ericsPost.post());

let mikesPost = new SocialMediaPost("Need two tickets to Grizz", "giveMeTicketsDamnit.jpeg", ["thirsty", "grizz", "free"], "Facebook");

console.log(mikesPost.post());

let bobsPost = new SocialMediaPost("No", "brokenImage.jpeg", ["none", "nada", "why are you here"], "none");

console.log(bobsPost.post());