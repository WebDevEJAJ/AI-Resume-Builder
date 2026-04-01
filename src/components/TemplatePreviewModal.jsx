import React from 'react';

const TemplatePreviewModal = ({ template, isOpen, onClose, accentColor }) => {
  const sampleData = {
    fullName: 'Sarah Johnson',
    jobTitle: 'Senior Product Designer',
    email: 'sarah.johnson@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    professionalSummary: 'Experienced product designer with 6+ years creating user-centered digital experiences. Specialized in design systems, user research, and cross-functional collaboration.',
    workExperiences: [
      {
        role: 'Senior Product Designer',
        company: 'Tech Innovations Inc.',
        years: '2021-Present',
        description: 'Led design for 5+ major product initiatives. Improved user engagement by 45% through redesign initiatives. Mentored junior designers and established design best practices.'
      },
      {
        role: 'Product Designer',
        company: 'Creative Solutions Ltd.',
        years: '2019-2021',
        description: 'Designed and implemented mobile and web applications for diverse industries. Conducted user research and usability testing. Increased team productivity through design tooling improvements.'
      }
    ],
    educations: [
      {
        degree: 'B.S. in Graphic Design',
        college: 'California Institute of the Arts',
        year: '2019'
      }
    ],
    certifications: [
      {
        name: 'Certified User Experience Designer',
        issuer: 'Nielsen Norman Group',
        date: '2023'
      }
    ],
    languages: [
      { language: 'English', proficiency: 'Native' },
      { language: 'Spanish', proficiency: 'Fluent' }
    ],
    awards: [
      {
        title: 'Design Excellence Award',
        description: 'Recognition for outstanding contribution to product redesign',
        date: '2023'
      }
    ],
    skills: 'Figma, Adobe XD, User Research, Prototyping, Design Systems, Leadership',
    projects: [
      {
        name: 'Mobile Banking App Redesign',
        description: 'Complete redesign of banking application improving usability by 60%. Used design thinking methodology and conducted extensive user testing.'
      }
    ]
  };

  const skillsArray = sampleData.skills
    .split(',')
    .map(skill => skill.trim())
    .filter(skill => skill.length > 0);

  const getTemplateClass = () => {
    return `resume-template-${template}`;
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>📄 {template.charAt(0).toUpperCase() + template.slice(1)} Template Preview</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <div className={`resume-content ${getTemplateClass()}`} style={{'--accent': accentColor}}>
            {/* Header */}
            <div className="resume-header">
              <h1>{sampleData.fullName}</h1>
              <div className="resume-job-title">{sampleData.jobTitle}</div>
              <div className="resume-contact-info">
                <span>{sampleData.email}</span>
                <span>•</span>
                <span>{sampleData.phone}</span>
                <span>•</span>
                <span>{sampleData.location}</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="resume-section">
              <h3>Professional Summary</h3>
              <div className="resume-summary">
                {sampleData.professionalSummary}
              </div>
            </div>

            {/* Work Experience */}
            <div className="resume-section">
              <h3>Work Experience</h3>
              {sampleData.workExperiences.map((exp, index) => (
                <div key={index} className="resume-entry">
                  <div className="resume-entry-header">
                    <div className="resume-entry-title">{exp.role}</div>
                    <div className="resume-entry-date">{exp.years}</div>
                  </div>
                  <div className="resume-entry-subtitle">{exp.company}</div>
                  <div className="resume-entry-description">{exp.description}</div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="resume-section">
              <h3>Education</h3>
              {sampleData.educations.map((edu, index) => (
                <div key={index} className="resume-entry">
                  <div className="resume-entry-header">
                    <div className="resume-entry-title">{edu.degree}</div>
                    <div className="resume-entry-date">{edu.year}</div>
                  </div>
                  <div className="resume-entry-subtitle">{edu.college}</div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="resume-section">
              <h3>Certifications</h3>
              {sampleData.certifications.map((cert, index) => (
                <div key={index} className="resume-entry">
                  <div className="resume-entry-header">
                    <div className="resume-entry-title">{cert.name}</div>
                    <div className="resume-entry-date">{cert.date}</div>
                  </div>
                  <div className="resume-entry-subtitle">{cert.issuer}</div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="resume-section">
              <h3>Languages</h3>
              <div className="resume-languages">
                {sampleData.languages.map((lang, index) => (
                  <div key={index} className="resume-language-item">
                    <span className="resume-language-name">{lang.language}</span>
                    <span className="resume-language-proficiency">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="resume-section">
              <h3>Awards & Recognition</h3>
              {sampleData.awards.map((award, index) => (
                <div key={index} className="resume-entry">
                  <div className="resume-entry-header">
                    <div className="resume-entry-title">{award.title}</div>
                    <div className="resume-entry-date">{award.date}</div>
                  </div>
                  <div className="resume-entry-description">{award.description}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
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

            {/* Projects */}
            <div className="resume-section">
              <h3>Projects</h3>
              {sampleData.projects.map((proj, index) => (
                <div key={index} className="resume-entry">
                  <div className="resume-entry-title">{proj.name}</div>
                  <div className="resume-entry-description">{proj.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>Close Preview</button>
        </div>
      </div>
    </div>
  );
};

export default TemplatePreviewModal;
