export default function AddServiceModal({
  isOpen,
  onClose,
  onSubmit,
  price,
  serviceName,
  description,
  setPrice,
  setServiceName,
  setDescription,
}) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div className="bg-white rounded-lg p-6 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12">
        <h2 className="text-lg font-bold mb-4">Add Service</h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          {/* Service Name */}
          <div className="flex flex-col">
            <label htmlFor="serviceName" className="mb-1">
              Service Name
            </label>
            <input
              className="border border-pink-500 rounded-lg p-2"
              type="text"
              name="serviceName"
              id="serviceName"
              value={serviceName}
              onChange={(event) => setServiceName(event.target.value)}
              placeholder="Service name..."
              required
            />
          </div>
          {/* Description */}
          <div className="flex flex-col">
            <label htmlFor="description" className="mb-1">
              Description
            </label>
            <textarea
              className="border border-pink-500 rounded-lg p-2"
              name="description"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Description..."
              required
            />
          </div>
          {/* Price */}
          <div className="flex flex-col">
            <label htmlFor="price" className="mb-1">
              Price
            </label>
            <input
              className="border border-pink-500 rounded-lg p-2"
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              placeholder="Price..."
              required
            />
          </div>
          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className="bg-pink-300 text-white py-2 px-4 rounded-md hover:bg-pink-500 transition duration-300"
            >
              Add Service
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
