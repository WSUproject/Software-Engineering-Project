1.  Landing Page

- Sign In/Sign Up Buttons: Located at the top right. Clicking "Sign In" opens a modal for login credentials; "Sign Up" leads to a registration form. Both processes authenticate users or create new user accounts.
- The landing page will contain the application description along with image describing the application.

2.  Main Navigation

- Home Button: Returns users to the landing page from anywhere within the application.
- Profile Button: Accessible from the top navigation bar, leading to the user's profile page where they can view and edit their information.
- Post Creation Button: A "+" icon or "Create Post" button allows users to choose the type of post they want to create (Event, Job, Accommodation).
  ![Home Page](Wireframe\Home.png)

3. Individual Post Page

- Edit Button: Visible only to the post creator, it allows editing the post's content.
- Delete Button: Also exclusive to the post creator, clicking it prompts the user for confirmation before deleting the post.
- Apply/Respond Button: For job postings, opens a form to submit application documents. For accommodation postings, it might open a dialog box for the user to leave a comment or question.

4.  Posting Forms (Event, Job, Accommodation)

- Submit Button: Validates input and submits the form to create a new posting. On success, redirects the user to their new posting or a confirmation page.
- Cancel Button: Discards any changes and returns the user to the previous page or home.
- Add/Update Tags Button: Allows users to dynamically add or change tags for their posting for better categorization.
  ![Create Accommodation](Wireframe\Create Accommodation.png)
  ![Create Event](Wireframe\Create Event.png)
  ![Create Job](Wireframe\Create Job.png)

5. Viewing Posts

- Filter Options: Dropdowns or checkboxes for filtering the listings by various criteria (e.g., location, type, date). A "Apply Filters" button refreshes the listings based on the selected filters.
- Sort By Dropdown: Lets users sort postings by date, relevance, or other predefined criteria.
  ![View Accommodation](Wireframe\Accommodation Posts.png)
  ![View Event](Wireframe\Event Posts.png)
  ![View Job](Wireframe\Job Posts.png)
  ![View Accommodation Details](Wireframe\Accommodation Description.png)
  ![View Event Details](Wireframe\Event Description.png)
  ![View Job Details](Wireframe\Job Description.png)

  6.  User Profile Page

- Edit Profile Button: Enables editing of user profile details such as picture, address, email, etc.
- Change Password Button: Opens a form for updating the user’s password, requiring current and new passwords.
- My Posts Tab: Displays a list of the user's postings with options to view, edit, or delete each.

Security and Validation for Button Actions

- Form Submission: All forms will implement client-side validation to provide immediate feedback to users. Server-side validation will also be in place to ensure data integrity and security.

SEQUENCE DIAGRAMS:
![](Sequence Diagrams\create accommodation.png)
![](Sequence Diagrams\Create Event.png)
![](Sequence Diagrams\create job.png)
![](Sequence Diagrams\delete accommodation.png)
![](Sequence Diagrams\delete event.png)
![](Sequence Diagrams\delete job.png)
![](Sequence Diagrams\Login.png)
![](Sequence Diagrams\Signup-Register.png)
![](Sequence Diagrams\update accommodation.png)
![](Sequence Diagrams\Update Event.png)
![](Sequence Diagrams\update job.png)

