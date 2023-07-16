let numberOfNotification: number;
const checkNotification = async () => {
  fetch("https://www.fiverr.com/notification_items/preview/0")
    .then((res) => res.json())
    .then((data) => {
      const notiCount = data?.unread_notifications_count;

      if (notiCount > 0) {
        numberOfNotification += notiCount
      }
      console.log("noti", notiCount)

    })
    .catch((error) => {
      console.log(error);
    });
};


const checkConverstationNotification = async () => {
  fetch("https://www.fiverr.com/conversations/preview/0")
    .then((res) => res.json())
    .then(data => {
      const convCount = data?.unread_conversations_count;
      if (convCount > 0) {
        numberOfNotification += convCount
      }
      console.log("conv", convCount)
    })
    .catch(error => console.log(error))
};

chrome.alarms.create('reFetch', {
  periodInMinutes: 0.1
});

chrome.alarms.onAlarm.addListener((alarm: chrome.alarms.Alarm) => {
  if (alarm.name === "reFetch") {
    checkNotification();
    checkConverstationNotification()
  }
})


// create notification
const createNotification = () => {
  chrome.notifications.create({
    title: "Fiverr New Notification",
    message: "You got an new notification from fiverr",
    type: "basic",
    silent: false,
    iconUrl: "icon.png"
  })
}

setInterval(() => {
  if (numberOfNotification > 0) {
    createNotification();
    chrome.action.setBadgeText({
      text: `${numberOfNotification === 0 ? "" : numberOfNotification}`
    })

  } else {
    console.log('No notification!')
  }
}, 5000)

// chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
//   if (request.message.type === "playAudio") {
//     const audio = new Audio(request.audioFilePath);

//     // Play the audio
//     audio.play();

//     // Send a response to the content script
//     sendResponse('Audio played successfully.');
//   }
// })