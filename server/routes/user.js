
/*
 * GET users listing.
 */

exports.index = function(req, res){
	res.json({users: [
		{
			Name: "John Doe",
			Id: 1
		}, {
			Name: "Jane Doe",
			Id: 2
		}
	]});
};
