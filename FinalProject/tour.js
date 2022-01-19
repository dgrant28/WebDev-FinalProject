const intro = introJs();

intro.setOptions({
	steps:[
	{
		element: '#introduction',
		intro: 'Welcome to our brand new website! Feel free to take our tour! ',
	},
	{
		element: '#home',
		intro: 'This is our home page where you can visit anytime for big announcements',
	},
	{
	element: '#news',
		intro: 'Here you can see all the latest buzz in the gaming community',
	},
	{
	element: '#SquadUp',
		intro: 'Looking for a team to play with? The Squad Up page will be perfect for you!',
	},
	{
		element: '#Tournaments',
		intro: 'Lastly you can register for tournaments here! Enjoy your stay!',
	},
	]
})
intro.start();


	