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

- change the filename **VueComponentSkeleton.vue** to yours, i.e. **VueMyComponent.vue**
- replace inside the following files **vue-component-skeleton** with your wanted name
- do it as well for **VueComponentSkeleton**
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

- create smaller Lodash builds with the **lodash-webpack-plugin** by cherry-picking Lodash modules
- use your component inside a browser-envirnoment, i.e. by 

``` 
<script type="text/javascript" src="vue-my-component.js"></script>
<script type="text/javascript">
  Vue.use(VueMyComponent);
</script>
``` 
- import your component in a Node.js-based development 

```
import VueMyComponent from 'vue-my-component'
``` 
- use SCSS inside your SFC