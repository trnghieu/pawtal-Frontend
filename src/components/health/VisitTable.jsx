import { formatDate } from "../../utils/format";

export default function VisitTable({ items = [] }) {
  return (
    <section className="table-card">
      <h3>Nhật ký thăm khám</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Ngày khám</th>
              <th>Lý do</th>
              <th>Chẩn đoán</th>
              <th>Điều trị</th>
              <th>Cơ sở khám</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{formatDate(item.visitDate)}</td>
                <td>{item.reason || "--"}</td>
                <td>{item.diagnosis || "--"}</td>
                <td>{item.treatment || "--"}</td>
                <td>{item.clinic || "--"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}