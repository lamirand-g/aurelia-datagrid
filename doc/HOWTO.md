# Example

```html
<grid>
	<template replace-part="grid-template">
		<grid-column property="name" filterable sortable></grid-column>
		<grid-column property="title" filterable sortable></grid-column>
		<grid-column-checkbox property="active" filterable></grid-column-checkbox>
		<grid-column-button 
		     heading="Actions"
		     caption="Select"
		     button-click.call="$parent.$parent.buttonClick($event)">
		</grid-column-button>
		<grid-column-template heading="Custom">
			<template replace-part="custom-template">
				<compose view="./demo-custom-column-template.html"
				         containerless>
				</compose>
			</template>
		</grid-column-template>
		<grid-column property="id" alignment="right"></grid-column>
		<grid-column-edit></grid-column-edit>
	</template>

	<template replace-part="grid-footer-template">
		<td colspan.bind="columns.length">Total items: ${items.length}</td>
	</template>
</grid>
```

# Installation

## Prerequisite
- [Aurelia](http://aurelia.io/) is installed.

## Install via JSPM

1.  Ensure that [JSPM](http://jspm.io/) is installed.
2.  From your project folder, execute the following command:

```shell
jspm install github:donnelljenkins/aurelia-datagrid
```

### Migrate from aurelia-app to aurelia-app="main"
You'll need to register the plugin when your aurelia app is bootstrapping. If you have an aurelia app because you cloned a sample, there's a good chance that the app is bootstrapping based on default conventions. In that case, open your **index.html** file and look at the *body* tag.

``` html
<body aurelia-app>
```
Change the *aurelia-app* attribute to *aurelia-app="main"*.

``` html
<body aurelia-app="main">
```
The aurelia framework will now bootstrap the application by looking for your **main.js** file and executing the exported *configure* method. Go ahead and add a new **main.js** file with these contents:

``` javascript
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.start().then(a => a.setRoot('app', document.body));
}

```

### Load the plugin
During bootstrapping phase, you can now include the data grid plugin:

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

# Getting started
> TODO

# Grid
- By default, the grid looks for an array property named **items** on your view model. In an upcoming release, a **datasource** attribute will be available to override this.
```javascript
export class ViewModel {
  items = [
    { name: 'Hammer', active: true, price: 5.99 },
    { name: 'Jackhammer', active: false, price: 599.99 },
    { name: 'Wench', active: true, price: 2.99 }
  ];
}

```

## Attributes

### class (future release)
```html
<grid class="table-striped table-condensed
  ...
</grid>
```
HTML class attribute to apply to the generated **&lt;table&gt;** element.

### css-framework
```html
<grid css-framework="bootstrap">
  ...
</grid>
```
Specifies the CSS framework to use for styling the grid.  Currently, there are two available options:
- bootstrap (<a href="http://getbootstrap.com/" target="_blank">Twitter Bootstrap</a>)
- semantic (<a href="http://semantic-ui.com/" target="_blank">Semantic-UI</a>)

### data-source (future release)
```html
<grid data-source="products">
  ...
</grid>
```
Specifies which property to use to populate the grid.

# Column Templates

## grid-column
```html
<grid-column property="propertyName" heading="Alternate Heading" filterable sortable></grid-column>
```

### Attributes

#### Required

##### property
Provides the name of the property to display for each item in the backing list.

#### Optional

##### filterable
Indicates the content in this column can be filtered.  An *input* element is displayed in the column's header.  The value entered is used for the filter.

##### heading
Provides an alternate heading for this column.  By default, the text entered into the *property* attribute is used for the heading.

##### sortable
Indicates the content in this column can be sorted.  The column heading is converted to button.  When the button is clicked, the grid toggles through the sorting.

## grid-column-button
```html
<grid-column-button 
    heading="Column Heading"
    caption="Button Text"
    button-click.call="$parent.$parent.buttonClick($event)">
</grid-column-button>
```

#### Required

##### caption
Provides the button text.

#### Optional

##### property
Provides the name of the property that is used for filtering and/or sorting.  The property value will not be displayed in the grid.

##### filterable*
Indicates the content in this column can be filtered.  An *input* element is displayed in the column's header.  The value entered is used for the filter.

*Note: The property attribute is required in order to use this attribute.

##### heading
Provides an alternate heading for this column.  By default, the text entered into the *property* attribute is used for the heading.

##### sortable*
Indicates the content in this column can be sorted.  The column heading is converted to a button.  When the button is clicked, the grid toggles through the sorting.

*Note: The property attribute is required in order to use this attribute.

## grid-column-checkbox
```html
<grid-column-checkbox property="propertyName" heading="Alternate Heading" filterable sortable></grid-column-checkbox>
```

### Attributes

#### Required

##### property
Provides the name of the property to display for each item in the backing list.

#### Optional

##### filterable*
Indicates the content in this column can be filtered.  An *input* element is displayed in the column's header.  The value entered is used for the filter.

*Note: The property attribute is required in order to use this attribute.

##### heading
Provides an alternate heading for this column.  By default, the text entered into the *property* attribute is used for the heading.

##### sortable*
Indicates the content in this column can be sorted.  The column heading is converted to a button.  When the button is clicked, the grid toggles through the sorting.

*Note: The property attribute is required in order to use this attribute.

## grid-column-edit
```html
<grid-column-edit hide-cancel></grid-column-edit>
```

### Attributes

#### Optional

##### hide-cancel
Hides the *cancel* button when a row is in edit mode.  Only the *save* button will be dislayed.

## grid-column-template - Custom column template
```html
<grid-column-template heading="Custom">
  <template replace-part="custom-template">
    <label>Custom Template</label>
    <input type="text" placeholder="Type something here ...">
  </template>
</grid-column-template>
```

## Footer template
```html
<template replace-part="grid-footer-template">
  <td>${totalAmount}</td>
  <td>${totalItemCount}</td>
</template>
```

# Configuration

## Global settings

### How to set a CSS Framework as the default framework for all grids
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

#### Available CSS Frameworks
- bootstrap (<a href="http://getbootstrap.com/" target="_blank">Bootstrap</a>)

```javascript
...
.plugin('donnelljenkins/aurelia-datagrid', config => {
     config.defaultCssFramework = 'bootstrap';
});
``` 

- semantic (<a href="http://semantic-ui.com/" target="_blank">Semantic-UI</a>)

```javascript
...
.plugin('donnelljenkins/aurelia-datagrid', config => {
     config.defaultCssFramework = 'semantic';
});
```

### How to create a custom CSS Framework and use it as the default framework for all grids

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

## Grid level settings

### How to Override the CSS framework for a grid

```html
  <grid css-framework-name="bootstrap">
  ...
  </grid>
```

# How to provide custom filtering
```html
  <grid-column filterable property="name"></grid-column>
```
The grid looks for an **applyFilter(filter)** function on the view model. Add the function to your view model in order to override the grid's default filtering to provide your own.
```javascript
   applyFilter(filter){
    this.items = this.items.filter(item => {
      return item[filter.property].startsWith(filter.value);
    });
   }
```

## applyFilter(filter) method

### filter Parameter

#### property
The name of the property the filter applies to.

#### value
The value to filter by.

# How to provide custom sorting
```html
  <grid-column sortable property="abbreviation"></grid-column>
```
The grid looks for an **applySort(sort)** function on the view model. Add the function to your view model in order to override the grid's default sorting to provide your own.
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

## applySort(sort) method

### sort Parameter

#### property
The name of the property the sort applies to.

#### direction
The direction to sort in.
- Available directions:
  - asc (Ascending)
  - desc (Descending)
  - null (No sorting)
  
