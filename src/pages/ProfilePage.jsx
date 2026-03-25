import usePetData from '../hooks/usePetData';
import { cloudinaryUrl, imageOrFallback } from '../utils/cloudinary';

export default function ProfilePage() {
  const { selectedPet, setSelectedPetId, pets } = usePetData();
  const cover = imageOrFallback(cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_PROFILE_COVER, { transforms: 'f_auto,q_auto,w_1600' }), 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1600&q=80');

  return (
    <div className="page-shell page-stack">
      <section className="profile-hero">
        <div className="profile-cover" style={{ backgroundImage: `url(${cover})` }} />
        <div className="profile-avatar-wrap">
          <img className="profile-avatar" src={selectedPet?.avatar.url || 'https://placehold.co/260x260/ece4d5/0b5d91?text=Pawtal'} alt={selectedPet?.name} />
          <div className="profile-badge-row"><span>📷</span><span>🖼️</span></div>
        </div>
        <div className="profile-title-block">
          <h1>{selectedPet?.name || 'Gấu'}</h1>
          <span>{selectedPet?.breed || 'British Shorthair'}</span>
        </div>
      </section>

      <div className="pet-tabs">
        {pets.map((pet) => (
          <button key={pet._id} className={`pet-tab ${selectedPet?._id === pet._id ? 'active' : ''}`} onClick={() => setSelectedPetId(pet._id)}>
            {pet.name}
          </button>
        ))}
      </div>

      <section className="card-soft two-col profile-content">
        <div className="owner-card icon-card">
          <div className="owner-icon">◯</div>
          <div className="owner-card-icons">👤 🐾</div>
        </div>
        <div className="info-card-lined">
          <div className="info-card-head">
            <h3>Thông tin chủ nuôi</h3>
            <span>✎</span>
          </div>
          <div className="lined-rows">
            <div><span>Tên</span><strong>Minh Anh</strong></div>
            <div><span>SĐT</span><strong>0909 123 456</strong></div>
            <div><span>Email</span><strong>minhanh@pawtal.local</strong></div>
            <div><span>Địa chỉ</span><strong>12 Nguyễn Gia Trí, Bình Thạnh</strong></div>
          </div>
        </div>
      </section>

      <section className="bottom-brand-banner">
        <div>
          <h2>Pawtal</h2>
          <p>Định danh vững vàng an tâm dẫn lối</p>
        </div>
      </section>
    </div>
  );
}
