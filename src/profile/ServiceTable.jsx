export default function ServiceTable({ rows = [] }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-slate-700 mb-4">Lịch sử dịch vụ</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-[#fdf2f2] text-slate-700">
            <tr>
              <th className="text-left p-3">Dịch vụ</th>
              <th className="text-left p-3">Ngày đặt</th>
              <th className="text-left p-3">Trạng thái</th>
              <th className="text-left p-3">Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            {rows.length > 0 ? (
              rows.map((row) => (
                <tr key={row.id} className="border-t">
                  <td className="p-3">{row.serviceName}</td>
                  <td className="p-3">{row.bookedAt}</td>
                  <td className="p-3">{row.status}</td>
                  <td className="p-3">{row.note}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center text-slate-500">
                  Chưa có dữ liệu dịch vụ
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}