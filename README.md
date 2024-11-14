
## Demo - Build a test iOS App: 

https://developer.apple.com/tutorials/develop-in-swift/hello-swiftui

## Lab1 - IPA file

https://psychsecurity.github.io/bsidesmelbourne2024/Calendar.ipa

## Lab2 - Frida

Frida server on iPhone:
In Sileo > Sources -> Edit -> Add https://build.frida.re

Frida client on your Mac:

Install python if you don’t have it already installed:

```
brew install python
```

Set virtual env:

```
python3 -m venv .

source bin/activate
```

Install Frida-tools:
```
pip install frida-tools  

frida-ps -Ua 

or 

frida-ps -Ua | awk '{print $1, $2, $3}' <!-- in other shells -->
```

Download: 
[https://psychsecurity.github.io/bsidesmelbourne2024/env.js](https://psychsecurity.github.io/bsidesmelbourne2024/env.js)

https://psychsecurity.github.io/bsidesmelbourne2024/app_meta_info.js

```

frida -U -f com.burbn.instagram -l env.js

frida -U -f com.burbn.instagram -l app_meta_info.js
```

## Lab3 - IPA file installation

Install sideloadly

https://sideloadly.io/#download

DVIA

https://github.com/prateek147/DVIA-v2


## Lab 4 - Objection

Set virtual env (if not in one):

```
python3 -m venv .

source bin/activate
```

Install objection:
```
pip install setuptools
pip install objection
```


Attach to app:

```
objection -g <app-bundle-id> explore
```

## Lab5 - Grapefruit

Download and install NodeJS:

https://nodejs.org/en/download/prebuilt-installer

select v18.20.4 LTS for MacOS – and select your Mac’s arch

`sudo npm install –g igf`

`igf`

## Lab 6 - MobSF Lab

Ensure Docker desktop is running on your Mac

Pull mobsf container:

`docker pull opensecurity/mobile-security-framework-mobsf:latest`

Run mobsf container:

`docker run -it --rm -p 8000:8000 opensecurity/mobile-security-framework-mobsf:latest`

http://localhost:8000/

Login with `mobsf/mobsf`


## Lab 7 - Burp Suite

Download free community edition:

https://portswigger.net/burp/communitydownload

Select your Mac arch and install

Follow the instructions below to configure the device and Burp

https://portswigger.net/burp/documentation/desktop/mobile/config-ios-device




