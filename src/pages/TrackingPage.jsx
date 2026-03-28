import usePetData from "../hooks/usePetData";

const fakePins = [
  { id: "p1", top: "26%", left: "34%" },
  { id: "p2", top: "38%", left: "58%" },
  { id: "p3", top: "62%", left: "44%" },
  { id: "p4", top: "70%", left: "72%" },
];

export default function TrackingPage() {
  const { pets, selectedPetId, setSelectedPetId } = usePetData();

  return (
    <div className="page-shell page-stack">
      <section className="tracking-page">
        <aside className="tracking-sidebar">
          <div className="tracking-sidebar__group">
            <h3>Danh sách thú cưng</h3>
            <div className="tracking-pet-list">
              {pets.map((pet) => (
                <button
                  key={pet._id}
                  type="button"
                  className={`tracking-pet-item ${selectedPetId === pet._id ? "active" : ""}`}
                  onClick={() => setSelectedPetId(pet._id)}
                >
                  <img
                    src={pet?.avatar?.url || pet?.avatar || "https://placehold.co/100x100"}
                    alt={pet.name}
                  />
                  <span>{pet.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="tracking-sidebar__group">
            <h3>Chức năng</h3>
            <ul className="tracking-menu">
              <li>Lịch sử di chuyển</li>
              <li>Thông báo mất tích</li>
              <li>Cài đặt</li>
            </ul>
          </div>
        </aside>

        <div className="tracking-map">
          <img
            src="https://res.cloudinary.com/dlipnztpt/image/upload/v1774672614/pawtal_map_1_z5fq8x.jpg"
            alt="Map"
          />
          {fakePins.map((pin) => (
            <span key={pin.id} className="map-pin" style={{ top: pin.top, left: pin.left }}>
              📍
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}