// a bookmarklet to load script from github that can run in Lightspeed Retail
! function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/repos/Kayus85/LS-Customizations/releases", true);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      let vers = JSON.parse(xhr.responseText);
      let releaseVersion = vers[0].tag_name;
      console.log(`git version ${vers[0].tag_name}`);
      GIT_(releaseVersion);
    }
  };
  xhr.send();
}();

function GIT_(releaseVersion) {
  console.log("backoffice");
  var script_ = document.createElement('script');
  script_.src = `https://cdn.jsdelivr.net/gh/Kayus85/LS-Customizations@${releaseVersion}/display-account-id.js`;
  document.body.appendChild(script_);
};