const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
             printPlaylists: function() {
              for(playlist in this.playlists) {
                     let playlistObj = this.playlists[playlist] 
                     let printedPlaylists = `${playlistObj.id}: ${playlistObj.name} - ${playlistObj.tracks.length} tracks`
                     console.log(printedPlaylists)
              }
       },
              printTracks: function() {
                     for (songs in this.tracks) {
                            let songsObj = this.tracks[songs]
                            let printedSongs = `${songsObj.id}: ${songsObj.name} by ${songsObj.artist}(${songsObj.album})`
                            console.log(printedSongs)
                     }
              },
              
              printPlaylist: function(playlistId) {
                     let playlist = this.playlists[playlistId]
                     let songArr = playlist.tracks
                     console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`)
                     for (song of songArr) {
                            let currSong = library.tracks[song]
                            let returnMessage = `${currSong.id}: ${currSong.name} by ${currSong.artist} (${currSong.album})`
                            console.log(returnMessage)
                     }
              },
              
              addTrackToPlaylist: function(trackId, playlistId) {
                     let currPlaylist = library.playlists[playlistId]
                     currPlaylist.tracks.push(trackId)
                     console.log(currPlaylist)
              },
              addTrack: function(name, artist, album) {
                     let trackObj = this.tracks
                     let newId = this.generateUid()
                     
                     trackObj[newId] = {}
                     let newTrack = trackObj[newId]
                     newTrack.id = newId
                     newTrack.name = name
                     newTrack.artist = artist
                     newTrack.album = album
                     console.log(library.tracks)
              },
              addPlaylist: function(name) {
                     let playlistObj = library.playlists
                     let newId = this.generateUid()
                     
                     playlistObj[newId] = {}
                     
                     let newPlaylist = playlistObj[newId]
                     newPlaylist.id = newId
                     newPlaylist.name = name
                     newPlaylist.tracks = []
              
                     console.log(playlistObj)
              },
              addPlaylist: function(name) {
                     let playlistObj = library.playlists
                     let newId = this.generateUid()
                     
                     playlistObj[newId] = {}
                     
                     let newPlaylist = playlistObj[newId]
                     newPlaylist.id = newId
                     newPlaylist.name = name
                     newPlaylist.tracks = []
              
                     console.log(playlistObj)
              },
              generateUid: function() {
                     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                   }




              



       
       };

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
// const printPlaylists = function(obj) {
//        for(playlist in obj.playlists) {
//               let playlistObj = obj.playlists[playlist] 
//               let printedPlaylists = `${playlistObj.id}: ${playlistObj.name} - ${playlistObj.tracks.length} tracks`
//               console.log(printedPlaylists)
//        }

// }


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
// const printTracks = function(obj) {
//        for (songs in obj.tracks) {
//               let songsObj = obj.tracks[songs]
//               let printedSongs = `${songsObj.id}: ${songsObj.name} by ${songsObj.artist}(${songsObj.album})`
//               console.log(printedSongs)
//        }
// }


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// const printPlaylist = function(playlistId) {
//        let playlist = library.playlists[playlistId]
//        let songArr = playlist.tracks
//        console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`)
//        for (song of songArr) {
//               let currSong = library.tracks[song]
//               let returnMessage = `${currSong.id}: ${currSong.name} by ${currSong.artist} (${currSong.album})`
//               console.log(returnMessage)
//        }
// }



// adds an existing track to an existing playlist
// const addTrackToPlaylist = function(trackId, playlistId) {
//        let currPlaylist = library.playlists[playlistId]
//        currPlaylist.tracks.push(trackId)
//        console.log(currPlaylist)
// }


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
// const generateUid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// }


// adds a track to the library
// const addTrack = function(name, artist, album) {
//        let trackObj = library.tracks
//        let newId = generateUid()
       
//        trackObj[newId] = {}
//        let newTrack = trackObj[newId]
//        newTrack.id = newId
//        newTrack.name = name
//        newTrack.artist = artist
//        newTrack.album = album
//        console.log(library.tracks)
// }

library.addTrack("Solace", "The Collapse", "Catharsis")

// adds a playlist to the library
// const addPlaylist = function(name) {
//        let playlistObj = library.playlists
//        let newId = generateUid()
       
//        playlistObj[newId] = {}
       
//        let newPlaylist = playlistObj[newId]
//        newPlaylist.id = newId
//        newPlaylist.name = name
//        newPlaylist.tracks = []

//        console.log(playlistObj)
// }

library.addPlaylist("Heavy stuff")


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}