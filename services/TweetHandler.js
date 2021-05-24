import LocalStorageUtility from "./LocalStorageUtility.js";

const getTweetContent = (button) => {
    const tweet = button.closest('.list-item') || button.closest('.list-item_liked');
    return tweet.firstChild.innerHTML;
}

const getTweetListFromLocalStorage = () => LocalStorageUtility.getTweetList();

// const handleGoToLikedButton = () => {
//     // const areThereLikedTweets = LocalStorageUtility.getTweetList().some(tweet => tweet.isLiked);
//     // const visibility = !areThereLikedTweets ? 'hidden' : '';

//     // if (document.querySelector('#goToLikedBtn')) {
//     //     !areThereLikedTweets ?
//     //         document.querySelector('#goToLikedBtn').classList.add('hidden') :
//     //         document.querySelector('#goToLikedBtn').classList.remove('hidden');
//     // }

//     // return visibility;
// }

const TweetHandler = {
    handleRemoveButton: (button) => {
        const tweetContent = getTweetContent(button);

        let tweets = getTweetListFromLocalStorage();
        tweets = tweets.filter(function (tweet) { return tweet.content !== tweetContent });

        LocalStorageUtility.saveTweetList(tweets);

        button.closest('.list-item').remove();

        TweetHandler.handleGoToLikedButton();
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

        TweetHandler.handleGoToLikedButton();
    },

    handleAlreadyLikedButton: (button) => {
        button.closest('.list-item_liked').remove();
    },

    getGoToLikedButtonVisibillity: () => {
        const areThereLikedTweets = LocalStorageUtility.getTweetList().some(tweet => tweet.isLiked);

        return areThereLikedTweets ? '' : 'hidden';
    },

    handleGoToLikedButton: () => {
        const goToLikedBtn = document.querySelector('#goToLikedBtn');

        if (goToLikedBtn && TweetHandler.getGoToLikedButtonVisibillity()) {
            goToLikedBtn.classList.add('hidden');
        }
        if(goToLikedBtn && !TweetHandler.getGoToLikedButtonVisibillity()){
            goToLikedBtn.classList.remove('hidden');
        }

    }
}

export default TweetHandler;