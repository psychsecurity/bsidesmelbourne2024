function app_env_info(DEBUG) {
    console.log("");
    console.warn("-----------------------------------");
    console.warn("|     Application Environment     |");
    console.warn("-----------------------------------");

    try {
        // Get the main bundle path
        var mainBundle = ObjC.classes.NSBundle.mainBundle();
        var mainBundlePath = mainBundle.bundlePath().toString();
        console.log("App Bundle Path    : " + mainBundlePath);

        // Get the bundle identifier
        var bundleIdentifier = mainBundle.bundleIdentifier().toString();

        // Declare variable at the beginning
        var mainBundleContainerPathIdentifier = "";

        // Define paths
        var path_prefix = "/var/mobile/Containers/Data/Application/";
        var plist_metadata = "/.com.apple.mobile_container_manager.metadata.plist";

        // Get the list of folders in the application data directory
        var fileManager = ObjC.classes.NSFileManager.defaultManager();
        var error = Memory.alloc(Process.pointerSize);
        Memory.writePointer(error, NULL);

        var folders = fileManager.contentsOfDirectoryAtPath_error_(path_prefix, error);

        if (folders) {
            var folderCount = folders.count();
            var found = false;

            for (var i = 0; i < folderCount; i++) {
                var uuid = folders.objectAtIndex_(i).toString();
                var metadataPath = path_prefix + uuid + plist_metadata;

                // Read the metadata plist
                var dict = ObjC.classes.NSDictionary.dictionaryWithContentsOfFile_(metadataPath);
                if (dict) {
                    var appId = dict.objectForKey_("MCMMetadataIdentifier");
                    if (appId && appId.toString() === bundleIdentifier) {
                        mainBundleContainerPathIdentifier = uuid;
                        found = true;
                        break;
                    }
                }
            }

            if (found) {
                console.log("App Container Path : " + path_prefix + mainBundleContainerPathIdentifier + "/");
            } else {
                console.error("[!] App container path identifier not found.");
            }
        } else {
            console.error("[!] Error accessing directory: " + path_prefix);
            if (DEBUG) {
                var nsError = new ObjC.Object(Memory.readPointer(error));
                console.error("[!] NSFileManager error: " + nsError.localizedDescription().toString());
            }
        }
    } catch (err) {
        if (DEBUG) {
            console.error("[!] Error: " + err.message);
        }
    }
}

// Delay the execution of the main function to give the app time to stabilize
setTimeout(function() {
    app_env_info(true);
    // Process.resume(); // Commented out if attaching to a running process
}, 2000);