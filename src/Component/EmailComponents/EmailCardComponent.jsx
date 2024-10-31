import { formattedDate } from "../../utils/dateUtils/dateUtils";
import { Avatar } from "./Avatar";
const EmailCardComponent = ({ data, onClick }) => {
  const GetFormattedDate = formattedDate(data.date);

  return (
    <div
      className={`border border-border rounded-lg p-4 mt-6 mb-6 flex items-start gap-4`}
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
        <p className="text-xs text-gray-400 mt-2">{GetFormattedDate}</p>
      </div>
    </div>
  );
};

export { EmailCardComponent };
