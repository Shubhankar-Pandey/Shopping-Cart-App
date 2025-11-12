function BuyNowPageItem({ cartItem }) {
  return (
    <div className="flex items-center justify-between bg-white p-5 rounded-xl shadow-md border border-gray-200">

      {/* Product image */}
      <div className="w-28 h-28">
        <img
          src={cartItem.image}
          alt={cartItem.title}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      {/* Title + Price */}
      <div className="flex flex-col w-[35%] ml-5">
        <p className="font-bold text-xl">{cartItem.title}</p>
        <p className="text-green-600 font-extrabold text-xl">
          ₹ {cartItem.price.toLocaleString()}
        </p>
      </div>

      {/* Specifications */}
      <div className="flex flex-col text-sm text-gray-700 font-medium w-[40%]">
        <p>Processor: {cartItem.processor}</p>
        <p>Storage: {cartItem.space} GB</p>
        <p>Front Camera: {cartItem.frontCamera}</p>
        <p>Rear Camera: {cartItem.rearCamera}</p>
      </div>

    </div>
  );
}

export default BuyNowPageItem;
