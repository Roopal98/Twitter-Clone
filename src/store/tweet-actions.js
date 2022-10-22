import { tweetActions } from "./tweetsSlice"

export const fetchTweets = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://tweets.free.beeceptor.com/tweets/all')
      const data = await response.json()
 
      console.log(data)
      return data
    }
    try {
      const tweetData = await fetchData()
      dispatch(
        tweetActions.getAllTweets({
          tweets: tweetData.data || []
        })
      )
    } catch (error) {console.log(error)}
  }
}
