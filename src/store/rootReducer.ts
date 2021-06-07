import { combineReducers } from 'redux';

// reducers
import PostsReducer from './Posts/PostReducer';
import NoteReducer from './Notes/NotesReducer';

const rootReducer = combineReducers({
    posts: PostsReducer,
    notes: NoteReducer,
});

export default rootReducer;
