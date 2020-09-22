const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// prompt the user to select media stream, pass the video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // if error Occurs
  }
}

button.addEventListener("click", async () => {
  // disable button
  button.disabled = true;
  // Then start picture in picture
  await videoElement.requestPictureInPicture();
  //Reset the button
  button.disabled = false;
});

// on Load
selectMediaStream();
