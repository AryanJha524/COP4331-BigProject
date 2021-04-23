import { makeStyles } from '@material-ui/core/styles';


const registerStyle = makeStyles((theme) => ({
    root: {
          height: '100vh',
        },
        image: {
        //   backgroundImage: "url(../images/carLoginPic.jpg)",
        //backgroundImage:"url(https://source.unsplash.com/random)",
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/carLoginPic.jpg'})`,  
        backgroundRepeat: 'no-repeat',
          backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        },
        appbar:{
          background: 'black',
          fontFamily: 'Roboto',
        },
        wrapper: {
          width: '80%',
          margin: '0 auto',
        },
        appbarTitle:{
          flexGrow: '1',
          position: 'relative',
          marginLeft: 0,
          width: '100%',
        },
        colorText: {
          color: '#fff',
        },
        title: {
          color: '#fff',
          fontSize: '4.5rem',
        },
        container: {
          textAlign: 'center',
        },
        paper: {
          margin: theme.spacing(8, 4),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
        icon: {
            //marginRight: '20px'
            alignItems: 'center',
        },
        homeButton: {
          // position: 'relative',
          // marginLeft: 0,
          // width: '100%',
          flexGrow: 1,
        }
      }));
      
    export default registerStyle;