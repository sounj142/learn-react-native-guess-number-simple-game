I. Run app on virtual device
1. Install Android Studio
2. Open Android Studio => More Actions => Virtual Device Manager =>
Create and Start an android device (only choose devices has Play Store supported)
3. After virtual android device ready, go to app root folder, run command
npm start
4. Wait app start, press (a) to load app on vitual device.

II. Run app on real device
1. On your android phone, install app "Expo Go", open it
2. Navigate to app root folder, run command
npm run phone
3. After app started, you will see a QR code. In Expo Go app on your phone, select "Scan QR Code" to scan this code. It should open app on your phone.

III. Debug
1. Run app on Android virtual device
2. On virtual device, press Ctrl+M to open menu, select "Debug Remote JS"
3. A simple website should be opened on your default browser. Press F12 to open Development Tool. Open "Sources" tab, you can find  script files and debug there.
