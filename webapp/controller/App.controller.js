
  sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/HTML"
  ], function (BaseController, HTML) {
    "use strict";
  
    return BaseController.extend(".workflowuimodule.controller.App", {
        onInit: function () {
            // Initialization code
        },
  
        
        onBeforeRendering(oContex){
          debugger
          var oView = this.getView();
  
          var oDat = oView.oPropagatedProperties.oModels.context.oData;
          var pdfDocumentValue = oDat.pdfDocument;
          var baseUrl = "https://3e1cae61trial-dev13-uni-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/";
  
            // Perform an AJAX call to get the PDF links
            $.ajax({
              url: baseUrl + pdfDocumentValue,
              // url : "https://3e1cae61trial-dev13-uni-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my",
              method: "GET",
              
              success: function(oData) {
                debugger
                  var oModel = new sap.ui.model.json.JSONModel();
                  oModel.setData({ Files: oData.value }); // Assign the array directly
                  oView.setModel(oModel, "myModel"); // Set the model with name "myModel"
              },
              error: function(jqXHR, textStatus, errorThrown) {
                  console.error("Error in fetching data: " + textStatus + ': ' + errorThrown);
              }
          });
          var oUploadSet = this.byId("uploadSet");
        },
        onOpenPressed: function (oEvent) {
          debugger
          var baseUrl = "https://3e1cae61trial-dev13-uni-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/"; //oEvent.oSource.getModel().getServiceUrl();
          let fileurl = oEvent.oSource.mProperties.url;
          var pattern = /Files.*$/;
          var match = fileurl.match(pattern);
          if (match) {
            var entityUrl = baseUrl + match[0];
          }
          oEvent.oSource.mProperties.url = entityUrl;
        }
        
    });
  });
  
  
   