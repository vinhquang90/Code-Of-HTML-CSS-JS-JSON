var rr = (function() {
    var href = document.location.href;
    isProduct: function() {
        return productId !== undefined;
    };
    isCart: function() {
        return href.search(/^https:\/\/phongvu\.vn\/checkout\/cart\/$/i/) != -1;
    };
    isOrderConfirm: function() {
        return href.search(/^https:\/\/phongvu\.vn\/checkout\/payment\/index\/$/i/) != -1;
    };
    return {
        getProductId: function(){
            return productId;
        },
        getBasketProducts: function () {
            // return 'XX,YY,ZZ,...'; ?=> XX,YY,ZZ – ID products in cart, devided by commas
            if (!isCart()) return undefined;

            return cartItems.map(function(item){
                return item.id;
            }).join(', ');
        },
        getBasketQuantity: function () {
            // return 'X,Y,Z' ?=> X,Y,Z – number of corresponding products (optional)
            if (!isCart()) return undefined;

            return cartItems.map(function(item) {
                return item.quantity;
            }).join(', ');;
        },
        getOrderProducts: function () {
            // return 'XX,YY,ZZ,...'; XX,YY,ZZ - ID of products in the cart, devided by comma
            if (!isOrderConfirm()) return undefined;

            return cartItems.map(function(item){
                return item.id;
            }).join(', ');
        },
        getOrderQuantity: function () {
            // return 'X,Y,Z,...'; X,Y,Z – number of corresponding products (optional)
            if (!isOrderConfirm()) return undefined;

            return cartItems.map(function(item) {
                return item.quantity;
            }).join(', ');;
        },
        getOrderID: function () {
            // return 'XXXYYY'; XXXYYY – Order ID (may be encrypted in MD5)
            if (isOrderConfirm()) return undefined;

            return 'order';
        },
        getOrderTotal: function () {
            // return '000.00'; order amount
            if (!isOrderConfirm()) return undefined;

            return document.querySelector('.payment-cart-grandtotal.instalment-serve')
                .textContent
                .slice(0, -2)
                .replace(/\./g, '');
        },
        getOrderCurrency: function () {
            // return 'BRL'; Currency of the order, ISO 4217 (optional)
            if (!isOrderConfirm()) return undefined;

            return 'VND';
        },
        getUserEmail: function () {
            // return 'user@test.me'; User e-mail (optional)
            if (!isOrderConfirm()) return undefined;

            return document.querySelector(".shipping-information > div:nth-child(4)").textContent.substring(7);
        }
    }
})();


var xcnt_product_id = rr.getProductId();

var xcnt_basket_products = rr.getBasketProducts()
var xcnt_basket_quantity = rr.getBasketQuantity(); 

var xcnt_order_products = rr.getOrderProducts();
var xcnt_order_quantity = rr.getOrderQuantity();
var xcnt_order_id       = rr.getOrderID();
var xcnt_order_total    = rr.getOrderTotal();
var xcnt_order_currency = rr.getOrderCurrency();
var xcnt_user_email     = rr.getUserEmail();

(function(d) {
    var xscr = d.createElement('script');
    xscr.async = 1;
    xscr.src = '//x.cnt.my/async/track/?r=' + Math.random();
    var x = d.getElementById('xcntmyAsync');
    x.parentNode.insertBefore(xscr, x);
})(document);