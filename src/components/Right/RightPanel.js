import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./RightPanel.css";
import { useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import SettingsIcon from '@mui/icons-material/Settings';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VerifiedIcon from '@mui/icons-material/Verified';

const RightPanel = () => {
  const [filter,setFilter] = useState('')
  const [filteredTweets,setFilteredTweets] = useState([])
  const allTweets = useSelector((state)=> state.tweet.tweets)

  useEffect(()=>{
    if(filter.length===0) {
      setFilteredTweets([]);
      // console.log(`filter ${filter}`)
       return;}
    const fetchData =  () => {
      
        const filteredData = allTweets.filter(obj => obj.text.match(filter))
        // console.log(filteredData)
        setFilteredTweets(filteredData)
      }
    

    const timer = setTimeout(()=>fetchData(),1000)
    return ()=>{
      clearTimeout(timer)
    }
  },[filter])
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" value={filter} type="text" onChange={(e)=>setFilter(e.target.value)}/>
      </div>
      <div className="widgets__widgetContainer">
        <h4>What’s happening</h4>
        <ListGroup variant="flush">
          {filteredTweets.length>0 &&  filteredTweets.map((obj)=>
            <ListGroupItem key={obj.author_id}>
              {obj.text}
            </ListGroupItem>
          )}
        </ListGroup>
      </div>
    </div>
  );
};

export default RightPanel;