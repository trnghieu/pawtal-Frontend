import usePetData from "../hooks/usePetData";
import { cloudinaryUrl, imageOrFallback } from "../utils/cloudinary";
import { formatDate } from "../utils/format";

export default function HealthPage() {
  const {
    pets,
    selectedPet,
    selectedPetId,
    setSelectedPetId,
    health,
    vaccinations,
    visits,
  } = usePetData();

  const banner = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HEALTH_BANNER, {
      transforms: "f_auto,q_auto,w_1600",
    }),
    "https://images.unsplash.com/photo-1583512603806-077998240c7a?auto=format&fit=crop&w=1600&q=80"
  );

  return (
    <div className="page-shell page-stack">
      <div className="page-header-row">
        <h1>Hồ sơ sức khỏe thú cưng</h1>
        <span className="lang-chip">VIE/ENG</span>
      </div>

      <section className="health-summary-row">
        <div className="health-pet-panel">
          <div className="health-pet-image-wrap">
            <img
              src={
                selectedPet?.avatar?.url ||
                selectedPet?.avatar ||
                "https://placehold.co/700x700/ece4d5/0b5d91?text=Pawtal"
              }
              alt={selectedPet?.name || "Pet"}
              className="health-pet-image"
            />
          </div>

          <div className="health-pet-actions">
            <button type="button" className="health-icon-btn" title="Camera">
              📷
            </button>
            <button type="button" className="health-icon-btn" title="Gallery">
              🖼️
            </button>
          </div>

          <div className="pet-switch-row">
            {pets.map((pet) => (
              <button
                key={pet._id}
                type="button"
                className={`dot-name ${selectedPetId === pet._id ? "active" : ""}`}
                onClick={() => setSelectedPetId(pet._id)}
              >
                {pet.name}
              </button>
            ))}
          </div>
        </div>

        <div className="health-basic-card">
          <div className="health-basic-card__head">
            <h3>THÔNG TIN CƠ BẢN</h3>
            <button type="button" className="health-edit-btn" title="Chỉnh sửa">
              ✎
            </button>
          </div>

          <div className="health-basic-lines">
            <div className="health-line health-line--full">
              <span className="label">TÊN:</span>
              <span className="value">{selectedPet?.name || "--"}</span>
            </div>

            <div className="health-line-grid">
              <div className="health-line">
                <span className="label">NGÀY SINH:</span>
                <span className="value">{formatDate(selectedPet?.dob)}</span>
              </div>

              <div className="health-line">
                <span className="label">GIỚI TÍNH:</span>
                <span className="value">{selectedPet?.gender || "--"}</span>
              </div>
            </div>

            <div className="health-line-grid">
              <div className="health-line">
                <span className="label">LOẠI:</span>
                <span className="value">{selectedPet?.type || "--"}</span>
              </div>

              <div className="health-line">
                <span className="label">GIỐNG:</span>
                <span className="value">{selectedPet?.breed || "--"}</span>
              </div>
            </div>

            <div className="health-line-grid">
              <div className="health-line">
                <span className="label">CÂN NẶNG:</span>
                <span className="value">
                  {selectedPet?.weight ? `${selectedPet.weight} KG` : "--"}
                </span>
              </div>

              <div className="health-line">
                <span className="label">TÌNH TRẠNG TRIỆT SẢN:</span>
                <span className="value">
                  {selectedPet?.neutered ? "CÓ" : "CHƯA CÓ"}
                </span>
              </div>
            </div>

            <div className="health-line health-line--full">
              <span className="label">ĐẶC ĐIỂM NHẬN DẠNG:</span>
              <span className="value">
                {health?.notes || "Không có dữ liệu"}
              </span>
            </div>

            <div className="health-line health-line--full">
              <span className="label">MÃ SỐ ĐỊNH DANH:</span>
              <span className="value">
                {selectedPet?.petCode || selectedPet?._id?.slice(-8)?.toUpperCase() || "--"}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="table-card">
        <h3>Lịch sử tiêm chủng</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Loại vaccine</th>
                <th>Ngày tiêm</th>
                <th>Mũi nhắc</th>
                <th>Nơi tiêm</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {vaccinations.map((item) => (
                <tr key={item._id}>
                  <td>{item.vaccineName}</td>
                  <td>{formatDate(item.date)}</td>
                  <td>{formatDate(item.nextDueDate)}</td>
                  <td>{item.provider || "--"}</td>
                  <td>{item.status || "--"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section
        className="health-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
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
              <tr>
                <th>Ngày khám</th>
                <th>Lý do</th>
                <th>Chẩn đoán</th>
                <th>Điều trị</th>
                <th>Cơ sở khám</th>
              </tr>
            </thead>
            <tbody>
              {visits.map((item) => (
                <tr key={item._id}>
                  <td>{formatDate(item.visitDate)}</td>
                  <td>{item.reason || "--"}</td>
                  <td>{item.diagnosis || "--"}</td>
                  <td>{item.treatment || "--"}</td>
                  <td>{item.clinic || "--"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}