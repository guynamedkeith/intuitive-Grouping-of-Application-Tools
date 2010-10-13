var Controller = new Class(
{
	data:	{},
	layout:	null,
	route:	null,
	
	initialize: function ()
	{
		this.route	= new Route();
	},
	
	getLayoutPath: function (action)
	{
		return '/apps/default/views/layouts/' + this.layout + '.ejs';
	},
	
	getViewPath: function (action)
	{
		return '/apps/default/views/' + this.route.entity.pluralize() + '/' + action + '.ejs';
	},
	
	// outputs view
	view: function (action, params)
	{
		// execute action
		this[action](params);
		
		// set browser title
		if (this.data['browserTitle'])
		{
			document.head.getElement('title').set('text', this.data['browserTitle']);
		}
		
		// templating
		this.data.viewData = this.data;
		this.data.viewPath = this.getViewPath(action);
		var html = new EJS({ url: this.getLayoutPath() }).render(this.data);
		
		// output html
		document.body.set('html', html);
	}
});