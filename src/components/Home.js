import Sidebar from "./Sidebar/Sidebar"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Main from "./Main";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTweets } from "../store/tweet-actions";
// import AddIcon from '@mui/icons-material/Add';
const Home = () => {
    const dispatch = useDispatch()
    console.log('home')
    useEffect(()=>{
        dispatch(fetchTweets())
    },[])

 return (
    <Container fluid>
        {/* <AddIcon/> */}
        <Row>
            <Col><Sidebar /></Col>
            <Col><Main /></Col>
            <Col><Sidebar /></Col>
        </Row>
       
        

    </Container>
 )
}

export default Home