import { Document,Schema,model } from "mongoose";
import { CatModel } from "./catMode_mongoDB";


//model interface describing the data in the model
export interface ISongModel extends Document{
    //don't specify the _id here !!!!
    url:string;
    title:string;
    songImg:string;
    category: Schema.Types.ObjectId; //foreign key to Category id
    videoFile:string;
}

const SongSchema = new Schema<ISongModel>(
    {
        //url
        url:{
            type:String,
            required: [true, "missing song URL"], //is it required and error code
            minlength: [ 3, "name too short"], //minimum length and error code
            maxlength: [255, "name too long"], //maximum length and error code
            trim: true, //clear white spaces :zeev      mindali > zeev mindali
            unique: false //is it unique
        },
        //title
        title:{
            type:String,
            required: [true, "missing song title"], //is it required and error code
            minlength: [ 3, "name too short"], //minimum length and error code
            maxlength: [255, "name too long"], //maximum length and error code
            trim: true, //clear white spaces :zeev      mindali > zeev mindali
            unique: false //is it unique
        },
        //songImg
        songImg:{
            type:String,
            required: [true, "missing song image"], //is it required and error code
            minlength: [ 3, "name too short"], //minimum length and error code
            maxlength: [255, "name too long"], //maximum length and error code
            trim: true, //clear white spaces :zeev      mindali > zeev mindali
            unique: false //is it unique
        },
        //videoFile
        videoFile:{
            type:String,
            required: [true, "missing video file"], //is it required and error code
            minlength: [ 3, "name too short"], //minimum length and error code
            maxlength: [255, "name too long"], //maximum length and error code
            trim: true, //clear white spaces :zeev      mindali > zeev mindali
            unique: false //is it unique
        },
        category: {
            type: Schema.Types.ObjectId,
        }
    }, {
        versionKey: false, //do not create _v field for versioning
        toJSON: {virtuals: true}
    }
);

export const SongModel = model<ISongModel>("songModel", SongSchema, "songs");