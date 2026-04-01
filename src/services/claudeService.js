// OpenRouter API Handler - Using Gemma 3 27B (Free)
const callOpenRouterAPI = async (prompt) => {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

  if (!apiKey) {
    throw new Error('OpenRouter API key not found. Please set VITE_OPENROUTER_API_KEY in your .env file.');
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': window.location.origin,
        'X-Title': 'AI Resume Builder'
      },
      body: JSON.stringify({
        model: 'google/gemma-3-27b-it',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 2048,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenRouter error response:', errorData);
      throw new Error(
        errorData.error?.message || 
        errorData.message ||
        `OpenRouter API error: ${response.status}`
      );
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('OpenRouter API error:', error);
    throw error;
  }
};

// Main AI call function - uses OpenRouter only
export const callAI = async (prompt) => {
  return callOpenRouterAPI(prompt);
};

// Get current provider info for UI display
export const getProviderInfo = () => {
  return {
    name: 'OpenRouter (Gemma 3 27B Free)',
    icon: '🚀'
  };
};

// Generate resume enhancement using OpenRouter API
export const generateResumeEnhancement = async (formData) => {
  const prompt = `You are a professional resume writer. Please enhance and improve the following resume information. Provide:
1. A compelling professional summary (2-3 sentences)
2. Improved descriptions for each work experience entry
3. Any additional suggestions for the resume

Resume Information:
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.location}
Job Title: ${formData.jobTitle}

Work Experience:
${formData.workExperiences.map((exp, i) => `
Experience ${i + 1}:
- Company: ${exp.company}
- Role: ${exp.role}
- Years: ${exp.years}
- Description: ${exp.description}
`).join('\n')}

Education:
${formData.educations.map((edu, i) => `
Education ${i + 1}:
- Degree: ${edu.degree}
- College: ${edu.college}
- Year: ${edu.year}
`).join('\n')}

Skills: ${formData.skills}

Projects:
${formData.projects.map((proj, i) => `
Project ${i + 1}:
- Name: ${proj.name}
- Description: ${proj.description}
`).join('\n')}

Please provide constructive feedback and improved descriptions for the experience and education sections.`;

  return callAI(prompt);
};
