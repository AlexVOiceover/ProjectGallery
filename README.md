# ProjectGallery
This simple website shows two flex containers:

* The first one has a row disposition for desktop mode and will change to row disposition when shown in a mobile device.
* Each element of the first container will be also a flex container, but in this case it's class is `flex-nested-container`. These have a column disposition (no matter if it's being shown in desktop mode or in a mobile device). These flex containers contains 4 elements:

    1. A `h3` title
    2. A static image
    3. The button that will tocle the article
    4. The article itself that will be shown or hidden

I also created three classes: `flex-nested-container-small`, `flex-nested-container-medium` and `flex-nested-container-large` to play with different sizes, even when the resulting aesthetics is not very appealing.