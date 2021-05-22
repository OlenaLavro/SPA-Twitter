import LocalStorageUtility from "./LocalStorageUtility.js";

const getTweetContent = (button) => {
    const tweet = button.closest('.list-item') || button.closest('.list-item_liked');
    return tweet.firstChild.innerHTML;
}

const getTweetListFromLocalStorage = () => LocalStorageUtility.getTweetList();

const TweetHandler = {
    handleRemoveButton: (button) => {
        const tweetContent = getTweetContent(button);

        let tweets = getTweetListFromLocalStorage();
        tweets = tweets.filter(function (tweet) { return tweet.content !== tweetContent });

        LocalStorageUtility.saveTweetList(tweets);

        button.closest('.list-item').remove();
    },

    handleLikeButton: (button) => {
        button.parentElement.classList.toggle('liked');

        const tweetContent = getTweetContent(button);

        const tweets = getTweetListFromLocalStorage();
        tweets.forEach(function (tweet) {
            if (tweet.content === tweetContent) {
                tweet.isLiked = !tweet.isLiked;
            }

            LocalStorageUtility.saveTweetList(tweets);
        })
    },
    
    handleAlreadyLikedButton: (button)=>{
        button.closest('.list-item_liked').remove();
    }
}

export default TweetHandler;