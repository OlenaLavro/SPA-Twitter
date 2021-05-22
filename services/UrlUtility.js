

const UrlUtility ={
    parseUrl: ()=>{
        let url = location.hash.slice(1).toLowerCase() || '/';

        let partsOfUrl = url.split("/");
        let objUrl = {};
        objUrl.page = partsOfUrl[1];
        objUrl.tweetId = partsOfUrl[2];
    
        return objUrl;
    }
}

export default UrlUtility;