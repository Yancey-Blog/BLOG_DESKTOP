export function setCopy() {
  const bodyElement = document.getElementsByTagName('body')[0];
  const originalContent = window.getSelection();
  const titleContent = `<br/><br/>Article Name: ${document.getElementsByTagName('h1')[0].innerHTML.split(' ')[0]}`;
  const linkContent = `<br/>Article URL: ${window.location.href}`;
  const copyrightContent = '<br/>License: Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)';
  const finalContent = originalContent + titleContent + linkContent + copyrightContent;
  const clipDiv = document.createElement('div');
  clipDiv.style.position = 'absolute';
  clipDiv.style.left = '-9999px';
  bodyElement.appendChild(clipDiv);
  clipDiv.innerHTML = finalContent;
  originalContent.selectAllChildren(clipDiv);
  window.setTimeout(() => {
    bodyElement.removeChild(clipDiv);
  }, 0);
}

export function monthToEN(monthNum) {
  const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return monthList[monthNum - 1];
}

export function checkWebp() {
  return (document.createElement('canvas')
    .toDataURL('image/webp')
    .indexOf('data:image/webp') === 0);
}

export function initLivere() {
  (function (d, s) {
    let j,
      e = d.getElementsByTagName(s)[0];

    if (typeof LivereTower === 'function') {
      return;
    }

    j = d.createElement(s);
    j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
    j.async = true;

    e.parentNode.insertBefore(j, e);
  }(document, 'script'));
}

export function shareToFB() {
  (function (d, s, id) {
    let js;
    const fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}

export const aliOSS = 'https://yancey-assets.oss-cn-beijing.aliyuncs.com';
export const webp = '?x-oss-process=image/format,webp';
