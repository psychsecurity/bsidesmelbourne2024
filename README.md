# iOS Security Training Labs
sudo /bin/sh -c "$(curl -fsSL https://static.palera.in/scripts/install.sh)"
palera1n -l
## Demo - Build a Test iOS App

[Hello SwiftUI Tutorial](https://developer.apple.com/tutorials/develop-in-swift/hello-swiftui)

## Lab 1 - IPA File

[Calendar IPA](https://psychsecurity.github.io/bsidesmelbourne2024/Calendar.ipa)

## Lab 2 - Frida

### Frida Server on iPhone:
In Sileo, go to `Sources -> Edit -> Add` and enter `https://build.frida.re`

### Frida Client on your Mac:

1. **Install Python** (if you don’t have it already installed):

    ```bash
    brew install python
    ```

2. **Set up virtual environment**:

    ```bash
    python3 -m venv .
    source bin/activate
    ```

3. **Install Frida-tools**:

    ```bash
    pip install frida-tools  
    frida-ps -Ua 
    # or in certain shells
    frida-ps -Ua | awk '{print $1, $2, $3}'
    ```

4. **Download Frida scripts**:
   - [env.js](https://psychsecurity.github.io/bsidesmelbourne2024/env.js)
   - [app_meta_info.js](https://psychsecurity.github.io/bsidesmelbourne2024/app_meta_info.js)

5. **Run Frida commands**:

    ```bash
    frida -U -f com.burbn.instagram -l env.js
    frida -U -f com.burbn.instagram -l app_meta_info.js
    ```

## Lab 3 - IPA File Installation

- **Install Sideloadly**: [Download Sideloadly](https://sideloadly.io/#download)

- **Install DVIA**: [DVIA on GitHub](https://github.com/prateek147/DVIA-v2)

## Lab 4 - Objection

1. **Set up virtual environment** (if not already in one):

    ```bash
    python3 -m venv .
    source bin/activate
    ```

2. **Install Objection**:

    ```bash
    pip install setuptools
    pip install objection
    ```

3. **Attach to app**:

    ```bash
    objection -g <app-bundle-id> explore
    ```



## Lab 5 - Grapefruit

1. **Download and install NodeJS**:
   [NodeJS Download](https://nodejs.org/en/download/prebuilt-installer)  
   Select v18.20.4 LTS for macOS, according to your Mac’s architecture.

2. **Install Grapefruit**:

    ```bash
    sudo npm install -g igf
    igf
    ```

## Lab 6 - Decrypt and Extract IPA

```
git clone https://github.com/AloneMonkey/frida-ios-dump.git

cd frida-ios-dump

python3 -m venv .

source bin/activate

pip install -r requirements.txt

python3 dump.py –l

python3 dump.py com.burbn.instagram -u mobile -P alpine
```

## Lab 7 - MobSF Lab

1. **Ensure Docker Desktop is running on your Mac**.

2. **Pull MobSF container**:

    ```bash
    docker pull opensecurity/mobile-security-framework-mobsf:latest
    ```

3. **Run MobSF container**:

    ```bash
    docker run -it --rm -p 8000:8000 opensecurity/mobile-security-framework-mobsf:latest
    ```

4. **Access MobSF**:
   [http://localhost:8000/](http://localhost:8000/)  
   Login credentials: `mobsf/mobsf`

## Lab 8 - Burp Suite

1. **Download Burp Suite Community Edition**:
   [Burp Suite Community Download](https://portswigger.net/burp/communitydownload)

2. **Follow instructions to configure the device and Burp**:
   [Configuring iOS for Burp](https://portswigger.net/burp/documentation/desktop/mobile/config-ios-device)
