import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./RightPanel.css";
import { useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "react-bootstrap";
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
        <h5>What's Happening?</h5>
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