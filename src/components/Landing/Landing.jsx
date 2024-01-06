import React from 'react'
import { Link } from 'react-router-dom'
import Dojo from './../../../public/images/dojoStream.png'
import Dojos from './../../../public/images/dojoStreams.png'
import Upload from './../../../public/images/upload.png'
import Bro from './../../../public/images/bro.png'
import Amico from './../../../public/images/amico.png'
import Video from './../../../public/images/video.png'
import './../../css/Landing.css'

export default function Landing() {
  return (
    <main>
        <nav className='nav'>
            <ul>
                <li className='title'><Link to="/"><img src={Dojo}  className="images" alt="dojostream" /></Link></li>
                <li className='list'>
                  <li><Link style={{textDecoration:"none", color:"#000"}}><h2>Courses</h2></Link></li>
                  <li><Link style={{textDecoration:"none", color:"#000"}}><h2>Videos</h2></Link></li>
                  <li><Link style={{textDecoration:"none", color:"#000"}}><h2>Courses</h2></Link></li>
                  <li><Link style={{textDecoration:"none", color:"#000"}}><h2>Courses</h2></Link></li>
                </li>
                <li className='lists'>
                  <Link to="/login"><button className='btn'>Log In</button></Link>
                  <Link to="/register"><button  className="btn" style={{marginLeft:"50px"}}>Regsiter </button></Link>
                </li>
            </ul>
        </nav>
        <section className='landing'>
          <div className="land">
            <div className="land-text">
              <h1>Welcome to DojoStream</h1>
              <p className="para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis animi fugiat aliquid accusamus mollitia modi quisquam laboriosam dicta quos ex quidem, labore vitae cum architecto molestiae natus consequatur facere at ut omnis explicabo ea? Quae beatae officiis omnis laborum nihil placeat, doloribus optio iusto quis est voluptates in ratione?
              </p>
            </div>
          </div>
          <div className='land'>
            <img src={Dojos}  className="dojos" alt="" />
          </div>
        </section>
        <section className="grids">
          <div className="grid">
            <img src={Upload} alt="dojostream" />
          </div>
          <div className="grid">
          <h1>Upload Your Videos</h1>
              <p className="para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis animi fugiat aliquid accusamus mollitia modi quisquam laboriosam dicta quos ex quidem, labore vitae cum architecto molestiae natus consequatur facere at ut omnis explicabo ea? Quae beatae officiis omnis laborum nihil placeat, doloribus optio iusto quis est voluptates in ratione?
              </p>
          </div>
          <div className="grid">
          <h1>View and Record while Coding or Streaming</h1>
              <p className="para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis animi fugiat aliquid accusamus mollitia modi quisquam laboriosam dicta quos ex quidem, labore vitae cum architecto molestiae natus consequatur facere at ut omnis explicabo ea? Quae beatae officiis omnis laborum nihil placeat, doloribus optio iusto quis est voluptates in ratione?
              </p>
          </div>
          <div className="grid">
            <img src={Bro} alt="dojostream" />
          </div>
          <div className="grid">
            <img src={Video} alt="dojostream" />
          </div>
          <div className="grid">
          <h1>Watch Recorded immediately after recording</h1>
              <p className="para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis animi fugiat aliquid accusamus mollitia modi quisquam laboriosam dicta quos ex quidem, labore vitae cum architecto molestiae natus consequatur facere at ut omnis explicabo ea? Quae beatae officiis omnis laborum nihil placeat, doloribus optio iusto quis est voluptates in ratione?
              </p>
          </div>
          <div className="grid">
          <h1>Upload Your Videos</h1>
              <p className="para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis animi fugiat aliquid accusamus mollitia modi quisquam laboriosam dicta quos ex quidem, labore vitae cum architecto molestiae natus consequatur facere at ut omnis explicabo ea? Quae beatae officiis omnis laborum nihil placeat, doloribus optio iusto quis est voluptates in ratione?
              </p>
          </div>
          <div className="grid">
            <img src={Amico} alt="dojostream" />
          </div>
        </section>
        <footer style={{textAlign:"center"}}><p>&copy; DojoStream 2024 All Rights Reserved</p></footer>
    </main>
  )
}
