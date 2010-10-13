String.implement(
{
	firstToUpperCase: function ()
	{
		return this.charAt(0).toUpperCase() + this.substr(1);
	},
	
	singularize: function ()
	{
		if (this.charAt(this.length - 1).toLowerCase() === 's')
		{
			return this.substr(0, this.length - 1);
		}
		
		return this;
	},
	
	pluralize: function ()
	{
		if (this.charAt(this.length - 1).toLowerCase() !== 's')
		{
			return this + 's';
		}
		
		return this;
	}
});

Asset.javascripts = function (scripts, options)
{
	var count		= 0;
	var loadScript	= function (script)
	{
		new Asset.javascript(script,
		{
			onload: function ()
			{
				count++;
			
				// fire the load event when the last script has loaded
				if (count === scripts.length)
				{
					if (options.onload) options.onload();
				}
				// load scripts synchronusly
				else if (!options.async)
				{
					loadScript(scripts[count]);
				}
			}
		});
	};
	
	if (options.async)
	{
		scripts.each(loadScript);
	}
	else
	{
		loadScript(scripts[count]);
	}
};
