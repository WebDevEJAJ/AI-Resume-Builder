import React, { useState, useEffect } from 'react';
import { generateResumeEnhancement, getProviderInfo } from '../services/claudeService';

const AIEnhance = ({ formData, onEnhancementComplete }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const [providerInfo, setProviderInfo] = useState(null);

  useEffect(() => {
    const provider = getProviderInfo();
    setProviderInfo(provider);
  }, []);

  const handleGenerateEnhancement = async () => {
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.location || !formData.jobTitle) {
      setError('Please fill in all personal information fields first.');
      setTimeout(() => setError(null), 5000);
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const enhancement = await generateResumeEnhancement(formData);
      onEnhancementComplete(enhancement);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.message || 'Failed to generate enhancement. Please try again.');
      console.error('Enhancement error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-enhance-section">
      <h2>✨ AI Enhancement</h2>
      <p style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '14px' }}>
        {providerInfo && (
          <>
            Using <strong>{providerInfo.icon} {providerInfo.name}</strong> to enhance your resume. Click the button below to generate professional suggestions and improved descriptions.
          </>
        )}
      </p>
      
      <button
        className="generate-button"
        onClick={handleGenerateEnhancement}
        disabled={loading}
      >
        {loading && <span className="loading-spinner"></span>}
        {loading ? 'Generating...' : '🤖 Generate AI Enhancement'}
      </button>

      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}

      {success && (
        <div className="success-message">
          ✓ Enhancement generated successfully! Check the preview below.
        </div>
      )}
    </div>
  );
};

export default AIEnhance;
