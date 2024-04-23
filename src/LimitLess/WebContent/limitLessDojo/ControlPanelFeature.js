define(
		[

				"dojo/_base/declare",
				"ecm/widget/layout/_LaunchBarPane",
				"ecm/model/Desktop",
				
				"ecm/model/Request",
				"ecm/model/ResultSet",
				"dojo/cookie",
				
				"dojo/json",
				"dojo/text!./templates/ControlPanelFeature.html" 
		],
		function(declare, _LaunchBarPane, Desktop, Request, ResultSet, cookie, json, template) 
		{
			/**
			 * @name moamalatPluginDojo.MoamalatAdminPage
			 * @class
			 * @augments ecm.widget.layout._LaunchBarPane
			 */
			return declare(
					"limitLessDojo.ControlPanelFeature",
					[ _LaunchBarPane ],
					{
						/** @lends limitLessDojo.ControlPanelFeature.prototype */

						templateString : template,

						widgetsInTemplate : true,

						postCreate: function()
						{
							this.logEntry("postCreate");
							this.inherited(arguments);

 




							this.logExit("postCreate");
						},

						loadContent : function() {
							this.logEntry("loadContent");

							if (!this.isLoaded) {

								this.isLoaded = true;
								this.needReset = false;

							}

							this.logExit("loadContent");
						},

						reset : function() {
							this.logEntry("reset");


							this.needReset = false;

							this.logExit("reset");
						},
						
						
						
						
						
						
						loadDemo : function() {
							console.log('start loadDemo');



							var options = {
							  chart: {
							    type: 'bar'
							  },
							  series: [
							    {
							      name: 'sales',
							      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
							    }
							  ],
							  xaxis: {
							    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
							  }
							}
							
							var chart = new ApexCharts(document.querySelector('#chart'), options)
							chart.render()
														
							
							var ctx = document.getElementById('myChart');
							var myChart = new Chart(ctx, {
							    type: 'bar',
							    data: {
							        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
							        datasets: [{
							            label: '# of Votes',
							            data: [12, 19, 3, 5, 2, 3],
							            backgroundColor: [
							                'rgba(255, 99, 132, 0.2)',
							                'rgba(54, 162, 235, 0.2)',
							                'rgba(255, 206, 86, 0.2)',
							                'rgba(75, 192, 192, 0.2)',
							                'rgba(153, 102, 255, 0.2)',
							                'rgba(255, 159, 64, 0.2)'
							            ],
							            borderColor: [
							                'rgba(255, 99, 132, 1)',
							                'rgba(54, 162, 235, 1)',
							                'rgba(255, 206, 86, 1)',
							                'rgba(75, 192, 192, 1)',
							                'rgba(153, 102, 255, 1)',
							                'rgba(255, 159, 64, 1)'
							            ],
							            borderWidth: 1
							        }]
							    },
							    options: {
							        scales: {
							            y: {
							                beginAtZero: true
							            }
							        }
							    }
							});





var doc = new jsPDF();

doc.html(document.getElementById('toPDF'), {
   callback: function (doc) {
     doc.save();
   },
   x: 10,
   y: 10
});
 



						},
						
						
												
						loadVue : function() {
							console.log('start loadVue');

							
							
window.w1.mount(this.vueApp1.id);
window.App2.mount(dijit.registry.byId(this.vueApp2).domNode);

						}
						
						
						
						
						
						
					});
		});
