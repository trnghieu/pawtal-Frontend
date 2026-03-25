function formatDate(value) {
  if (!value) return "--"
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return value
  return new Intl.DateTimeFormat("vi-VN").format(d)
}

export default function MedicalVisitTable({ rows = [] }) {
  return (
    <section className="rounded-[24px] bg-[#dedede] px-6 py-5 shadow-sm">
      <h3 className="mb-4 text-lg font-bold uppercase text-slate-700">
        Nhật ký thăm khám
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[980px] text-sm">
          <thead>
            <tr className="border-b border-slate-300 text-left uppercase text-slate-600">
              <th className="px-2 py-2">Ngày khám</th>
              <th className="px-2 py-2">Lý do</th>
              <th className="px-2 py-2">Chẩn đoán</th>
              <th className="px-2 py-2">Điều trị</th>
              <th className="px-2 py-2">Phòng khám</th>
              <th className="px-2 py-2">Bác sĩ</th>
              <th className="px-2 py-2">Tái khám</th>
            </tr>
          </thead>
          <tbody>
            {rows.length > 0 ? (
              rows.map((item) => (
                <tr key={item._id} className="border-b border-slate-300">
                  <td className="px-2 py-3">{formatDate(item.visitDate)}</td>
                  <td className="px-2 py-3">{item.reason || "--"}</td>
                  <td className="px-2 py-3">{item.diagnosis || "--"}</td>
                  <td className="px-2 py-3">{item.treatment || "--"}</td>
                  <td className="px-2 py-3">{item.clinic || "--"}</td>
                  <td className="px-2 py-3">{item.vetName || "--"}</td>
                  <td className="px-2 py-3">{formatDate(item.nextVisitDate)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-2 py-4 text-center text-slate-500">
                  Chưa có lịch sử thăm khám
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}