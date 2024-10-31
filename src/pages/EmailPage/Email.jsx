import { useState } from "react";
import {
  EmailCardComponent,
  EmailDetails,
} from "../../Component/EmailComponents/Index-Email-Component";
import { useEmail } from "../../Contexts/EmailContext";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

const Email = () => {
  const { stateEmail } = useEmail();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEmailBody, setSelectedEmailBody] = useState(null);
  const itemsPerPage = 10;

  const totalEmails = stateEmail?.data?.list?.length || 0;
  const totalPages = Math.ceil(totalEmails / itemsPerPage);

  const currentEmails =
    stateEmail?.data?.list?.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    ) || [];

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const fetchEmailBody = async (emailId) => {
    try {
      const response = await fetch(
        `https://flipkart-email-mock.now.sh/?id=${emailId}`
      );
      const data = await response.json();
      setSelectedEmailBody({ body: data.body, id: emailId });
      console.log("okay");
    } catch (error) {
      console.error("Error fetching email body:", error);
    }
  };

  console.log("selectedEmailBody", selectedEmailBody);
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 bg-background flex w-full gap-2 pl-12 pt-10">
        <h3>Filter By:</h3>
        <div className="flex ml-4 gap-4 h-8">
          <h3>Unread</h3>
          <h3>Read</h3>
          <h3>Favorites</h3>
        </div>
      </header>
      <div className="min-h-screen flex bg-background border-2 border-green-500">
        <div className="ml-10 mr-10 w-auto h-[calc(100vh-6rem)] mt-20">
          <div className="h-full overflow-y-scroll scrollbar-hide no-scrollbar">
            {currentEmails.length > 0 ? (
              currentEmails.map((data) => (
                <EmailCardComponent
                  key={data.id}
                  data={data}
                  onClick={() => fetchEmailBody(data.id)}
                />
              ))
            ) : (
              <p>No emails to display.</p>
            )}
            <div className="flex justify-center items-center gap-2 p-2 mt-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="p-2 bg-accent text-white rounded disabled:opacity-50"
              >
                <GrFormPrevious />
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="p-2 bg-accent text-white rounded disabled:opacity-50"
              >
                <MdOutlineNavigateNext />
              </button>
            </div>
          </div>
        </div>
        <div className="mr-2">
          <EmailDetails emailData={selectedEmailBody} />
        </div>
      </div>
    </div>
  );
};

export { Email };
