var cookieList = getCookie();

if (cookieList.cityads !== null) {
  var hrefParam = document.location.search + document.location.hash;
  var utm_source = hrefParam.match(/utm_source=\w*/i);
  var fbad = hrefParam.match(/fbclid=\w*/i);
  var gglead = hrefParam.match(/gclid=\w*/i);
  if (utm_source[0].split("=")[1] === "affiliate" && utm_source !== null) {
    var click_id = hrefParam.match(/click_id=\w*/i)[0].split("=")[1];
    createClickIDCookie(click_id, 30);
  } else if (
    (utm_source !== null && utm_source[0].split("=")[1] !== "affiliate") ||
    gglead !== null ||
    fbad !== null
  ) {
    deleteCookie("cityads");
  }
}

// Create cookie click id
function createClickIDCookie(click_id, days) {
  var date = new Date();
  var expires = "; expires=" + date.toGMTString();
  if (days != null) {
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  }
  if (click_id != null) {
    document.cookie = "cityads=" + click_id + expires + "; path=/";
  }
}

// delete cookie
function deleteCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}


// get cookie tu trang do ra, lay het ra va luu duoi sang key value, return ra cookieList roi quay len ham tren cung cookielist.cityads !== null la co
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
