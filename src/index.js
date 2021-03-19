import Comment from './Comment';
import Contact from './Contact';

const comment = new Comment();
comment.validation();

const contact = new Contact();
contact.validation();

comment.saveComment();

comment.showComment();

contact.saveContact();

contact.clearData();

contact.exitClear();