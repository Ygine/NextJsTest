import { combineReducers } from 'redux';

// reducers
import PostsReducer from './Posts/PostReducer';

const rootReducer = combineReducers({
    posts: PostsReducer,

});

export default rootReducer;
