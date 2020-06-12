function deleteCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

function getCookie() {
  var cookieList = new Object();
  var cookieTmp = document.cookie.split(";");
  cookieTmp.forEach(function(e) {
    var cookieName = e.substr(0, e.indexOf("=")).trim();
    var cookieValue = e.substr(e.indexOf("=") + 1);
    cookieList[cookieName] = cookieValue;
  });
  return cookieList;
}

var cookieList = getCookie();
if (cookieList.cityads != null) {
  var pixel = document.createElement("script");
  var order_id;
  var order_total;
  var basket = [];
  if (
    window.Haravan.checkout !== null &&
    typeof window.Haravan.checkout === "object"
  ) {
    if (
      window.Haravan.checkout.order_number !== null &&
      typeof window.Haravan.checkout.order_number === "string"
    ) {
      order_id = window.Haravan.checkout.order_number.match(/\d+/)[0];
    }
    if (
      window.Haravan.checkout.total_price !== null &&
      typeof window.Haravan.checkout.total_price === "number"
    ) {
      order_total = window.Haravan.checkout.total_price;
    }
    if (
      window.Haravan.checkout.line_items !== null &&
      typeof window.Haravan.checkout.line_items === "object"
    ) {
      window.Haravan.checkout.line_items.forEach(function(e) {
        product = {
          pid: e.product_id,
          pn: e.title,
          up: e.line_price,
          pc: e.type,
          qty: e.quantity
        };
        basket.push(product);
      });
    }
  }
  
  var xsrc =
    "https://cityadstrack.com/tr/js/" +
    order_id +
    "/ct/q1/c/29738?click_id=" +
    cookieList.cityads +
    "&order_total=" +
    order_total +
    "&currency=VND&basket=" +
    encodeURI(JSON.stringify(basket));
  pixel.setAttribute("type", "text/javascript");
  pixel.setAttribute("src", xsrc);
  pixel.setAttribute("id", "cityads");
  document.querySelectorAll("body")[0].appendChild(pixel);
  var noscript = document.createElement("noscript");
  var iframe = document.createElement("iframe");
  iframe.setAttribute("src", xsrc);
  iframe.setAttribute("width", 1);
  iframe.setAttribute("height", 1);
  noscript.appendChild(iframe);
  document.querySelectorAll("body")[0].appendChild(noscript);
  deleteCookie("cityads");
}
