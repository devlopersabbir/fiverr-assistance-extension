// for buyer details
chrome.storage.sync.get(["buyerDetails"], (res) => {
  const isTrue = res?.buyerDetails;

  if (isTrue) {
    setTimeout(() => {
      const element = document.getElementsByClassName(
        "btn-standard btn-green-grad js-send-offer"
      );

      for (let i = 0; i < element.length; i++) {
        const data = element[i]?.dataset?.meta;
        const dataAsJson = JSON.parse(data);
        // console.log(dataAsJson);
        const username = dataAsJson?.username;

        // console.log(username);
        const createAngkerTag = document.createElement("a");
        createAngkerTag.innerHTML = `<br>${username}`;
        createAngkerTag.setAttribute("target", "_blank");
        createAngkerTag.setAttribute("id", "myLink");
        createAngkerTag.setAttribute(
          "href",
          `https://www.fiverr.com/${username}`
        );
        // console.log(createAngkerTag);
        document
          .getElementsByClassName("date  ")
          [i].appendChild(createAngkerTag);
      }
    }, 1500);
  }
});

// for alerts
chrome.storage.sync.get(["buyerDetails"], (res) => {
  const isTrue = res?.buyerDetails;

  if (isTrue) {
    setTimeout(() => {
      const unreadBtn = document.getElementsByClassName("unreadBtn");
      if (unreadBtn) {
        function showNotification() {
          const notification = new Notification("Fiverr new message!", {
            body: "You got a new message on Fiverr. Please check your fiverr or click me!",
            // icon: "../icon/icon.png",
            icon: "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png",
          });

          notification.onclick = (e) => {
            window.location.href = "https://www.fiverr.com/inbox";
          };
        }
        const notification = Notification.permission;

        if (notification === "granted") {
          showNotification();
          console.log("granded");
        } else if (notification !== "denied") {
          Notification.requestPermission()
            .then((permission) => {
              if (permission === "granted") {
                showNotification();
                console.log("granded");
              }
            })
            .catch((error) => console.log(error));
        }
      }
    }, 1000);
  }
});
