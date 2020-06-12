if(typeof xcnt_product_id != 'undefined'){
    if(xcnt_product_id != 0 && xcnt_product_id != 'product'){

$XCNT.good.id = xcnt_product_id;

var name = $xcntJQuery('h1.pdp-product-title:first').text();
if ((typeof name == 'string') && ( name != ''))
{
   $XCNT.good.name = $xcntJQuery.trim(name.replace(/\n/ig,''));
}

var brand = $xcntJQuery('a.pdp-product-brand__brand-link').text();
if ((typeof brand == 'string') && ( brand != ''))
{
   $XCNT.good.brand = $xcntJQuery.trim(brand.replace(/\n/ig,''));
}

var category = '';
var catway = 'ul.breadcrumb:first > li > span > a';
if ($xcntJQuery(catway).length > 0)  
{
  for(var x = $xcntJQuery(catway).length;x > 0 ; x --)
  {
   if (category != '')
	category += '>';
   var catPart = $xcntJQuery(catway).eq($xcntJQuery(catway).length-x).text();
   if(typeof catPart == 'string')
   category += $xcntJQuery.trim(catPart);
  }
 if(category.length > 1){
   $XCNT.good.category = category;
   var sex = category;
   if(typeof $XCNT.good.name == 'string'){
     sex += ' ' + $XCNT.good.name;
   }
   
   var catLink = $xcntJQuery(catway).eq($xcntJQuery(catway).length-1).attr('href');
if(typeof catLink == 'string'){
$XCNT.good.category_link = encodeURIComponent(catLink);
}}}

var img = $xcntJQuery('img.pdp-mod-common-image.gallery-preview-panel__image:first').attr('src');
if (typeof img == 'string' && img != '')
{
  if (img.search(/https?:/) != -1)
  {
    $XCNT.good.img = img;
  }
  else if(img.search(/\/\//) == 0){

     $XCNT.good.img = 'http:' + img;
  }
}

var price = $xcntJQuery('div#module_product_price_1:first span.pdp-price_type_normal:first').text();
if ((typeof price === 'string')&&(price != ''))
{
  price = $xcntJQuery.trim(price.replace(/^[^\d]*/ig,'').replace(/&nbsp;/ig,'').replace(/\s/ig,'').replace(/\./ig,'').replace(/\n/ig,'').replace('₫',''))
  $XCNT.good.price = $xcntJQuery.trim(price.replace(/^[^\d]*/ig,'').replace(/&nbsp;/ig,'').replace(/\s/ig,'').replace(/\n/ig,''));

if(isNaN($XCNT.good.price*1) || $XCNT.good.price*1 < 1000){$XCNT.good.price=0;}
}


var oldprice = $xcntJQuery('div#module_product_price_1:first span.pdp-price_type_deleted:first').text();
if (typeof oldprice === 'string' && oldprice != '')
{
    oldprice =  oldprice.replace(/^[^\d]*/ig,'').replace(/&nbsp;/ig,'').replace(/\s/ig,'').replace(/\./ig,'').replace('₫',''); 
    $XCNT.good.oldPrice = $xcntJQuery.trim(oldprice);
  if(isNaN($XCNT.good.oldPrice*1) || $XCNT.good.oldPrice*1<1000){$XCNT.good.oldPrice=0;}
}

/*comparing old and new price*/
if((typeof $XCNT.good.price === 'string' || typeof $XCNT.good.price === 'number')&&(typeof $XCNT.good.oldPrice === 'string' || typeof $XCNT.good.oldPrice === 'number'))
{
   if(($XCNT.good.price*1)>=($XCNT.good.oldPrice*1))
     delete $XCNT.good.oldPrice;
}

$XCNT.good.currency = 'VND';

}}
