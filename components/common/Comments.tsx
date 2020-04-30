/* eslint-disable react/jsx-wrap-multilines */
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { CommentInterface } from '../../types';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    alignSelf: 'flex-start',
    paddingTop: '40px',
  },
}));

type ComponentProps = {
  comments: Array<CommentInterface>;
};

const Comments = ({ comments = [] }: ComponentProps) => {
  const classes = useStyles();

  const commentsList = (
    <List className={classes.root}>
      {comments.map((comment, idx) => (
        <React.Fragment key={comment.id}>
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
};

export default Comments;
