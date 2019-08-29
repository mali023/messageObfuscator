import React from 'react';
import { Card, ListGroup } from 'react-bootstrap'

//This is a card template the gets info via props to display messages in a card view
function CardTemplate (props) {
    return (
        <>
            <Card bg="dark" style={{ width: '20rem', margin: 'auto'}}>
            <Card.Header style={{ color: '#fff' }}>{props.no} - Name: {props.name}</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item><b>Date: </b>{props.date}</ListGroup.Item>
                <ListGroup.Item><b>Number: </b>{props.number}</ListGroup.Item>
                <ListGroup.Item><b>Email: </b>{props.email}</ListGroup.Item>
                <ListGroup.Item><b>Message: </b>{props.message}</ListGroup.Item>
            </ListGroup>
            </Card>
            <br/><br/>
        </>
    )
}

export default CardTemplate;