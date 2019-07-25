import React from 'react'
import {ExpansionPanel, ExpansionPanelSummary, Grid, Typography, withStyles} from "@material-ui/core";


const styles = () => ({
    expansionPanelRoot: {
        width: 500,
        '@media (max-width: 550px)': {
            width: '85vw'
        }
    },
    expansionPanelSummaryRoot: {
        alignItems: 'flex-start',
    },
    forkedFrom: {
        color: '#586069',
        '& a': {
            textDecoration: 'none',
        },
        '& a:not(:hover)': {
            color: '#586069',
        },
        '& a:hover': {
            color: 'blue'
        }
    },
    titleItem: {
        marginBottom: 16
    },
    undisabled: {
        backgroundColor: 'white !important',
        opacity: '1 !important',
        pointerEvents: 'auto !important',
    }
})

const ProjectCard = ({ classes, description, parent, repoName }) => {
    return (
        <ExpansionPanel classes={{ root: classes.expansionPanelRoot, disabled: classes.undisabled }} disabled expanded={false}>
            <ExpansionPanelSummary classes={{ root: classes.expansionPanelSummaryRoot, disabled: classes.undisabled }}>
                <Grid container direction="column">
                    <Grid className={classes.titleItem} item>
                        <Typography variant="h6">{repoName}</Typography>
                        { parent && (
                            <React.Fragment>
                                <Typography className={classes.forkedFrom} variant="body2">
                                    Forked from <a href={parent.url}>{parent.name}</a>
                                </Typography>
                            </React.Fragment>
                        )}
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">{description}</Typography>
                    </Grid>
                </Grid>
            </ExpansionPanelSummary>
        </ExpansionPanel>
    )
}

export default withStyles(styles)(ProjectCard)