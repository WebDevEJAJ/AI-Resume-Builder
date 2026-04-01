import React from 'react';

const ResumePreview = ({ formData, aiEnhancement, template = 'modern', accentColor = '#6366f1' }) => {
  const handlePrint = () => {
    window.print();
  };

  const skillsArray = formData.skills
    .split(',')
    .map(skill => skill.trim())
    .filter(skill => skill.length > 0);

  const getTemplateClass = () => {
    return `resume-template-${template}`;
  };

  const hasContent = () => {
    return (
      formData.workExperiences.length > 0 ||
      formData.educations.length > 0 ||
      formData.certifications.length > 0 ||
      formData.languages.length > 0 ||
      formData.awards.length > 0 ||
      formData.volunteerExperiences.length > 0 ||
      formData.publications.length > 0 ||
      skillsArray.length > 0 ||
      formData.projects.length > 0
    );
  };

  return (
    <div className="resume-preview-section">
      <h2>
        <span>📄 Resume Preview ({template.charAt(0).toUpperCase() + template.slice(1)})</span>
        <button className="print-button" onClick={handlePrint}>
          🖨️ Print / Download as PDF
        </button>
      </h2>

      <div className={`resume-content ${getTemplateClass()}`} style={{'--accent': accentColor}}>
        {/* Header */}
        <div className="resume-header">
          <h1>{formData.fullName}</h1>
          {formData.jobTitle && <div className="resume-job-title">{formData.jobTitle}</div>}
          <div className="resume-contact-info">
            {formData.email && <span>{formData.email}</span>}
            {formData.phone && <span>•</span>}
            {formData.phone && <span>{formData.phone}</span>}
            {formData.location && <span>•</span>}
            {formData.location && <span>{formData.location}</span>}
          </div>
        </div>

        {/* Professional Summary (from form or AI) */}
        {(aiEnhancement || formData.professionalSummary) && (
          <div className="resume-section">
            <h3>Professional Summary</h3>
            <div className="resume-summary">
              {aiEnhancement || formData.professionalSummary}
            </div>
          </div>
        )}

        {/* Work Experience */}
        {formData.workExperiences.length > 0 && (
          <div className="resume-section">
            <h3>Work Experience</h3>
            {formData.workExperiences.map((exp, index) => (
              <div key={index} className="resume-entry">
                <div className="resume-entry-header">
                  <div className="resume-entry-title">{exp.role}</div>
                  <div className="resume-entry-date">{exp.years}</div>
                </div>
                <div className="resume-entry-subtitle">{exp.company}</div>
                {exp.description && (
                  <div className="resume-entry-description">{exp.description}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Volunteer Experience */}
        {formData.volunteerExperiences.length > 0 && (
          <div className="resume-section">
            <h3>Volunteer Experience</h3>
            {formData.volunteerExperiences.map((vol, index) => (
              <div key={index} className="resume-entry">
                <div className="resume-entry-header">
                  <div className="resume-entry-title">{vol.role}</div>
                  <div className="resume-entry-date">{vol.years}</div>
                </div>
                <div className="resume-entry-subtitle">{vol.organization}</div>
                {vol.description && (
                  <div className="resume-entry-description">{vol.description}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {formData.educations.length > 0 && (
          <div className="resume-section">
            <h3>Education</h3>
            {formData.educations.map((edu, index) => (
              <div key={index} className="resume-entry">
                <div className="resume-entry-header">
                  <div className="resume-entry-title">{edu.degree}</div>
                  <div className="resume-entry-date">{edu.year}</div>
                </div>
                <div className="resume-entry-subtitle">{edu.college}</div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {formData.certifications.length > 0 && (
          <div className="resume-section">
            <h3>Certifications</h3>
            {formData.certifications.map((cert, index) => (
              <div key={index} className="resume-entry">
                <div className="resume-entry-header">
                  <div className="resume-entry-title">{cert.name}</div>
                  <div className="resume-entry-date">{cert.date}</div>
                </div>
                <div className="resume-entry-subtitle">{cert.issuer}</div>
              </div>
            ))}
          </div>
        )}

        {/* Languages */}
        {formData.languages.length > 0 && (
          <div className="resume-section">
            <h3>Languages</h3>
            <div className="resume-languages">
              {formData.languages.map((lang, index) => (
                <div key={index} className="resume-language-item">
                  <span className="resume-language-name">{lang.language}</span>
                  <span className="resume-language-proficiency">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Awards */}
        {formData.awards.length > 0 && (
          <div className="resume-section">
            <h3>Awards & Recognition</h3>
            {formData.awards.map((award, index) => (
              <div key={index} className="resume-entry">
                <div className="resume-entry-header">
                  <div className="resume-entry-title">{award.title}</div>
                  <div className="resume-entry-date">{award.date}</div>
                </div>
                {award.description && (
                  <div className="resume-entry-description">{award.description}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Publications */}
        {formData.publications.length > 0 && (
          <div className="resume-section">
            <h3>Publications</h3>
            {formData.publications.map((pub, index) => (
              <div key={index} className="resume-entry">
                <div className="resume-entry-header">
                  <div className="resume-entry-title">{pub.title}</div>
                  <div className="resume-entry-date">{pub.date}</div>
                </div>
                <div className="resume-entry-subtitle">{pub.publisher}</div>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {skillsArray.length > 0 && (
          <div className="resume-section">
            <h3>Skills</h3>
            <div className="resume-skills">
              {skillsArray.map((skill, index) => (
                <span key={index} className="resume-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {formData.projects.length > 0 && (
          <div className="resume-section">
            <h3>Projects</h3>
            {formData.projects.map((proj, index) => (
              <div key={index} className="resume-entry">
                <div className="resume-entry-title">{proj.name}</div>
                {proj.description && (
                  <div className="resume-entry-description">{proj.description}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!hasContent() && (
          <div className="empty-state">
            <div className="empty-state-icon">📝</div>
            <div className="empty-state-text">
              Start filling in the form to build your resume preview
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
