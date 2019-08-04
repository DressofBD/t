var _inside=_inside||[];var _insideLoaded=_insideLoaded||false;var _insideJQ=_insideJQ||null;(function(){if(_insideLoaded)
return;_insideLoaded=true;var accountKey="IN-1000746";var trackerURL="au12-tracker.inside-graph.com";var subsiteId=null;var insideOrderTotal=insideOrderTotal||0;var _insideMaxLoop=15;var _insideCurLoop=0;var _insideFirstLoad=_insideFirstLoad||false;var _insideCurrentURL=window.location.href;function processInside(tracker){var detectSearchByUrl=true;var searchUrl=null;var searchQueryString=null;var detectProductCategoryByUrl=true;var productCategoryUrl=null;var productCategoryQueryString=null;var detectProductByUrl=true;var productUrl=null;var productQueryString=null;var detectCheckoutByUrl=true;var checkoutUrl="/cart";var checkoutQueryString=null;var detectOrderConfirmedByUrl=true;var orderConfirmedUrl="/confirmation";var orderConfirmedQueryString=null;function log(){if(typeof(console)!="undefined"&&typeof(console.log)!="undefined"){}}
function deferWait(callback,test){if(test()){callback();return;}
var _interval=10;var _spin=function(){if(test()){callback();}
else{_interval=_interval>=1000?1000:_interval*2;setTimeout(_spin,_interval);}};setTimeout(_spin,_interval);}
function keepWait(callback,test){if(test()){callback();if(_insideCurLoop>=_insideMaxLoop){return;}}
var _interval=1000;var _spin=function(){if(test()){_insideCurLoop=_insideCurLoop+1;callback();if(_insideCurLoop>=_insideMaxLoop){return;}}
setTimeout(_spin,_interval);};setTimeout(_spin,_interval);}
var indexOf=[].indexOf||function(prop){for(var i=0;i<this.length;i++){if(this[i]===prop)
return i;}
return-1;};function myTrim(text){if(typeof(text)!="undefined"&&text!=null)
return typeof(text.trim)==="function"?text.trim():text.replace(/^\s+|\s+$/gm,'');return null;}
function isNumber(o){return!isNaN(o-0)&&o!==null&&o!==""&&o!==false;}
function isNumeric(n){try{return!isNaN(parseFloat(n))&&isFinite(n);}
catch(tempex){}
return false;}
function setCookie(cname,cvalue,exdays){var hostName=window.location.hostname;var siteNameFragments=hostName.split(".");var siteName=siteNameFragments[1];var domain=siteNameFragments.slice(1,siteNameFragments.length).join(".");var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toGMTString();document.cookie=cname+"="+cvalue+"; "+expires+";path=/"+";domain=."+domain;}
function getCookie(cname){var name=cname+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=myTrim(ca[i]);if(c.indexOf(name)==0)
return c.substring(name.length,c.length);}
return null;}
function deleteCookie(cname){document.cookie=cname+"="+0+"; "+"expires=01 Jan 1970 00:00:00 GMT"+";path=/";}
function roundToTwo(num){if(Math!="undefined"&&Math.round!="undefined")
return+(Math.round(num+"e+2")+"e-2");else
return num;}
function getSearchParameters(){var prmstr=window.location.search.substr(1);return prmstr!=null&&prmstr!=""?transformToAssocArray(prmstr):[];}
function transformToAssocArray(prmstr){var params=[];var prmarr=prmstr.split("&");for(var i=0;i<prmarr.length;i++){params[i]=prmarr[i];}
return params;}
function randomIntFromInterval(min,max){try{return Math.floor(Math.random()*(max-min+1)+min);}
catch(tempex){}
return min;}
function getDecimalSign(number){try{var tempnum=myTrim(number);if(number.length>3){return number.charAt(number.length-3);}}
catch(signex){}
return ".";}
function getViewData(){try{var data={};data.action="trackView";data.type="article";data.url=window.location.href;data.name="Unknown Page: "+window.location.href;var temppath=window.location.pathname;var temp_loc=temppath.split("/");var page="";var add_tags=[];var params=getSearchParameters();var searchterm="Search";if(params!=null&&params.length>0){for(var i=0;i<params.length;i++){if(params[i].indexOf("q=")==0){searchterm=params[i].split("q=")[1];}}}
for(var i=1;i<temp_loc.length;i++){if(temp_loc[i]!=null&&temp_loc[i].length>0)
page=temp_loc[i];}
var curpage=page.split("?")[0];data.name=curpage;var temppagetype="other";if(typeof(Bunnings)!="undefined"&&Bunnings!=null&&typeof(Bunnings.trackingInfo)!="undefined"&&Bunnings.trackingInfo!=null&&typeof(Bunnings.trackingInfo.TemplateName)!="undefined"&&Bunnings.trackingInfo.TemplateName!=null&&Bunnings.trackingInfo.TemplateName.length>0){temppagetype=Bunnings.trackingInfo.TemplateName.toLowerCase();}
if((temppath=="/"||curpage=="index.html")&&temp_loc.length<3){data.type="homepage";}
else if(temppagetype=="home"){data.type="homepage";}
else if(temppagetype=="productsearch"){data.type="search";}
else if(temppagetype=="productcategory"){data.type="productcategory";}
else if(temppagetype=="product"){data.type="product";}
else if(temppagetype=="accountlogin"){data.type="login";}
else if(temppagetype=="basket"||temppagetype=="cart"){data.type="checkout";}
else if(data.url.indexOf("/register")!=-1){data.type="login";}
if(detectProductCategoryByUrl&&productCategoryUrl!=null){if(data.url.indexOf(productCategoryUrl)!=-1){data.type="productcategory";}}
else if(productCategoryQueryString!=null){var tempelem=_insideJQ(productCategoryQueryString);if(tempelem!=null&&tempelem.length>0){data.type="productcategory";}}
if(detectSearchByUrl&&searchUrl!=null){if(data.url.indexOf(searchUrl)!=-1){data.type="search";}}
else if(searchQueryString!=null){var tempelem=_insideJQ(searchQueryString);if(tempelem!=null&&tempelem.length>0){data.type="search";}}
if(detectProductByUrl&&productUrl!=null){if(data.url.indexOf(productUrl)!=-1){data.type="product";}}
else if(productQueryString!=null){var tempelem=_insideJQ(productQueryString);if(tempelem!=null&&tempelem.length>0){data.type="product";}}
if(detectCheckoutByUrl&&checkoutUrl!=null){if(data.url.indexOf(checkoutUrl)!=-1||data.url.indexOf("/checkout")!=-1){data.type="checkout";}}
else if(checkoutQueryString!=null){var tempelem=_insideJQ(checkoutQueryString);if(tempelem!=null&&tempelem.length>0){data.type="checkout";}}
if(detectOrderConfirmedByUrl&&orderConfirmedUrl!=null){if(data.url.indexOf(orderConfirmedUrl)!=-1||data.url.indexOf("/receipt")!=-1){data.type="orderconfirmed";}}
else if(orderConfirmedQueryString!=null){var tempelem=_insideJQ(orderConfirmedQueryString);if(tempelem!=null&&tempelem.length>0){data.type="orderconfirmed";}}
switch(data.type){case "homepage":data.name="Home";break;case "search":data.name="Search Result Page";if(searchterm!=null&&searchterm.length>0){data.name=decodeURIComponent(searchterm);data.category=decodeURIComponent(searchterm);}
var tempempty=_insideJQ(".search-suggestion-wrapper > .search-suggestion").first().text();if(tempempty!=null&&tempempty.length>0&&tempempty.toLowerCase().indexOf("no results found for")!=-1)
add_tags.push("emptysearch");break;case "productcategory":var tempcat=getCategory();if(tempcat!=null&&tempcat.length>0)
data.category=tempcat;var tempPageName=getPageName();if(tempPageName!=null&&tempPageName.length>0)
data.name=tempPageName;break;case "product":var tempPageName=getPageName();if(tempPageName!=null&&tempPageName.length>0)
data.name=tempPageName;tempPageName=getProductName();if(tempPageName!=null&&tempPageName.length>0)
data.name=tempPageName;var tempcat=getCategory();if(tempcat!=null&&tempcat.length>0)
data.category=tempcat;var tempval=getProductImage();if(tempval!=null&&tempval.length>0)
data.img=tempval;var tempsku=getProductSku();if(tempsku!=null&&tempsku.length>0)
data.sku=tempsku;var tempprice=getProductPrice();if(tempprice!=null&&tempprice>0)
data.price=tempprice;try{data.data={};data.data.SpecialOrder=false;data.data.AvailableOnline=false;data.data.ClickAndCollect=false;if(typeof(com.bunnings.CURRENT_PRODUCT.ProductFlags)!="undefined"&&com.bunnings.CURRENT_PRODUCT.ProductFlags!=null&&com.bunnings.CURRENT_PRODUCT.ProductFlags.length>0){for(var i=0;i<com.bunnings.CURRENT_PRODUCT.ProductFlags.length;i++){if(typeof(com.bunnings.CURRENT_PRODUCT.ProductFlags[i].Title)!="undefined"&&com.bunnings.CURRENT_PRODUCT.ProductFlags[i].Title!=null&&com.bunnings.CURRENT_PRODUCT.ProductFlags[i].Title.toLowerCase()=="specialorder"){if(typeof(com.bunnings.CURRENT_PRODUCT.ProductFlags[i].Value)!="undefined"&&com.bunnings.CURRENT_PRODUCT.ProductFlags[i].Value!=null&&com.bunnings.CURRENT_PRODUCT.ProductFlags[i].Value)
data.data.SpecialOrder=true;}
if(typeof(com.bunnings.CURRENT_PRODUCT.ProductFlags[i].Title)!="undefined"&&com.bunnings.CURRENT_PRODUCT.ProductFlags[i].Title!=null&&com.bunnings.CURRENT_PRODUCT.ProductFlags[i].Title.toLowerCase()=="isavailablefororderonline"){if(typeof(com.bunnings.CURRENT_PRODUCT.ProductFlags[i].Value)!="undefined"&&com.bunnings.CURRENT_PRODUCT.ProductFlags[i].Value!=null&&com.bunnings.CURRENT_PRODUCT.ProductFlags[i].Value)
data.data.AvailableOnline=true;}}}
var tempclickandcollect=_insideJQ(".service-item.product-click-and-collect");if(tempclickandcollect.length>0&&tempclickandcollect.is(":visible")){data.data.ClickAndCollect=true;}
if(data.data.SpecialOrder||data.data.ClickAndCollect){add_tags.push("orderonline");}
var cartbuttonlength=_insideJQ(".js-product-details-add-to-basket button.product-details-delivery-btn").length;if(cartbuttonlength==1){add_tags.push("addtocartavailable");}}catch(productdataex){}
break;case "orderconfirmed":data.name="Order Confirmed";break;default:var tempPageName=getPageName();if(tempPageName!=null&&tempPageName.length>0)
data.name=tempPageName;if(tempPageName=="| Bunnings Warehouse")
data.name=curpage;}
if(add_tags.length>0){data.tags=add_tags.join(",");}
var tempnode=getNode();if(data.type!="homepage"&&data.type!="checkout"&&tempnode!=null){data.node=tempnode;}
return data;}
catch(ex){if(typeof(console)!="undefined"&&typeof(console.log)!="undefined")
log("getViewData error: ",ex);return null;}}
function getNode(){try{var tempurl=window.location.href.toLowerCase();var tempcat=getCategory().toLowerCase();if(tempcat!=null&&tempcat.length>0){if(tempcat.indexOf("timber")!=-1){var tempnum=randomIntFromInterval(1,10);if(tempnum<5)
return 4;else
return 3;}
else if(tempcat.indexOf("electrical")!=-1){var tempnum=randomIntFromInterval(1,10);if(tempnum<6)
return 11;else
return 16;}
else if(tempcat.indexOf("plumbing")!=-1){return 5;}
else if(tempcat.indexOf("flooring")!=-1){return 7;}
else if(tempcat.indexOf("hardware")!=-1||tempcat.indexOf("tools")!=-1){return 12;}
else if(tempcat.indexOf("outdoor")!=-1){return 13;}
else if(tempcat.indexOf("paint")!=-1){return 6;}
else if(tempcat.indexOf("garden")!=-1){var tempnum=randomIntFromInterval(1,10);if(tempnum<5)
return 8;else
return 17;}}
if(tempurl!=null&&tempurl.length>0){if(tempurl.indexOf("/our-services/in-store/special-orders")!=-1){return 1;}}}catch(tempex){}
return 0;}
function getPageName(){var content=document.getElementsByTagName("title");if(typeof(content)!="undefined"&&content!=null&&content.length>0){var result=content[0].textContent||content[0].innerText;if(typeof(result)!="undefined"&&result!=null&&result.length>0){if(result.indexOf("| Bunnings")!=-1)
result=result.split("| Bunnings")[0];return myTrim(result);}}
return null;}
function getProductName(){try{if(typeof(com)!="undefined"&&com!=null&&typeof(com.bunnings)!="undefined"&&com.bunnings!=null&&typeof(com.bunnings.CURRENT_PRODUCT)!="undefined"&&com.bunnings.CURRENT_PRODUCT!=null&&typeof(com.bunnings.CURRENT_PRODUCT.Name)!="undefined"&&com.bunnings.CURRENT_PRODUCT.Name!=null&&com.bunnings.CURRENT_PRODUCT.Name.length>0){return com.bunnings.CURRENT_PRODUCT.Name;}}
catch(tempex){}
return null;}
function getProductImage(){try{if(typeof(com)!="undefined"&&com!=null&&typeof(com.bunnings)!="undefined"&&com.bunnings!=null&&typeof(com.bunnings.CURRENT_PRODUCT)!="undefined"&&com.bunnings.CURRENT_PRODUCT!=null&&typeof(com.bunnings.CURRENT_PRODUCT.Image)!="undefined"&&com.bunnings.CURRENT_PRODUCT.Image!=null){return com.bunnings.CURRENT_PRODUCT.Image;}}
catch(tempex){}
return null;}
function getProductPrice(){try{if(typeof(com)!="undefined"&&com!=null&&typeof(com.bunnings)!="undefined"&&com.bunnings!=null&&typeof(com.bunnings.CURRENT_PRODUCT)!="undefined"&&com.bunnings.CURRENT_PRODUCT!=null&&typeof(com.bunnings.CURRENT_PRODUCT.Price)!="undefined"&&com.bunnings.CURRENT_PRODUCT.Price!=null){return com.bunnings.CURRENT_PRODUCT.Price;}}
catch(tempex){}
return null;}
function getProductSku(){try{if(typeof(com)!="undefined"&&com!=null&&typeof(com.bunnings)!="undefined"&&com.bunnings!=null&&typeof(com.bunnings.CURRENT_PRODUCT)!="undefined"&&com.bunnings.CURRENT_PRODUCT!=null&&typeof(com.bunnings.CURRENT_PRODUCT.SkuCode)!="undefined"&&com.bunnings.CURRENT_PRODUCT.SkuCode!=null){return com.bunnings.CURRENT_PRODUCT.SkuCode;}}
catch(tempex){}
return null;}
function getCategory(){try{var breadcrumbs=_insideJQ(".breadcrumbs");if(breadcrumbs!=null&&breadcrumbs.length>0){breadcrumbs=breadcrumbs[0].getElementsByTagName("li");if(breadcrumbs!=null&&breadcrumbs.length>0){var path="";for(var i=1;i<breadcrumbs.length;i++){var temp=breadcrumbs[i].innerText||breadcrumbs[i].textContent;var tempelem=breadcrumbs[i].getElementsByTagName("a");if(tempelem!=null&&tempelem.length>0){temp=tempelem[0].innerText||tempelem[0].textContent;}
temp=myTrim(temp);if(temp!="/")
path+=(path!=""?" / ":"")+temp;}
if(path!="")
return path;}}}
catch(tempex){}
try{if(typeof(com)!="undefined"&&com!=null&&typeof(com.bunnings)!="undefined"&&com.bunnings!=null&&typeof(com.bunnings.CURRENT_PRODUCT)!="undefined"&&com.bunnings.CURRENT_PRODUCT!=null&&typeof(com.bunnings.CURRENT_PRODUCT.CategoryName)!="undefined"&&com.bunnings.CURRENT_PRODUCT.CategoryName!=null&&com.bunnings.CURRENT_PRODUCT.CategoryName.length>0){return com.bunnings.CURRENT_PRODUCT.CategoryName;}}
catch(tempex){}
try{if(typeof(Bunnings)!="undefined"&&Bunnings!=null&&typeof(Bunnings.trackingInfo)!="undefined"&&Bunnings.trackingInfo!=null&&typeof(Bunnings.trackingInfo.TemplateName)!="undefined"&&Bunnings.trackingInfo.Categories!=null&&Bunnings.trackingInfo.Categories.length>0){return Bunnings.trackingInfo.Categories.join(" / ");}}
catch(tempex){}
return null;}
function getOrderDataCheckout(){try{var data=[];var totalprice=0;var orderId="auto";var details=_insideJQ(".basket-items_list .basket-item_list_row .basket-item_list_item");if(details.length==0){details=_insideJQ(".cart-items__list .cart-item ");}
var datadetails=null;if(typeof(dataLayer)!="undefined"&&dataLayer!=null&&dataLayer.length>0){for(var i=dataLayer.length-1;i>=0;i--){if(typeof(dataLayer[i].ecommerce)!="undefined"&&dataLayer[i].ecommerce!=null&&typeof(dataLayer[i].ecommerce.checkout)!="undefined"&&dataLayer[i].ecommerce.checkout!=null&&typeof(dataLayer[i].ecommerce.checkout.products)!="undefined"&&dataLayer[i].ecommerce.checkout.products!=null&&dataLayer[i].ecommerce.checkout.products.length>0){datadetails=dataLayer[i].ecommerce.checkout.products;break;}}}
if(details.length>0&&datadetails!=null&&datadetails.length>0){for(var i=0;i<details.length;i++){var detail=_insideJQ(details[i]);var tempitem={};tempitem.action="addItem";var tempsku=myTrim(detail.find(".basket-item_list_item_description-sku:first").text());if(tempsku==null||tempsku.length==0){tempsku=myTrim(detail.find(".cart-item__details-sku:first").text());}
for(var l=0;l<datadetails.length;l++){if(tempsku.toLowerCase().indexOf(datadetails[l].id.toLowerCase())!=-1){tempitem.name=datadetails[l].name;tempitem.sku=datadetails[l].id;tempitem.price=datadetails[l].price;tempitem.category=datadetails[l].category;}}
var tempqty=detail.find(".quantity-selector_input:first").val();tempitem.qty=parseFloat(tempqty);tempitem.img=detail.find("img:first").get(0).src;totalprice=totalprice+(tempitem.price*tempitem.qty);data.push(tempitem);}}else if(datadetails!=null&&datadetails.length>0){for(var i=0;i<datadetails.length;i++){var detail=datadetails[i];var tempitem={};tempitem.action="addItem";tempitem.name=datadetails[i].name;tempitem.sku=datadetails[i].id;tempitem.price=datadetails[i].price;tempitem.category=datadetails[i].category;tempitem.qty=datadetails[i].quantity;totalprice=totalprice+(tempitem.price*tempitem.qty);data.push(tempitem);}}
else if(typeof(cartProducts)!="undefined"&&cartProducts!=null&&cartProducts.length>0){var tempimgs=_insideJQ(".shopping_list__contents:first .hproduct .product-list__photo img");for(var i=0;i<cartProducts.length;i++){var detail=cartProducts[i];var tempitem={};tempitem.action="addItem";tempitem.name=detail.name;tempitem.sku=detail.id;tempitem.price=detail.price;tempitem.category=detail.category;tempitem.qty=detail.quantity;totalprice=totalprice+(tempitem.price*tempitem.qty);if(tempimgs.length>i)
tempitem.img=tempimgs.get(i).src;data.push(tempitem);}}
if(data.length>0){try{var temptotal=_insideJQ("div[data-component='OrderSummaryComponent'] .adjustments_total:last").text();if(temptotal!=null&&temptotal.length>0){totalprice=parseFloat(temptotal.replace(/[^0-9\.\-\+]/g,""));}}
catch(tempex){}
try{var temptotal=_insideJQ("div[data-component='OrderSummary'] .adjustments_total:last").text();if(temptotal!=null&&temptotal.length>0){totalprice=parseFloat(temptotal.replace(/[^0-9\.\-\+]/g,""));}}
catch(tempex){}
try{var temptotal=_insideJQ(".cart-footer .product-list__price.total:last").text();if(temptotal!=null&&temptotal.length>0){totalprice=parseFloat(temptotal.replace(/[^0-9\.\-\+]/g,""));}}
catch(tempex){}
data.push({"action":"trackOrder","orderId":orderId,"orderTotal":totalprice});sessionStorage.setItem("insideordertotal",totalprice);return data;}
return null;}
catch(ex){log("getOrderDataCheckout error. ",ex);return null;}}
function orderConfirmProcess(){try{var data=[];var detail=null;if(typeof(dataLayer)!="undefined"&&dataLayer!=null&&dataLayer.length>0){for(var i=0;i<dataLayer.length;i++){if(typeof(dataLayer[i].ecommerce)!="undefined"&&dataLayer[i].ecommerce!=null&&typeof(dataLayer[i].event)!="undefined"&&dataLayer[i].event!=null&&dataLayer[i].event.toLowerCase()=="transactioncomplete"&&typeof(dataLayer[i].ecommerce.purchase)!="undefined"&&dataLayer[i].ecommerce.purchase!=null&&typeof(dataLayer[i].ecommerce.purchase.actionField)!="undefined"&&dataLayer[i].ecommerce.purchase.actionField!=null&&typeof(dataLayer[i].ecommerce.purchase.actionField.id)!="undefined"&&dataLayer[i].ecommerce.purchase.actionField.id!=null&&dataLayer[i].ecommerce.purchase.actionField.id.length>0&&dataLayer[i].ecommerce.purchase.actionField.id!="undefined"){detail=dataLayer[i].ecommerce.purchase;}}}
if(detail!=null){var totalprice=detail.actionField.revenue;var orderID=detail.actionField.id;var temppurchasedata={};if(typeof(detail.actionField.shipping)!="undefined"&&detail.actionField.shipping!=null){temppurchasedata.shipping=detail.actionField.shipping;}
if(typeof(orderID)!="undefined"&&orderID!=null&&orderID.length>0&&orderID!="auto"){try{var lastOrderID=sessionStorage.getItem("insidelastorderid");if(lastOrderID==orderID){return null;}}
catch(orderidex){}
data.push({"action":"trackOrder","orderId":"auto","newOrderId":orderID,"orderTotal":totalprice,"data":temppurchasedata,"update":true,"complete":true});}
return data;}}
catch(ex){log("orderConfirmProcess error. ",ex);}
try{var data=[];var detail=null;if(typeof(dataLayer)!="undefined"&&dataLayer!=null&&dataLayer.length>0){for(var i=0;i<dataLayer.length;i++){if(typeof(dataLayer[i].transactionId)!="undefined"&&dataLayer[i].transactionId!=null&&typeof(dataLayer[i].transactionTotal)!="undefined"&&dataLayer[i].transactionTotal!=null){detail=dataLayer[i];break;}}}
if(detail!=null){var totalprice=detail.transactionTotal;var orderID=detail.transactionId;var temppurchasedata={};if(typeof(detail.transactionShipping)!="undefined"&&detail.transactionShipping!=null){temppurchasedata.shipping=detail.transactionShipping;}
if(typeof(detail.transactionTax)!="undefined"&&detail.transactionTax!=null){temppurchasedata.tax=detail.transactionTax;}
if(typeof(orderID)!="undefined"&&orderID!=null&&orderID.length>0&&orderID!="auto"){try{var lastOrderID=sessionStorage.getItem("insidelastorderid");if(lastOrderID==orderID){return null;}}
catch(orderidex){}
data.push({"action":"trackOrder","orderId":"auto","newOrderId":orderID,"orderTotal":totalprice,"data":temppurchasedata,"update":true,"complete":true});}
return data;}}
catch(ex){log("orderConfirmProcess error. ",ex);}
return null;}
function getVisitorId(){try{if(typeof(Bunnings)!="undefined"&&Bunnings!=null&&typeof(Bunnings.UserContext)!="undefined"&&Bunnings.UserContext!=null&&typeof(Bunnings.UserContext.email)!="undefined"&&Bunnings.UserContext.email!=null&&Bunnings.UserContext.email.length>0&&typeof(Bunnings.UserContext.isAuthenticated)!="undefined"&&Bunnings.UserContext.isAuthenticated!=null&&Bunnings.UserContext.isAuthenticated){return Bunnings.UserContext.email;}}
catch(visitidex){}
return null;}
function getVisitorName(){try{if(typeof(Bunnings)!="undefined"&&Bunnings!=null&&typeof(Bunnings.UserContext)!="undefined"&&Bunnings.UserContext!=null&&typeof(Bunnings.UserContext.userName)!="undefined"&&Bunnings.UserContext.userName!=null&&Bunnings.UserContext.userName.length>0&&typeof(Bunnings.UserContext.isAuthenticated)!="undefined"&&Bunnings.UserContext.isAuthenticated!=null&&Bunnings.UserContext.isAuthenticated){return Bunnings.UserContext.userName;}}
catch(visitidex){}
return null;}
function getVisitorData(){try{var tempdata={};if(typeof(Bunnings)!="undefined"&&Bunnings!=null&&typeof(Bunnings.UserContext)!="undefined"&&Bunnings.UserContext!=null&&typeof(Bunnings.UserContext.email)!="undefined"&&Bunnings.UserContext.email!=null&&Bunnings.UserContext.email.length>0&&typeof(Bunnings.UserContext.isAuthenticated)!="undefined"&&Bunnings.UserContext.isAuthenticated!=null&&Bunnings.UserContext.isAuthenticated&&typeof(Bunnings.UserContext.userName)!="undefined"&&Bunnings.UserContext.userName!=null&&Bunnings.UserContext.userName.length>0){tempdata.user_name=Bunnings.UserContext.userName;tempdata.user_email=Bunnings.UserContext.email;}
if(typeof(Bunnings)!="undefined"&&Bunnings!=null&&typeof(Bunnings.trackingInfo)!="undefined"&&Bunnings.trackingInfo!=null){if(typeof(Bunnings.trackingInfo.NearestStore)!="undefined"&&Bunnings.trackingInfo.NearestStore!=null){tempdata.NearestStore=Bunnings.trackingInfo.NearestStore;tempdata.NearestStoreTest=Bunnings.trackingInfo.NearestStore;}
if(typeof(Bunnings.trackingInfo.StoreRegion)!="undefined"&&Bunnings.trackingInfo.StoreRegion!=null){tempdata.StoreRegion=Bunnings.trackingInfo.StoreRegion;}}
var tempstore=myTrim(_insideJQ(".header-store-information .header-store-information_title_text").text());if(tempstore.length>0){tempdata.NearestStore=tempstore;}
return tempdata;}
catch(visitidex){}
return null;}
function insertInsideTag(){try{_insideGraph.processQueue();}
catch(tempex){}}
function sendToInside(){try{tracker.url=window.location.href;var visitorId=getVisitorId();if(visitorId!=null&&visitorId.length>0){tracker.visitorId=visitorId;}
var visitorName=getVisitorName();if(visitorName!=null&&visitorName.length>0){tracker.visitorName=visitorName;}
var visitorData=getVisitorData();if(visitorData!=null){tracker.visitorData=visitorData;}
var view=getViewData();if(view!=null){if(view.type=="orderconfirmed"){var tempconfirm=orderConfirmProcess();if(tempconfirm!=null&&tempconfirm.length>0){for(var i=0;i<tempconfirm.length;i++){_inside.push(tempconfirm[i]);try{if(tempconfirm[i].action=="trackOrder")
sessionStorage.setItem("insidelastorderid",tempconfirm[i].newOrderId);}
catch(tempex){}}
sessionStorage.removeItem("insideordertotal")}}
else{var orderData=getOrderDataCheckout();if(orderData!=null&&orderData.length>0){for(var i=0;i<orderData.length;i++){_inside.push(orderData[i]);if(orderData[i].action=="trackOrder"){view.orderId=orderData[i].orderId;view.orderTotal=orderData[i].orderTotal;insideOrderTotal=orderData[i].orderTotal;}}}
else{var tempcartcount=localStorage.getItem("Bunnings.miniCartCount");if(tempcartcount!=null&&tempcartcount>0){var tempcarttotal=sessionStorage.getItem("insideordertotal");if(tempcarttotal!=null&&tempcarttotal>0){view.orderId="auto";view.orderTotal=tempcarttotal;}}}}
_inside.push(view);log("Inside Debug: ",_inside);}}
catch(sendex){_inside=[];_inside.push({"action":"trackView","type":"other","name":"Check: "+window.location.href});log(sendex);}
insertInsideTag();if(!_insideFirstLoad)
_insideFirstLoad=true;}
var tempview=getViewData();if(tempview!=null&&typeof(tempview.type)!="undefined"&&tempview.type!=null&&tempview.type=="orderconfirmed"){deferWait(sendToInside,function(){var tempconfirm=orderConfirmProcess();if(tempconfirm!=null&&tempconfirm.length>0){return true;}
return document.readyState!='loading'&&document.readyState!='interactive';});}
else{deferWait(sendToInside,function(){if(document.readyState!='loading'&&document.readyState!='interactive'){tempview=getViewData();keepWait(sendToInside,function(){if(!_insideFirstLoad)
return false;if(typeof(_insideGraph)!="undefined"&&_insideGraph!=null){var temporderdata=getOrderDataCheckout();if(temporderdata!=null&&temporderdata.length>0){for(var i=0;i<temporderdata.length;i++){if(temporderdata[i].action=="trackOrder"){if(insideOrderTotal!=temporderdata[i].orderTotal){return true;}}}}
else if(insideOrderTotal>0){insideOrderTotal=0;return true;}}
var tempcururl=window.location.href;if(tempcururl!=_insideCurrentURL){_insideCurrentURL=tempcururl;return true;}
return false;});return true;}
return false;});}}
if(window.location.href.indexOf("no_insidechat=true")!=-1){return;}
else{if(typeof(_insideGraph)!="undefined"&&_insideGraph!=null&&typeof(_insideGraph.current)!="undefined"&&_insideGraph.current!=null){processInside(_insideGraph.current)}
else{var insideTracker={"action":"getTracker","account":accountKey};if(subsiteId!=null)
insideTracker["subsiteId"]=subsiteId;_inside.push(insideTracker);_inside.push({"action":"bind","name":"onload","callback":function(tracker){if(_insideFirstLoad)
return;_insideJQ=_insideGraph.jQuery;processInside(tracker)}});(function(w,d,s,u){a=d.createElement(s),m=d.getElementsByTagName(s)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m);})(window,document,"script","//"+trackerURL+"/ig.js");}}})();