export interface PostInterface {
  title: string;
  body: string;
  id: string;
  comments: Array<CommentInterface>;
}

export interface CardInterface {
  title: string;
  body: string;
  id: string;
}

export interface CommentInterface {
  id: string;
  body: string;
}

export interface FormInterface {
  onSubmit: (title: string, body: string) => void;
}

export interface DialogInterface {
  onClose: () => void;
  open: boolean;
  message: string;
}

export interface HomePageInterface {
  posts: Array<PostInterface>;
  message: string;
  handleClose: () => void;
}

export interface PostPageInterface {
  post: PostInterface;
  message: string;
  handleClose: () => void;
}

export interface NewPostPageInterface {
  handleSubmit: () => void;
  handleClose: () => void;
  message: string;
}
