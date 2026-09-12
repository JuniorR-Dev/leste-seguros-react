export default function Progress({ step }) {
  const labels = ["Dados pessoais", "Veículo", "Localização"];

  return (
    <div className="progress">
      {labels.map((label, index) => {
        const number = index + 1;
        return (
          <div className={`progress-step ${step >= number ? "done" : ""}`} key={label}>
            <span>{number}</span>
            <small>{label}</small>
          </div>
        );
      })}
    </div>
  );
}