var Dispatcher = new Class(
{
	route:	null,
	
	initialize: function ()
	{
		this.route = new Route();
	},
	
	getAction: function ()
	{
		return 'index';
	},
	
	getControllerName: function ()
	{
		return this.getModelName().pluralize() + 'Controller';
	},
	
	getModelName: function ()
	{
		return this.route.entity.firstToUpperCase();
	},
	
	dispatch: function ()
	{
		// load model and controller classes
		new Asset.javascripts(
		[
			'/apps/default/controllers/ApplicationController.js',
			'/apps/default/controllers/' + this.getControllerName() + '.js',
			'/apps/default/models/' + this.getModelName() + '.js'
		],
		{
			onload: function ()
			{
				// process controller action and render view
				eval('var controller = new ' + this.getControllerName() + '()');
				controller.view(this.getAction());
			}.bind(this)
		});
	}
});