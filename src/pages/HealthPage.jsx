import usePetData from '../hooks/usePetData';
import { cloudinaryUrl, imageOrFallback } from '../utils/cloudinary';
import { formatDate } from '../utils/format';

export default function HealthPage() {
  const { pets, selectedPet, selectedPetId, setSelectedPetId, health, vaccinations, visits } = usePetData();
  const banner = imageOrFallback(cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HEALTH_BANNER, { transforms: 'f_auto,q_auto,w_1600' }), 'https://images.unsplash.com/photo-1583512603806-077998240c7a?auto=format&fit=crop&w=1600&q=80');

  return (
    <div className="page-shell page-stack">
      <div className="page-header-row">
        <h1>Hồ sơ sức khỏe thú cưng</h1>
        <span className="status-chip">Health</span>
      </div>
      <section className="card-soft health-top-grid">
        <div className="health-pet-card">
          <img src={selectedPet?.avatar?.url || 'https://placehold.co/500x400/ece4d5/0b5d91?text=Pawtal'} alt={selectedPet?.name} />
          <div className="pet-switch-row">
            {pets.map((pet) => (
              <button key={pet._id} className={`dot-name ${selectedPetId === pet._id ? 'active' : ''}`} onClick={() => setSelectedPetId(pet._id)}>
                {pet.name}
              </button>
            ))}
          </div>
        </div>
        <div className="info-card-lined">
          <div className="info-card-head">
            <h3>Thông tin cơ bản</h3>
            <span>✎</span>
          </div>
          <div className="lined-rows">
            <div><span>Tên</span><strong>{selectedPet?.name || '--'}</strong><span>Giới tính</span><strong>{selectedPet?.gender || '--'}</strong></div>
            <div><span>Loại thú nuôi</span><strong>{selectedPet?.type || '--'}</strong><span>Ngày sinh</span><strong>{formatDate(selectedPet?.dob)}</strong></div>
            <div><span>Giống</span><strong>{selectedPet?.breed || '--'}</strong><span>Tình trạng tiêm chủng</span><strong>{vaccinations.length ? 'Đã có lịch sử' : 'Chưa có'}</strong></div>
            <div><span>Dị ứng</span><strong>{health?.allergies || 'Không có dữ liệu'}</strong><span>Bệnh nền</span><strong>{health?.chronicDiseases || 'Không có dữ liệu'}</strong></div>
            <div><span>Ghi chú</span><strong>{health?.notes || 'Theo dõi định kỳ'}</strong></div>
          </div>
        </div>
      </section>

      <section className="table-card">
        <h3>Lịch sử tiêm chủng</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Loại vaccine</th><th>Ngày tiêm</th><th>Mũi nhắc</th><th>Nơi tiêm</th><th>Trạng thái</th></tr>
            </thead>
            <tbody>
              {vaccinations.map((item) => (
                <tr key={item._id}><td>{item.vaccineName}</td><td>{formatDate(item.date)}</td><td>{formatDate(item.nextDueDate)}</td><td>{item.provider || '--'}</td><td>{item.status || '--'}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="health-banner" style={{ backgroundImage: `url(${banner})` }}>
        <div className="health-banner-copy">
          <div className="mini-brand">Pawtal x PETPRO</div>
          <h2>Lịch trình tiêm phòng & lưu ý</h2>
          <button className="primary-btn small">Xem thêm</button>
        </div>
      </section>

      <section className="table-card">
        <h3>Nhật ký thăm khám</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Ngày khám</th><th>Lý do</th><th>Chẩn đoán</th><th>Điều trị</th><th>Cơ sở khám</th></tr>
            </thead>
            <tbody>
              {visits.map((item) => (
                <tr key={item._id}><td>{formatDate(item.visitDate)}</td><td>{item.reason || '--'}</td><td>{item.diagnosis || '--'}</td><td>{item.treatment || '--'}</td><td>{item.clinic || '--'}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
