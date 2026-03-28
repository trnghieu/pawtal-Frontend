const members = [
  { id: 1, name: "Nguyễn Minh Anh", role: "Chủ nuôi chính", email: "minhanh@pawtal.local" },
  { id: 2, name: "Trần Thu Hà", role: "Người thân", email: "thuha@pawtal.local" },
  { id: 3, name: "Phòng khám PETPRO", role: "Đối tác chăm sóc", email: "support@petpro.vn" },
];

export default function MembersPage() {
  return (
    <div className="page-shell page-stack">
      <section className="settings-page-card">
        <div className="settings-page-card__head">
          <h1>Thành viên liên kết</h1>
          <span className="lang-chip">MEMBERS</span>
        </div>

        <div className="member-grid">
          {members.map((member) => (
            <article key={member.id} className="member-card">
              <div className="member-card__avatar">{member.name.charAt(0)}</div>
              <div className="member-card__body">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <span>{member.email}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}