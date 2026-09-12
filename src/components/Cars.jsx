import { CarFront, Fuel } from "lucide-react";

const acceptedVehicles = [
  {
    label: "Uber",
    icon: CarFront,
  },
  {
    label: "99",
    icon: CarFront,
  },
  {
    label: "InDrive",
    icon: CarFront,
  },
  {
    label: "Táxi",
    icon: CarFront,
  },
  {
    label: "GNV",
    icon: Fuel,
  },
];

export default function AcceptedVehicles() {
  return (
    <section className="accepted-card">

      <h2>
        Aceitamos Uber, 99, táxi e carros com GNV
      </h2>

      <div className="accepted-list">

        {acceptedVehicles.map(({ label, icon: Icon }) => (
          <div className="accepted-item" key={label}>

            <Icon
              size={30}
              strokeWidth={1.7}
            />

            <span>{label}</span>

          </div>
        ))}

      </div>

    </section>
  );
}