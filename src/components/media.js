import React from 'react'
import axios from 'axios'
import sampleVideos from '../videodata'

const key = process.env.REACT_APP_API_YOUTUBE

class Media extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      currentVideo: null,
      query: ''
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.searchHandler = this.searchHandler.bind(this)
  }

  componentDidMount() {
    const snippets = sampleVideos.map((video)=>{
      return {
        id: video.id.videoId,
        description: video.snippet.description,
        title: video.snippet.title,
        thumbnails: video.snippet.thumbnails
      }
    })
    this.setState({
      videos: snippets,
      currentVideo: snippets[0]
    })
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  searchHandler(e) {
    e.preventDefault()

    axios({
      method: 'get',
      url: 'https://youtube.googleapis.com/youtube/v3/search',
      params: {
        key: key,
        part: 'snippet',
        channelId: 'UC7EB04U1QGRFEzBOYtqTgLw',
        q: this.state.query,
        type: 'video'
      }
    })
    .then((response) => {
      let snippets = response.data.items
      snippets = snippets.map((video)=>{
        return {
          id: video.id.videoId,
          description: video.snippet.description,
          title: video.snippet.title,
          thumbnails: video.snippet.thumbnails
        }
      })

      this.setState({
        videos: snippets,
        currentVideo: snippets[0]
      })
    })
    .catch((err) => {
      console.log(err)
    })


    this.setState({
      query: ''
    })
  }

  handleVideoClick(video) {
    this.setState({
      currentVideo: video
    })
  }

  render() {

    return (
      <div className='mediaContainer'>

        <div className='mediaDisplay'>
          <div className='mediaHeader'>
            <div className='bold'>Welcome to our media page</div>
            <div>Check out our most recent services or search for something specific</div>
          </div>
          <div className='search' >
            <form onSubmit={this.searchHandler} >
              <label>
                <input type='text' autoComplete='off' name='query' value={this.state.query} onChange={this.changeHandler}  />
              </label>
              <input type='submit' value='search' />
            </form>
          </div>
          <div className='videoContainer' >
            <div>{this.state.currentVideo && this.state.currentVideo.description}</div>
            <iframe
              className='video'
              title='exercise'
              src={`https://www.youtube.com/embed/${this.state.currentVideo && this.state.currentVideo.id}`}
            ></iframe>
          </div>
        </div>
        <div className='snippetDisplay'>
          {this.state.videos.map((video, index)=>{
            return(<div
              key={index}
              className='snippetContainer'
              onClick={()=>{this.handleVideoClick(video)}} >
              <img
                className='snippet'
                src={video.thumbnails.default.url}
                alt={video.title} />
            </div>)
          })}
        </div>
      </div>
    )
  }
}

export default Media