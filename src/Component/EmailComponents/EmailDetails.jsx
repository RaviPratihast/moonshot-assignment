import { Avatar } from "./Index-Email-Component";
import { useEmail } from "../../Contexts/EmailContext";
import { formattedDate } from "../../utils/dateUtils/dateUtils";

const EmailDetails = ({ emailData }) => {
  const { stateEmail, dispatchEmail, toggleFavorite } = useEmail();

  const { id, body } = emailData;

  const selectedEmailFromList = stateEmail.data.filter(
    (data) => data.id === id
  );

  const GetFormattedDate = formattedDate(selectedEmailFromList[0].date);

  return (
    <div className="p-6 shadow-lg  rounded-lg mt-[6.6rem]  mx-auto max-w-30 sm:max-w-md xl:max-w-[65rem] xl:h-[calc(100vh-8rem)]  monitor:max-w-[85rem] monitor:h-[calc(100vh-8rem)] border border-border">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-4">
          <Avatar>{selectedEmailFromList[0].from.name[0].toUpperCase()}</Avatar>
          <div className="flex flex-col items-start gap-8 ">
            <h1 className="text-xl font-semibold text-gray-800">
              {selectedEmailFromList[0].subject}
            </h1>
            <p className="text-gray-500 text-sm">{GetFormattedDate}</p>
          </div>
        </div>
        <button
          className="px-4 mr-14 py-1 bg-accent text-white rounded-full text-sm hover:border hover:border-accent hover:bg-background hover:text-text"
          onClick={() => toggleFavorite(id)}
        >
          {selectedEmailFromList[0].isFavorite
            ? "Marked as favorite"
            : "Mark as Favorite"}
        </button>
      </div>

      <div
        className="text-gray-700 text-sm leading-relaxed text-justify px-[4rem] mt-10 "
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
};

export { EmailDetails };
