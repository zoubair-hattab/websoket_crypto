let market = document.getElementById('market');
let bid = document.getElementById('bid');
let ask = document.getElementById('ask');
let last_price = document.getElementById('last_price');

let market1 = document.getElementById('market1');
let bid1 = document.getElementById('bid1');
let ask1 = document.getElementById('ask1');
let last_price1 = document.getElementById('last_price1');

let market2 = document.getElementById('market2');
let bid2 = document.getElementById('bid2');
let ask2 = document.getElementById('ask2');
let last_price2 = document.getElementById('last_price2');

let tmarket;
let task;
let tbid;
let tlast_price;

let t1market;
let t1ask;
let t1bid;
let t1last_price;

let t2market;
let t2ask;
let t2bid;
let t2last_price;

let bitcoinPrice = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
bitcoinPrice.onmessage = (event) => {
  let btcspotobject = JSON.parse(event.data);
  tlast_price = parseFloat(btcspotobject.p).toFixed(2);
  last_price.innerText = "$"+tlast_price;
}
let bticoin = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@bookTicker');
bticoin.onmessage = (event) => {
    let btcspotobject = JSON.parse(event.data);
    tbid = parseFloat(btcspotobject.b).toFixed(2);
    bid.innerText = "$"+tbid;
    task = parseFloat(btcspotobject.a).toFixed(2);
    ask.innerText = "$"+task;
};
let ethereumPrice = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
ethereumPrice.onmessage = (event) => {
  let btcspotobject = JSON.parse(event.data);
  t1last_price = parseFloat(btcspotobject.p).toFixed(2);
  last_price1.innerText ="$"+t1last_price;
}
let ethereum = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@bookTicker');
ethereum.onmessage = (event) => {
    let btcspotobject = JSON.parse(event.data);
    t1bid = parseFloat(btcspotobject.b).toFixed(2);
    bid1.innerText = "$"+t1bid;
    t1ask = parseFloat(btcspotobject.a).toFixed(2);
    ask1.innerText = "$"+t1ask;
};

let binancePrice = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade');
binancePrice.onmessage = (event) => {
  let btcspotobject = JSON.parse(event.data);
  t2last_price = parseFloat(btcspotobject.p).toFixed(2);
  last_price2.innerText = "$"+t2last_price;
}
let binance = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@bookTicker');
binance.onmessage = (event) => {
    let btcspotobject = JSON.parse(event.data);
    t2bid = parseFloat(btcspotobject.b).toFixed(2);
    bid2.innerText = "$"+t2bid;
    t2ask = parseFloat(btcspotobject.a).toFixed(2);
    ask2.innerText = "$"+t2ask;
};

