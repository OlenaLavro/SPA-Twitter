import LocalStorageUtility from "../services/LocalStorageUtility.js";

const displayAlert = function (failAlert) {
    failAlert.style.opacity = '1';
    setTimeout(function () {
        failAlert.style.opacity = '0';
    }, 2000)
}

const isTweetValid = function (tweetContent) {
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

const isTweetUnique = function (tweetContent) {
    const tweets = LocalStorageUtility.getTweetList();
    const failAlert = document.querySelector('#failAlert');

    const isRepeated = tweets.some(tweet => (tweet.content.trim() === tweetContent.trim()));

    if (isRepeated === true) {
        failAlert.textContent = 'Oouupss...You already have the same tweet';
        displayAlert(failAlert);
        return false;
    } else {
        return true;
    }
}

const AddTweet = {
    handleSaveBtn: () => {
        const tweetContent = document.querySelector('#textarea').value;
        const tweets = LocalStorageUtility.getTweetList();

        if (isTweetValid(tweetContent) && isTweetUnique(tweetContent)) {
            tweets.push(
                {
                    'content': tweetContent,
                    'isLiked': false
                }
            )

            LocalStorageUtility.saveTweetList(tweets);
            window.history.back()
        }

    },

    handleCancelBtn: () => window.history.back(),

    render: () => {
        const view = `<section class="add-section">
            <div id="failAlert" class="fail-alert ">Ouuupss...Tweet length is more than 100 symbols! </div>
            <h1>Add Tweet</h1> 
            <textarea class="textarea " id="textarea">
            </textarea>
            <div class="button-list">
            <button id="cancelBtn" class="button">cancel</button>
            <button id="saveBtn" class="button">save</button>
            </div>
            </section>`;

        return view;
    }
}

export default AddTweet;