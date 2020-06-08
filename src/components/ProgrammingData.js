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
import SONGREQUEST from '../res/project_photos/pts/song_request.jfif';
import SPYFALL from '../res/project_photos/spyfall/spyfall.png';
import TICTACTOE from '../res/project_photos/ttt/tictactoe.jpeg';
import ADRYAN from '../res/project_photos/adryan/adryan.jpg';
import SHADOWDEFEND from '../res/project_photos/sd/shadow_defend.png';

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
    titleImg: SONGREQUEST,
    body: '',
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
    video: '',
  },
  {
    title: 'Spyfall',
    titleImg: SPYFALL,
    body: '',
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
    video: '',
  },
  {
    title: 'Tic Tac Toe',
    titleImg: TICTACTOE,
    body: '',
    github: 'https://github.com/ryrutherford/TicTacToeWebApp',
    link: 'http://tictactoe-env.pbe2cumsqb.us-east-2.elasticbeanstalk.com/',
    languages: [
      {
        data: 'Java',
        img: JAVALOGO
      },
      {
        data: 'CSS',
        img: CSSLOGO
      },
    ],
    video: '',
  },
  //TODO: move shadow defend to github
  {
    title: 'Shadow Defend',
    titleImg: SHADOWDEFEND,
    body: '',
    github: '',
    languages: [
      {
        data: 'Java',
        img: JAVALOGO
      },
    ],
    video: '',
  },
  {
    title: 'Personal Website',
    titleImg: ADRYAN,
    body: '',
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