module.exports = {
    controllerContent(namespace, componentName) {
        return `sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    var oController = Controller.extend("${namespace}.${componentName}.controller.App");

    /*
     * - Run on page load
     */
    oController.prototype.onInit = function(oEvent) {
    
    };

    return oController;

});`
    },
    CSSContent: `/* Enter your custom styles here */`,
    i18nContent:
`# Use comments
! to organize your i18n text`,
    viewContent:
`<mvc:View height="100%" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m">
    <App id="appContainer"/>
</mvc:View>`,
    componentContent(namespace, componentName) {
        return `sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent) {
    "use strict";

    /*
     *
     */
    var oComponent = UIComponent.extend("${namespace}.${componentName}.Component", {
        metadata: {
            manifest: "json"
        }
    });

    /*
     *
     */
    oComponent.prototype.init = function() {

        UIComponent.prototype.init.apply(this, arguments);

        this.getRouter().initialize();

    };

    return oComponent;

});`
    },
    manifestContent(namespace, componentName) {
        return `{
    "_version": "1.5.0",
    "sap.app": {
        "_version": "1.0.0",
        "id": "${namespace}.${componentName}",
        "type": "component",
        "dataSources": {
            "mainService": {
                "uri": "",
                "type": "OData",
                "settings": {
                    "odataVersion": "2.0"
                }
            }
        }
    },
    "sap.ui": {
        "_version": "1.0.0",
        "technology": "UI5",
        "deviceTypes": {
            "desktop": true,
            "tablet": false,
            "phone": false
        },
        "supportedThemes": [
            "sap_belize"
        ]
    },
    "sap.ui5": {
        "_version": "1.0.0",
        "rootView": "${namespace}.${componentName}.view.App",
        "dependencies": {
            "minUI5Version": "1.48.5",
            "libs": {
                "sap.m": {},
                "weasp.core": {}
            }
        },
        "resources": {
            "css": [{
                "uri": "css/style.css"
            }]
        },
        "models": {
            "i18n": {
                "type": "sap.ui.model.resource.ResourceModel",
                "settings": {
                    "bundleName": "${namespace}.${componentName}.i18n.i18n"
                }
            },
            "": {
                "dataSource": "mainService",
            }
        },
        "routing": {
            "config": {
                "routerClass": "sap.m.routing.Router",
                "viewType": "XML",
                "viewPath": "${namespace}.${componentName}.view",
                "controlAggregation": "pages",
                "controlId": "appContainer"
            },
            "routes": [
                {
                    "name": "app",
                    "pattern": "",
                    "target": ["app"]
                }
            ],
            "targets": {
                "app": {
                    "viewName": "app",
                    "viewLevel": 1
                }
            }
        }
    }
}`
    }
}

