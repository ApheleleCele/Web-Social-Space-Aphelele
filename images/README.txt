Put your photos in this "images" folder, then swap the placeholder <div class="photo-frame">
in the HTML for an <img> tag pointing at the file. Suggested filenames and sizes:

  profile-portrait.jpg   800x1000px   -> used in the About page hero
  gallery-1.jpg           600x600px   -> About page gallery
  gallery-2.jpg           600x600px   -> About page gallery
  gallery-3.jpg           600x600px   -> About page gallery
  gallery-4.jpg           600x600px   -> About page gallery
  drivesync.jpg           800x500px  -> Portfolio page, DriveSync card
  mit-aix.jpg             800x600px  -> Interests page, MIT AI+X section

Example swap (in index.html):

  BEFORE:
  <div class="photo-frame">Add profile portrait here...</div>

  AFTER:
  <img src="images/profile-portrait.jpg" alt="Aphelele Cele">
