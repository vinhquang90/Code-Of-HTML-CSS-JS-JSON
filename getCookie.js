function deleteCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

function getCookie() {
  var cookieList = new Object();
  var cookieTmp = document.cookie.split(";");
  cookieTmp.forEach(e => {
    var cookieName = e.substr(0, e.indexOf("=")).trim();
    var cookieValue = e.substr(e.indexOf("=") + 1);
    cookieList[cookieName] = cookieValue;
  });
  return cookieList;
}
var cookieList = getCookie();
if (cookieList.click_id != null) {
  var pixel = document.createElement("script");
  let order_id;
  let order_total;
  let basket = [];
  if (
    window.dataLayer[0].TransactionID !== null &&
    typeof window.dataLayer[0] === "object"
  ) {
    order_id = window.dataLayer[0].TransactionID;
    if (
      window.dataLayer[0].ecommerce !== null &&
      typeof window.dataLayer[0].ecommerce === "object"
    ) {
      if (
        window.dataLayer[0].ecommerce.products !== null &&
        typeof window.dataLayer[0].ecommerce.products === "object"
      ) {
        window.dataLayer[0].ecommerce.products.forEach(e => {
          product = {
            pid: e.id,
            pn: e.name,
            up: e.price,
            pc: e.category,
            qty: e.quantity
          };
          basket.push(product);
        });
      }
      if (
        window.dataLayer[0].ecommerce.purchase.actionField !== null &&
        typeof window.dataLayer[0].ecommerce.purchase.actionField === "object"
      ) {
        order_total = Number(
          window.dataLayer[0].ecommerce.purchase.actionField.revenue.replace(
            ",",
            ""
          )
        );
      }
    }
  }
  var xsrc =
    "https://cityadstrack.com/tr/js/" +
    order_id +
    "/ct/q1/c/11111?click_id=" +
    cookieList.clickCityAdsID.split("=")[1] +
    "&order_total=" +
    order_total +
    "&currency=VND&basket=" +
    encodeURI(JSON.stringify(basket));
  pixel.setAttribute("type", "text/javascript");
  pixel.setAttribute("src", xsrc);
  document.querySelectorAll("body")[0].appendChild(pixel);
  var noscript = document.createElement("noscript");
  var iframe = document.createElement("iframe");
  iframe.setAttribute("src", xsrc);
  iframe.setAttribute("width", 1);
  iframe.setAttribute("height", 1);
  noscript.appendChild(iframe);
  document.querySelectorAll("body")[0].appendChild(noscript);
  deleteCookie("clickCityAdsID");
}
