import usePetData from '../hooks/usePetData';
import { cloudinaryUrl, imageOrFallback } from '../utils/cloudinary';

const markerPositions = [
  { left: '48%', top: '28%' },
  { left: '63%', top: '35%' },
  { left: '54%', top: '66%' },
  { left: '76%', top: '54%' }
];

export default function TrackingPage() {
  const { pets, selectedPetId, setSelectedPetId } = usePetData();
  const mapImage = imageOrFallback(cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_TRACKING_MAP, { transforms: 'f_auto,q_auto,w_1800' }), 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80');

  return (
    <div className="page-shell tracking-shell">
      <div className="tracking-layout">
        <aside className="tracking-sidebar">
          <div className="sidebar-group">
            <h3>Danh sách thú cưng</h3>
            <div className="pet-list">
              {pets.map((pet) => (
                <button key={pet._id} className={`pet-list-item ${selectedPetId === pet._id ? 'active' : ''}`} onClick={() => setSelectedPetId(pet._id)}>
                  <img src={pet.avatar.url || 'https://placehold.co/48x48/ece4d5/0b5d91?text=P'} alt={pet.name} />
                  <span>{pet.name}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="sidebar-group">
            <h3>Chức năng</h3>
            <ul className="sidebar-links">
              <li>Lịch sử di chuyển</li>
              <li>Thông báo mất tích</li>
              <li>Cài đặt</li>
            </ul>
          </div>
        </aside>
        <section className="map-panel" style={{ backgroundImage: `url(${mapImage})` }}>
          {markerPositions.slice(0, Math.max(pets.length, 3)).map((pos, index) => (
            <div key={`${pos.left}-${pos.top}`} className="map-marker" style={pos}>
              <img src={pets[index]?.avatar?.url || 'https://placehold.co/48x48/ece4d5/0b5d91?text=P'} alt="marker" />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
