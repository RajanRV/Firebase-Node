module.exports = {
	action: (req, res) => {
		// you can call servcice using framework.services.<API_NAME>.<SERIVCE_NAME>.<METHOD_NAME>
		//example --> framework.services.<API>.index.method()
		res.send('Root Api is working');
	}
}