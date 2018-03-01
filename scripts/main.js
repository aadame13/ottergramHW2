var DETAIL_IMAGE_SELECTOR = "[data-image-role=\"target\"]";
var DETAIL_TITLE_SELECTOR = "[data-image-role=\"title\"]";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role=\"trigger\"]";

function setDetails(imageUrl, titleText) {
  "use strict";
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-url");
}

function titleFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-title");
}

function setDetailsFromThumb(thumbnail) {
  "use strict";
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  "use strict";
  thumb.addEventListener("click", function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  "use strict";
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  "use strict";
  navigateButtons();
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}

// CODE FOR BUTTONS AND CAROUSEL EFFECT
function navigateButtons() {
  var previousButton = document.querySelector("#previous");
  var nextButton = document.querySelector("#next");
  var imageArray = getThumbnailsArray();
  var index = 0;
  var numOfElements = imageArray.length - 1;

  previousButton.addEventListener("click", function() {
    if (index === 0) {
      index = numOfElements;
    } else {
      index -= 1;
    }
    setDetailsFromThumb(imageArray[index]);
  });

  nextButton.addEventListener("click", function() {
    if (index === numOfElements) {
      index = 0;
    } else {
      index += 1;
    }
    setDetailsFromThumb(imageArray[index]);
  });
}

initializeEvents();
