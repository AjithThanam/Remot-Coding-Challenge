import { useDispatch, useSelector } from 'react-redux'
import { fetchTrumpTweets, fetchHillaryTweets, resetView } from '../redux/actions/tweetAction'
import { Container, Row, Card, Button, Jumbotron } from 'react-bootstrap'
import React from 'react';


export default function Home() {

  /**
   * useDitchpatch functions allows us to send of actions to be handled to retrieve the right state
   * useSelecter allows us to get a handle to the state to then use how we see fit
   */
  const dispatch = useDispatch();
  const tweeter = useSelector(state => state);

  return (
    <Container className="md-container">
      <Container>
        <Jumbotron className="text-center" >
          <Container>
            <h1 className="title" style={{ fontSize: "50px" }}>Welcome To The Tweet Fetcher!</h1>
            <h5 style={{ margin: " 0 0 20px 0" }}>{tweeter.tweeter.info}</h5>

            {/*
                These are the buttons that will allow to dispatch the actions to retrieve either
                persons tweets, or to clear the view from all tweets
            */}

            <Button variant="danger active" style={{ fontWeight: "bold" }} block onClick={() => dispatch(fetchTrumpTweets())}>
              Show Donald Trump's Tweets
                    </Button>
            <Button variant="primary active" style={{ fontWeight: "bold" }} block onClick={() => dispatch(fetchHillaryTweets())}>
              Show Hillary Clinton's Tweets
                    </Button>
            <Button variant="secondary active" block onClick={() => dispatch(resetView())}>
              Clear All Tweets From View
                    </Button>
          </Container>
        </Jumbotron>
        <Container>
          <Row className="justify-content-md-between">

            {/* The following conditional logic verifies if either the Trump or Hillary
                buton was pressed. 
                If True, itterate through the array of tweets and display them on individual cards
                Else, Display nothing
            */}

            {tweeter.tweeter.selected &&
              tweeter.tweeter.tweets.map(function (tweet, index) {
                return (
                  <Card border="dark" className="sml-card" block style={{ margin: "10px", width: "100%" }} key={index}>
                    <Card.Header>Tweet #{index + 1}</Card.Header>
                    <Card.Body>
                      <Card.Title>{tweet}</Card.Title>
                      <Card.Text>
                        {tweeter.tweeter.dates[index]}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
          </Row>
        </Container>
      </Container>
    </Container>
  )
}



