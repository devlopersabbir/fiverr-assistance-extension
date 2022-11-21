// for alerts
chrome.storage.sync.get(["buyerDetails"], (res) => {
  const isTrue = res?.buyerDetails;

  if (isTrue) {
    setTimeout(() => {
      chrome.action.setBadgeText({
        text: "1",
      });
    }, 1000);
  }
});
