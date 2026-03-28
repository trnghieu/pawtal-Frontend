export default function OwnerInfoCard({ user, selectedPet }) {
  return (
    <div className="owner-info-card">
      <div className="owner-info-card__head">
        <h3>THÔNG TIN CHỦ NUÔI</h3>
        <button type="button">✎</button>
      </div>

      <div className="owner-info-card__rows">
        <div className="owner-line"><span>TÊN</span><strong>{user?.name || "--"}</strong></div>
        <div className="owner-line"><span>SỐ ĐIỆN THOẠI</span><strong>{user?.phone || "--"}</strong></div>
        <div className="owner-line"><span>EMAIL</span><strong>{user?.email || "--"}</strong></div>
        <div className="owner-line"><span>THÚ NUÔI ƯU TIÊN</span><strong>{selectedPet?.name || "--"}</strong></div>
        <div className="owner-line"><span>ĐỊA CHỈ</span><strong>{user?.address || "--"}</strong></div>
      </div>
    </div>
  );
}