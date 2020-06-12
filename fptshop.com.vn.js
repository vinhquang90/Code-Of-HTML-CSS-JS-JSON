var dlh = document.location.href;

if(typeof jQuery == 'function'){
  if(jQuery('head > meta[name = "pageType"][content = "productPage"]').length > 0){
      var xcnt_product_id = jQuery('input#productId[name="productId"]:first').attr('value');
  }  
if(dlh.search(/^https?:\/\/fptshop\.com\.vn\/gio-hang$/i) != -1){
var xcnt_b_arr = new Array();    var xcnt_bq_arr = new Array();
if(typeof dataLayer == 'object' && dataLayer != null && dataLayer.length > 0){
for(var i = 0; i < dataLayer.length; i++){
if('ecommerce' in dataLayer[i] && ('add' in dataLayer[i]['ecommerce'] && 'event'in dataLayer[i]['ecommerce'] && dataLayer[i]['ecommerce']['event'] == '"addToCart"')
   && 'products' in dataLayer[i]['ecommerce']['add'] && typeof dataLayer[i]['ecommerce']['add']['products'] == 'array'){
for(var e = 0; e < dataLayer[i]['ecommerce']['add']['products'].length; e++){
    xcnt_b_arr.push(dataLayer[i]['ecommerce']['add']['products'][e]['id']);
    xcnt_bq_arr.push(dataLayer[i]['ecommerce']['add']['products'][e]['quantity']);
}
var xcnt_basket_products = xcnt_b_arr.join();var xcnt_basket_quantity = xcnt_bq_arr.join();
 break;
}}}
 var xcnt_basket_products = xcnt_basket_products || 'basket';
}
if(dlh.search(/^https?:\/\/fptshop\.com\.vn\/gio-hang\/don-hang-thanh-cong\?id=/i) != -1){
    var xcnt_o = dlh.match(/^https?:\/\/fptshop\.com\.vn\/gio-hang\/don-hang-thanh-cong\?id=(\d+)/i);
    if(typeof xcnt_o == 'object' && xcnt_o != null){
    var xcnt_order_id = xcnt_o[1];
    }else{
        var xcnt_order_id = 'order';
    }
}    
}else{
  if(dlh.search(/^https?:\/\/fptshop\.com\.vn\/gio-hang\/don-hang-thanh-cong\?id=/i) != -1){
    var xcnt_order_id = 'order'
}
else if(dlh.search(/^https?:\/\/fptshop\.com\.vn\/gio-hang$/i) != -1){
    var xcnt_basket_products = 'basket'
}
else{
var xcPType = document.getElementsByTagName('head')[0].getElementsByTagName('meta');
for(var i = 0;i <xcPType.length ;i++){
    if(xcPType[i].getAttribute('name') == 'pageType' && xcPType[i].getAttribute('content') == 'productPage'){
    var xcnt_product_id = 'product';break;
}}
}   
}

(function(d){
var xscr = d.createElement( 'script' ); xscr.async = 1;
xscr.src = '//x.cnt.my/async/track/?r=' + Math.random();
var x = d.getElementById( 'xcntmyAsync' );
x.parentNode.insertBefore( xscr, x );
})(document);