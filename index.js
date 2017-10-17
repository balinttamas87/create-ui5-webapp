#!/usr/bin/env node
console.log("create-ui5-webapp :-)");

const fs = require('fs');
const fileContent = require('./fileContent');

getNameOfNamespace = () => {
    let namespace = process.argv[2];
    console.log(`namespace: ${namespace}`);
    return namespace;
}

getComponentName = () => {
    let componentName = process.argv[3];
     console.log(`componentName: ${componentName}`);
    return componentName;
}

createComponent = (namespace = "namespace", componentName = "webapp") => {
    fs.mkdirSync(componentName); // component's name

    // create controller folder and app controller
    fs.mkdirSync(componentName + "/controller");
    fs.writeFile(componentName + "/controller/app.controller.js", fileContent.controllerContent(namespace, componentName), (err) => {
        if (err) throw err;
        console.log("app controller has been created");
    });

    // create css folder and style.css
    fs.mkdirSync(componentName + "/css");
    fs.writeFile(componentName + "/css/style.css", fileContent.CSSContent, (err) => {
        if (err) throw err;
        console.log("style.css file has been created");
    });

    // create i18n folder and i18n.properties file
    fs.mkdirSync(componentName + "/i18n");
    fs.writeFile(componentName + "/i18n/i18n.properties", fileContent.i18nContent, (err) => {
        if (err) throw err;
        console.log("i18n.properties file has been created");
    });

    // create test folder
    fs.mkdirSync(componentName + "/test");

    // create view folder and app view
    fs.mkdirSync(componentName + "/view");
    fs.writeFile(componentName + "/view/app.view.xml", fileContent.viewContent, (err) => {
        if (err) throw err;
        console.log("app view has been created");
    });

    // create Component.js
    fs.writeFile(componentName + "/Component.js", fileContent.componentContent(namespace, componentName), (err) => {
        if (err) throw err;
        console.log("Component.js file has been created");
    });

    // create manifest.json
    fs.writeFile(componentName + "/manifest.json", fileContent.manifestContent(namespace, componentName), (err) => {
        if (err) throw err;
        console.log("manifest.json file has been created");
    });

}

let namespace = getNameOfNamespace();
let componentName = getComponentName();
createComponent(namespace, componentName);