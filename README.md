React Native test app
==============

Installing Dependencies
------------------------
You will need Node.js, Watchman, the React Native command line interface, and Xcode.

* brew install node
* brew install watchman
* npm install -g react-native-cli

Run project in iOS Simulator
----------------------------
* git clone https://gecgithub01.walmart.com/services/catdev_mobile.git
* cd sc
* react-native run-ios

Debug with Chrome
-----------------
Go to http://localhost:8081/debugger-ui and open dev tools

Troubleshooting
----------------
If you get this error while installing watchman
Error: Failed to download resource "pcre"
Download failed: https://sourceforge.mirrorservice.org/p/pc/pcre/pcre/8.38/pcre-8.38.tar.bz2

Run the following commands in sequence:
 * brew update
 * brew doctor
 * brew install watchman
