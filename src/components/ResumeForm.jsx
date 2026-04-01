import React from 'react';

const ResumeForm = ({ 
  formData, 
  onFormChange, 
  onAddWorkExperience, 
  onRemoveWorkExperience, 
  onAddEducation, 
  onRemoveEducation, 
  onAddProject, 
  onRemoveProject,
  onAddCertification,
  onRemoveCertification,
  onAddLanguage,
  onRemoveLanguage,
  onAddAward,
  onRemoveAward,
  onAddVolunteerExperience,
  onRemoveVolunteerExperience,
  onAddPublication,
  onRemovePublication
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFormChange({
      ...formData,
      [name]: value
    });
  };

  const handleWorkExperienceChange = (index, field, value) => {
    const updatedExperiences = [...formData.workExperiences];
    updatedExperiences[index][field] = value;
    onFormChange({
      ...formData,
      workExperiences: updatedExperiences
    });
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducations = [...formData.educations];
    updatedEducations[index][field] = value;
    onFormChange({
      ...formData,
      educations: updatedEducations
    });
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index][field] = value;
    onFormChange({
      ...formData,
      projects: updatedProjects
    });
  };

  return (
    <div className="form-section">
      {/* Personal Information */}
      <h2>📋 Personal Information</h2>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="John Doe"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="john@example.com"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+1 (555) 123-4567"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location *</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="New York, NY"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="jobTitle">Job Title you're applying for *</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleInputChange}
          placeholder="Senior Software Engineer"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="professionalSummary">Professional Summary</label>
        <textarea
          id="professionalSummary"
          name="professionalSummary"
          value={formData.professionalSummary}
          onChange={handleInputChange}
          placeholder="Brief overview of your professional background and goals..."
          rows="3"
        />
      </div>

      {/* Work Experience */}
      <h2 style={{ marginTop: '30px' }}>💼 Work Experience</h2>
      
      {formData.workExperiences.map((exp, index) => (
        <div key={index} className="list-item">
          <div className="list-item-content" style={{ flex: 1 }}>
            <strong>{exp.role}</strong>
            <small>{exp.company} • {exp.years}</small>
            <small style={{ display: 'block', marginTop: '5px' }}>{exp.description.substring(0, 50)}...</small>
          </div>
          <button
            className="remove-button"
            onClick={() => onRemoveWorkExperience(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <div style={{ marginBottom: '20px' }}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor={`company-new`}>Company</label>
            <input
              type="text"
              id={`company-new`}
              placeholder="Acme Corp"
              value={formData.tempWorkExperience?.company || ''}
              onChange={(e) => onFormChange({
                ...formData,
                tempWorkExperience: {
                  ...formData.tempWorkExperience,
                  company: e.target.value
                }
              })}
            />
          </div>
          <div className="form-group">
            <label htmlFor={`role-new`}>Role</label>
            <input
              type="text"
              id={`role-new`}
              placeholder="Senior Developer"
              value={formData.tempWorkExperience?.role || ''}
              onChange={(e) => onFormChange({
                ...formData,
                tempWorkExperience: {
                  ...formData.tempWorkExperience,
                  role: e.target.value
                }
              })}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor={`years-new`}>Years (e.g., 2020-2023)</label>
          <input
            type="text"
            id={`years-new`}
            placeholder="2020-2023"
            value={formData.tempWorkExperience?.years || ''}
            onChange={(e) => onFormChange({
              ...formData,
              tempWorkExperience: {
                ...formData.tempWorkExperience,
                years: e.target.value
              }
            })}
          />
        </div>
        <div className="form-group">
          <label htmlFor={`description-new`}>Description</label>
          <textarea
            id={`description-new`}
            placeholder="Describe your responsibilities and achievements..."
            value={formData.tempWorkExperience?.description || ''}
            onChange={(e) => onFormChange({
              ...formData,
              tempWorkExperience: {
                ...formData.tempWorkExperience,
                description: e.target.value
              }
            })}
          />
        </div>
        <button className="add-button" onClick={onAddWorkExperience}>
          + Add Work Experience
        </button>
      </div>

      {/* Education */}
      <h2 style={{ marginTop: '30px' }}>🎓 Education</h2>
      
      {formData.educations.map((edu, index) => (
        <div key={index} className="list-item">
          <div className="list-item-content" style={{ flex: 1 }}>
            <strong>{edu.degree}</strong>
            <small>{edu.college} • {edu.year}</small>
          </div>
          <button
            className="remove-button"
            onClick={() => onRemoveEducation(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <div style={{ marginBottom: '20px' }}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor={`degree-new`}>Degree</label>
            <input
              type="text"
              id={`degree-new`}
              placeholder="B.S. Computer Science"
              value={formData.tempEducation?.degree || ''}
              onChange={(e) => onFormChange({
                ...formData,
                tempEducation: {
                  ...formData.tempEducation,
                  degree: e.target.value
                }
              })}
            />
          </div>
          <div className="form-group">
            <label htmlFor={`college-new`}>College/University</label>
            <input
              type="text"
              id={`college-new`}
              placeholder="Stanford University"
              value={formData.tempEducation?.college || ''}
              onChange={(e) => onFormChange({
                ...formData,
                tempEducation: {
                  ...formData.tempEducation,
                  college: e.target.value
                }
              })}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor={`year-new`}>Graduation Year</label>
          <input
            type="text"
            id={`year-new`}
            placeholder="2023"
            value={formData.tempEducation?.year || ''}
            onChange={(e) => onFormChange({
              ...formData,
              tempEducation: {
                ...formData.tempEducation,
                year: e.target.value
              }
            })}
          />
        </div>
        <button className="add-button" onClick={onAddEducation}>
          + Add Education
        </button>
      </div>

      {/* Volunteer Experience */}
      <h2 style={{ marginTop: '30px' }}>🤝 Volunteer Experience</h2>
      
      {formData.volunteerExperiences.map((vol, index) => (
        <div key={index} className="list-item">
          <div className="list-item-content" style={{ flex: 1 }}>
            <strong>{vol.role}</strong>
            <small>{vol.organization} • {vol.years}</small>
          </div>
          <button
            className="remove-button"
            onClick={() => onRemoveVolunteerExperience(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <div style={{ marginBottom: '20px' }}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor={`org-new`}>Organization</label>
            <input
              type="text"
              id={`org-new`}
              placeholder="Red Cross"
              value={formData.tempVolunteerExperience?.organization || ''}
              onChange={(e) => onFormChange({
                ...formData,
                tempVolunteerExperience: {
                  ...formData.tempVolunteerExperience,
                  organization: e.target.value
                }
              })}
            />
          </div>
          <div className="form-group">
            <label htmlFor={`vol-role-new`}>Role</label>
            <input
              type="text"
              id={`vol-role-new`}
              placeholder="Volunteer Coordinator"
              value={formData.tempVolunteerExperience?.role || ''}
              onChange={(e) => onFormChange({
                ...formData,
                tempVolunteerExperience: {
                  ...formData.tempVolunteerExperience,
                  role: e.target.value
                }
              })}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor={`vol-years-new`}>Years</label>
          <input
            type="text"
            id={`vol-years-new`}
            placeholder="2022-2023"
            value={formData.tempVolunteerExperience?.years || ''}
            onChange={(e) => onFormChange({
              ...formData,
              tempVolunteerExperience: {
                ...formData.tempVolunteerExperience,
                years: e.target.value
              }
            })}
          />
        </div>
        <button className="add-button" onClick={onAddVolunteerExperience}>
          + Add Volunteer Experience
        </button>
      </div>

      {/* Certifications */}
      <h2 style={{ marginTop: '30px' }}>📜 Certifications</h2>
      
      {formData.certifications.map((cert, index) => (
        <div key={index} className="list-item">
          <div className="list-item-content" style={{ flex: 1 }}>
            <strong>{cert.name}</strong>
            <small>{cert.issuer} • {cert.date}</small>
          </div>
          <button
            className="remove-button"
            onClick={() => onRemoveCertification(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <div style={{ marginBottom: '20px' }}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor={`cert-name-new`}>Certification Name</label>
            <input
              type="text"
              id={`cert-name-new`}
              placeholder="AWS Solutions Architect"
              value={formData.tempCertification?.name || ''}
              onChange={(e) => onFormChange({
                ...formData,
                tempCertification: {
                  ...formData.tempCertification,
                  name: e.target.value
                }
              })}
            />
          </div>
          <div className="form-group">
            <label htmlFor={`cert-issuer-new`}>Issuer</label>
            <input
              type="text"
              id={`cert-issuer-new`}
              placeholder="Amazon Web Services"
              value={formData.tempCertification?.issuer || ''}
              onChange={(e) => onFormChange({
                ...formData,
                tempCertification: {
                  ...formData.tempCertification,
                  issuer: e.target.value
                }
              })}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor={`cert-date-new`}>Date</label>
          <input
            type="text"
            id={`cert-date-new`}
            placeholder="2023"
            value={formData.tempCertification?.date || ''}
            onChange={(e) => onFormChange({
              ...formData,
              tempCertification: {
                ...formData.tempCertification,
                date: e.target.value
              }
            })}
          />
        </div>
        <button className="add-button" onClick={onAddCertification}>
          + Add Certification
        </button>
      </div>

      {/* Languages */}
      <h2 style={{ marginTop: '30px' }}>🌐 Languages</h2>
      
      {formData.languages.map((lang, index) => (
        <div key={index} className="list-item">
          <div className="list-item-content" style={{ flex: 1 }}>
            <strong>{lang.language}</strong>
            <small>{lang.proficiency}</small>
          </div>
          <button
            className="remove-button"
            onClick={() => onRemoveLanguage(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <div style={{ marginBottom: '20px' }}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor={`lang-new`}>Language</label>
            <input
              type="text"
              id={`lang-new`}
              placeholder="English, Spanish, Mandarin"
              value={formData.tempLanguage?.language || ''}
              onChange={(e) => onFormChange({
                ...formData,
                tempLanguage: {
                  ...formData.tempLanguage,
                  language: e.target.value
                }
              })}
            />
          </div>
          <div className="form-group">
            <label htmlFor={`proficiency-new`}>Proficiency</label>
            <select
              id={`proficiency-new`}
              value={formData.tempLanguage?.proficiency || 'Intermediate'}
              onChange={(e) => onFormChange({
                ...formData,
                tempLanguage: {
                  ...formData.tempLanguage,
                  proficiency: e.target.value
                }
              })}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Fluent</option>
              <option>Native</option>
            </select>
          </div>
        </div>
        <button className="add-button" onClick={onAddLanguage}>
          + Add Language
        </button>
      </div>

      {/* Awards */}
      <h2 style={{ marginTop: '30px' }}>🏆 Awards & Recognition</h2>
      
      {formData.awards.map((award, index) => (
        <div key={index} className="list-item">
          <div className="list-item-content" style={{ flex: 1 }}>
            <strong>{award.title}</strong>
            <small>{award.date}</small>
            {award.description && <small style={{ display: 'block', marginTop: '5px' }}>{award.description}</small>}
          </div>
          <button
            className="remove-button"
            onClick={() => onRemoveAward(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <div style={{ marginBottom: '20px' }}>
        <div className="form-group">
          <label htmlFor={`award-title-new`}>Award Title</label>
          <input
            type="text"
            id={`award-title-new`}
            placeholder="Employee of the Year"
            value={formData.tempAward?.title || ''}
            onChange={(e) => onFormChange({
              ...formData,
              tempAward: {
                ...formData.tempAward,
                title: e.target.value
              }
            })}
          />
        </div>
        <div className="form-group">
          <label htmlFor={`award-desc-new`}>Description</label>
          <textarea
            id={`award-desc-new`}
            placeholder="Brief description of the award..."
            value={formData.tempAward?.description || ''}
            onChange={(e) => onFormChange({
              ...formData,
              tempAward: {
                ...formData.tempAward,
                description: e.target.value
              }
            })}
          />
        </div>
        <div className="form-group">
          <label htmlFor={`award-date-new`}>Date</label>
          <input
            type="text"
            id={`award-date-new`}
            placeholder="2023"
            value={formData.tempAward?.date || ''}
            onChange={(e) => onFormChange({
              ...formData,
              tempAward: {
                ...formData.tempAward,
                date: e.target.value
              }
            })}
          />
        </div>
        <button className="add-button" onClick={onAddAward}>
          + Add Award
        </button>
      </div>

      {/* Publications */}
      <h2 style={{ marginTop: '30px' }}>📚 Publications</h2>
      
      {formData.publications.map((pub, index) => (
        <div key={index} className="list-item">
          <div className="list-item-content" style={{ flex: 1 }}>
            <strong>{pub.title}</strong>
            <small>{pub.publisher} • {pub.date}</small>
          </div>
          <button
            className="remove-button"
            onClick={() => onRemovePublication(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <div style={{ marginBottom: '20px' }}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor={`pub-title-new`}>Publication Title</label>
            <input
              type="text"
              id={`pub-title-new`}
              placeholder="Article Title"
              value={formData.tempPublication?.title || ''}
              onChange={(e) => onFormChange({
                ...formData,
                tempPublication: {
                  ...formData.tempPublication,
                  title: e.target.value
                }
              })}
            />
          </div>
          <div className="form-group">
            <label htmlFor={`pub-publisher-new`}>Publisher</label>
            <input
              type="text"
              id={`pub-publisher-new`}
              placeholder="Journal/Magazine Name"
              value={formData.tempPublication?.publisher || ''}
              onChange={(e) => onFormChange({
                ...formData,
                tempPublication: {
                  ...formData.tempPublication,
                  publisher: e.target.value
                }
              })}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor={`pub-date-new`}>Date</label>
          <input
            type="text"
            id={`pub-date-new`}
            placeholder="2023"
            value={formData.tempPublication?.date || ''}
            onChange={(e) => onFormChange({
              ...formData,
              tempPublication: {
                ...formData.tempPublication,
                date: e.target.value
              }
            })}
          />
        </div>
        <button className="add-button" onClick={onAddPublication}>
          + Add Publication
        </button>
      </div>

      {/* Skills */}
      <h2 style={{ marginTop: '30px' }}>⭐ Skills</h2>
      <div className="form-group">
        <label htmlFor="skills">Skills (comma separated)</label>
        <textarea
          id="skills"
          name="skills"
          value={formData.skills}
          onChange={handleInputChange}
          placeholder="React, JavaScript, Node.js, Python, MongoDB, PostgreSQL"
          rows="3"
        />
      </div>

      {/* Projects */}
      <h2 style={{ marginTop: '30px' }}>🎯 Projects</h2>
      
      {formData.projects.map((proj, index) => (
        <div key={index} className="list-item">
          <div className="list-item-content" style={{ flex: 1 }}>
            <strong>{proj.name}</strong>
            <small style={{ marginTop: '5px', display: 'block' }}>{proj.description.substring(0, 50)}...</small>
          </div>
          <button
            className="remove-button"
            onClick={() => onRemoveProject(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <div style={{ marginBottom: '20px' }}>
        <div className="form-group">
          <label htmlFor={`project-name-new`}>Project Name</label>
          <input
            type="text"
            id={`project-name-new`}
            placeholder="E-commerce Platform"
            value={formData.tempProject?.name || ''}
            onChange={(e) => onFormChange({
              ...formData,
              tempProject: {
                ...formData.tempProject,
                name: e.target.value
              }
            })}
          />
        </div>
        <div className="form-group">
          <label htmlFor={`project-description-new`}>Project Description</label>
          <textarea
            id={`project-description-new`}
            placeholder="Describe the project, technologies used, and your contributions..."
            value={formData.tempProject?.description || ''}
            onChange={(e) => onFormChange({
              ...formData,
              tempProject: {
                ...formData.tempProject,
                description: e.target.value
              }
            })}
          />
        </div>
        <button className="add-button" onClick={onAddProject}>
          + Add Project
        </button>
      </div>
    </div>
  );
};

export default ResumeForm;
