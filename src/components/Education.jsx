import { useState, useRef } from 'react';

function EducationList({ educations, setEducations }) {
  const [edu, setEdu] = useState({ school: '', title: '', date: '' });
  const schoolRef = useRef(null);

  const addEdu = () => {
    if (!edu.school || !edu.title || !edu.date) return;
    setEducations([...educations, edu]);
    setEdu({ school: '', title: '', date: '' });
    schoolRef.current.focus();
  };

  const removeEdu = (index) => {
    setEducations(educations.filter((_, i) => i !== index));
  };

  const isDisabled = !edu.school || !edu.title || !edu.date;

  return (
    <div className="section">
      <h2>Education</h2>
      <input ref={schoolRef} placeholder="School" value={edu.school} onChange={(e) => setEdu({ ...edu, school: e.target.value })} />
      <input placeholder="Title of Study" value={edu.title} onChange={(e) => setEdu({ ...edu, title: e.target.value })} />
      <input placeholder="Date" value={edu.date} onChange={(e) => setEdu({ ...edu, date: e.target.value })} />
      <button onClick={addEdu} disabled={isDisabled}>Add New Education</button>
      <ul>
        {educations.map((e, i) => (
          <li key={i}>
            {e.school} – {e.title} ({e.date})
            <button onClick={() => removeEdu(i)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EducationList;