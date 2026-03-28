import { formatDate } from "../../utils/format";

export default function BasicInfoCard({ selectedPet, health, vaccinations }) {
  return (
    <div className="health-basic-card">
      <div className="health-basic-card__head">
        <h3>THÔNG TIN CƠ BẢN</h3>
        <button type="button" className="health-edit-btn">✎</button>
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
            <span className="label">TIÊM CHỦNG:</span>
            <span className="value">
              {vaccinations.length ? "ĐÃ CÓ LỊCH SỬ" : "CHƯA CÓ"}
            </span>
          </div>
        </div>

        <div className="health-line health-line--full">
          <span className="label">DỊ ỨNG:</span>
          <span className="value">{health?.allergies || "KHÔNG CÓ DỮ LIỆU"}</span>
        </div>

        <div className="health-line health-line--full">
          <span className="label">BỆNH NỀN:</span>
          <span className="value">
            {health?.chronicDiseases || "KHÔNG CÓ DỮ LIỆU"}
          </span>
        </div>

        <div className="health-line health-line--full">
          <span className="label">GHI CHÚ:</span>
          <span className="value">{health?.notes || "THEO DÕI ĐỊNH KỲ"}</span>
        </div>
      </div>
    </div>
  );
}