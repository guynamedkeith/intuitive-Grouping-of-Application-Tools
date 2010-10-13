var ApplicationController = new Class(
{
	Extends: Controller,
	
	initialize: function ()
	{
		this.parent();
		this.layout						= 'application';
		this.data['browserTitle']		= 'iGOAT - intuitive Grouping of Application Tools';
		this.data['applicationTitle']	= 'Demo Application';
	}
});