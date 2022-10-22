import { createSlice } from '@reduxjs/toolkit'

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: {
    tweets:[]
  },
  reducers: {
    getAllTweets(state, actions) {
    //   const tweetDetails = actions.payload
      console.log('inside reducer')
    //   console.log(tweetDetails.tweets)
      state.tweets = actions.payload.tweets
     
    },
    addTweet(state, actions) {
        // const author_id = actions.payload
      state.tweets.push(actions.payload)
    },
    removeTweet(state, actions) {
      state.tweets.splice(actions.payload,1)
    },
  },
})
export const tweetActions = tweetsSlice.actions
export default tweetsSlice
