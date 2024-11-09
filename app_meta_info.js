function app_meta_info(DEBUG) {
    console.log("");
    console.warn("--------------------------------");
    console.warn("|     App Meta Information     |");
    console.warn("--------------------------------");

    try {
        var infoDictionary = ObjC.classes.NSBundle.mainBundle().infoDictionary();

        // List of keys to extract from the info dictionary
        var keys = [
            { name: "Bundle Name", key: "CFBundleName" },
            { name: "Display Name", key: "CFBundleDisplayName" },
            { name: "Executable Name", key: "CFBundleExecutable" },
            { name: "Bundle Identifier", key: "CFBundleIdentifier" },
            { name: "Numeric Version", key: "CFBundleNumericVersion" },
            { name: "Short Version", key: "CFBundleShortVersionString" },
            { name: "Bundle Version", key: "CFBundleVersion" },
            { name: "Minimum OS Version", key: "MinimumOSVersion" },
        ];

        keys.forEach(function(item) {
            try {
                var value = infoDictionary.objectForKey_(item.key);
                if (value) {
                    console.log(item.name + ": " + value.toString());
                } else {
                    if (DEBUG) {
                        console.error("[!] " + item.name + " not found for key: " + item.key);
                    }
                }
            } catch (err) {
                if (DEBUG) {
                    console.error("[!] Error fetching " + item.name + ": " + err.message);
                }
            }
        });

    } catch (err) {
        if (DEBUG) {
            console.error("[!] Error accessing Info.plist: " + err.message);
        }
    }
}

// Delay the execution of the main function to give the app time to stabilize
setTimeout(function() {
    app_meta_info(true);
    // Process.resume(); // Uncomment if you need to resume the app after spawning
}, 2000);