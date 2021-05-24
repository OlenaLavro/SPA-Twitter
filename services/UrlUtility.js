

const UrlUtility ={
    parseUrl: ()=>{
        const url = location.hash.slice(1).toLowerCase() || '/';

        const partsOfUrl = url.split("/");
        const objUrl = {};
        objUrl.page = partsOfUrl[1];
        objUrl.tweetId = partsOfUrl[2];
    
        return objUrl;
    }
}

export default UrlUtility;