import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

export default function ButtonSelect({ onClick }) {
    const [date, setDate] = useState("Today")
    const classes = useStyles();

    const handleClick = e => {
        e.preventDefault();
        setDate(e.currentTarget.value)
        onClick(e.currentTarget.value)
    };

    return (
        <div className={classes.root}>
            <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
            >
                <Button
                    onClick={handleClick}
                    variant={date == "Today" ? "contained" : ""}
                    value="Today"
                >
                    Today
                </Button>
                <Button
                    onClick={handleClick}
                    variant={date == "Week" ? "contained" : ""}
                    value="Week"
                >
                    Week
                </Button>
                <Button
                    onClick={handleClick}
                    variant={date == "Month" ? "contained" : ""}
                    value="Month"
                >
                    Month
                </Button>
            </ButtonGroup>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
            margin: theme.spacing(1)
        }
    }
}));
