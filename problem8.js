function isValidPhotoName(photoName, imageExtensions) {
  if (typeof photoName !== "string" || !Array.isArray(imageExtensions)) {
    return "please provide a valid input";
  } else {
    // for (let item of imageExtensions) {
    //   if (photoName.toLowerCase().endsWith(item)) {
    //     return true;
    //   }
    // }

    //     return false;

    let cut = photoName.split(" ");
    let lastElement = cut.pop();
    
    for (let item of imageExtensions) {
      if (lastElement.endsWith(item)) {
        return true;
      }
    }
    return false;
  }
}
const photoName = "image.jpg";
const array = [".kp", ".jpg", ".png"];
console.log(isValidPhotoName(photoName, array));
