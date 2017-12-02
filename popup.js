function httpGet(theUrl)
{
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
xmlHttp.send( null );
return xmlHttp.responseText;
}
document.getElementById('BTCUSDT').innerHTML = math.round(JSON.parse(httpGet('https://bittrex.com/api/v1.1/public/getticker?market=USDT-BTC'))['result']['Last'],2);
document.getElementById('ETHUSDT').innerHTML = math.round(JSON.parse(httpGet('https://bittrex.com/api/v1.1/public/getticker?market=USDT-ETH'))['result']['Last'],2);
document.getElementById('XRPUSDT').innerHTML = math.round(JSON.parse(httpGet('https://bittrex.com/api/v1.1/public/getticker?market=USDT-XRP'))['result']['Last'],2);
document.getElementById('LTCUSDT').innerHTML = math.round(JSON.parse(httpGet('https://bittrex.com/api/v1.1/public/getticker?market=USDT-LTC'))['result']['Last'],2);
document.getElementById('NEOUSDT').innerHTML = math.round(JSON.parse(httpGet('https://bittrex.com/api/v1.1/public/getticker?market=USDT-NEO'))['result']['Last'],2);
document.getElementById('XMRUSDT').innerHTML = math.round(JSON.parse(httpGet('https://bittrex.com/api/v1.1/public/getticker?market=USDT-XMR'))['result']['Last'],2);
