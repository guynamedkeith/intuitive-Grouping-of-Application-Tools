var Route = new Class(
{	
	base:	null,
	entity:	null,
	uri:	null,
	
	initialize: function ()
	{
		this.uri = new URI();
		this.base	= this.uri.get('scheme') + '://' + this.uri.get('host') + '/';
		this.entity	= this.uri.toString().replace(this.base, '').singularize();
	}
});