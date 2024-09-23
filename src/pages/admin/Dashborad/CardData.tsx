import { CARD_TITLE } from "@/constants/enums";
import { MoveUpRight, Route, SquareArrowOutUpRight, Timer } from "lucide-react";

const CardTitleLogo = ({ title }) => {
  const logoStyles = "p-1 w-fit rounded-lg "; // Reusable styles

  switch (title) {
    case CARD_TITLE.TOTAL_NEW_DEBTOR:
      return (
        <div className={logoStyles + ' bg-primaryThemeColor'}>
           <Route className="text-white h-5 w-5" />
        </div>
      );

    case CARD_TITLE.TOTAL_CREDIT_VALUE:
      return (
        <div className={logoStyles + ' bg-teal-500'}>
           <Timer className="text-white h-5 w-5" />
        </div>
      );

    case CARD_TITLE.AVG_INTEREST:
      return (
        <div className={logoStyles + ' bg-orange-500'}>
          <SquareArrowOutUpRight className="text-white h-5 w-5" />
        </div>
      );

    default:
      return null;
  }
};

const CardData = ({ title, percentage, lastUpdate, count }) => {
  return (
    <div className="flex justify-between bg-white rounded-2xl p-5 py-7 dark:bg-black">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <CardTitleLogo title={title} />
          <span className="text-gray-500 text-sm">{title}</span>
        </div>
        <div className="text-xl font-medium">
          {count}
        </div>
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <div className="flex items-center text-sm gap-2 justify-end">
          <MoveUpRight className="bg-green-600 h-4 w-4 text-white rounded-full p-[3px]" />{" "}
          {percentage}%
        </div>
        <p className="text-gray-500 text-sm">{lastUpdate}</p>
      </div>
    </div>
  );
};

export default CardData;
