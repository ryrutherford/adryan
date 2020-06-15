import JAVALOGO from '../res/logos/java_logo.jpg';
import JSLOGO from '../res/logos/javascript_logo.png';
import OCAMLLOGO from '../res/logos/ocaml_logo.png';
import CLOGO from '../res/logos/c_logo.jpg';
import PYTHONLOGO from '../res/logos/python_logo.png';
import DARTLOGO from '../res/logos/dart_logo.jpg';
import REACTLOGO from '../res/logos/react_logo.png';
import REDUXLOGO from '../res/logos/redux_logo.png';
import CSSLOGO from '../res/logos/css_logo.png';
import FLUTTERLOGO from '../res/logos/flutter_logo.png';
import MYSQLLOGO from '../res/logos/mysql_logo.png';
import FBLOGO from '../res/logos/fb_logo.png';
import BASHLOGO from '../res/logos/bash_logo.jpg';

export const programmingLanguages = [
  {
    data: 'Java',
    img: JAVALOGO
  },
  {
    data: 'JavaScript',
    img: JSLOGO
  },
  {
    data: 'OCaml',
    img: OCAMLLOGO
  },
  {
    data: 'C',
    img: CLOGO
  },
  {
    data: 'Python',
    img: PYTHONLOGO
  },
  {
    data: 'Dart',
    img: DARTLOGO
  },
];

export const tooling = [
  {
    data: 'React',
    img: REACTLOGO
  },
  {
    data: 'Redux',
    img: REDUXLOGO
  },
  {
    data: 'CSS',
    img: CSSLOGO
  },
  {
    data: 'Flutter',
    img: FLUTTERLOGO
  },
  {
    data: 'MySQL',
    img: MYSQLLOGO
  },
  {
    data: 'Firebase/Firestore',
    img: FBLOGO
  },
  {
    data: 'Bash',
    img: BASHLOGO
  },
];

export const projectData = [
  {
    title: 'Play That Song',
    titleImg: 'https://res.cloudinary.com/dpncams2q/image/upload/v1591693179/adryan/PlayThatSong/song_request_ngwfzj.jpg',
    github: 'https://github.com/ryrutherford/play-that-song',
    link: 'https://play-that-song-fac18.firebaseapp.com/about',
    languages: [
      {
        data: 'JavaScript',
        img: JSLOGO
      },
      {
        data: 'React',
        img: REACTLOGO
      },
      {
        data: 'Redux',
        img: REDUXLOGO
      },
      {
        data: 'Firebase/Firestore',
        img: FBLOGO
      },
    ],
    video: 'https://res.cloudinary.com/dpncams2q/video/upload/v1591693197/adryan/PlayThatSong/PlayThatSong_og1fdy.mp4',
  },
  {
    title: 'Spyfall',
    titleImg: 'https://res.cloudinary.com/dpncams2q/image/upload/v1591693142/adryan/Spyfall/spyfall_mxysj1.png',
    github: 'https://github.com/ryrutherford/spyfall',
    languages: [
      {
        data: 'Dart',
        img: DARTLOGO
      },
      {
        data: 'Flutter',
        img: FLUTTERLOGO
      },
      {
        data: 'Firebase/Firestore',
        img: FBLOGO
      },
    ],
    video: 'https://res.cloudinary.com/dpncams2q/video/upload/v1591693157/adryan/Spyfall/Spyfall_n0ekug.mp4',
  },
  {
    title: 'Tic Tac Toe',
    titleImg: 'https://res.cloudinary.com/dpncams2q/image/upload/v1591693280/adryan/TicTacToe/tictactoe_cfyvbk.jpg',
    github: 'https://github.com/ryrutherford/TicTacToeWebApp',
    link: 'http://tictactoe-env.pbe2cumsqb.us-east-2.elasticbeanstalk.com/',
    languages: [
      {
        data: 'Java',
        img: JAVALOGO
      },
      {
        data: 'JavaScript',
        img: JSLOGO
      },
      {
        data: 'CSS',
        img: CSSLOGO
      },
    ],
    video: 'https://res.cloudinary.com/dpncams2q/video/upload/v1591693287/adryan/TicTacToe/TicTacToe_uogbsj.mp4',
  },
  //TODO: move shadow defend to github
  {
    title: 'Shadow Defend',
    titleImg: 'https://res.cloudinary.com/dpncams2q/image/upload/v1591693217/adryan/ShadowDefend/shadow_defend_fqbbjf.png',
    github: '',
    languages: [
      {
        data: 'Java',
        img: JAVALOGO
      },
    ],
    video: 'https://res.cloudinary.com/dpncams2q/video/upload/v1591693234/adryan/ShadowDefend/ShadowDefend_w1rvqx.mp4',
  },
  {
    title: 'Personal Website',
    titleImg: 'https://res.cloudinary.com/dpncams2q/image/upload/v1591693250/adryan/Adryan/adryan_bxsjuw.jpg',
    body: 'You\'re here now so I don\'t think you need a video but I\'ll quickly explain some of the tools I used to build this website. The website was built using JavaScript and the React library and deployed to Firebase. I used MaterialUI as the UI framework and a lot of the design comes from their base components. I used a few API\'s to make it easier to maintain the website and update it without having to redeploy. The photos on the Home page are fetched from the Imgur API, the Google Maps API was used to show the places I\'ve visited in the About section, and the YouTube API was used to display some of my recents beats/tracks in the Music section.',
    github: 'https://github.com/ryrutherford/adryan',
    languages: [
      {
        data: 'JavaScript',
        img: JSLOGO
      },
      {
        data: 'React',
        img: REACTLOGO
      },
      {
        data: 'Firebase/Firestore',
        img: FBLOGO
      },
    ],
  },
]