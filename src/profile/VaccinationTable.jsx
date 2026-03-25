function formatDate(value) {
  if (!value) return "--"
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return value
  return new Intl.DateTimeFormat("vi-VN").format(d)
}

function mapStatus(status) {
  if (status === "done") return "Đã tiêm"
  if (status === "pending") return "Chờ tiêm"
  return status || "--"
}

export default function VaccinationTable({ rows = [] }) {
  return (
    <section className="rounded-[24px] bg-[#dedede] px-6 py-5 shadow-sm">
      <h3 className="mb-4 text-lg font-bold uppercase text-slate-700">
        Lịch sử tiêm chủng
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-sm">
          <thead>
            <tr className="border-b border-slate-300 text-left uppercase text-slate-600">
              <th className="px-2 py-2">Tên vaccine</th>
              <th className="px-2 py-2">Ngày tiêm</th>
              <th className="px-2 py-2">Ngày nhắc lại</th>
              <th className="px-2 py-2">Nơi tiêm</th>
              <th className="px-2 py-2">Trạng thái</th>
              <th className="px-2 py-2">Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            {rows.length > 0 ? (
              rows.map((item) => (
                <tr key={item._id} className="border-b border-slate-300">
                  <td className="px-2 py-3">{item.vaccineName}</td>
                  <td className="px-2 py-3">{formatDate(item.date)}</td>
                  <td className="px-2 py-3">{formatDate(item.nextDueDate)}</td>
                  <td className="px-2 py-3">{item.provider || "--"}</td>
                  <td className="px-2 py-3">{mapStatus(item.status)}</td>
                  <td className="px-2 py-3">{item.notes || "--"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-2 py-4 text-center text-slate-500">
                  Chưa có dữ liệu tiêm chủng
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}