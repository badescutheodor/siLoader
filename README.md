# Introduction
siLoader ( Simple Loader ) is a very lightweight jQuery plugin used to lazy load images after page load.

# Installation
Clone the repository and copy the minified folder content inside your project js folder.

# Usage
```
$("image").siLoader();

$("image").siLoader(function() {
    // $(this) is the loaded image
    $(this).fadeIn();
});
```