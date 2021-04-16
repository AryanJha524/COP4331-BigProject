
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    
    root: {
          height: '100vh',
        },
        image: {
          backgroundImage: "url(../images/carLoginPic.jpg)",
        // backgroundImage:"url(https://source.unsplash.com/random)",
          // backgroundRepeat: 'no-repeat',
          backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
            marginRight: '20px'
        },
        popup: {
          position: 'fixed',
          top: 0,
          left: 0,
          width: 100,
          height: 100,
          
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        popupInner: {
          position: 'relative',
          padding: 32,
          width: 100,
          maxWidth: 640,

        },
        popupInnerCloseBtn: {
          position: 'absolute',
          top: 16,
          right: 16,
        },
      }));
      
    export default useStyles;