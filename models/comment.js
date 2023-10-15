import {Schema,model,models} from 'mongoose';
import { comment } from 'postcss';
const CommentSchema=new Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    comment:{
        type: String,
        required: [true,  'comment is required.'],
    }
});


const Comment= models.Comment || model('Comment', CommentSchema);
  
  export default Comment;
