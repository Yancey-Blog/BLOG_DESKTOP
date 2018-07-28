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

export function f() {
  // todo
}
