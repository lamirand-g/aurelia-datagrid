# Current Release (v0.1.5)

## Example

```html
<grid css-framework="bootstrap" data-source.bind="samples" row-selected.bind="rowSelected">
    <template replace-part="grid-template">
      <grid-column property="name" filterable sortable></grid-column>
      <grid-column property="title" alignment="center" filterable sortable></grid-column>
      <grid-column-checkbox property="active" filterable sortable></grid-column-checkbox>
      <grid-column-button heading="Action" caption="Select" button-click.call="select(row.id)"></grid-column-button>
      
      <grid-column-template heading="Custom">
        <template replace-part="custom-template">
          <div class="input-group">
            <span class="input-group-addon">
              <input type="radio" aria-label="...">
              <input type="radio" aria-label="...">
            </span>
            <input type="text" class="form-control" aria-label="...">
          </div>
        </template>
      </grid-column-template>
      
      <grid-column-edit></grid-column-edit>
    </template>

    <template replace-part="grid-footer-template">
      <td colspan.bind="columns.length">
        Total Items: ${samples.length}
      </td>
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

## Bootstrap
If you have not already, setup your app using the instructions from the <a href="http://aurelia.io/docs.html#/aurelia/framework/latest/doc/article/getting-started" target="_blank">Getting Started<a> page on Aurelia.

After setting up and installing this plugin, we'll create a simple working example by doing the following:
- Configure the plugin to use Bootstrap styling.
- Include Semantic in your HTML.
- Create an Aurelia view and view model.
- Add the aurelia-datagrid to the view.

### Configure the plugin to use Bootstrap styling
In the **main.js** file, make the following change to the plugin:
```javascript
.plugin('donnelljenkins/aurelia-datagrid', config => 
	config => config.defaultCssFramework = 'bootstrap');
```

### Include Bootstrap in your HTML
In the **index.html**, add the following to the head element:
```html
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
```
Alternatively, you can install **Bootstrap** using JSPM and include the link to the downloaded .css file.

### Create an Aurelia view and view model
Let's create the view model.  In the same folder the **app.js** file is located, create a **products.js** file.  In the file, add this code:
```javascript
export class Products {
  tools = [
    { name: 'Hammer', active: true, price: 5.99 },
    { name: 'Jackhammer', active: false, price: 599.99 },
    { name: 'Wench', active: true, price: 2.99 }
  ];
}

```
Now, we need a view to go along with the model.  Create a **products.html** file and add the following code:
```html
<template>
  <div class="panel panel-primary">
    <div class="panel-heading">Products</div>
    <div class="panel-body">
    
    </div>
  </div>
