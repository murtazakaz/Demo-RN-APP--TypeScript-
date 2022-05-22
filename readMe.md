## Deep linking:

### ios

To test deep linking ios via terminal or with browser
npx uri-scheme add demoapp --ios
npx uri-scheme open demoapp://HOME/1/100 --ios
npx uri-scheme open demoapp://NOTIF/1/100 --ios

### android

npx uri-scheme add demoapp --android

npx uri-scheme open demoapp://HOME/1/100 --android
npx uri-scheme open demoapp://NOTIF/1/100 --android
