import LocalStorageUtility from "../services/LocalStorageUtility.js";

const LikedTweets = {
    render: () => {
        const likedTweets = LocalStorageUtility.getTweetList().filter(tweet => tweet.isLiked);

        const view =
        `<section class="section">
            <i id="backBtn"  class=" far fa-arrow-alt-circle-left back-btn"></i>
            <ul class="list">${likedTweets.map(tweet => `<li class="list-item_liked"><a href="#/edit/${likedTweets.indexOf(tweet)}">${tweet.content}</a>
                <a class="liked-btn"><i class="fas fa-heart fa-lg liked"></i></a></li>`).join('\n ')}
            </ul>
        </section>`;
        
        return view;
    }
}

export default LikedTweets;