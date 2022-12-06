/* eslint-disable no-undef */
import { apiKey, baseUrl, posterPath } from "./https";
import axios from "axios";
import Hls from "hls.js";


const client = new WebTorrent();
const urlMoviesDownload = "https://yts.mx/api/v2/";

const getMoviesBySearch = (page, search) => {
  let url = baseUrl + "/3/search/movie" + apiKey;

  if(page != null)
    url += "&page="+page;
    
  if(search != null)
    url += "&query="+search;
  
  return axios.get(url).then((response) => {
    let data = response.data;
    data.results.map((item) => {
      item.poster = posterPath + item.poster_path;
      item.backPoster = posterPath + item.backdrop_path;
    });
    return data.results;
  });
}

const getNowPlaying = (page) => {
  let url = baseUrl + "/3/movie/now_playing" + apiKey;
  if(page != null)
    url += "&page="+page;
  return axios.get(url).then((response) => {
    let data = response.data;
    data.results.map((item) => {
      item.poster = posterPath + item.poster_path;
      item.backPoster = posterPath + item.backdrop_path;
    });
    return data.results;
  });
};

const getTopRated = (page) => {
  let url = baseUrl + "/3/movie/top_rated" + apiKey;
  if(page != null)
    url += "&page="+page;
  return axios.get(url).then((response) => {
    let data = response.data;
    data.results.map((item) => {
      item.poster = posterPath + item.poster_path;
      item.backPoster = posterPath + item.backdrop_path;
    });
    return data.results;
  });
};

const getMovieById = (id) => {
  const url = baseUrl + "/3/movie/" + id + apiKey;
  return axios.get(url).then((response) => {
    let item = response.data;
    item.poster = posterPath + item.poster_path;
    item.backPoster = posterPath + item.backdrop_path;
    
    return item;
  });
};

const getTorrentQualitiesByName = (name) => {
  const url = urlMoviesDownload + "list_movies.json?query_term=" + name;
  return axios.get(url).then((response) => {
    let movie = response.data.data;
    console.log(movie);

    if(movie.movies && movie.movies.length > 0){
      return movie.movies[0].torrents;
    }
    else
      return [];
  });
};

// const video = document.getElementById("movie-video");
const downloadTorrentByUrl = (url) => {
  window.open(url, "_blank");
  // url = "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent";

  // console.log(url);
  // client.add(url, function (torrent) {
  //   // Torrents can contain many files. Let's use the .mp4 file
  //   // console.log("file: ", file);
  //   console.log("torrent: ", torrent);
  //   const file = torrent.files.find(function (file) {
  //     return file.name.endsWith('.mp4')
  //   })
  //   console.log("file: ", file);
  
  
  //   // Display the file by adding it to the DOM.
  //   // Supports video, audio, image files, and more!
  //   // file.appendTo('.movie-video')
  //   if(Hls.isSupported()) {
  //     // console.log("oi");
  //     var hls = new Hls();
  //     hls.loadSource(file);
  //     hls.attachMedia(video);
  //   }
  //   else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  //     video.src = videoSrc;
  //   }
    
  // });
}

export { getNowPlaying, getTopRated, getMovieById, getTorrentQualitiesByName, downloadTorrentByUrl, getMoviesBySearch };
