import * as types from '../types'

const initialState = {
     info: "Pleases Select Who's Tweets You Would Like To See",
     selected: false
}

/**
 * Standard switch case to handle wich action has been fired off 
 * to send the proper data back to the component
 * 
 * Informations being sent off
 * tweets: action.payload -> Contains the array of tweets
 * dates: action.dates - > Contains the array of dates for the tweets
 * info: - > a string to be displayed to give a sense of what is being showed
 * Selected: -> a boolean that based on its value will determin what gets rendered on the page
 *               if true the tweets will be displayed, if false the page will be empty (i.e. for the reset)
 */
export const tweetReducer = (state = initialState, action) => {
    switch (action.type){
        case types.TRUMP_TWEETS:
            return {
                ...state,
                tweets: action.payload,
                dates: action.dates,
                info: "You Are Currently Viewing Donald Trump's Tweets",
                selected: true
            }
        case types.HILLARY_TWEETS:
            return {
                ...state,
                tweets: action.payload,
                dates: action.dates,
                info: "You Are Currently Viewing Hillary Clinton's Tweets",
                selected: true

            }
        /**
         * This doesnt contain any data since we dont want to display anything
         * we want the view to be cleared of the tweets if any 
         */
        case types.RESET_TWEETS:
            return {
                ...state,
                info: "View Cleared! Pleases Select Who's Tweets You Would Like To See",
                selected: false
            }
        default:
            return state
    }
}