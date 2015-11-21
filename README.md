# aurelia-grid
A data grid control for Aurelia with sorting and filtering capabilities.

## Demo

<a href="http://donthedev.com/aurelia/#grid-examples/" target="_blank">Aurelia Datagrid Demo</a>

## Dependencies

* [aurelia-framework](https://github.com/aurelia/framework)
* [lodash](https://lodash.com/)
* [Bootstrap**](http://getbootstrap.com/)
* [Semantic-UI**](http://semantic-ui.com/)

** The grid can be configured to use either Bootstrap or Semantic-UI.  One of these packages must be manually installed depending on which framework you wish to use.  By default, the grid is configured to use Bootstrap.

## Installation

1.  Ensure that [JSPM](http://jspm.io/) is installed.
2.  From your project folder, execute the following command:
```shell
jspm install github:donnelljenkins/aurelia-datagrid
```

## Import

1.  Create a `main.js` file in your src directory.
2.  Import the plugin using the `aurelia` configuration object:
```javascript
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    // import the plugin
    .plugin('donnelljenkins/aurelia-datagrid');
  ...
}
```

## Usage
```html
<grid>
	<template replace-part="grid-template">
		<grid-column property="name" filterable sortable></grid-column>
		<grid-column property="title" filterable sortable></grid-column>
		<grid-column-checkbox property="active" filterable sortable></grid-column-checkbox>
		<grid-column-button heading="Actions" caption="Select" button-click.call="$parent.$parent.semanticGridButtonClick($event)"></grid-column-button>
		<grid-column-template heading="Custom">
			<template replace-part="custom-template">
				<compose view="./demo-custom-column-template.html" containerless></compose>
			</template>
		</grid-column-template>
		<grid-column property="id" alignment="right"></grid-column>
		<grid-column-edit></grid-column-edit>
	</template>

	<template replace-part="grid-footer-template">
		<td colspan.bind="columns.length">This is the Aurelia Semantic-UI grid!  We tried to make using it as simple as possible.</td>
	</template>
</grid>
```

## Column Templates

- heading
- property

### &lt;grid-column&gt;
> TODO

### &lt;grid-column-button&gt;
- caption
- button-click
> TODO

### &lt;grid-column-checkbox&gt;
> TODO

### &lt;grid-column-edit&gt;
- hide-cancel
> TODO

### &lt;td grid-column-template&gt; - Custom column template
> TODO

## Filtering
```html
  <grid-column filterable property="name"></grid-column>
```
```javascript
   applyFilter(filter){
    this.items = this.items.filter(item => {
      return item[filter.property].startsWith(filter.value);
    });
   }
```

## Sorting
```html
  <grid-column sortable property="abbreviation"></grid-column>
```
```javascript
   applySort(sort){
     this.items.sort((a,b) => {
       if(a[sort.property] < b[sort.property]){
        return -1;
       }
       
       if(a[sort.property] > b[sort.property]){
        return 1;
       }
       
       return 0;
     });
   }
```

## Configuration

### Set a CSS Framework as the default framework for all grids
> Every grid in your app will use the specified CSS framework.

1. In the `main.js` file, set the second parameter to the function:
```javascript
    ...
    // configure the default css framework
    config => config.defaultCssFramework = 'semantic');
    ...
```

```javascript
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    // install plugin and configure the default css framework
    .plugin('donnelljenkins/aurelia-datagrid', config => {
        config.defaultCssFramework = 'semantic';
    });

  ...
}
```

### Creating a custom CSS Framework and using it as the default framework for all grids
```javascript
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    // install plugin and configure the default css framework
    .plugin('donnelljenkins/aurelia-datagrid', config => {
        config.defaultCssFramework = {
           name: 'test',
           buttonClass: 'ui orange button', // custom class using Semantic-UI
        };
    });

  ...
}
```

### Overriding the CSS framework for a grid
```html
  <grid css-framework-name="bootstrap">
  ...
  </grid>
```
