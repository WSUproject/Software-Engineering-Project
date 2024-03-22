import React from 'react';
import './App.css'; // Make sure to create an appropriate App.css file for additional custom styling

function JobPostForm() {
  return (
    <div className="job-post-form container">
      <header>
        {/* You can replace `a` tags with React Router `Link` if you are using React Router */}
        <div className="logo">LOGO</div>
        <input type="text" className="search-input" placeholder="Search" />
        <nav>
          <a href="/">Home</a> |
          <a href="/events">Events</a> |
          <a href="/jobs">Jobs</a> |
          <a href="/accommodations">Accommodations</a>
          <div className="auth-links">
            <a href="/about">About</a> |
            <a href="/contact">Contact</a> |
            <a href="/login">Login</a> |
            <a href="/signup">Signup</a>
          </div>
        </nav>
      </header>

      <main>
        <h1>Create Vacancy</h1>
        <form>
          <div className="form-group">
            <label htmlFor="collegeCompany">College/Company</label>
            <input type="text" id="collegeCompany" className="form-control" />
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="post">Post</label>
              <input type="text" id="post" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="level">Level</label>
              <input type="text" id="level" className="form-control" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-3">
              <label htmlFor="vacancy">Vacancy</label>
              <input type="number" id="vacancy" className="form-control" />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="type">Type</label>
              <input type="text" id="type" className="form-control" />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="salary">Salary</label>
              <input type="text" id="salary" className="form-control" />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="deadline">Deadline</label>
              <input type="date" id="deadline" className="form-control" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="state">State</label>
            <input type="text" id="state" className="form-control" />
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="city">City</label>
              <input type="text" id="city" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="venue">Venue</label>
              <input type="text" id="venue" className="form-control" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="education">Education</label>
            <input type="text" id="education" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="experience">Experience</label>
            <input type="text" id="experience" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="otherSpecification">Other Specification</label>
            <textarea id="otherSpecification" className="form-control" rows="3"></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="jobDescription">Job Description</label>
            <textarea id="jobDescription" className="form-control" rows="3"></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Create</button>
          <button type="button" className="btn btn-secondary">Cancel</button>
        </form>
      </main>
    </div>
  );
}

export default Job