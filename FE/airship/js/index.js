// 86acbd31cd7c09cf30acb66d2fbedc91daa48b86:1620290614.695341
// prettier-ignore
!function (n, r, e, t, c) {
  var i, o = "Promise" in n, u = {
    then: function () { return u }, catch: function (n) {
      return n(new Error("Airship SDK Error: Unsupported browser")), u
    }
  }, s = o ? new Promise((function (n, r) { i = function (e, t) { e ? r(e) : n(t) } })) : u
    ; s._async_setup = function (n) { if (o) try { i(null, n(c)) } catch (n) { i(n) } }, n[t] = s; var a = r.createElement("script"); a.src = e, a.async = !0, a.id = "_uasdk",
      a.rel = t, r.head.appendChild(a)
}(window, document, 'https://aswpsdkeu.com/notify/v1/ua-sdk.min.js',
  'UA', {
  workerUrl:'/js/push-worker.js',
  vapidPublicKey: 'BPc0sinKTHuZA1jDIYE_61DAQWjGsUcPBrdP3Le5gEpAwnN_xJUjg63ddQUrB6hFPv7WWO_8uacMfditOgEKgfU=',
  appKey: 'JKvKkKogS2G2ZSIn9zCNqQ',
  token: 'MTpKS3ZLa0tvZ1MyRzJaU0luOXpDTnFROnRsNjRvNEtFV2V1dVMxWENKSlBsV3dVdDhXZ1BCckxYY2RiZktpdnk0MUk'
});

(function () {
  const subscribeBtn = document.getElementById('subscribe-btn');
  console.log(
    `Notifications permission for this site is currently "${Notification.permission}"`
  );
  UA.then((sdk) => {
    subscribeBtn.style.display = 'block';

    sdk.getChannel().then((channel) => {
      if (!channel.namedUser) {
        channel.namedUser.set('Fulvio-Cusimano_123xyz');
      }

      console.log('Channel ID: %s', channel.id);
      toggleSubscribeBtnText(channel.optedIn);
    });

    sdk.addEventListener('push', (ev) => {
      // ev.push is the push payload object
      console.log(ev.push);
    });

    subscribeBtn.addEventListener('click', (event) => {
      sdk.channel && sdk.channel.optedIn
        ? sdk.channel.optOut().then(() => {
            console.log('User is now opt-out');
            toggleSubscribeBtnText(sdk.channel.optedIn);
          })
        : sdk.register().then(() => {
            console.log('User is now registered');
            toggleSubscribeBtnText(sdk.channel.optedIn);
          });
    });
  });

  function toggleSubscribeBtnText(optedIn) {
    subscribeBtn.innerText = optedIn
      ? 'Disable PUSH notification'
      : 'Enable PUSH notification';
  }
})();
