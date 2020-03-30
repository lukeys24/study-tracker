import React from "react";
import {
    IconButton,
    AppBar,
    Toolbar,
    Typography,
    Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import TimerIcon from "@material-ui/icons/Timer";
import BarChartIcon from "@material-ui/icons/BarChart";
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        justifyContent: 'space-between'
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 2
    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <AppBar className={classes.root} position="static">
            <Toolbar className={classes.toolBar}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <HomeIcon />
                    </IconButton>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <TimerIcon />
                    </IconButton>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <BarChartIcon />
                    </IconButton>

                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
}
