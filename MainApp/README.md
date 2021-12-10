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

Maps package
https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md

Connect PHYSICAL ANDROID device
lsusb
echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="12d1", MODE="0666", GROUP="plugdev"' | sudo tee /etc/udev/rules.d/51-android-usb.rules
adb devices

RUN Tests USING Jest=>
Remove predefined file=>__tests__/App.test.js
Refer this site for further steps=>https://jestjs.io/docs/getting-started

SNAPSHOT TEST=>
They are a very useful tool whenever you want to make sure your UI does not change unexpectedly.
A typical snapshot test case renders a UI component, takes a sapshot , then compares it to a reference snapshot file stored alongside the test.
The test will fail if the two snapshots do not match.
jest -u in package.json file will allow updation of created snapshots even with UI differences and Change in UI will not effect the passing of test else it will compare with already created snapshot and fails the test even if there is only change in UI

https://reactnative.dev/docs/signed-apk-android=>publishing app in google playstore
cd android
./gradlew bundleRelease=>.abb file for playstore
./gradlew assembleRelease=>for apk