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

export default function PetSidebar({ pet }) {
  const imageSrc =
    pet?.avatar?.url ||
    pet?.avatar ||
    pet?.image ||
    "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=800&q=80"

  return (
    <div className="overflow-hidden rounded-[24px] bg-[#f3f3f3] shadow-sm">
      <div className="relative aspect-square w-full overflow-hidden bg-white">
        <img
          src={imageSrc}
          alt={pet?.name || "Pet"}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=800&q=80"
          }}
        />

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-3">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-sm shadow"
            title="Chụp ảnh"
          >
            📷
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-sm shadow"
            title="Tải ảnh lên"
          >
            🖼️
          </button>
        </div>
      </div>
    </div>
  )
}