sap.ui.jsview("zdemo_bex.view.App", {

	createContent: function (oController) {
		// to avoid scrollbars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
//		this.app = new sap.m.SplitApp("splitApp", {
//			//The master area needs to be closed when navigation in detail area is done.
//			afterDetailNavigate: function(){
//				this.hideMaster();
//			},
//			homeIcon : {
//				'phone' : 'psfioriapp/img/57_iPhone_Desktop_Launch.png',
//				'phone@2' : 'psfioriapp/img/114_iPhone-Retina_Web_Clip.png',
//				'tablet' : 'psfioriapp/img/72_iPad_Desktop_Launch.png',
//				'tablet@2' : 'psfioriapp/img/144_iPad_Retina_Web_Clip.png',
//				'favicon' : 'psfioriapp/img/favicon.ico',
//				'precomposed': false
//			}
//		});
//		this.app.addDetailPage(new sap.ui.view({
//			viewName: "psfioriapp.view.DummyDetail",
//			type: "XML"
//		}));
		
		this.app = new sap.m.App({initialPage:"idChartContainer"});
		var page = sap.ui.view({id:"idChartContainer", viewName:"zdemo_bex.view.demo_chart2", type:sap.ui.core.mvc.ViewType.XML});
		this.app.addPage(page);
		
		return this.app;
	}
});