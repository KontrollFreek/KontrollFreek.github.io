const smallDevice = window.matchMedia("(min-width: 724px)");

smallDevice.addListener(handleDeviceChange);

function handleDeviceChange(e) {
    if (e.matches) {
        document.getElementById('modal').style.display = "none"
        document.getElementById('modal').style.overflow = "auto"
    }
    else {
        document.getElementById('modal').style.display = "flex";
        document.getElementById('modal').style.overflow = "none"
        
    }
}

// Run it initially
handleDeviceChange(smallDevice);