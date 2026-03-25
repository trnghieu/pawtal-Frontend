function ActionIcon() {
  return <button className="text-xs text-[#666]">✎</button>
}

export default function MedicalTable({ rows = [] }) {
  return (
    <section className="rounded-[24px] bg-[#dedede] px-6 py-5 shadow-sm">
      <h3 className="mb-4 text-[18px] font-bold uppercase text-[#4b4b4b]">Nhật ký thăm khám</h3>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-[11px] text-[#555]">
          <thead>
            <tr className="border-b border-[#bfbfbf] text-left uppercase">
              <th className="px-2 py-2">◷ Ngày khám</th>
              <th className="px-2 py-2">◷ Vấn đề/lý do</th>
              <th className="px-2 py-2">◷ Điều trị/uống thuốc</th>
              <th className="px-2 py-2">◷ Ngày tái khám</th>
              <th className="px-2 py-2">◷ Cơ sở thăm khám</th>
              <th className="px-2 py-2"></th>
            </tr>
          </thead>

          <tbody>
            {(rows.length ? rows : [
              {
                id: 1,
                treatedAt: "10/10/2022",
                diagnosis: "Khám sức khỏe tổng quát",
                treatment: "Kiểm tra mắt, tiêm ve/rận",
                nextVisit: "Không có",
                clinic: "Petpro Hospital",
              },
              {
                id: 2,
                treatedAt: "22/04/2024",
                diagnosis: "Ngứa tai, gãi nhiều",
                treatment: "Nhỏ thuốc Otic, vệ sinh tai",
                nextVisit: "29/04/2024",
                clinic: "Petpro Hospital",
              },
            ]).map((row) => (
              <tr key={row.id} className="border-b border-[#c9c9c9]">
                <td className="px-2 py-3">{row.treatedAt}</td>
                <td className="px-2 py-3">{row.diagnosis}</td>
                <td className="px-2 py-3">{row.treatment}</td>
                <td className="px-2 py-3">{row.nextVisit}</td>
                <td className="px-2 py-3">{row.clinic}</td>
                <td className="px-2 py-3 text-right">
                  <ActionIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="mt-4 text-[11px] font-semibold text-[#5d5d5d] underline">
        Cập nhật lịch sử thăm khám
      </button>
    </section>
  )
}