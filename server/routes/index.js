const {postalCodeController,provinceDataController } = require('../controllers');

module.exports = (app)=>{
	app.get('/api',(req,res)=> res.status(200).send({
	message: "welcome to the todos API!"
})) 
app.post('/api/postalcode', postalCodeController.create);
app.get('/api/postalcode', postalCodeController.list);
app.get('/api/postalcode/:id', postalCodeController.list);
app.get('/api/postalcode/keyword', postalCodeController.keySearch);
app.get('/api/postalcode/province', postalCodeController.retrieve);
app.put('/api/postalcode/:postalCodeId', postalCodeController.update);
app.delete('/api/postalcode/:postalCodeId', postalCodeController.destroy);

app.post('/api/province/:provincedata', postalCodeController.create);
app.put('/api/province/:provincedata/:provincedataId', postalCodeController.update);
app.delete(
	'/api/province/:provincedata/:provincedataId', postalCodeController.destroy
);

app.all('/api/postalcode/:postalcodeId/items', (req, res) =>
	res.status(405).send({
		message: 'Method Not Allowed',
}));
}