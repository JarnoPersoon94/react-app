import React from 'react'
import ReactDOM from 'react-dom';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Track from '../Track/Track';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      SearchResults: [{name: 'name1', 
      artist: 'artist1', 
      album: 'album1',
      id: 1},
      {name: 'name2', 
      artist: 'artist2', 
      album: 'album2',
      id: 2},
      {name: 'name3', 
      artist: 'artist3', 
      album: 'album3',
      id: 3}],
      playlistName : 'playlist',
      playlistTracks: [{name: 'name1', 
      artist: 'artist1', 
      album: 'album1',
      id: 1},
      {name: 'name2', 
      artist: 'artist2', 
      album: 'album2',
      id: 2},
      {name: 'name3', 
      artist: 'artist3', 
      album: 'album3',
      id: 3}]
  }
  this.addTrack = this.addTrack.bind(this)
  this.removeTrack = this.removeTrack.bind(this)
  this.updatePlaylistName = this.updatePlaylistName.bind(this)
  this.savePlaylist = this.savePlaylist.bind(this)
  this.search = this.search.bind(this)
}

  savePlaylist(){
    const trackUri = this.state.playlistTracks.map(track => track.uri)
  }

  addTrack(track){
    let tracks = this.state.playlistTracks
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return
    }
    tracks.push(track)
    this.setState({playlistTracks : tracks})
  };

  removeTrack(track){
    let tracks = this.state.playlistTracks
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)

    this.setState({playlistTracks : tracks})
  }

  updatePlaylistName(name){
    this.setState({playlistName: name})
  }

  search(term){
    console.log(term)
  }

  

  render(){
  return (
    <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar onSearch = {this.search}/>
      <div className="App-playlist">
        <SearchResults searchResults = {this.state.SearchResults} onAdd = {this.addTrack}/>
        <Playlist playlistName = {this.state.playlistName} playlistTracks = {this.state.playlistTracks} 
        onRemove = {this.removeTrack}
        onSave = {this.savePlaylist}/>
      </div>
    </div>
    </div>
  )
} 
}
  


export default App;
