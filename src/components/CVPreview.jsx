function CVPreview({ general, educations, experiences }) {
    return (
      <div className="cv-document">
        <header className="cv-header">
          <h1>{general.name}</h1>
          <p>{general.email} | {general.phone}</p>
        </header>
  
        <section className="cv-section">
          <h2>Education</h2>
          {educations.map((edu, i) => (
            <div key={i}>
              <p><strong>{edu.school}</strong> – {edu.title}</p>
              <p>{edu.date}</p>
            </div>
          ))}
        </section>
  
        <section className="cv-section">
          <h2>Experience</h2>
          {experiences.map((exp, i) => (
            <div key={i}>
              <p><strong>{exp.company}</strong> – {exp.position}</p>
              <p>{exp.from} to {exp.to}</p>
              <p>{exp.tasks}</p>
            </div>
          ))}
        </section>
      </div>
    );
  }
  
  export default CVPreview;