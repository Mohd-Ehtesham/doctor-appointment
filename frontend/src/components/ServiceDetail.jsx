export default function ServiceDetail({ service }) {
  return (
    <div className="bg-gray-300 rounded-xl p-3 md:p-5 m-2 flex flex-col justify-between shadow-md hover:shadow-lg transition duration-300 ease-in-out w-full max-w-xs md:max-w-sm lg:max-w-md sm:max-w-md md:mt-10 sm:mt-20">
      <h4 className="text-sm md:text-lg font-semibold">
        Service Name: {service.serviceName}
      </h4>
      <h3 className="text-md md:text-xl font-bold">
        Service Price: {service.price}
      </h3>
      <p className="text-xs md:text-base mt-2">
        Service Description: {service.description}
      </p>
    </div>
  );
}
