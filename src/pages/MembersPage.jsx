export default function MembersPage() {
  return (
    <div className="page-shell page-stack">
      <section className="page-banner blue-card inverse">
        <h1>Thành viên</h1>
        <p>Mời thành viên gia đình hoặc bác sĩ thú y cùng theo dõi hồ sơ và lịch sử chăm sóc.</p>
      </section>
      <div className="simple-grid">
        {['Minh Anh', 'Bác sĩ Lan', 'Anh Huy'].map((name) => (
          <article key={name} className="card-soft member-card">
            <div className="avatar-circle">{name[0]}</div>
            <h3>{name}</h3>
            <p>{name === 'Bác sĩ Lan' ? 'Veterinarian' : 'Chủ sở hữu được chia sẻ quyền truy cập'}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
