`Test Cases for Editing and Validating Personal Details`
1. Employee Full Name
TC01 (Positive): Enter valid first, middle, last name → Save should succeed.
TC02 (Negative): Leave blank (required) → Show error message.
TC03 (Negative): Enter numbers/special characters → Validation error.
TC04 (Boundary): Enter max allowed characters (e.g., 50) → Should save.
TC05 (Negative): Enter more than allowed chars → Should reject.

2. Employee ID
TC06 (UI Validation): Verify field is readonly (cannot edit).
TC07 (Negative): Attempt manual edit (if enabled by bug) → Validation should prevent.

3. Other ID
TC08 (Positive): Enter valid alphanumeric (e.g., 3303) → Should save.
TC09 (Negative): Enter special characters (@#$$) → Validation error.
TC10 (Boundary): Min length (1 char) → Should save if valid.
TC11 (Negative): Exceed max length (e.g., >20 chars) → Reject.

4. Driver License Number
TC12 (Positive): Enter valid alphanumeric (M1213NX) → Save.
TC13 (Negative): Leave blank (if required) → Error.
TC14 (Negative): Enter too short/too long value → Validation error.

5. License Expiry Date
TC15 (Positive): Enter valid future date → Save.
TC16 (Negative): Enter past date → Error message.
TC17 (Negative): Enter invalid format (2026-30-12) → Should reject.

6. Nationality
TC18 (Positive): Select valid nationality from dropdown → Save.
TC19 (Negative): Leave blank (if mandatory) → Error.

7. Marital Status
TC20 (Positive): Select Single/Married → Save.
TC21 (Negative): Leave blank (if mandatory) → Error.

8. Date of Birth
TC22 (Positive): Enter valid past date → Save.
TC23 (Negative): Enter future date → Reject.
TC24 (Negative): Enter invalid format (2000-20-02) → Reject.
TC25 (Business Validation): DOB must make employee ≥ 18 yrs old.

9. Gender
TC26 (Positive): Select Male/Female → Save.
TC27 (Negative): Leave unselected (if required) → Error.

10. Save Button & Form Behavior
TC28 (Positive): With all valid inputs → Save succeeds, success message shown.
TC29 (Negative): With invalid/missing mandatory fields → Error shown.
TC30 (UI Validation): Save button enabled only when required fields are valid.

🔹 Extra Test Scenarios
Field Validations
TC31: Verify maximum allowed characters for each field (Name = 50, IDs = 20, etc.).
TC32: Reject SQL injection inputs (' OR 1=1 --).
TC33: Reject HTML/Script tags (<script>alert(1)</script>).

Cross-Field Validations
TC34: Employee age (DOB) should be at least 18 years.
TC35: License Expiry Date should be greater than DOB + 18 yrs.

Data Persistence
TC36: Edit details, click Save, refresh → Data persists.
TC37: Logout & login again → Edited details still saved.

Usability & UI
TC38: Tab order works correctly between fields.
TC39: Mandatory fields marked with *.
TC40: Error messages should be clear & positioned near respective fields.

Security
TC41: Verify fields don’t accept XSS payloads.
TC42: Data should be saved via HTTPS (not plain text).
TC43: Unauthorized user should not access/edit personal details.
----------------------------------------------
`Test Cases for Updating contact details (phone, email, address)`
Address
Verify user can update and save Street 1, Street 2, City, State/Province, Zip/Postal Code, Country.
Verify updated address details persist after logout/login.
Verify error message when mandatory fields (Street 1, City, Country) are left empty.
Verify error message when entering invalid Zip/Postal Code (letters, too short/long numbers).
Verify Country dropdown populates and allows selecting a country.
Verify user cannot exceed maximum character limit in Street/City/State fields.
Verify special characters (e.g., !@#$) are restricted in address fields.
Verify user can clear optional fields (Street 2, State) and save successfully.
Verify UI alignment and labels for all Address fields.

Telephone
Verify user can update and save Home, Mobile, Work phone numbers.
Verify numbers are saved and persist after re-login.
Verify error message for invalid phone formats (alphabets, symbols).
Verify error message for less/more digits than allowed.
Verify system accepts international formats (+91 98765 43210).
Verify at least one phone number field can be left empty and still save.
Verify work phone number prefilled value can be updated successfully.

Email
Verify user can update and save Work Email and Other Email.
Verify changes persist after logout/login.
Verify error message for invalid email formats (abc@, abc.com, spaces).
Verify system rejects duplicate email IDs if not allowed.
Verify user can leave Other Email empty and save.
Verify email fields don’t accept spaces at beginning/end.
Verify system allows valid corporate and personal email domains (e.g., @gmail.com, @company.com).

Extra Scenarios
Verify Save button is disabled until a change is made.
Verify clicking Cancel discards unsaved changes.
Verify user can edit and save Contact Details multiple times without issues.
Verify input fields allow Unicode / multilingual characters (e.g., Chinese city name).
Verify cross-browser and mobile responsiveness for Contact Details.
Verify security: fields should not allow SQL injection / XSS scripts.
Verify role-based access – only authorized users (e.g., employee/self, admin) can edit Contact Details.
-----------------------------------
`Test cases for Uploading and verifying profile picture`
Positive Test Cases
Upload Valid Profile Picture – JPEG
Upload a valid .jpg/.jpeg file under allowed size (e.g., 2MB).
Verify the picture is displayed correctly in the profile.
Upload Valid Profile Picture – PNG
Upload a .png file under allowed size.
Verify transparency (if supported) and correct display.
Upload Valid Profile Picture – GIF (Static)
Upload .gif (if supported).
Verify it is uploaded successfully and displayed properly.
Verify Picture Preview
Ensure the uploaded picture appears in preview before saving.
Verify Picture Saved
After saving, log out and log in again.
Check that the profile picture persists.
Replace Existing Profile Picture
Upload a new valid picture to replace the old one.
Verify old image is removed and replaced.

Responsive Display
Verify uploaded image is shown correctly on web, mobile, and tablet view.
Verify Circular/Thumbnail Crop
If profile picture is displayed in circular frame, ensure cropping works correctly.

Negative Test Cases
Upload Invalid File Format
Try uploading .txt, .pdf, .docx, etc.
Verify system rejects with proper error message.
Upload Large File
Try uploading file larger than allowed limit (e.g., 5MB if max is 2MB).
Verify upload fails with correct error message.
Upload Corrupted Image
Try uploading a corrupted/empty image file.
Verify system shows error and does not upload.
Upload with Special Characters in Filename
Upload file with name like my@photo#2025!!.jpg.
Verify system accepts/rejects gracefully.
Upload Same File Again
Try re-uploading the same image multiple times.
Verify no duplication, only replacement.
Upload While Network Disconnects
Simulate network disconnection during upload.
Verify error handling and no partial image is saved.

UI & Usability Test Cases
Profile Picture Placeholder
Verify a default avatar is shown if no picture is uploaded.
Remove Profile Picture
Verify user can remove/delete profile picture and revert to default avatar.

Accessibility Check
Uploaded profile picture should have alt text (for screen readers).
Upload Progress
For large images, check if progress indicator is shown.

