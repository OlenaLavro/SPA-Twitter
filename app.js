import Home from "./views/Home.js";
import AddTweet from "./views/AddTweet.js";
import EditTweet from "./views/EditTweet.js"
import LikedTweets from "./views/LikedTweets.js";

import UrlUtility from "./services/UrlUtility.js";
import TweetHandler from "./services/TweetHandler.js";

const routes =
{
    "/": Home,
    "/add": AddTweet,
    "/edit/:id": EditTweet,
    "/liked": LikedTweets
}

const router = () => {
    const root = document.querySelector("#root");

    let url = UrlUtility.parseUrl();
    let parsedURL = (url.page ? '/' + url.page : '/') + (url.tweetId ? '/:id' : '');
    let page = routes[parsedURL] || console.log('Error');

    root.innerHTML = page.render();
}

const handleButtons = (event) => {
    let target = event.target;

    if (target.id === 'saveBtn') {
        AddTweet.handleSaveBtn();
    } else if (target.id === 'editBtn') {
        EditTweet.handleEditBtn();
    } else if (target.id === 'cancelBtn'
        || target.id === 'backBtn'
        || target.parentElement.id === "backBtn") {
        AddTweet.handleCancelBtn();
    } else if (target.parentElement.classList.contains('remove-btn')
        || (target.parentElement.parentElement.classList.contains('remove-btn'))) {
        TweetHandler.handleRemoveButton(event.target);
    } else if (target.parentElement.parentElement.classList.contains('like-btn')) {
        TweetHandler.handleLikeButton(event.target);
        Home.handleGoToLikedButton();
    } else if (target.parentElement.parentElement.classList.contains('liked-btn')) {
        TweetHandler.handleAlreadyLikedButton(event.target);
        TweetHandler.handleLikeButton(event.target);
    }

}

window['root'].addEventListener('click', event => handleButtons(event));

window.addEventListener('hashchange', router);

window.addEventListener('load', router);

