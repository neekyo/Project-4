const mongoose = require('mongoose');

const uri = 'mongodb+srv://niko:niko@cluster0-ciatq.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
	console.log('Connected to Mongo instance');
});
mongoose.connection.on('error', (err) => {
	console.error('Error connecting to Mongo', err);
});
