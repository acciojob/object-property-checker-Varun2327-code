// Global object
const sampleObject = {
  red: "#FF0000",
  green: "#00FF00",
  white: "#FFFFFF"
};

// Function to check if the key exists
function hasKey(key) {
  return key in sampleObject;
}