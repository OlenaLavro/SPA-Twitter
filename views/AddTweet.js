import LocalStorageUtility from "../services/LocalStorageUtility.js";
import Validation from "../services/Validation.js";


const AddTweet = {
    handleSaveBtn: () => {
        const tweetContent = document.querySelector('#textarea').value;
        const tweets = LocalStorageUtility.getTweetList();


        if (!Validation.isTweetLengthCorrect(tweetContent)) {
           Validation.displayAlert('Ouupps..Tweet length is not correct!');
        }

        if(!Validation.isTweetUnique(tweetContent)){
            Validation.displayAlert('Oouupss...You already have the same tweet!');
        }

        if (Validation.isTweetLengthCorrect(tweetContent) && Validation.isTweetUnique(tweetContent)) {
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
        
        const view = 
                `<section class="add-section">
                    <div id="failAlert" class="fail-alert"></div>
                    <h1>Add Tweet</h1>
                    <textarea class="textarea" id="textarea"></textarea>
                    <div class="button-list">
                        <button id="cancelBtn" class="button">cancel</button>
                        <button id="saveBtn" class="button">save</button>
                    </div>
                </section>`;

        return view;
    }
}

export default AddTweet;