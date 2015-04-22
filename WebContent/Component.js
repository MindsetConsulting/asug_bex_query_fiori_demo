jQuery.sap.declare("zdemo_bex.Component");

sap.ui.core.UIComponent.extend("zdemo_bex.Component", {

	metadata : {
		name : "Demo Bex Reports",
        version : "1.0",
        
        dependencies : {
            libs : ["sap.m", "sap.ui.layout", "sap.viz" ,"sap.makit" ,"sap.ui.unified"],
        },       
	},

	
	/**
	 * !!! The steps in here are sequence dependent !!!
	 */
	init : function () {
		// 1. some very generic requires
//		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
		//jQuery.sap.require("psfioriapp.MyRouter");
		//jQuery.sap.require("psfioriapp.model.Config");
		//jQuery.sap.require("psfioriapp.util.objectSearch");
		//jQuery.sap.require("psfioriapp.util.formatter");
		  
		// 2. call overwritten init (calls createContent)
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		// 3a. monkey patch the router
//		var oRouter = this.getRouter();
//		//oRouter.myNavBack = psfioriapp.MyRouter.myNavBack;
//		//oRouter.myNavToWithoutHash = psfioriapp.MyRouter.myNavToWithoutHash;
//		// 5. initialize the router
//		this.oRouteHandler = new sap.m.routing.RouteMatchedHandler(oRouter);
//		oRouter.initialize();
//		oRouter.navTo("master",{},false);
	},

	destroy : function () {
	
		// call overwritten destroy
		sap.ui.core.UIComponent.prototype.destroy.apply(this, arguments);
	},

	/**
	 * 
	 */
	createContent : function () {
		
		// create root view
		var oView = sap.ui.view({			
			viewName : "zdemo_bex.view.App",
			type : "JS",
			viewData : { component : this }
		});
		

		
		
		/*
		// set i18n model (must be done before data)
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "vendorlookup/i18n/messageBundle.properties"
		});
		
		oView.setModel(i18nModel, "i18n");
		*/

//		// publish event once data is loaded
//		oModel.attachRequestCompleted(function () {
//			sap.ui.getCore().getEventBus().publish("app", "DataLoaded");
//		});

		
		// set device model
		oModel = new sap.ui.model.json.JSONModel({
			isTouch : sap.ui.Device.support.touch,
			isNoTouch : !sap.ui.Device.support.touch,
			isPhone : sap.ui.Device.system.phone,
			isNoPhone : !sap.ui.Device.system.phone,
			listMode : (sap.ui.Device.system.phone) ? "None" : "SingleSelectMaster",
			listItemType : (sap.ui.Device.system.phone) ? "Active" : "Inactive"
		});
		oModel.setDefaultBindingMode("OneWay");
		oView.setModel(oModel, "device");
		
		// done
		return oView;
	
	}
});