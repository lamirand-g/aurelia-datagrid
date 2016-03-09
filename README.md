# aurelia-grid
A data grid plugin for <a href="http://aurelia.io/" target="_blank">Aurelia</a> with sorting and filtering capabilities.

```html
  <grid css-framework="bootstrap" data-source.bind="samples">
    <template replace-part="grid-template">
      <grid-column property="name" filterable sortable></grid-column>
      <grid-column property="title" alignment="center" filterable sortable></grid-column>
      <grid-column-checkbox property="active" filterable sortable></grid-column-checkbox>
      <grid-column-button heading="Action" caption="Select" 
          button-click.call="select(row.id)">
      </grid-column-button>
      
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

## Live Demo

<a href="http://donthedev.com/aurelia/#datagrid-examples/" target="_blank">Aurelia-DataGrid Demo</a>

## Documentation

### [Current Release (@v0.1.5)](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md)
- [Installation](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#installation)
- [Getting started](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#getting-started)
  - [Bootstrap](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#bootstrap)
  - [Semantic-UI](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#semantic-ui)
- [Grid](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#grid)
  - [Row selected event](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#row-selected-event)
- [Column Templates](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#column-templates)
  - [grid-column](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#grid-column)
  - [grid-column-button](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#grid-column-button)
  - [grid-column-checkbox](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#grid-column-checkbox)
  - [grid-column-edit](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#grid-column-edit)
  - [grid-column-template](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#grid-column-template---custom-column-template)
- [Footer template](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#footer-template)
- [Configuration](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#configuration)
  - [Global settings](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#global-settings)
  - [Grid level settings](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#grid-level-settings)
- [Custom filtering](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#how-to-provide-custom-filtering)
- [Custom sorting](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#how-to-provide-custom-sorting)
  - [applySort(sort) method](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#applysortsort-method)

### [Release @v0.1.4](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO%40v0.1.4.md)
### [Release @v0.1.3](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO%40v0.1.3.md)

## Examples
- [All Examples](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/EXAMPLES.md)
- [Paging](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/EXAMPLES.md#paging)

## Dependencies

* [aurelia-binding](https://github.com/aurelia/binding)
* [aurelia-dependency-injection](https://github.com/aurelia/dependency-injection)
* [aurelia-templating](https://github.com/aurelia/templating)
* [lodash](https://lodash.com/)
* [bootstrap**](http://getbootstrap.com/)
* [semantic-ui**](http://semantic-ui.com/)

** The grid can be configured to use either Bootstrap or Semantic-UI.  One of these packages must be manually installed depending on which framework you wish to use.  By default, the grid is configured to use Bootstrap.

## Used By

This library isn't used by Aurelia. It is an optional plugin.

## Platform Support

This library can be used in the **browser**.

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in four module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.
