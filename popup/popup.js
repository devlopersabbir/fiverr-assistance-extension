const foobar = document.getElementById("foobar");

const getDataFromStorage = () => {
  chrome.storage.sync.get(["buyerDetails"], (res) => {
    const resData = res?.buyerDetails ?? false;
    if (resData) {
      foobar.checked = true;

      chrome.action.setBadgeText({
        text: "",
      });
    } else {
      foobar.checked = false;

      chrome.action.setBadgeText({
        text: "OFF",
      });
    }
  });
};

foobar.addEventListener("change", (e) => {
  const toggleValue = e.target.checked;

  chrome.storage.sync.set(
    {
      buyerDetails: toggleValue,
    },
    () => {
      console.log(`our seted value ${toggleValue}`);
    }
  );
});

// for alerts
const alert = document.getElementById("alert");

const getAlertDataFromStorage = () => {
  chrome.storage.sync.get(["alertOn", "buyerDetails"], (response) => {
    const resData = response?.alertOn ?? false;
    if (resData) {
      alert.checked = true;

      chrome.action.setBadgeText({
        text: "",
      });
    } else {
      alert.checked = false;

      chrome.action.setBadgeText({
        text: "OFF",
      });
    }
  });
};

alert.addEventListener("change", (e) => {
  const toggleValue = e.target.checked;

  chrome.storage.sync.set(
    {
      alertOn: toggleValue,
    },
    () => console.log(`alert toggle valu ${toggleValue}`)
  );
});

// run all function
setInterval(() => {
  getDataFromStorage();
  getAlertDataFromStorage();
}, 50);
