import LocalStorageUtility from "../services/LocalStorageUtility.js";
import TweetHandler from "../services/TweetHandler.js";

const Home = {

    render: () => {
        const tweets = LocalStorageUtility.getTweetList();
        
        const view =
         `<section class="section">
            <div class="button-list">
                <a href="#/add" id ="add" class="add-btn button"> add tweet </a> 
                <a href="#/liked" id="goToLikedBtn" class="button ${TweetHandler.getGoToLikedButtonVisibillity()}"> go to liked </a>
            </div>
            <ul class="list"> ${tweets.map(tweet => `<li class="list-item"><a href="#/edit/${tweets.indexOf(tweet)}">${tweet.content}</a>
                <a class="remove-btn" ><i class="far fa-trash-alt fa-lg " ></i></a>
                <a class="like-btn"><i class="fas fa-heart fa-lg ${tweet.isLiked ? 'liked' : ''}"></i></a></li>` ).join('\n ')}
            </ul>
        </section>`;

        return view;
    }
}

export default Home;