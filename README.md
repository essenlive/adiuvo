# adiuvo

## About the app

Adiuvo is a prototype to test the implementation of HMI for autonomous cars. The objective is to have a quick interface to test with users.
It is made of three part, Omniscient to display the information in the field of view, Windvision to augment that information and Act up for the controls.
### WIP

***

## Run the app

Clone repo and launch meteor
`cd windvision ; meteor`

## Code norms
- All English.
- Always space statements. Ex : `a = b + 1`, not `a=b+1`
- CamelCase for all javascript classes, hyphens for css classes and underscores for filenames.
- Comment every new implementation as possible.

## Style
This app uses Less as a pre-processor and semantic_ui as framework.
Any changes the semantic_ui theme should be made inside the site folder in : `client/stylesheets/lib/semantic-ui/site/`

###Workflow
- The 'mixins.less' file loads the semantic theme file and adds custom variables and mixins.
- The 'style.less' file contains the global graphic styles and fixes.

## Structure

	client/
	    helpers/ # All the global js helpers client side
	    stylesheets/ # Global styles and layouts
	    templates/ # The app views, main pages and modules
          application/  # The global layouts
          includes/  # The internal dependancies
          logical_module_name/ # One folder for each logical module, containing html,js and possibly css
	lib/
      collections/ # The mongoDb collections
      router # All the app routes
	public/ # All public assets, images, fonts, videos...
	server/  
      fixtures #Content placeholder

[see meteor documentation](http://docs.meteor.com/#/full/structuringyourapp)
