const mongosse = require('mongoose');
const { Schema } = mongosse;

const presentSchema = new Schema ({
    name: String,
    image: {
        type: String,
        default: 'https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg',
    },
    price: Number,
    recipient: String,
    description: String  
});
const Present = mongosse.model('Present', presentSchema);

module.exports = Present;