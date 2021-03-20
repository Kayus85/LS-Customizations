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
    }
  };
  xhr.send();
}();