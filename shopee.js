var dlh = document.location.href

if (dlh.search(/^https?:\/\/shopee\.vn\/cart/i) != -1) {
  var xcnt_basket_products = []
  var xcnt_basket_quantity = []

  var products = document.querySelectorAll('div.cart-page-shop-section__items > div > div.cart-item__cell-overview > div > a')
  if (products != null && products.length > 0) {
    products.forEach(function (product) {
      var productHref = product.getAttribute('href')
      xcnt_basket_products.push(productHref.split('.').pop())
    })
  }

  var productsQuantity = document.querySelectorAll('div.cart-item__cell-quantity > div > input')
  if (productsQuantity != null && productsQuantity.length > 0) {
    productsQuantity.forEach(function (quantity) {
      xcnt_basket_quantity.push(quantity.value)
    })
  }

  xcnt_basket_products = xcnt_basket_products.length > 0 ? xcnt_basket_products.join(',') : 'basket'
  xcnt_basket_quantity = xcnt_basket_quantity.length > 0 ? xcnt_basket_quantity.join(',') : 'quantity'
} else {
  var xcnt_product_id = dlh.split('.').pop() || 'product'
}

(function(d){
  var xscr = d.createElement( 'script' ); xscr.async = 1;
  xscr.src = '//x.cnt.my/async/track/?r=' + Math.random();
  var x = d.getElementsByTagName( 'script' )[0];
  x.parentNode.insertBefore( xscr, x );
})(document);

