import LocalStorageUtility from "./LocalStorageUtility.js";


const Validation = {
    isTweetLengthCorrect: (tweetContent) => {
        if (tweetContent.length > 100) {
            return false;
        }
        if (tweetContent.trim().length === 0) {
            return false;
        }
        return true;
    },

    isTweetUnique: (tweetContent) => {
        const tweets = LocalStorageUtility.getTweetList();

        const isRepeated = tweets.some(tweet => (tweet.content.trim() === tweetContent.trim()));

        return isRepeated ? false : true;
    },

    displayAlert: (message) => {
        const failAlert = document.querySelector('#failAlert');

        failAlert.textContent = message;
        failAlert.style.opacity = '1';

        setTimeout(function () {
            failAlert.style.opacity = '0';
        }, 2000)
    }
}

export default Validation;