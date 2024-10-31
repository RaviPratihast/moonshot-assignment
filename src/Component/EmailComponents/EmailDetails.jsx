import { Avatar } from "./Index-Email-Component";
import { useEmail } from "../../Contexts/EmailContext";
import { formattedDate } from "../../utils/dateUtils/dateUtils";

const EmailDetails = ({ emailData }) => {
  if (!emailData) {
    return (
      <div className="p-8 text-gray-500 mt-24">
        Select an email to view its details.
      </div>
    );
  }

  const { stateEmail } = useEmail();
  const { id, body } = emailData;

  console.log(id, body);
  const selectedEmailFromList = stateEmail.data.list.filter(
    (data) => data.id === id
  );

  console.log("selectedEmailData", selectedEmailFromList[0].date);
  const GetFormattedDate = formattedDate(selectedEmailFromList[0].date);

  return (
    <div className="p-8 shadow-lg border border-border rounded-lg mt-[6.6rem] mb-5 mx-auto max-w-30 sm:max-w-md xl:max-w-[60rem] 2xl:max-w-[68rem]">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-4">
          <Avatar>{selectedEmailFromList[0].from.name[0].toUpperCase()}</Avatar>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
            </h1>
            <p className="text-gray-500 text-sm">{GetFormattedDate}</p>
          </div>
        </div>
        <button
          className="px-4 py-1 bg-accent text-white rounded-full text-sm hover:bg-red-600 transition"
        >
          Mark as favorite
        </button>
      </div>

      <div className="text-gray-700 text-sm leading-relaxed">{body}</div>
    </div>
  );
};

export { EmailDetails };
