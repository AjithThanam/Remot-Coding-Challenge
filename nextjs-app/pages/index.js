import React, { Component } from 'react';
import Key from '../key.json'

export async function getServerSideProps() {
    const trumpEndpoint = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=realDonaldTrump&count=1';
    let response = await fetch(trumpEndpoint,{
        headers: {
            'Authorization': Key.key
        }
    })
    response = await response.json();
    
    return {
        props: {
			response
        }
    }
}


export default function Home({ response}) {
	console.log('response', response[0].text)

  return(
    <div>
    	<div>{response[0].text}</div>
      	<div>{response[0].created_at}</div>
    </div>
  )
}

