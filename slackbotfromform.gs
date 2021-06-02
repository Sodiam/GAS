/*
    Created Day: 06/02/2021
    Author: Sodiam
*/

function sendMessageToSlack(e) {
  const responses = e.response.getItemResponses();
  var url = "URL"; // Input slack API's URL as String
  var payload = {
    "blocks": [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "message" // You can specify the sending message as String
        }
      }
    ]
  };
  var params = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(payload)
  };

  UrlFetchApp.fetch(url, params);
}

//
// -*- REFERENCES -*-
// https://www.asobou.co.jp/blog/bussiness/gas
// https://www.yukibnb.com/entry/form_responses#%E7%B0%A1%E5%8D%98Google%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%81%AE%E8%B3%AA%E5%95%8F%E3%81%A8%E5%9B%9E%E7%AD%94%E3%82%92GAS%E3%81%A7%E5%8F%96%E5%BE%97%E3%81%97%E3%82%88%E3%81%86
// 
