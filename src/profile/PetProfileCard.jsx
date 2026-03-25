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

function normalizeSterilized(value) {
  if (value === true) return "Có"
  if (value === false) return "Không"
  return value || ""
}

function Field({ label, value, editing, onChange, name, type = "text" }) {
  return (
    <div className="grid grid-cols-[110px_1fr] items-center border-b border-[#b9b9b9] py-2 text-[12px] text-[#555]">
      <span className="font-semibold uppercase">{label}</span>

      {editing ? (
        <input
          type={type}
          name={name}
          value={value || ""}
          onChange={onChange}
          className="w-full bg-transparent outline-none"
        />
      ) : (
        <span className="uppercase">{value || "--"}</span>
      )}
    </div>
  )
}

export default function PetProfileCard({ pet, onSave }) {
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    name: "",
    birthDate: "",
    species: "",
    weight: "",
    gender: "",
    breed: "",
    sterilized: "",
    identificationMark: "",
    code: "",
  })

  useEffect(() => {
    if (!pet) return
    setForm({
      name: pet.name || pet.petName || "",
      birthDate: toInputDate(pet.birthDate || pet.dob),
      species: pet.species || pet.type || "",
      weight: pet.weight || "",
      gender: pet.gender || "",
      breed: pet.breed || "",
      sterilized: normalizeSterilized(
        pet.sterilized === undefined ? pet.sterilizationStatus : pet.sterilized
      ),
      identificationMark: pet.identificationMark || pet.description || pet.note || "",
      code: pet.code || pet.petCode || pet.identifier || "",
    })
  }, [pet])

  const displayValues = useMemo(() => {
    return {
      ...form,
      birthDate: editing ? form.birthDate : toDisplayDate(form.birthDate),
    }
  }, [form, editing])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleCancel() {
    if (!pet) return
    setEditing(false)
    setForm({
      name: pet.name || pet.petName || "",
      birthDate: toInputDate(pet.birthDate || pet.dob),
      species: pet.species || pet.type || "",
      weight: pet.weight || "",
      gender: pet.gender || "",
      breed: pet.breed || "",
      sterilized: normalizeSterilized(
        pet.sterilized === undefined ? pet.sterilizationStatus : pet.sterilized
      ),
      identificationMark: pet.identificationMark || pet.description || pet.note || "",
      code: pet.code || pet.petCode || pet.identifier || "",
    })
  }

  async function handleSubmit() {
    try {
      setSaving(true)
      await onSave(form)
      setEditing(false)
    } catch (error) {
      alert(error.message || "Cập nhật thất bại")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="rounded-[24px] bg-[#dedede] px-6 py-5 h-[300px] shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[18px] font-bold uppercase text-[#4b4b4b]">
          Thông tin cơ bản
        </h2>

        {!editing ? (
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="text-sm text-[#666] hover:text-black"
            title="Chỉnh sửa"
          >
            ✎
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCancel}
              className="rounded-md border border-slate-400 px-3 py-1 text-xs font-semibold text-slate-700"
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

      <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
        <div>
          <Field
            label="Tên cậu"
            name="name"
            value={displayValues.name}
            editing={editing}
            onChange={handleChange}
          />
          <Field
            label="Ngày sinh"
            name="birthDate"
            type="date"
            value={displayValues.birthDate}
            editing={editing}
            onChange={handleChange}
          />
          <Field
            label="Loài"
            name="species"
            value={displayValues.species}
            editing={editing}
            onChange={handleChange}
          />
          <Field
            label="Cân nặng"
            name="weight"
            value={displayValues.weight}
            editing={editing}
            onChange={handleChange}
          />
        </div>

        <div>
          <Field
            label="Giới tính"
            name="gender"
            value={displayValues.gender}
            editing={editing}
            onChange={handleChange}
          />
          <Field
            label="Giống"
            name="breed"
            value={displayValues.breed}
            editing={editing}
            onChange={handleChange}
          />
          <Field
            label="Tình trạng triệt sản"
            name="sterilized"
            value={displayValues.sterilized}
            editing={editing}
            onChange={handleChange}
          />
          <Field
            label="Đặc điểm nhận dạng"
            name="identificationMark"
            value={displayValues.identificationMark}
            editing={editing}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mt-2">
        <Field
          label="Mã số định danh"
          name="code"
          value={displayValues.code}
          editing={editing}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}