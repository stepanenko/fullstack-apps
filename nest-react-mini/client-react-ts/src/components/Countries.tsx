
export default function Countries() {
  const countries = [
    "France",
    "Germany",
    "UK",
    "Switzerland",
    "Luxembourg",
    "Netherlands",
    "USA",
    "Canada",
    "Australia",
    "Spain",
  ];

  return (
    <div>
      <h2>Countries</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {countries.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
