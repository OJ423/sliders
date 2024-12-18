/* eslint-disable react/prop-types */

import {WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, RedditShareButton, RedditIcon} from 'react-share'
import { CiMedicalClipboard } from "react-icons/ci";
import React from "react"

export default function SocialShare({share, setShare}) {
  const storedGameStatsString = localStorage.getItem('gameStats');
  const storedGameStatsArr = JSON.parse(storedGameStatsString);
  const shareURL = `https://slidersgame.com`
  const title = `My Sliders Game score is ${storedGameStatsArr[1]}
1. Target: ${storedGameStatsArr[2]}, Score: ${storedGameStatsArr[3]}, Penalty: ${storedGameStatsArr[4]}
2. Target: ${storedGameStatsArr[5]}, Score: ${storedGameStatsArr[6]}, Penalty: ${storedGameStatsArr[7]}
3. Target: ${storedGameStatsArr[8]}, Score: ${storedGameStatsArr[9]}, Penalty: ${storedGameStatsArr[10]}
4. Target: ${storedGameStatsArr[11]}, Score: ${storedGameStatsArr[12]}, Penalty: ${storedGameStatsArr[13]}
5. Target: ${storedGameStatsArr[14]}, Score: ${storedGameStatsArr[15]}, Penalty: ${storedGameStatsArr[16]}
  `
  const handleCopyToClipBoard = () => {
    navigator.clipboard.writeText(`${title}
${shareURL}`)
  }

  const cancelShare = () => {setShare(!share)}

  return(
    <section className={`social-share-container ${share ? 'open' : ''}`}>
      <button onClick={cancelShare}>Cancel</button>
      <article>
        <h3>Sliders Game #{storedGameStatsArr[0]}</h3>
        <div className="social-logos">
          <WhatsappShareButton aria-label="Share your score on Whatsapp" url={shareURL} title={title} separator=' '>
            <WhatsappIcon size={50} borderRadius={5}/> 
          </WhatsappShareButton>
          <TwitterShareButton aria-label="Share your score on Twitter" title={title} url={shareURL}>
            <TwitterIcon size={50} borderRadius={5}/>
          </TwitterShareButton>
          <FacebookShareButton aria-label="Share your score on Facebook" onClick={handleCopyToClipBoard} url={shareURL}>
            <FacebookIcon size={50} borderRadius={5}/>
          </FacebookShareButton>
          <LinkedinShareButton aria-label="Share your score on LinkedIn" onClick={handleCopyToClipBoard} summary={title} url={shareURL}>
            <LinkedinIcon size={50} borderRadius={5}/>
          </LinkedinShareButton>
          <RedditShareButton aria-label="Share your score on Reddit" title={title} url={shareURL}>
            <RedditIcon size={50} borderRadius={5}/>
          </RedditShareButton>
        </div>
        <div className="copy-results">
          <CiMedicalClipboard aria-label="Copy your stats to the clipboard" onClick={handleCopyToClipBoard} className='clipboard-icon' size={70}/>
          <p style={{textAlign:'left'}}>Copy to clipboard</p>
        </div>
        <p>If you&apos;re sharing on Facebook or LinkedIn you need to paste your results into the post body (these are copied automatically when you click share).</p>
      </article>
    </section>
  )
}