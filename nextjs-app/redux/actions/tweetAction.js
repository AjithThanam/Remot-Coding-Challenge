import * as types from '../types'
import Key from '../../key.json';
import axios from 'axios'



export const fetchTrumpTweets = () => async dispatch => {
    /**
     * GET REQUEST to the twitter Api
     * Do to the reques getting blocked by CORS I had to ad the 
     * following link as a proxy to actually process the request
     * https://cors-anywhere.herokuapp.com/
     */
    const response = await axios({
            method: 'get', 
            url: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=realDonaldTrump&count=6&include_entities=false',
            mode: 'no-cors',
            headers: {
                Authorization: Key.key,
                'Access-Control-Allow-Origin': '*',
            }
        })
    
    /**
     * The following snippet of code is to filter through the twitter api response 
     * i packaged only the necessary info such as the actual tweets and the dates
     * packaged both data sets into 2 arrays
     */
    let tweetArr = [];
    let tweetDateArr = [];

    for (let i = 0; i < response.data.length; i++){
        tweetArr[i] = response.data[i].text
        tweetDateArr[i] = response.data[i].created_at.substring(0, response.data[i].created_at.indexOf('+'));
    }

     /**
     * So were are ultimetly sending off, the type
     * the array of tweets as well as a seperate array holding 
     * the dates of each of those tweets
     */
    dispatch({
        type: types.TRUMP_TWEETS,
        payload: tweetArr,
        dates:tweetDateArr
    })
}

export const fetchHillaryTweets = () => async dispatch => {
    
    /**
     * GET REQUEST to the twitter Api
     * Do to the reques getting blocked by CORS I had to ad the 
     * following link as a proxy to actually process the request
     * https://cors-anywhere.herokuapp.com/
     */
    const response = await axios({
            method: 'get', 
            url: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=HillaryClinton&count=6&include_entities=false',
            mode: 'no-cors',
            headers: {
                Authorization: Key.key,
                'Access-Control-Allow-Origin': '*',
            }
        })

    /**
     * The following snippet of code is to filter through the twitter api response 
     * i packaged only the necessary info such as the actual tweets and the dates
     * packaged both data sets into 2 arrays
     */
    let tweetArr = [];
    let tweetDateArr = [];

    for (let i = 0; i < response.data.length; i++){
        tweetArr[i] = response.data[i].text
        tweetDateArr[i] = response.data[i].created_at.substring(0, response.data[i].created_at.indexOf('+'));
    }

    /**
     * So were are ultimetly sending off, the type
     * the array of tweets as well as a seperate array holding 
     * the dates of each of those tweets
     */
    dispatch({
        type: types.HILLARY_TWEETS,
        payload:tweetArr,
        dates:tweetDateArr

    })
}

/**
 * An empty dispatch function to clear the view from the tweets
 * Asynch is not needed as it no api calls are made
 */
export const resetView = () => dispatch => {
    dispatch({
        type: types.RESET_TWEETS
    })
}