import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {
  const newArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newArticle('Hello I am back', 'This is the cool project I never build')}
      {newArticle('Hello I am back', 'This is the cool project I never build')}
      {newArticle('Hello I am back', 'This is the cool project I never build')}
      {newArticle('Hello I am back', 'This is the cool project I never build')}
      {newArticle('Hello I am back', 'This is the cool project I never build')}
      {newArticle('Hello I am back', 'This is the cool project I never build')}
      {newArticle('Hello I am back', 'This is the cool project I never build')}
      {newArticle('Hello I am back', 'This is the cool project I never build')}
      {newArticle('Hello I am back', 'This is the cool project I never build')}
      
    </div>
  )
}

export default Widgets
