//Models
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/author_db', {useNewUrlParser: true});


var QuoteSchema= new mongoose.Schema({
    quote:{type:String, required:[true, "Quote is required and it must be at least 3 characters long"], minlength:3},
    vote:{type: Number, default:0}
},
{
    timestamps:true
})

var AuthorSchema = new mongoose.Schema({
    name:{type: String, required:[true, "Author name is required and it must be al least 3 characters long"], minlength:3,unique: true },
    quote:[QuoteSchema]
},
{
    timestamps:true
}
);


const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;
// Author.create({name:"Kushal"})