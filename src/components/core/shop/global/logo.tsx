import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="inline-flex items-center justify-between flex-shrink-0">
      <Image
        loading="lazy"
        alt=""
        width={100}
        height={100}
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec621f07-2217-40a5-b6a5-a3065c5f66a8?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec621f07-2217-40a5-b6a5-a3065c5f66a8?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec621f07-2217-40a5-b6a5-a3065c5f66a8?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec621f07-2217-40a5-b6a5-a3065c5f66a8?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec621f07-2217-40a5-b6a5-a3065c5f66a8?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec621f07-2217-40a5-b6a5-a3065c5f66a8?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec621f07-2217-40a5-b6a5-a3065c5f66a8?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec621f07-2217-40a5-b6a5-a3065c5f66a8?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&"
        className="aspect-[4] object-contain object-center w-40 overflow-hidden max-w-full self-start"
      />
    </div>
  );
};

export default Logo;
