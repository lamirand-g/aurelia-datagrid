# aurelia-grid
A data grid control for Aurelia with sorting and filtering capabilities.

Demo: http://donthedev.com/aurelia/#/grid

## Dependencies

* [aurelia-framework](https://github.com/aurelia/framework)
* [lodash](https://lodash.com/)
* [**Bootstrap](http://getbootstrap.com/)
* [**Semantic-UI](http://semantic-ui.com/)

** The grid can be configured to use either Bootstrap or Semantic-UI.  One of these packages must be manually installed depending on which framework you wish to use.  By default, the grid is configured to use Bootstrap.

## Installation

1.  Ensure that [JSPM](http://jspm.io/) is installed.
2.  From your project folder, execute the following command:
```shell
jspm install github:donnelljenkins/aurelia-grid
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
    .plugin('donnelljenkins/aurelia-grid');

  aurelia.start().then(a => a.setRoot());
```

## Usage
```html
  <grid>
    <!-- row template -->
    <template replace-part="grid-template">
      <!-- column templates -->
      <td grid-column-template property="name" heading="Custom Template">${row.name}</td>
      <grid-column property="name" filterable sortable></grid-column>
      <grid-column-checkbox property="active"></grid-column-checkbox>
      <grid-column-button caption="Greet" heading="List Function"
                         button-click.bind="$parent.$parent.greet">
      </grid-column-button>
      <grid-column-edit heading="Inline" hide-cancel></grid-column-edit>
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

## Configure Grid to Use Semantic-UI
```html
  <grid configuration-name="semantic">
  ...
  </grid>
```
