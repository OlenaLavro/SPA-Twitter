import LocalStorageUtility from "../services/LocalStorageUtility.js";
import UrlUtility from "../services/UrlUtility.js";


const displayAlert = function (failAlert) {
    failAlert.style.opacity = '1';
    setTimeout(function () {
        failAlert.style.opacity = '0';
    }, 2000)
}

const isTweetValid = function (tweetContent) {
   console.log(tweetContent.length)
    const failAlert = document.querySelector('#failAlert');
    if (tweetContent.length > 100) {
        failAlert.textContent = 'Ouuupss...Tweet length is more than 100 symbols!';
        displayAlert(failAlert);
    } else if (+tweetContent == 0) {
        failAlert.textContent = 'Ouupps..Tweet content is empty!'
        displayAlert(failAlert);
    } else {
        return true;
    }
}



let EditTweet = {
    handleEditBtn: () => {
        const tweetContent = document.querySelector('#textarea').value;
        const url = UrlUtility.parseUrl();
        const tweets = LocalStorageUtility.getTweetList();

        if (isTweetValid(tweetContent)) {
            tweets[url.tweetId].content = tweetContent;
            LocalStorageUtility.saveTweetList(tweets);
            window.history.back()
        }
    },
    render: () => {
        const url = UrlUtility.parseUrl();
        const tweet = LocalStorageUtility.getTweetList()[url.tweetId];

        const view = `<section class="edit-section">
            <div id="failAlert" class="fail-alert "> </div>
            <h1>Edit Tweet</h1>
            <textarea class="textarea" id='textarea'>` + tweet.content +
            `</textarea>
            <div class="buttons ">
            <button id="cancelBtn" class="button">Cancel</button>
            <button id="editBtn" class="button">Edit</button>
            </div>
            </section>`;
        return view;
    }
}

export default EditTweet;