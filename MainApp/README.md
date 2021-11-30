# ProgrammingWithMashFullReactNativeCourse
# You can run shortcut commands to start metro and run app by referring to scripts in package.json file
npm start=> automatically runs npm react-native start
npx react-native run-android=> to start application

Vector Icons setup=https://github.com/oblador/react-native-vector-icons
1)$ npm install --save react-native-vector-icons
2)Android
Option: With Gradle (recommended)
This method has the advantage of fonts being copied from this module at build time so that the fonts and JS are always in sync, making upgrades painless.

Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
run command
cd android
 ./gradlew clean
or
2)if fonrawesome icon not showing
npx react-native link
npx react-native run-android

Refer fontawesome.com

Push notification package configuration for android=> https://github.com/zo0r/react-native-push-notification