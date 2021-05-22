const LocalStorageUtility = {
getTweetList: ()=>{
  return  JSON.parse(localStorage.getItem('tweets')) || [];
},
saveTweetList: (tweets)=>{
    localStorage.setItem('tweets', JSON.stringify(tweets))
}
}

export default LocalStorageUtility;