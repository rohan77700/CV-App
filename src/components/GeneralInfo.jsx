function GeneralInfo({ data, onChange }) {
  return (
    <div className="section">
      <h2>General Info</h2>
      <input placeholder="Full Name" value={data.name} onChange={(e) => onChange({ ...data, name: e.target.value })} />
      <input placeholder="Email" value={data.email} onChange={(e) => onChange({ ...data, email: e.target.value })} />
      <input placeholder="Phone" value={data.phone} onChange={(e) => onChange({ ...data, phone: e.target.value })} />
    </div>
  );
}

export default GeneralInfo;