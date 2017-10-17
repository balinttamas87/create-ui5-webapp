# Create UI5 Webapp

Create a ui5 webapp from terminal / command line.

### Quick overview

```
npm -g install create-ui5-webapp

create-ui5-webapp
```

### Getting started
Install package globally
```
npm -g install create-ui5-webapp
```
Navigate to the folder where you want to create your new ui5 webapp then type the following into your terminal / command line

```
create-ui-webapp
```

It will create a directory called webapp inside the current folder.
Inside that directory, it will generate the initial project structure:
```
webapp
|-- controller
    |-- app.controller.js
|-- css
    |-- style.css
|-- i18n
    |-- i18n.properties
|-- test
|-- view
    |-- app.view.xml
|-- Component.js
|-- manifest.json
```
### Optional parameters
The namespace defaults to 'namespace'and the app's name defaults to 'webapp' within the files:
```
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    var oController = Controller.extend("namespace.webapp.controller.app");

    /*
     * - Run on page load
     */
    oController.prototype.onInit = function(oEvent) {
    
    };

    return oController;

});
```
If you want to specify your own namespace (first argument) and your app name(second argument) other than 'webapp'
than you can specify them. Please note you need to provide both arguments even if you only want to specify the name for one
or the other.

```
create-ui5-webapp myNamespace myAppName
```
```
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    var oController = Controller.extend("myNamespace.myAppName.controller.app");

    /*
     * - Run on page load
     */
    oController.prototype.onInit = function(oEvent) {
    
    };

    return oController;

});
```
