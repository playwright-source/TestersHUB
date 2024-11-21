const { Given, When, Then } = require('@cucumber/cucumber');


//@TC-21
When('read these datatables', async function (dataTable) {
    let data = dataTable.rowsHash() // pass the data as parameter to method of page object classes - { size: 'xs', brand: 'adidas', caregory: 'backpacks' }
    for([key, value] of Object.entries(data)){
       console.log(key, value);
     }
});


//@TC-23

When('User clicks on sort option', async function () {
    await this.filtersorting.clickSortOption();
});

When('the User selects a sort option as {string}', async function (sortOption) {
    await this.filtersorting.selectSortOption(sortOption);
});

Then('the products should be sorted in {string} order', async function (order) {
    await this.filtersorting.assertProductsSorted(order);
});
