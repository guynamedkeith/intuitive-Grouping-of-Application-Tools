var UsersController = new Class(
{
	Extends: ApplicationController,
	
	initialize: function ()
	{
		this.parent();
	},
	
	index: function ()
	{
		this.data['title']	= 'User List';
		this.data['users']	= User.find('all');
	}
});