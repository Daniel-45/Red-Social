# Social Live

Aplicación creada con JavaScript, Angular y NodeJS.

## Backend Node.js

## Iniciar el proyecto

En el directorio del proyecto ejecutar el comando `npm init`
Este comando inicia un proyecto de NodeJS y genera el fichero ‘package.json’ que guarda la configuración y las dependencias  del proyecto.

## Instalar dependencias

Instalar los diferentes paquetes que necesito para desarrollar el Backend con NodeJS.

**express** es un framework para trabajar con el protocolo HTTP que permite definir rutas, tener un sistema de rutas y recibir peticiones HTTP 

Genera un directorio llamado ‘node_modules’  que es donde se guardan todos los módulos de NodeJS.

`npm install express --save`

**body-parser** es una librería que sirve para convertir las peticiones que se hacen al Backend a un objeto JSON para utilizarlo.

`npm install body-parser --save`

**connect-multiparty** permite subir archivos al Backend.

`npm install connect-multiparty --save`

**mongoose** es una librería, un ORM para trabajar con MongoDB, con mongoose hay una serie de métodos que hacen la vida más fácil al trabajar con mogoDB.

`npm install mongoose --save`

**nodemon** permite que al ejecutar el servidor de NodeJS, cada vez que se hace un cambio en el código automáticamente se reinicie el servidor. 

Esta es una dependencia que solo va a funcionar en desarrollo (en local), al subir el poryecto a un servidor esta dependencia no tiene que tenerse en cuenta.

`npm install nodemon --save-dev`

## Iniciar el servidor

En el directorio del proyecto (server) `npm start`

Ejecuta los comandos definidos en la sección de scripts del archivo **package.json**, se ejecuta **nodemon** cargando el fichero **index.js**

## Frontend Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
