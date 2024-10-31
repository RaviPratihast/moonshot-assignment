import { formattedDate } from "../../utils/dateUtils/dateUtils";
import { Avatar } from "./Avatar";
import { useEmail } from "../../Contexts/EmailContext";
const EmailCardComponent = ({ data, onClick ,isSelected}) => {
  const GetFormattedDate = formattedDate(data.date);
  const { toggleFavorite } = useEmail();
  // const borderColor = data.isRead
  //   ? "border border-accent"
  //   : "border border-border";
  const borderColor = isSelected ? "border-red-500" : "border-border";

  return (
    <div
      className={`border border-border rounded-lg p-4 mt-6 mb-6 flex items-start gap-4 cursor-pointer ${borderColor}`}
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
        <div className="flex justify-start gap-4">
          <p className="text-xs text-gray-400 mt-2">{GetFormattedDate}</p>
          <button
            onClick={() => toggleFavorite(data.id)}
            className="text-accent font-semibold text-sm"
          >
            {data.isFavorite ? " Favorite " : ""}
          </button>
        </div>
      </div>
      {/* {ifMarkedFavourite &&  <p>favourite</p>} */}
      {/* and if i select on favuirte icon it will make it false and remove it from favourite list. */}
    </div>
  );
};

export { EmailCardComponent };
