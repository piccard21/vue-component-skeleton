# vue-component-skeleton

> Starter for component-development with VueJS

## Build Setup

``` bash
# install dependencies
yarn install

# watch while development
yarn run watch

# build for production with minification
yarn run build
```

## Configuration

- change the filename *VueComponentSkeleton.vue* to yours, i.e. *MyVueComponent.vue*
- replace inside the following files *vue-component-skeleton* with your wanted name
- do it as well for *VueComponentSkeleton*
- files:
	- install.js
	- package.json
	- webpack.config.js

## Ready for development

``` 
yarn link
yarn watch
``` 

goto a project of yours wich will add the component

``` 
yarn link "my-vue-component"
yarn add my-vue-component
``` 
 
## Features

- Loadash webpack cherrypicking
- Library var-name
- filename
- import / require
- scss