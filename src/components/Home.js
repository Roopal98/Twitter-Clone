import Sidebar from "./Sidebar/Sidebar"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Main from "./Main";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTweets } from "../store/tweet-actions";
import { tweetActions } from "../store/tweetsSlice";
const Home = () => {
    const dispatch = useDispatch()
    console.log('home')
    useEffect(()=>{
        const data = localStorage.getItem("data")
        if(!data){
            dispatch(fetchTweets())
        }
        else{
            dispatch(tweetActions.getAllTweets({tweets:data}))
        }

        
    },[])

 return (
    <Container fluid>
        <Row>
            <Col><Sidebar /></Col>
            <Col sm={7} lg={8}><Main /></Col>
            <Col><Sidebar /></Col>
        </Row>
       
        

    </Container>
 )
}

export default Home