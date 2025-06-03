import { useState, useRef } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationList from './components/Education';
import ExperienceList from './components/Experience';
import CVPreview from './components/CVPreview';
import CollapsibleSection from './components/CollapsibleSection';
import html2pdf from 'html2pdf.js';
import './App.css';

function App() {
  const [general, setGeneral] = useState({ name: '', email: '', phone: '' });
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const previewRef = useRef(null);

  const handleSubmit = () => setSubmitted(true);
  const handleEdit = () => setSubmitted(false);

  const handleClear = () => {
    setGeneral({ name: '', email: '', phone: '' });
    setEducations([]);
    setExperiences([]);
    setSubmitted(false);
  };

  const handleDownload = () => {
    const opt = {
      margin: 0,
      filename: 'cv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    html2pdf().set(opt).from(previewRef.current).save();
  };

  return (
    <div className="app-container">
      <div className="form-section">
        <h1>CV Application</h1>

        {!submitted ? (
          <>
            <CollapsibleSection title="General Information" defaultOpen={true}>
              <GeneralInfo data={general} onChange={setGeneral} />
            </CollapsibleSection>

            <CollapsibleSection title="Education">
              <EducationList
                educations={educations}
                setEducations={setEducations}
              />
            </CollapsibleSection>

            <CollapsibleSection title="Experience">
              <ExperienceList
                experiences={experiences}
                setExperiences={setExperiences}
              />
            </CollapsibleSection>

            <button onClick={handleSubmit}>Submit CV</button>
          </>
        ) : (
          <>
            <button onClick={handleEdit}>Edit CV</button>
            <button onClick={handleDownload}>Download PDF</button>
            <button onClick={handleClear} style={{ backgroundColor: '#e74c3c' }}>Clear</button>
          </>
        )}
      </div>

      <div className="preview-section">
        <div ref={previewRef}>
          <CVPreview
            general={general}
            educations={educations}
            experiences={experiences}
          />
        </div>
      </div>
    </div>
  );
}

export default App;