var dlh = document.location.href;

if (typeof jQuery == 'function') {
    if (jQuery('head > meta[property = "og:type"][content = "product"]').length > 0) {
        var xcnt_product_id = window.productId;
        console.log(xcnt_product_id);

    }
    if (dlh.search(/^https?:\/\/www\.hotdeal\.vn\/checkout-step-1$/i) != -1) {
        var xcnt_b_arr = new Array();
        var xcnt_bq_arr = new Array();

        var products_arr = Array.from(document.body.getElementsByClassName('minicart__item__actions'));
        products_arr.forEach(e => {
            xcnt_b_arr.push(e.getElementsByTagName('a')[0].getAttribute('data-product'));
        });

        // calculate quantity
        var products_total = Array.from(document.body.getElementsByClassName('total'));
        products_total.pop();
        products_total = products_total.map((v, i, a) => {
            var n = v.innerText.split(",")
            return n[0];
        });

        var products_unit = Array.from(document.querySelectorAll("td.unit > label")).map((v, i, a) => {
            var n = v.innerText.split(",")
            return n[0];
        })

        xcnt_bq_arr = products_total.map((v, i) => {
            return v / products_unit[i];
        })

        var xcnt_basket_products = xcnt_b_arr.join();
        var xcnt_basket_quantity = xcnt_bq_arr.join();
    }
} else {
    if (dlh.search(/^https?:\/\/www\.hotdeal\.vn\/checkout-step-1$/i) != -1) {
        var xcnt_basket_products = 'basket'
    }
    else {
        var xcPType = document.getElementsByTagName('head')[0].getElementsByTagName('meta');
        for (var i = 0; i < xcPType.length; i++) {
            if (xcPType[i].getAttribute('property') == 'og:type' && xcPType[i].getAttribute('content') == 'product') {
                var xcnt_product_id = 'product';
                break;
            }
        }
    }
}

if (typeof dlh == 'string' && !/https:\/\/www\.hotdeal\.vn\/(?:\?.*)?$/i.test(dlh)) { // 53-69 push notification code
    //not Home
    (function () {
        var script = document.createElement("script"),
            body = document.getElementsByTagName("body")[0];
        script.src = "https://hotdeal.tpm.im/pushing/init";
        script.border = 0; script.width = 0; script.height = 0;
        body.appendChild(script);
    })()
}

(function (d) {
    var xscr = d.createElement('script'); xscr.async = 1;
    xscr.src = '//x.cnt.my/async/track/?r=' + Math.random();
    var x = d.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(xscr, x);
})(document);
