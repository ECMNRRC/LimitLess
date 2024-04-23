/* 
	** Msh **
	** 29/03/2021 **
	
	Let's Go!
*/
define
(

	[ 
		"dojo/_base/declare", 
		"dojo/_base/lang", 
		"ecm/model/Request",

		'dojo/_base/event',
		"dojo/parser", 
		"dijit/registry", 
		
		"dojo/cookie", 
		"dojo/aspect", 
		"ecm/model/Desktop", 
		
		"ecm/widget/dialog/ConfirmationDialog",
		"ecm/model/ResultSet", 
		"dojo/json",
		
		"dojo/dom-style",
		"dijit/MenuItem",
		"dojox/widget/Toaster",
		
		'dojo/topic',
		"idx/html"
	],
		
		function(declare, 
				lang, 
				Request, 

				event,
				parser, 
				registry, 
				
				cookie,
				aspect,
				Desktop, 			
				
				ConfirmationDialog,
				ResultSet,
				json,

				domStyle,
				MenuItem,
				Toaster,
				topic,
				idxHtml
				) 
				
		{
			// Start 
			return {
			
            	// GP props,
				widgetName: 'watchDog',
				securityStack: [],
				eventStack: [],

            	lowDataUsage: true,
				

				

				downloadFileToUser: function(data, filename, type)
				{ 
					console.log('start downloadFileToUser');
					
					var file = new Blob([data], {type: type});
					if (window.navigator.msSaveOrOpenBlob) // IE10+
						window.navigator.msSaveOrOpenBlob(file, filename);
					else
					{ 
						// Others
						var a= document.createElement("a"), url = URL.createObjectURL(file);
						a.href = url;
						a.download = filename;
						document.body.appendChild(a);
						a.click();
						setTimeout(function() {
							document.body.removeChild(a);
							window.URL.revokeObjectURL(url);  
						}, 0); 
					}
					
					console.log('end downloadFileToUser');
				},
				
				
				
			}
		
		}
);


