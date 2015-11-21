# Example

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

# Installation

## Install via JSPM

1.  Ensure that [JSPM](http://jspm.io/) is installed.
2.  From your project folder, execute the following command:

```shell
jspm install github:donnelljenkins/aurelia-datagrid
```

## Load the plugin

During Aurelia's bootstrapping phase, include the data grid plugin.

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

# Getting started
> TODO

# Templates

## &lt;grid-column&gt;

```html
<grid-column property="propertyName" heading="Alternate Heading" filterable sortable></grid-column>
```

### Attributes

#### Required

##### property
- Provides the name of the property to display for each item in the backing list.

#### Optional

##### filterable
- Indicates the content in this column can be filtered.  An *input* element is displayed in the column's header.  The value entered is used for the filter.

##### heading
- Provides an alternate heading for this column.  By default, the text entered into the *property* attribute is used for the heading.

##### sortable
- Indicates the content in this column can be sorted.  The column heading is converted to button.  When the button is clicked, the grid toggles through the sorting.

## &lt;grid-column-button&gt;

```html
<grid-column-button heading="Column Heading" caption="Button Text" button-click.call="$parent.$parent.buttonClick($event)"></grid-column-button>
```

#### Required

##### caption
- Provides the button caption.

#### Optional

##### property
- Provides the name of the property that is used for filtering and/or sorting.  The property value will not be displayed in the grid.

##### filterable
- Indicates the content in this column can be filtered.  An *input* element is displayed in the column's header.  The value entered is used for the filter.
- *Note: The property attribute is required in order to use this attribute.

##### heading
- Provides an alternate heading for this column.  By default, the text entered into the *property* attribute is used for the heading.

##### sortable
- Indicates the content in this column can be sorted.  The column heading is converted to button.  When the button is clicked, the grid toggles through the sorting.
- *Note: The property attribute is required in order to use this attribute.

## &lt;grid-column-checkbox&gt;

```html
<grid-column-checkbox property="propertyName" heading="Alternate Heading" filterable sortable></grid-column-checkbox>
```

### Attributes

#### Required

##### property
- Provides the name of the property to display for each item in the backing list.

#### Optional

##### filterable
- Indicates the content in this column can be filtered.  An *input* element is displayed in the column's header.  The value entered is used for the filter.

##### heading
- Provides an alternate heading for this column.  By default, the text entered into the *property* attribute is used for the heading.

##### sortable
- Indicates the content in this column can be sorted.  The column heading is converted to button.  When the button is clicked, the grid toggles through the sorting.

## &lt;grid-column-edit&gt;

```html
<grid-column-edit hide-cancel></grid-column-edit>
```

### Attributes

#### Optional

##### hide-cancel
- Hides the *cancel* button when a row is in edit mode.  Only the *save* button will be dislayed.

## &lt;td grid-column-template&gt; - Custom column template

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

## View model overrides

### How to provide custom filtering

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

### How to provide custom sorting

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