</template>
```
Update the router to include our new Products page.  In **app.js**, update the array that is passed to the config.map function by adding the following line:
```javascript
{ route: 'products', name: 'products', moduleId: 'products', nav: true, title: 'Products'}
```
The contents should like similar to this:
```javascript
export class App {
  configureRouter(config) {
    config.title = 'Aurelia Datagrid Sample';
    config.map([
      { route: ['','welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title:'Welcome' },
      { route: 'products', name: 'products', moduleId: 'products', nav: true, title: 'Products'}
    ]);
  }
}

```
Now, we can navigate to our Products page to view it by going to **[your url]/#/products**.

### Add the aurelia-datagrid to the view.

In **products.html**, add the following code inside the **.panel-body** element:
```html
<grid data-source.bind="tools">
  <template replace-part="grid-template">
  	<grid-column property="name" filterable sortable></grid-column>
  	<grid-column-checkbox property="active" filterable sortable></grid-column-checkbox>
  	<grid-column property="price"></grid-column>
  </template>
</grid>
```
This will generate a grid with three columns:
- a column that shows the names of the products
- a column that indicates which products are active with a check mark
- a column that shows the prices of the products

The first two columns can be filtered and sorted.  Filter inputs and sorting buttons will be included in the headers for each column.

The **products.html** file contents should like this:
```html
<template>
  <div class="panel panel-primary">
    <div class="panel-heading">Products</div>
    <div class="panel-body">
      <grid data-source.bind="tools">
        <template replace-part="grid-template">
          <grid-column property="name" filterable sortable></grid-column>
          <grid-column-checkbox property="active" filterable sortable></grid-column-checkbox>
          <grid-column property="price"></grid-column>
        </template>
      </grid>
    </div>
  </div>
</template>
```

Now, when you run your app and navigate to the products page, the grid with the list of products will display.

## Semantic-UI
If you have not already, setup your app using the instructions from the <a href="http://aurelia.io/docs.html#/aurelia/framework/latest/doc/article/getting-started" target="_blank">Getting Started<a> page on Aurelia.

After setting up and installing this plugin, we'll create a simple working example by doing the following:
- Configure the plugin to use Semantic styling.
- Include Semantic in your HTML.
- Create an Aurelia view and view model.
- Add the aurelia-datagrid to the view.

### Configure the plugin to use Semantic styling
In the **main.js** file, make the following change to the plugin:
```javascript
.plugin('donnelljenkins/aurelia-datagrid', config => 
	config => config.defaultCssFramework = 'semantic');
```

### Include Semantic in your HTML
In the **index.html**, add the following to the head element:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.6/semantic.min.css">
```
Alternatively, you can install it using JSPM and include the link to the downloaded .css file.

### Create an Aurelia view and view model
Let's create the view model.  In the same folder the **app.js** file is located, create a **products.js** file.  In the file, add this code:
```javascript
export class Products {
  tools = [
    { name: 'Hammer', active: true, price: 5.99 },
    { name: 'Jackhammer', active: false, price: 599.99 },
    { name: 'Wench', active: true, price: 2.99 }
  ];
}

```
Now, we need a view to go along with the model.  Create a **products.html** file and add the following code:
```html
<template>
	<div class="ui segment">
    <div class="ui top attached inverted blue header">Products</div>
  </div>
</template>
```
Update the router to include our new Products page.  In **app.js**, update the array that is passed to the config.map function by adding the following line:
```javascript
{ route: 'products', name: 'products', moduleId: 'products', nav: true, title: 'Products'}
```
The contents should like similar to this:
```javascript
export class App {
  configureRouter(config) {
    config.title = 'Aurelia Datagrid Sample';
    config.map([
      { route: ['','welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title:'Welcome' },
      { route: 'products', name: 'products', moduleId: 'products', nav: true, title: 'Products'}
    ]);
  }
}

```
Now, we can navigate to our Products page to view it by going to **[your url]/#/products**.

### Add the aurelia-datagrid to the view.

In **products.html**, add the following code inside the **.ui.segment div** element:
```html
<grid data-source.bind="tools">
	<template replace-part="grid-template">
  	<grid-column property="name" filterable sortable></grid-column>
  	<grid-column-checkbox property="active" filterable sortable></grid-column-checkbox>
  	<grid-column property="price"></grid-column>
  </template>
</grid>
```
This will generate a grid with three columns:
- a column that shows the names of the products
- a column that indicates which products are active with a check mark
- a column that shows the prices of the products

The first two columns can be filtered and sorted.  Filter inputs and sorting buttons will be included in the headers for each column.

The **products.html** file contents should like this:
```html
<template>
  <div class="ui segment">
    <div class="ui top attached inverted blue header">Products</div>

    <grid data-source.bind="tools">
      <template replace-part="grid-template">
        <grid-column property="name" filterable sortable></grid-column>
        <grid-column-checkbox property="active" filterable sortable></grid-column-checkbox>
        <grid-column property="price"></grid-column>
      </template>
    </grid>
  </div>
</template>
```

Now, when you run your app and navigate to the products page, the grid with the list of products will display.

# Grid
- By default, the grid looks for an array property named **items** on your view model. To override this, use the **data-source** attribute.
```javascript
export class ViewModel {
  tools = [
    { name: 'Hammer', active: true, price: 5.99 },
    { name: 'Jackhammer', active: false, price: 599.99 },
    { name: 'Wench', active: true, price: 2.99 }
  ];
}

```

## Attributes

### class
Bootstrap
```html
<grid class="table-striped table-condensed">
  ...
</grid>
```
Semantic-UI
```html
<grid class="ui striped celled compact table">
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

### data-source
```html
<grid data-source.bind="products">
  ...
</grid>
```
Specifies which property to use to populate the grid.

## Row Selected Event

```html
<grid row-selected.bind="rowSelected">
  ...
</grid>
```
A bindable event that is called every time a cell is selected / clicked.

### Row Selected Argument
The argument passed to the row-selected function.

##### column
Information on the column that was clicked.

##### event
The event object passed to the specified event handler function is a MouseEvent.

##### row
The object that is bound to the row that was clicked.

####Example
```html
<grid row-selected.bind="showSelectedRowInfo">
```

```javascript
showSelectedRowInfo(selectionInfo) {
  alert('item:' + selectionInfo.row.name);
  alert('cell info: ' + selectionInfo.column.property + '=' + selectionInfo.row[selectionInfo.column.property]);
}
```

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

##### alignment
Positioning of the column's content. By default, this is set to 'left' (left aligned).

###### Available Values
- left | left aligned
- right | right aligned
- center | center aligned
- justify | justified

##### filterable
Indicates the content in this column can be filtered.  An *input* element is displayed in the column's header.  The value entered is used for the filter.

##### heading
Provides an alternate heading for this column.  By default, the text entered into the *property* attribute is used for the heading.

##### sortable
Indicates the content in this column can be sorted.  The column heading is converted to button.  When the button is clicked, the grid toggles through the sorting.

## grid-column-button
```html
<grid-column-button 
    heading="Actions"
    caption="Delete"
    button-click.call="delete(row)">
</grid-column-button>
```

#### Required

##### caption
Provides the button text.

#### Optional

##### button-click (.call | .bind)
Callback function when the button is clicked.

###### .bind
Binds button-click to a function.  The function will be called with the $event as the only argument.*
* v0.1.5 currently has a bug with the $event not being passed.

###### .call
Passes a function reference to button-click.

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

##### alignment
Positioning of the column's content. By default, this is set to 'left' (left aligned).

###### Available Values
- left | left aligned
- right | right aligned
- center | center aligned
- justify | justified

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
<grid-column-edit></grid-column-edit>
```

### Attributes

#### Optional

##### edit-click
Event triggered when the edit button is clicked.
*example.html*
```html
  <grid-column-edit edit-click.bind="enableEditingOfItem"></grid-column-edit>
```
*example.js*
```javascript
  enableEditingOfItem(info) {
    alert(`Item '${info.row.name}' is now in edit mode.`);
  }
```

##### save-click
Event triggered when the save button is clicked.

*example.html*
```html
  <grid-column-edit save-click.bind="saveItem"></grid-column-edit>
```
*example.js*
```javascript
  saveItem(item) {
    alert(`Item '${item.name}' is saving...`);
  }
```

##### cancel-click
Event triggered when the edit button is clicked.

*example.html*
```html
  <grid-column-edit cancel-click.bind="cancelEditOnItem"></grid-column-edit>
```
*example.js*
```javascript
  cancelEditOnItem(item) {
    alert(`Changes to item '${item.name}' have been cancelled.`);
  }
```

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
  <grid-column filterable="starts with" property="name"></grid-column>
```

There are three ways you can provide custom filtering:
1. Providing a global filtering strategy
2. Providing a grid level filtering strategy.
3. Providing a column level filtering strategy.

## Providing a global filtering strategy
Global level filter strategies will apply to any column that meets all the following requirements:
- A filterable attribute is set with no value.
- No grid level default filtering strategy is provided.
```html
<grid-column property="name" filterable></grid-column>
```

By default, all grids use the **starts with** filter strategy.  This is a configuration setting that can be changed.  In the **main.js** file, update the configuration file like so:
```javascript
.plugin('donnelljenkins/aurelia-datagrid', config => {
  config.defaultFilterStrategy: 'starts with';
  config.defaultCssFramework = 'bootstrap';
});
```

Available Filter Strategies:
- **contains**
- **ends with**
- **equals**
- **starts with**

## Providing a grid level filtering strategy
```html
<grid default-filter="contains" data-source.bind="products">
```

Available Filter Strategies:
- **contains**
- **ends with**
- **equals**
- **starts with**

## Providing a column level filtering strategy
```html
<grid-column filterable="ends with" property="name"></grid-column>
```

# Creating a custom filter strategy

Create a function with an apply method.
```javascript
const lastToContainFilterStrategy = {
  apply: (items, filter) => {
    let filterValue = filter.value.toLowerCase();
    let filteredItems = items.filter(item => {
        return item[filter.property].toLowerCase().includes(filterValue);
      });
    return filteredItems.slice(filteredItems.length-1);
  }
};

export default lastToContainFilterStrategy;

```
Import the strategy into **main.js**.
```javascript
import lastToContainFilterStrategy from './last-to-contain-filter-strategy';
```
Add the strategy to the global list of filter strategies.
```javascript
.plugin('donnelljenkins/aurelia-datagrid', config => {
  ...
  config.filterStrategies.push(
  {
    name: 'last to contain', 
    strategy: lastToContainFilterStrategy
  });
});
```
Use the strategy.
```javascript
<grid-column filterable="last to contain" property="name"></grid-column>
```

## Filter Strategies

### apply(items, filter) method

#### filter Parameter

##### items
The data source items to apply the filter to.

#### filter
The filter information to apply.  It contains the property and the value the filter applies to.

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
  
