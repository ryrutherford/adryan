import React, { useEffect, useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import PageInfo from '../display/PageInfo.js';
import CardDisplay from '../display/CardDisplay.js';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  body: {
    width: '75%',
    margin: '0 auto',
  },
}));

const Music = () => {

  const classes = useStyles();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios({
      baseURL: 'https://www.googleapis.com/youtube/v3/channels',
      method: 'get',
      params: {
        part: 'contentDetails',
        id: 'UC-VaCTyafVQkLwhmMrUzg7w',
        key: process.env.REACT_APP_GOOGLE_API_KEY,
      },
    })
      .then((response) => {
        const uploadsID = response.data.items[0].contentDetails.relatedPlaylists.uploads;
        axios({
          baseURL: 'https://www.googleapis.com/youtube/v3/playlistItems',
          method: 'get',
          params: {
            part: 'snippet',
            playlistId: uploadsID,
            maxResult: 6,
            key: process.env.REACT_APP_GOOGLE_API_KEY,
          },
        })
          .then((response) => {
            const videoIDs = response.data.items.map((item) => item.snippet.resourceId.videoId);
            axios({
              baseURL: 'https://www.googleapis.com/youtube/v3/videos',
              method: 'get',
              params: {
                part: 'snippet,player',
                id: videoIDs.join(','),
                maxResult: 10,
                key: process.env.REACT_APP_GOOGLE_API_KEY,
              },
            })
              .then((response) => {
                console.log(response);
                const videoInfo = response.data.items.map((item) => {
                  return {
                    titleImg: item.snippet.thumbnails.maxres ? item.snippet.thumbnails.maxres.url : item.snippet.thumbnails.high.url ,
                    title: item.snippet.title.split(' - ')[0],
                    video: 'https://www.youtube.com/watch?v=' + item.id,
                  }
                })
                setVideos(videoInfo);
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log('Get Channel Details Error', err));
  },[]);

  const title = 'My Music';
  const body = 'I\'ve been making beats since I was 15 but started taking my music more seriously when I turned 18 and got a copy of FL Studio. I tend to focus more on Hip Hop and RnB beats but I have also made some Tech House tracks. Check out some of my recent beats below!';

  return ( 
    <div className={classes.root}>
      <PageInfo title={title} body={body}/>
      <div className={classes.body}>
      <Grid
          container
          direction="row"
          justify="flex-start"
          spacing={3}
        >
        {
          videos !== [] ?
            videos.map((video, index) => {
              return (
                <Grid item xs={12} sm={6} key={index}>
                  <CardDisplay data={video}/>
                </Grid>
              )
            })
            :
            <Grid item>
            </Grid>
        }
        </Grid>
      </div>
    </div>
  );
}
 
export default Music;