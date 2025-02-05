$(document).ready(function () {

    // when a 'search products' button was clicked
    $(document).on('submit', '#search-product-form', function () {

        // get search keywords
        var category_id = $(this).find(":input[name='keywords']").val();

        // get data from the api based on search keywords
        $.getJSON("http://localhost/api/product/search_category.php?s=" + category_id, function (data) {

            // template in products.js
            readProductsTemplate(data, category_id);

            // chage page title
            changePageTitle("Search products by category ID " + category_id);

        })

            .fail(function () { alert("0 products") });

        // prevent whole page reload
        return false;
    });

});