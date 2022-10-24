import Sidebar from "./Sidebar/Sidebar"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Main from "./Main";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTweets } from "../store/tweet-actions";
import { tweetActions } from "../store/tweetsSlice";
import RightPanel from "./Right/RightPanel";
const Home = () => {
    const dispatch = useDispatch()
    console.log('home')
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("data"))
        if(!data){
            dispatch(fetchTweets())
            console.log('fetching')
        }
        else{
            dispatch(tweetActions.getAllTweets({tweets:data}))
        }

        
    },[])

 return (
    <Container>
        <Row>
            <Col md={3} sm={3} lg={3}><Sidebar /></Col>
            <Col md={6} sm={6} lg={6}><Main /></Col>
            <Col md={3} sm={3} lg={3}><RightPanel /></Col>
        </Row>
    </Container>
 )
}

export default Home