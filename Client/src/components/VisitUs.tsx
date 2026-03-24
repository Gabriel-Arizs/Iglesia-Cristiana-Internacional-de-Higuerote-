import type { VisitDetails } from "../types/visitUs";

const VISIT_US_DATA: VisitDetails = {
  title: "Visítanos este Domingo",
  schedules: [
    {
      day: "Domingos",
      times: ["7:00 AM", "9:00 AM", "11:30 AM", "5:00 PM"],
    },
    {
      day: "Martes",
      times: ["Oración 6:00 AM"],
    },
  ],
  address: {
    street: "Calle 22c # 31-01, Sector Corferias",
    city: "Bogotá",
    country: "Colombia",
  },
};

export default function VisitUs() {
  const { title, schedules, address } = VISIT_US_DATA;

  return (
    <section className="py-24 px-8 bg-surface-container">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-extrabold text-primary mb-8 tracking-tight font-headline">
              {title}
            </h2>

            <div className="space-y-6 mb-12">
              {/* Sección de Horarios */}
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container">
                  schedule
                </span>
                <div>
                  <h5 className="font-bold text-primary">Horarios de Reunión</h5>
                  {schedules.map((schedule, index) => (
                    <p key={index} className="text-on-surface-variant">
                      {schedule.day}: {schedule.times.join(" | ")}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container">
                  location_on
                </span>
                <div>
                  <h5 className="font-bold text-primary">Dirección Principal</h5>
                  <p className="text-on-surface-variant">{address.street}</p>
                  <p className="text-on-surface-variant">
                    {address.city}, {address.country}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-ambient">
              <h4 className="text-xl font-bold text-primary mb-4">
                ¿Vienes por primera vez?
              </h4>
              <p className="text-on-surface-variant mb-6">
                Queremos que tu experiencia sea perfecta. Déjanos saber que
                vienes y tendremos a alguien esperándote.
              </p>
              <button className="w-full bg-primary text-white py-4 rounded-full font-bold hover:shadow-lg transition-all">
                Planear mi Visita
              </button>
            </div>
          </div>

          <div className="h-[500px] rounded-2xl overflow-hidden shadow-ambient relative grayscale hover:grayscale-0 transition-all duration-700">
            <img
              className="w-full h-full object-cover"
              alt="Modern architectural map perspective"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfzwnCUrxjx2mIYtXWyjLgwpFs_jaJPT7IciRxLUZs7fott1teP7-tXdJool8tExf_TLJqLUE8IJNyAqBxsje2Q_nj-M7HZvzJ0aIxSFSgRdaKvAq2_quP9A-4MOwmBJMaRRJZeyxPO261e0TcyBYtLOFjyGPTEyc27aVJapYLmeh3tcmAnlGeIK4yXAoWX1J8I46s8UNU4qN3bN-A0G0AX8um257DJcUSKE535PPq2yejYMOgJKaQe5oLBUBwJUbkt6aYAiMzf6E"
            />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
}