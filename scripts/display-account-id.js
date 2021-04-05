! function () {
  let domain = window.location.host;
  let accountID = document.querySelector("#help_account_id > var").innerHTML;
  let apiEndpoint = 'Shop';
  const xhr = new XMLHttpRequest;
  xhr.open("GET", `https://${domain}/API/Account/${accountID}/${apiEndpoint}.json`, true)
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      let a = JSON.parse(this.responseText);
      console.log(a.Shop[0].name);
      console.log('also i\'m a monkey');
    }
  };
  xhr.send();
  let div_wrap = document.createElement('div');
  div_wrap.setAttribute('style', 'position: fixed!important;z-index: 9999999!important;background-color: rgba(0,0,0,0.6)!important;top: 0!important;bottom: 0!important;left: 0!important;right: 0!important;height: 100vh!important;');
}();