/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    alignSelf: 'flex-start',
    paddingTop: '40px',
  },
}));

export default function Comments({ comments = [] }) {
  const classes = useStyles();

  const commentsList = (
    <List className={classes.root}>
      {comments.map((comment, idx) => (
        <React.Fragment key={comment.width}>
          {idx !== 0 && <Divider variant="inset" component="li" />}
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar>
                <AccountCircle />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={comment.body} />
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  );

  return comments.length ? (
    commentsList
  ) : (
    <Typography variant="subtitle1" className={classes.root}>
      No comments yet
    </Typography>
  );
}
