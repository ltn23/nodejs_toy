const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://admin232161:nhan2003@cluster0.vf2ogju.mongodb.net/atn_shop?retryWrites=true&w=majority', {
            useNewUrlParser : true,
            useUnifiedTopology: true,
        });
        console.log('connect successfully');
    } catch (error) {
        console.log('connect failed!!!');
    }
}

module.exports = { connect };