define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'American people', //Will appear in the data.
			title : {
				media : {word : 'American people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'us1.png'}, 
    			{image : 'us2.png'}, 
    			{image : 'us3.png'}, 
    			{image : 'us4.png'}, 
    			{image : 'us5.png'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'British people', //Will appear in the data.
			title : {
				media : {word : 'British people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'uk1.png'}, 
    			{image : 'uk2.png'}, 
    			{image : 'uk3.png'}, 
    			{image : 'uk4.png'}, 
    			{image : 'uk5.png'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://github.com/yarmolinsky/limegreen/tree/main/images'
		} 
	});
});
