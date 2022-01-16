const smallDevice = window.matchMedia("(min-width: 724px)");

smallDevice.addListener(handleDeviceChange);

function handleDeviceChange(e) {
  if (e.matches) outputElement.textContent = "Bigger Than Mobile";
  else outputElement.textContent = "Mobile";
}

// Run it initially
handleDeviceChange(smallDevice);