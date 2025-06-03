import { useState, useRef } from 'react';

function ExperienceList({ experiences, setExperiences }) {
  const [exp, setExp] = useState({ company: '', position: '', tasks: '', from: '', to: '' });
  const companyRef = useRef(null);

  const addExp = () => {
    if (!exp.company || !exp.position || !exp.from || !exp.to) return;
    setExperiences([...experiences, exp]);
    setExp({ company: '', position: '', tasks: '', from: '', to: '' });
    companyRef.current.focus();
  };

  const removeExp = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const isDisabled = !exp.company || !exp.position || !exp.from || !exp.to;

  return (
    <div className="section">
      <h2>Experience</h2>
      <input ref={companyRef} placeholder="Company" value={exp.company} onChange={(e) => setExp({ ...exp, company: e.target.value })} />
      <input placeholder="Position" value={exp.position} onChange={(e) => setExp({ ...exp, position: e.target.value })} />
      <input placeholder="Main Responsibilities" value={exp.tasks} onChange={(e) => setExp({ ...exp, tasks: e.target.value })} />
      <input placeholder="From" value={exp.from} onChange={(e) => setExp({ ...exp, from: e.target.value })} />
      <input placeholder="To" value={exp.to} onChange={(e) => setExp({ ...exp, to: e.target.value })} />
      <button onClick={addExp} disabled={isDisabled}>Add New Experience</button>
      <ul>
        {experiences.map((e, i) => (
          <li key={i}>
            {e.company} – {e.position} ({e.from} to {e.to})
            <button onClick={() => removeExp(i)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceList;