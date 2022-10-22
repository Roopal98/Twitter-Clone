import { tweetActions } from "./tweetsSlice"

export const fetchTweets = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://tweets.free.beeceptor.com/tweets/all')
      const data = await response.json()
    //   const data = doc.data()
      console.log(data)
      return data
    }
    try {
      const tweetData = await fetchData()
      dispatch(
        tweetActions.getAllTweets({
          tweets: tweetData || []
        })
      )
    } catch (error) {
    //   dispatch(
    //       uiActions.showNotification({
    //         status: 'error',
    //         title: 'Failed',
    //         message: 'Failed to fetch user data',
    //       }),
    //     );
    //     setTimeout(()=>{
    //       dispatch(uiActions.resetNotification())
    //     },3000)
    console.log(error)

    }
  }
}