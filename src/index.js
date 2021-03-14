import Comment from './Comment';
import CommentGrow from './CommentGrow';

const comment = new Comment()
comment.validation()

const commentGrow = new CommentGrow()
commentGrow.validation()

comment.saveComment()