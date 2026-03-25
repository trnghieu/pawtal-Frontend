import { useEffect, useMemo, useState } from "react"

function toInputDate(value) {
  if (!value) return ""
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return ""
  return d.toISOString().slice(0, 10)
}

function toDisplayDate(value) {
  if (!value) return "--"
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return value
  return new Intl.DateTimeFormat("vi-VN").format(d)
}

function mapGender(value) {
  if (value === "male") return "Đực"
  if (value === "female") return "Cái"
  return "--"
}

function mapType(value) {
  if (value === "dog") return "Chó"
  if (value === "cat") return "Mèo"
  return "--"
}

function buildForm(pet) {
  return {
    name: pet?.name || "",
    dob: toInputDate(pet?.dob),
    gender: pet?.gender || "",
    type: pet?.type || "",
    breed: pet?.breed || "",
    weight: pet?.weight || "",
    sterilized: pet?.sterilized || "",
    identificationMark: pet?.identificationMark || pet?.description || "",
    petCode: pet?.petCode || pet?.code || pet?._id || "",
  }
}

function Field({
  label,
  value,
  name,
  editing = false,
  onChange,
  type = "text",
  options = [],
  fullRow = false,
}) {
  return (
    <div className={fullRow ? "md:col-span-2" : ""}>
      <div className="grid grid-cols-[140px_1fr] items-center border-b border-[#a8a8a8] py-[8px] text-[12px] text-[#555]">
        <span className="font-semibold uppercase text-[#4f4f4f]">{label}</span>

        {editing ? (
          type === "select" ? (
            <select
              name={name}
              value={value || ""}
              onChange={onChange}
              className="w-full bg-transparent outline-none"
            >
              <option value="">--</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              name={name}
              value={value || ""}
              onChange={onChange}
              className="w-full bg-transparent outline-none"
            />
          )
        ) : (
          <span className="uppercase text-[#666]">{value || "--"}</span>
        )}
      </div>
    </div>
  )
}

export default function HealthInfoCard({ pet, onSave }) {
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState(buildForm(pet))
  const [originalForm, setOriginalForm] = useState(buildForm(pet))

  useEffect(() => {
    const next = buildForm(pet)
    setForm(next)
    setOriginalForm(next)
    setEditing(false)
  }, [pet])

  const displayValues = useMemo(() => {
    return {
      ...form,
      dob: editing ? form.dob : toDisplayDate(form.dob),
      gender: editing ? form.gender : mapGender(form.gender),
      type: editing ? form.type : mapType(form.type),
      weight: editing ? form.weight : form.weight ? `${form.weight} kg` : "--",
      sterilized: editing
        ? form.sterilized
        : form.sterilized === true
        ? "Có"
        : form.sterilized === false
        ? "Không"
        : form.sterilized || "--",
    }
  }, [form, editing])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleEdit() {
    const next = buildForm(pet)
    setOriginalForm(next)
    setForm(next)
    setEditing(true)
  }

  function handleCancel() {
    setForm(originalForm)
    setEditing(false)
  }

  async function handleSubmit() {
    try {
      setSaving(true)

      const payload = {
        name: form.name,
        dob: form.dob,
        gender: form.gender,
        type: form.type,
        breed: form.breed,
        weight: form.weight ? Number(form.weight) : "",
        sterilized: form.sterilized,
        identificationMark: form.identificationMark,
        petCode: form.petCode,
      }

      await onSave(payload)
      setOriginalForm(form)
      setEditing(false)
    } catch (error) {
      alert(error.message || "Cập nhật thất bại")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="rounded-[28px] bg-[#dddddd] px-6 py-6 shadow-sm">
      <div className="mb-5 flex items-start justify-between">
        <h2 className="text-[18px] font-bold uppercase tracking-[0.02em] text-[#3f4853]">
          Thông tin cơ bản
        </h2>

        {!editing ? (
          <button
            type="button"
            onClick={handleEdit}
            className="rounded p-1 text-[16px] text-[#666] transition hover:bg-white/40"
            title="Chỉnh sửa"
          >
            ✎
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCancel}
              className="rounded-md border border-slate-400 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700"
            >
              Hủy
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={saving}
              className="rounded-md bg-[#0d5d92] px-3 py-1 text-xs font-semibold text-white disabled:opacity-60"
            >
              {saving ? "Đang lưu..." : "Lưu"}
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
        <Field
          label="Tên"
          name="name"
          value={displayValues.name}
          editing={editing}
          onChange={handleChange}
        />

        <Field
          label="Giới tính"
          name="gender"
          value={displayValues.gender}
          editing={editing}
          onChange={handleChange}
          type="select"
          options={[
            { label: "Đực", value: "male" },
            { label: "Cái", value: "female" },
          ]}
        />

        <Field
          label="Ngày sinh"
          name="dob"
          value={displayValues.dob}
          editing={editing}
          onChange={handleChange}
          type="date"
        />

        <Field
          label="Giống"
          name="breed"
          value={displayValues.breed}
          editing={editing}
          onChange={handleChange}
        />

        <Field
          label="Loài"
          name="type"
          value={displayValues.type}
          editing={editing}
          onChange={handleChange}
          type="select"
          options={[
            { label: "Chó", value: "dog" },
            { label: "Mèo", value: "cat" },
          ]}
        />

        <Field
          label="Tình trạng triệt sản"
          name="sterilized"
          value={displayValues.sterilized}
          editing={editing}
          onChange={handleChange}
          type="select"
          options={[
            { label: "Có", value: "Có" },
            { label: "Không", value: "Không" },
          ]}
        />

        <Field
          label="Cân nặng"
          name="weight"
          value={displayValues.weight}
          editing={editing}
          onChange={handleChange}
        />

        <Field
          label="Đặc điểm nhận dạng"
          name="identificationMark"
          value={displayValues.identificationMark}
          editing={editing}
          onChange={handleChange}
          fullRow
        />

        <Field
          label="Mã số định danh"
          name="petCode"
          value={displayValues.petCode}
          editing={editing}
          onChange={handleChange}
          fullRow
        />
      </div>
    </div>
  )
}