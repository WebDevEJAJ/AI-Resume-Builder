import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ResumeForm from './components/ResumeForm';
import AIEnhance from './components/AIEnhance';
import ResumePreview from './components/ResumePreview';
import TemplateSelector from './components/TemplateSelector';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [aiEnhancement, setAiEnhancement] = useState('');
  const [resumeTemplate, setResumeTemplate] = useState('modern');
  const [accentColor, setAccentColor] = useState('#6366f1');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    jobTitle: '',
    professionalSummary: '',
    workExperiences: [],
    tempWorkExperience: {
      company: '',
      role: '',
      years: '',
      description: ''
    },
    educations: [],
    tempEducation: {
      degree: '',
      college: '',
      year: ''
    },
    certifications: [],
    tempCertification: {
      name: '',
      issuer: '',
      date: ''
    },
    languages: [],
    tempLanguage: {
      language: '',
      proficiency: 'Intermediate'
    },
    awards: [],
    tempAward: {
      title: '',
      description: '',
      date: ''
    },
    volunteerExperiences: [],
    tempVolunteerExperience: {
      organization: '',
      role: '',
      years: '',
      description: ''
    },
    publications: [],
    tempPublication: {
      title: '',
      publisher: '',
      date: ''
    },
    skills: '',
    projects: [],
    tempProject: {
      name: '',
      description: ''
    }
  });

  // Load theme preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  // Load form data from localStorage
  useEffect(() => {
    const savedFormData = localStorage.getItem('resumeFormData');
    if (savedFormData) {
      try {
        setFormData(JSON.parse(savedFormData));
      } catch (error) {
        console.error('Error loading saved form data:', error);
      }
    }
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('resumeFormData', JSON.stringify(formData));
  }, [formData]);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  };

  const handleFormChange = (newFormData) => {
    setFormData(newFormData);
  };

  const handleAddWorkExperience = () => {
    const { tempWorkExperience } = formData;
    if (tempWorkExperience.company && tempWorkExperience.role && tempWorkExperience.years) {
      setFormData({
        ...formData,
        workExperiences: [...formData.workExperiences, tempWorkExperience],
        tempWorkExperience: {
          company: '',
          role: '',
          years: '',
          description: ''
        }
      });
    } else {
      alert('Please fill in all work experience fields');
    }
  };

  const handleRemoveWorkExperience = (index) => {
    setFormData({
      ...formData,
      workExperiences: formData.workExperiences.filter((_, i) => i !== index)
    });
  };

  const handleAddEducation = () => {
    const { tempEducation } = formData;
    if (tempEducation.degree && tempEducation.college && tempEducation.year) {
      setFormData({
        ...formData,
        educations: [...formData.educations, tempEducation],
        tempEducation: {
          degree: '',
          college: '',
          year: ''
        }
      });
    } else {
      alert('Please fill in all education fields');
    }
  };

  const handleRemoveEducation = (index) => {
    setFormData({
      ...formData,
      educations: formData.educations.filter((_, i) => i !== index)
    });
  };

  const handleAddProject = () => {
    const { tempProject } = formData;
    if (tempProject.name && tempProject.description) {
      setFormData({
        ...formData,
        projects: [...formData.projects, tempProject],
        tempProject: {
          name: '',
          description: ''
        }
      });
    } else {
      alert('Please fill in all project fields');
    }
  };

  const handleRemoveProject = (index) => {
    setFormData({
      ...formData,
      projects: formData.projects.filter((_, i) => i !== index)
    });
  };

  const handleAddCertification = () => {
    const { tempCertification } = formData;
    if (tempCertification.name && tempCertification.issuer) {
      setFormData({
        ...formData,
        certifications: [...formData.certifications, tempCertification],
        tempCertification: {
          name: '',
          issuer: '',
          date: ''
        }
      });
    } else {
      alert('Please fill in certification name and issuer');
    }
  };

  const handleRemoveCertification = (index) => {
    setFormData({
      ...formData,
      certifications: formData.certifications.filter((_, i) => i !== index)
    });
  };

  const handleAddLanguage = () => {
    const { tempLanguage } = formData;
    if (tempLanguage.language) {
      setFormData({
        ...formData,
        languages: [...formData.languages, tempLanguage],
        tempLanguage: {
          language: '',
          proficiency: 'Intermediate'
        }
      });
    } else {
      alert('Please enter a language');
    }
  };

  const handleRemoveLanguage = (index) => {
    setFormData({
      ...formData,
      languages: formData.languages.filter((_, i) => i !== index)
    });
  };

  const handleAddAward = () => {
    const { tempAward } = formData;
    if (tempAward.title) {
      setFormData({
        ...formData,
        awards: [...formData.awards, tempAward],
        tempAward: {
          title: '',
          description: '',
          date: ''
        }
      });
    } else {
      alert('Please enter award title');
    }
  };

  const handleRemoveAward = (index) => {
    setFormData({
      ...formData,
      awards: formData.awards.filter((_, i) => i !== index)
    });
  };

  const handleAddVolunteerExperience = () => {
    const { tempVolunteerExperience } = formData;
    if (tempVolunteerExperience.organization && tempVolunteerExperience.role) {
      setFormData({
        ...formData,
        volunteerExperiences: [...formData.volunteerExperiences, tempVolunteerExperience],
        tempVolunteerExperience: {
          organization: '',
          role: '',
          years: '',
          description: ''
        }
      });
    } else {
      alert('Please fill in organization and role');
    }
  };

  const handleRemoveVolunteerExperience = (index) => {
    setFormData({
      ...formData,
      volunteerExperiences: formData.volunteerExperiences.filter((_, i) => i !== index)
    });
  };

  const handleAddPublication = () => {
    const { tempPublication } = formData;
    if (tempPublication.title && tempPublication.publisher) {
      setFormData({
        ...formData,
        publications: [...formData.publications, tempPublication],
        tempPublication: {
          title: '',
          publisher: '',
          date: ''
        }
      });
    } else {
      alert('Please fill in publication title and publisher');
    }
  };

  const handleRemovePublication = (index) => {
    setFormData({
      ...formData,
      publications: formData.publications.filter((_, i) => i !== index)
    });
  };

  const handleEnhancementComplete = (enhancement) => {
    setAiEnhancement(enhancement);
  };

  return (
    <div className="app-container" style={{'--accent-color': accentColor}}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode} onAccentColorChange={setAccentColor} accentColor={accentColor} />
      
      <div style={{ marginBottom: '30px' }}>
        <TemplateSelector currentTemplate={resumeTemplate} onTemplateChange={setResumeTemplate} />
      </div>
      
      <div className="main-container">
        <div>
          <ResumeForm
            formData={formData}
            onFormChange={handleFormChange}
            onAddWorkExperience={handleAddWorkExperience}
            onRemoveWorkExperience={handleRemoveWorkExperience}
            onAddEducation={handleAddEducation}
            onRemoveEducation={handleRemoveEducation}
            onAddProject={handleAddProject}
            onRemoveProject={handleRemoveProject}
            onAddCertification={handleAddCertification}
            onRemoveCertification={handleRemoveCertification}
            onAddLanguage={handleAddLanguage}
            onRemoveLanguage={handleRemoveLanguage}
            onAddAward={handleAddAward}
            onRemoveAward={handleRemoveAward}
            onAddVolunteerExperience={handleAddVolunteerExperience}
            onRemoveVolunteerExperience={handleRemoveVolunteerExperience}
            onAddPublication={handleAddPublication}
            onRemovePublication={handleRemovePublication}
          />

          <AIEnhance
            formData={formData}
            onEnhancementComplete={handleEnhancementComplete}
          />
        </div>

        <ResumePreview
          formData={formData}
          aiEnhancement={aiEnhancement}
          template={resumeTemplate}
          accentColor={accentColor}
        />
      </div>
    </div>
  );
}

export default App;
