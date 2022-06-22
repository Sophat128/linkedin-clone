import React, { useState, useEffect}from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');
  // if the posts change it will go ahead and update it
  useEffect(() => {
    // use orderBy to set the order of the post according to timestamp in descending order
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map((doc) => (
        {
          id: doc.id,
          data: doc.data()
        }
      )))
    })
  }, [])
  const sentPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      // to get time
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className='feed'>
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form action="">
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sentPost} type='submit'>Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9'/>
          <InputOption Icon={SubscriptionsIcon} title='Video' color='#e7a33e'/>
          <InputOption Icon={EventNoteIcon} title='Event' color='#c0cbcd'/>
          <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7fc15e'/>
        </div>
      </div>
      {/* post */}
      <FlipMove>

        {posts.map(({id, data:{name, description, message, photoUrl}}) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
      {/* <Post name='Sophat' description='this is test' message='wow this work'/> */}
    </div>
  )
}

export default Feed
