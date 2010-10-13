var User = new Class(
{
	Extends: ResourceModel
});

// TODO: move this to ResourceModelCollection.js
User.find = function (params)
{
	var models = [];
	
	for (i = 1; i < 10; i++)
	{
		models.push(new User(i));
	}
	
	return models;
};