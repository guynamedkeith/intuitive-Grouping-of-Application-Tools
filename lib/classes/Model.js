var Model = new Class(
{
	attributes: {},
	
	initialize: function (attributes)
	{
		this.attributes = attributes;
	},
	
	get: function (attribute)
	{
		return this.attributes[attribute];
	}
});