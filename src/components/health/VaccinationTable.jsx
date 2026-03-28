import { formatDate } from "../../utils/format";

export default function VaccinationTable({ items = [] }) {
  return (
    <section className="table-card">
      <h3>Lịch sử tiêm chủng</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Loại vaccine</th>
              <th>Ngày tiêm</th>
              <th>Mũi nhắc</th>
              <th>Nơi tiêm</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.vaccineName}</td>
                <td>{formatDate(item.date)}</td>
                <td>{formatDate(item.nextDueDate)}</td>
                <td>{item.provider || "--"}</td>
                <td>{item.status || "--"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}