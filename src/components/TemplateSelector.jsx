import React, { useState } from 'react';
import TemplatePreviewModal from './TemplatePreviewModal';

const TemplateSelector = ({ currentTemplate, onTemplateChange, accentColor }) => {
  const [previewTemplate, setPreviewTemplate] = useState(null);

  const templates = [
    {
      id: 'modern',
      name: 'Modern',
      description: 'Clean, contemporary design',
      icon: '✨'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Classic and traditional',
      icon: '💼'
    },
    {
      id: 'creative',
      name: 'Creative',
      description: 'Colorful and bold',
      icon: '🎨'
    },
    {
      id: 'minimalist',
      name: 'Minimalist',
      description: 'Simple and elegant',
      icon: '⚡'
    },
    {
      id: 'ats',
      name: 'ATS-Friendly',
      description: 'Optimized for scanning',
      icon: '🤖'
    },
    {
      id: 'academic',
      name: 'Academic',
      description: 'Formal education focus',
      icon: '🎓'
    }
  ];

  return (
    <>
      <div className="template-selector">
        <h3>📑 Resume Templates</h3>
        <div className="template-grid">
          {templates.map((template) => (
            <div key={template.id} className="template-card-wrapper">
              <button
                className={`template-card ${currentTemplate === template.id ? 'active' : ''}`}
                onClick={() => onTemplateChange(template.id)}
                title={template.description}
              >
                <span className="template-icon">{template.icon}</span>
                <span className="template-name">{template.name}</span>
                <span className="template-desc">{template.description}</span>
              </button>
              <button
                className="template-preview-btn"
                onClick={() => setPreviewTemplate(template.id)}
                title="View preview"
              >
                👁️ Preview
              </button>
            </div>
          ))}
        </div>
      </div>

      {previewTemplate && (
        <TemplatePreviewModal
          template={previewTemplate}
          isOpen={true}
          onClose={() => setPreviewTemplate(null)}
          accentColor={accentColor}
        />
      )}
    </>
  );
};

export default TemplateSelector;
