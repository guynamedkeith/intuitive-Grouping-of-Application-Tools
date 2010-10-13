var ResourceModel = new Class(
{
	Extends: Model,
	
	initialize: function (id)
	{
		this.parent(this.load(id));
	},
	
	load: function (id)
	{
		return { 'id': id || 1, 'name': 'Joey' };
	}
});