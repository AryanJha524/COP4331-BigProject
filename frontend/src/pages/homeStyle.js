import { makeStyles } from '@material-ui/core/styles';

const homeStyle = makeStyles((theme)=> ({
    root:{
        display: 'flex',
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        height: "100vh",
        color: 'white',
        minheight: '70vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/carLoginPic.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

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
    downArrow: {
        color: 'black',
        fontSize: "4rem",
    },
    margin: {
        margin: theme.spacing(1),
        },
    icon: {
        alignItems: 'center',
    },
}));

export default homeStyle;