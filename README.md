# aurelia-grid
A data grid control for Aurelia with sorting and filtering capabilities.

Demo: http://donthedev.com/aurelia/#/grid

> !!!!! Work-In-Progress (the import currently does not work) !!!!!

## Dependencies

* [aurelia-framework](https://github.com/aurelia/framework)

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

## Template
TBD
