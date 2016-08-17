var context = "selection";
var title = "Add to Calendar";
var id = chrome.contextMenus.create({"title": title, "contexts":[context],"id": "context" + context});  


function onClickHandler(info, tab) {
  var sText = info.selectionText;
  var url = "https://www.google.com/calendar/event?action=TEMPLATE&text=" + encodeURIComponent(sText);  
  window.open(url, '_blank');
  console.log('Opening Google Calendar with: "' + sText+'"');
};

chrome.contextMenus.onClicked.addListener(onClickHandler);