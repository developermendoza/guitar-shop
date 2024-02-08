import { SeasonalSaleBanner } from "../ui/banner";
import imageBgUrl from "../../../public/images/banners/seasonal-banner-1.jpeg";
import mainImageUrl from "../../../public/images/banners/seasonal-main-1.png";

export default function SeasonalSale() {
  return (
    <div>
      <SeasonalSaleBanner
        imageBgUrl={imageBgUrl}
        mainImageUrl={mainImageUrl}
        preHeader="WINTER HOLIDAY"
        header="promotion sale up 45%"
        description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum officia quo repudiandae iste necessitatibus tenetur deleniti, sed, eveniet, distinctio hic laudantium? Odio sequi beatae repellat omnis quam consequatur, asperiores illum."
        textColor="text-white"
        saleProductsUrl="/sales/winter-2023"
      />
    </div>
  );
}
