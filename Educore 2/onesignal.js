export function initOneSignal() {
  window.OneSignal = window.OneSignal || [];
  OneSignal.push(function () {
    OneSignal.init({
      appId: "62bcddec-09ef-4689-8981-db7a57bbde8c",
      allowLocalhostAsSecureOrigin: true,
      promptOptions: {
        slidedown: {
          enabled: true,
          autoPrompt: true,
          timeDelay: 5,
          pageViews: 1
        }
      }
    });
    console.log('OneSignal initialized');
  });
}