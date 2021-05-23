import LocalStorageUtility from "../services/LocalStorageUtility.js";
import UrlUtility from "../services/UrlUtility.js";
import Validation from "../services/Validation.js";

const EditTweet = {

    handleEditBtn: () => {
        const tweetContent = document.querySelector('#textarea').value;
        const url = UrlUtility.parseUrl();
        const tweets = LocalStorageUtility.getTweetList();

        if (!Validation.isTweetLengthCorrect(tweetContent)) {
            Validation.displayAlert('Ouupps..Tweet length is not correct!');
        }

        if (!Validation.isTweetUnique(tweetContent)) {
            Validation.displayAlert('Oouupss...You already have the same tweet!');
        }

        if (Validation.isTweetLengthCorrect(tweetContent) && Validation.isTweetUnique(tweetContent)) {
            tweets[url.tweetId].content = tweetContent;
            LocalStorageUtility.saveTweetList(tweets);
            window.history.back()
        }
    },

    render: () => {
        const url = UrlUtility.parseUrl();
        const tweet = LocalStorageUtility.getTweetList()[url.tweetId];

        const view =
                `<section class="edit-section">
                    <div id="failAlert" class="fail-alert"> </div>
                    <h1>Edit Tweet</h1>
                    <textarea class="textarea" id="textarea">${tweet.content}</textarea>
                    <div class="buttons">
                        <button id="cancelBtn" class="button">Cancel</button>
                        <button id="editBtn" class="button">Edit</button>
                    </div>
                </section>`;

        return view;
    }
}

export default EditTweet;