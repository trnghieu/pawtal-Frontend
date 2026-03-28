import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { formatDate } from "../utils/format";

const PAWTAL_LOGO =
  "https://res.cloudinary.com/dlipnztpt/image/upload/v1774662844/Screenshot_2026-03-17_111732-removebg-preview_oqju55.png";

function InfoItem({ label, value }) {
  return (
    <div className="public-pet-info-item">
      <span>{label}</span>
      <strong>{value || "--"}</strong>
    </div>
  );
}

export default function PublicPetPage() {
  const { publicCode } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchPet() {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/pets/public/${publicCode}`
        );
        setPet(res.data.data);
        setNotFound(false);
      } catch (error) {
        setPet(null);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPet();
  }, [publicCode]);

  if (loading) {
    return (
      <div className="public-pet-page">
        <div className="public-pet-shell">
          <div className="public-pet-loading">Đang tải thông tin thú cưng...</div>
        </div>
      </div>
    );
  }

  if (notFound || !pet) {
    return (
      <div className="public-pet-page">
        <div className="public-pet-shell">
          <div className="public-pet-empty">
            <img src={PAWTAL_LOGO} alt="Pawtal" className="public-pet-logo" />
            <h1>Không tìm thấy thông tin thú cưng</h1>
            <p>Mã QR này không hợp lệ hoặc hồ sơ đã bị xóa.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="public-pet-page">
      <div className="public-pet-shell">
        <div className="public-pet-header">
          <img src={PAWTAL_LOGO} alt="Pawtal" className="public-pet-logo" />
          <div className="public-pet-header__text">
            <h1>Thông tin thú cưng</h1>
            <p>Trang thông tin công khai từ mã QR Pawtal</p>
          </div>
        </div>

        <div className="public-pet-card">
          <div className="public-pet-main">
            <div className="public-pet-avatar-wrap">
              <img
                src={
                  pet?.avatar?.url ||
                  "https://placehold.co/500x500/ece4d5/0b5d91?text=Pawtal"
                }
                alt={pet?.name}
                className="public-pet-avatar"
              />
            </div>

            <div className="public-pet-summary">
              <div className="public-pet-chip">{pet?.type?.toUpperCase() || "PET"}</div>
              <h2>{pet?.name}</h2>
              <p className="public-pet-code">Mã công khai: {pet?.publicCode}</p>

              <div className="public-pet-grid">
                <InfoItem label="Giống" value={pet?.breed} />
                <InfoItem label="Giới tính" value={pet?.gender} />
                <InfoItem label="Ngày sinh" value={formatDate(pet?.dob)} />
                <InfoItem label="Cân nặng" value={pet?.weight ? `${pet.weight} kg` : "--"} />
                <InfoItem label="Màu lông" value={pet?.color} />
                <InfoItem label="Microchip" value={pet?.microchipId} />
              </div>
            </div>
          </div>

          <div className="public-pet-owner-card">
            <h3>Thông tin chủ sở hữu</h3>
            <div className="public-pet-owner-grid">
              <InfoItem label="Họ tên" value={pet?.owner?.name} />
              <InfoItem label="Số điện thoại" value={pet?.owner?.phone} />
              <InfoItem label="Email" value={pet?.owner?.email} />
              <InfoItem label="Địa chỉ" value={pet?.owner?.address} />
            </div>
          </div>

          {pet?.qrCode?.url ? (
            <div className="public-pet-qr-card">
              <h3>Mã QR định danh</h3>
              <img src={pet.qrCode.url} alt="Pet QR Code" className="public-pet-qr" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}