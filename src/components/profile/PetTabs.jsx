import { NavLink } from "react-router-dom";

export default function PetTabs() {
  return (
    <div className="pet-tabs">
      <NavLink to="/ho-so/dinh-danh">CHỦ NUÔI</NavLink>
      <NavLink to="/ho-so/suc-khoe">SỨC KHỎE</NavLink>
      <NavLink to="/ho-so/bao-mat">BẢO MẬT</NavLink>
      <NavLink to="/ho-so/thanh-vien">THÀNH VIÊN</NavLink>
      <NavLink to="/dich-vu/dinh-vi">VỊ TRÍ</NavLink>
    </div>
  );
}