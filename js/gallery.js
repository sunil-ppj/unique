document.addEventListener("DOMContentLoaded", function() {
    
      var galleryHeader = document.createElement("div");
      galleryHeader.classList.add("gallery-header"); 
      var galleryTitle = document.createElement("div");
      galleryTitle.classList.add("section-title", "st-left", "st-st3", "gl-st");
      
      var h2 = document.createElement("h2");
      h2.classList.add("sec-title"); 
      h2.textContent = "Gallery";  
      galleryTitle.appendChild(h2);
    
      galleryHeader.appendChild(galleryTitle);
    
      var targetDiv = document.querySelector('.elementor-gallery__titles-container');
    
      targetDiv.parentNode.insertBefore(galleryHeader, targetDiv);
    
      galleryHeader.appendChild(targetDiv);
    
      function handleAnchorWrapping() {
        const windowWidth = window.innerWidth;
    
        if (windowWidth >= 641 && windowWidth <= 1000) {
    
          const anchors = document.querySelectorAll('.elementor-gallery__titles-container .elementor-gallery-title');
    
          // Step 1: Remove the 'btn-wrapped' and 'first-btn-wrap' classes from all anchors to reset their state
          anchors.forEach(function(anchor) {
            anchor.classList.remove('btn-wrapped', 'first-btn-wrap');
          });
    
          let lastTop = null;
          let wrappedFound = false;
          let firstWrappedAnchor = null;
    
          // Step 2: Loop through each anchor to detect wrapping
          anchors.forEach(function(anchor) {
            const rect = anchor.getBoundingClientRect();
            const currentTop = rect.top;
    
            // Check if the current anchor is on a new line (i.e., its top position is different from the previous one)
            if (lastTop !== null && currentTop !== lastTop) {
              // The first wrapped anchor is found, so we add the 'btn-wrapped' class to all anchors from here onward
              if (!wrappedFound) {
                wrappedFound = true; 
    
                // Save reference to the first wrapped anchor
                firstWrappedAnchor = anchor;
              }
            }
    
            // If a wrapped anchor has been found, add the 'btn-wrapped' class to all anchors from this point onward
            if (wrappedFound) {
              anchor.classList.add('btn-wrapped');
            }
    
            lastTop = currentTop;
          });
    
          // Add 'first-btn-wrap' class to the first wrapped anchor, if there is one
          if (firstWrappedAnchor) {
            firstWrappedAnchor.classList.add('first-btn-wrap');
          }
        }
      }
    
      handleAnchorWrapping();
    });

    
