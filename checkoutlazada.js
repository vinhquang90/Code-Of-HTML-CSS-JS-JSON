var dlh = document.location.href;

if (dlh.search(/lazada\.vn\/products\//i) != - 1){
 
 var xcnt_p_id;
 
 try
 {
 xcnt_p_id = pdpTrackingData.pdt_simplesku;
 }
 catch(err){}
 
 var xcnt_product_id = xcnt_p_id || 'product'; // This operator means OR
}

else if (dlh.search(/cart\.lazada\.vn\/cart/i) != - 1)
{
var xcnt_basket_products = 'basket';
}

else if (dlh.search(/checkout\.lazada\.vn\/order-received/i) != - 1)
	
{
	
var o_id = dlh.match(/orderId=(\d+)/); 

if(typeof o_id == 'object' && o_id != null)
	
{o_id = o_id[1]}

else {o_id = undefined}

var xcnt_order_id = o_id||'order';

}