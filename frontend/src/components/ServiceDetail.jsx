export default function ServiceDetail({ service }) {
  return (
    <div className="bg-gray-300 rounded-xl p-3 mt-10 m-1 flex flex-col justify-between shadow-md hover:shadow-lg transition duration-300 ease-in-out w-full max-w-xs md:max-w-sm lg:max-w-md">
      <h4 className="text-lg font-semibold">
        Service Name: {service.serviceName}
      </h4>
      <h3 className="text-xl font-bold">Service Price: {service.price}</h3>
      <p className="text-base mt-2">
        Service Description: {service.description}
      </p>
    </div>
  );
}
