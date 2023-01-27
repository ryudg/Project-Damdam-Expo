# EXPO-damdam

- 안드로이드 스튜디오 설치 (경로 한글명x)
- 환경변수 설정
  - ANDROID_HOME, C:\Users\GR802\AppData\Local\Android\Sdk (more action > SDK manager > android SDK location)
  - JAVA_HOME, C:\Program Files\Java\jdk-19
  - PATH, C:\Program Files\Java\jdk-19\bin, C:\Program Files\nodejs\

- SDK tools emulator 
- more action > virtual device manager
- android studio create device

## install
```bash
$ npm i
$ npm install -g expo-cli
```

```json
"dependencies": {
  "expo": "~47.0.12",
  "expo-status-bar": "~1.4.2",
  "react": "18.1.0",
  "react-native": "0.70.5",
  "react-native-webview": "11.23.1"
}
```
## run
```bash
$ npm star
$ a
$ r
```

### build 
[exop](https://docs.expo.dev/eas-update/migrate-to-eas-update/#install-eas-cli) build link
```bash
$ npm install --global eas-cli
```
- EAS login(expo account login)
```bash
$ eas login
```
- create configure file  & setting build platforms
```bash
$ eas build:configure
? Would you like to automatically create an EAS project for @ryudg/my-app? >> (y)
? Which platforms would you like to configure for EAS Build? » (Android)
```
- Please edit eas.json (for apk)
```json
{
  "cli": {
    "version": ">= 3.3.2"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}
``` 
```json
{
  "cli": {
    "version": ">= 3.3.2"
  },
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "preview2": {
      "android": {
        "gradleCommand": ":app:assembleRelease"
      }
    },
    "preview3": {
      "developmentClient": true
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}

```
- Run build
  - 앱 고유 id
```bash
$ eas build --platform android
? What would you like your Android application id to be? » com.ryudg.myapp
? Generate a new Android Keystore? » (Y)
```

- expo 홈페이지 > abb 다운로드 > abb to apk
