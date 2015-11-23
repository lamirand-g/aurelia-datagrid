# aurelia-grid
A data grid plugin for <a href="http://aurelia.io/" target="_blank">Aurelia</a> with sorting and filtering capabilities.

```html
<grid>
  <template replace-part="grid-template">
    <grid-column property="name" filterable sortable></grid-column>
    <grid-column-checkbox property="active" filterable sortable></grid-column-checkbox>
    <grid-column-button 
         caption="Select"
         button-click.call="$parent.$parent.select($event)">
    </grid-column-button>
    <grid-column-template heading="Custom">
      <template replace-part="custom-template">
        <compose view="./demo-custom-column-template.html" 
                 containerless>
        </compose>
      </template>
    </grid-column-template>
    <grid-column-edit></grid-column-edit>
  </template>

  <template replace-part="grid-footer-template">
    <td colspan.bind="columns.length">Footer Here!</td>
  </template>
</grid>
```

## Live Demo

<a href="http://donthedev.com/aurelia/#datagrid-examples/" target="_blank">Aurelia-DataGrid Demo</a>

## Documentation

- [Installation](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#installation)
- [Getting started](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#getting-started)
- [Grid](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#grid)
- [Column Templates](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#column-templates)
  - [grid-column](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#grid-column)
  - [grid-column-button](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#grid-column-button)
  - [grid-column-checkbox](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#grid-column-checkbox)
  - [grid-column-edit](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#grid-column-edit)
  - [grid-column-template](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#grid-column-template)
- [Footer template](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#footer-template)
- [Configuration](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#configuration)
  - [Global settings](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#global-settings)
  - [Grid level settings](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#grid-level-settings)
- [Custom filtering](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#how-to-provide-custom-filtering)
  - [applyFilter(filter) method](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#applyfilterfilter-method)
  - [applySort(sort) method](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#applysortsort-method)
- [Custom sorting](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#how-to-provide-custom-sorting)


## Dependencies

* [aurelia-binding](https://github.com/aurelia/binding)
* [aurelia-dependency-injection](https://github.com/aurelia/dependency-injection)
* [aurelia-templating](https://github.com/aurelia/templating)
* [lodash](https://lodash.com/)
* [bootstrap**](http://getbootstrap.com/)
* [Semantic-UI**](http://semantic-ui.com/)

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
