# Examples

## Paging

### Using the aurelia-pagination plugin.
Follow the instructions on the [Getting Started](https://github.com/donnelljenkins/aurelia-pagination/blob/master/doc/HOWTO.md#aurelia-datagrid014) section of the **aurelia-pagination** plugin.

### Manually perfoming pagination
Paging is not provided out of the box, however, it can be manually implemented using the *additional-filtering* attribute on the grid.

Let's update the *products* page from the [Getting Started](https://github.com/donnelljenkins/aurelia-datagrid/blob/master/doc/HOWTO.md#getting-started) section to demonstrate.

First, we'll add our paging logic to the view model. In **products.js**, add the following:
```javascript
// Using ES7 Property Initializer here
currentPage = 0;

applyPaging = (items) => {
  const pageSize = 2;
  let start = this.currentPage * pageSize;
  this.pages = Math.ceil(items.length / pageSize);
  return items.slice(start, start + pageSize);
}

goToPage(page) {
  this.currentPage = page;
}
```

Now, we'll update the HTML to show pagination.  We will place it in the grid's footer section.

First, add the replaceable template 'grid-footer-template' element to the grid:
```html
<grid datasource="products">
  ...
  <template replace-part="grid-footer-template">
  </template>
</grid>
```

Next, add the pagination element inside the template:
*This example uses Bootstrap CSS styling.
```html
<template replace-part="grid-footer-template">
  <ul class="pagination">
    <li repeat.for="page of pages" class.bind="currentPage === page ? 'active': ''">
      <a click.delegate="goToPage(page)">${page + 1}</a>
    </li>
  </ul>
</template>
```

Finally, we need to subscribe to the **additional-filtering** event on the grid to force it to call our paging logic every time the grid's data source is updated (filtered, sorted, etc).  Update the grid element to look like this:
```html
<grid data-source.bind="products" additional-filtering.bind="applyPaging">
```
Every time the grid updates, it will call our **applyPaging()** method after it applies any sorting and column filtering.

Running the app will now show two pages of data. However, clicking on page 2 will show the same data that is on page 1. The grid is not updating when we switch pages. We can fix this by using Aurelia's data binding feature [ref](http://aurelia.io/docs.html#/aurelia/framework/1.0.0-beta.1.0.2/doc/article/cheat-sheet).  **ref** creates a reference to an HTML element, a component or a component's parts.  We will create a reference to our grid component's view model. On the grid element, add the following attribute:
```html
view-model.ref="gridViewModel"
```
The grid should look like this:
```html
<grid data-source.bind="products"
      view-model.ref="gridViewModel"
      additional-filtering.bind="applyPaging">
```
This will create a reference to the grid with the name '**gridViewModel**'.  We now have access to the grid's view model.  We can use this reference to force the grid to refresh whenever the user clicks on one of the pages in the pagination control.  Let's update our **products** view model to do that.

In the **goToPage** method (products.js), add the following line to the end of the method:
```javascript
this.gridViewModel.refresh();
```
The method should look like this:
```javascript
goToPage(page) {
  this.currentPage = page;
  this.gridViewModel.refresh();
}
```

Rerun the app and the paging should work now!
