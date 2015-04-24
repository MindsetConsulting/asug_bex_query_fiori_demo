sap.ui.controller("zdemo_bex.view.demo_chart2", {

	onInit: function() {
	      
	    var oVizFrame4 = this.getView().byId("idoVizFrame4");

	    // If you want to sort:
	    // var oSorter = new sap.ui.model.Sorter("ProductID", false, true);

	    // Or just select a few fields: 
	    // var oSelect = {
	    //    select: 'ZACCOUNT_T, A0NE7PB7ADBFLNUYWU4MJRUJ5N_F'
	    // }
	    
	    var oDataSetBEx = new sap.viz.ui5.data.FlattenedDataset({
		      	  'dimensions' : [ {
			        
			        'name' : 'Month and Year',
			        'value' : "{A0CALMONTH}"
			      } ],

			      'measures' : [ {
			        'name' : 'Sales',
			        'value' : '{A0NE7PB7ADBFJXU0B6OB8636XO}'
			      } ],
			      'data' : {
			    	  'path' : "/ZSD_C03_Q100Results?$select=A0CALMONTH,A0NE7PB7ADBFJXU0B6OB8636XO&$top=12&$orderby=A0CALMONTH%20desc&$skip=4"
			      }
	    });
	    
	    var feedPrimaryValues4 = new sap.viz.ui5.controls.common.feeds.FeedItem({
	      'uid' : "primaryValues",
	      'type' : "Measure",
	      'values' : [ "Sales" ]
	    });
	    
	    var feedAxisLabels4 = new sap.viz.ui5.controls.common.feeds.FeedItem({
	      'uid' : "axisLabels",
	      'type' : "Dimension",
	      'values' :  ["Month and Year"]
	    
	    });
	    
	    // -------- VizFrame  ----------------
	      oVizFrame4.setDataset(oDataSetBEx);
	      
	      //var oDataBExModel = new sap.ui.model.odata.ODataModel("https://gateway1.mindsetconsulting.com/sap/opu/odata/sap/ZBW_CS_EASY_QUERY_1_SRV/"); 
	      var oDataBExModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZGQ_BW_1_SRV/");
	      
	      //oVizFrame4.setModel(amModelBEx);
	      oVizFrame4.setModel(oDataBExModel);
	      oVizFrame4.addFeed(feedPrimaryValues4);
	      oVizFrame4.addFeed(feedAxisLabels4);
	      oVizFrame4.setVizType('bar');    
	      oVizFrame4.setVizProperties({
	          valueAxis : {
	            label : {
	                   formatString : 'u'
	            }
	          },
	            plotArea : {
	                dataLabel : {visible : true, formatString : "#,##0"},
	                isFixedDataPointSize : true
	            },
	            legend : {
	                title: {visible : false}
	            },
	            
	            title: {
	                visible: true,
	                text: 'Monthly Sales'
	            }
	        });
	  }
	});