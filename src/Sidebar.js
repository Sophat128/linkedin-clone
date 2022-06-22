import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => 
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    
    
    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src="https://images.pexels.com/photos/7134986/pexels-photo-7134986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <Avatar src={user.photoUrl} className='sidebar_avatar'>{user.email[0]}</Avatar>
                <h2>{ user.displayName}</h2>
                <h4>{ user.email}</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you?</p>
                    <p className='sidebar_statNumber'>2,345</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className='sidebar_statNumber'>3,756</p>
                </div>
            </div>
            <div className="sidebar_button">
                <p>Recent</p>
                {recentItem('ReactJs')}
                {recentItem(`Programing`)}
                {recentItem(`Software`)}
                {recentItem(`Design`)}
                {recentItem(`Developer`)}
            </div>
        </div>
    )
}

export default Sidebar
