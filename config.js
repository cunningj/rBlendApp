//Path to our mongo db also contains secret used for Jason Web Token creation
module.exports = {
    'secret': 'ilovescotchyscotch',
    'database': process.env.MONGODB_URI || 'mongodb://localhost:27017/rBlendApp'
};
