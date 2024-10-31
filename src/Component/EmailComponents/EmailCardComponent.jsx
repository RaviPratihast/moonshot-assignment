import { formattedDate } from "../../utils/dateUtils/dateUtils";
import { Avatar } from "./Avatar";
import { useEmail } from "../../Contexts/EmailContext";
const EmailCardComponent = ({ data, onClick, isSelected }) => {
  const GetFormattedDate = formattedDate(data.date);
  const { toggleFavorite } = useEmail();

  const borderColor = isSelected ? "border-red-500" : "border-border";
  const bgColor = data.isFavorite ? "bg-readBackground" : "bg-background";

  return (
    <div
      className={`border rounded-lg p-4 mt-6 mb-6 flex items-start gap-4 cursor-pointer ${borderColor} ${bgColor}`}
      onClick={onClick}
    >
      <Avatar>{data.from.name[0].toUpperCase()}</Avatar>
      <div>
        <p className="text-sm text-text">
          From: <span className="font-bold">{data.from.name}</span> &lt;
          <span className="font-normal text-gray-700">{data.from.email}</span>
          &gt;
        </p>
        <p className="text-sm text-text">
          Subject: <span className="font-bold">{data.subject}</span>
        </p>
        <p className="text-text text-sm">
          {data.short_description.length > 40
            ? `${data.short_description.substring(0, 40)}...`
            : data.short_description}
        </p>
        <div className="flex justify-start items-center  gap-4 mt-2">
          <p className="text-xs text-text ">{GetFormattedDate}</p>
          <button
            onClick={() => toggleFavorite(data.id)}
            className="text-accent font-bold text-xs"
          >
            {data.isFavorite ? " Favorite " : ""}
          </button>
        </div>
      </div>
    </div>
  );
};

export { EmailCardComponent };
