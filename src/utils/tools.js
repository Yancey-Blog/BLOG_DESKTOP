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
