// Email.js
import { useState } from "react";
import {
  EmailCardComponent,
  EmailDetails,
} from "../../Component/EmailComponents/Index-Email-Component";
import { useEmail } from "../../Contexts/EmailContext";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

const Email = () => {
  const { stateEmail, toggleFavorite, markAsRead, setFilter } = useEmail();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEmailId, setSelectedEmailId] = useState(null);
  const [selectedEmailBody, setSelectedEmailBody] = useState(null);
  const itemsPerPage = 10;

  const totalEmails = stateEmail?.data?.length || 0;
  const totalPages = Math.ceil(totalEmails / itemsPerPage);

  // Filter emails based on the selected filter
  const filteredEmails = stateEmail.data.filter((email) => {
    if (stateEmail.filter === "all") return true;
    if (stateEmail.filter === "read") return email.isRead;
    if (stateEmail.filter === "unread") return !email.isRead;
    if (stateEmail.filter === "favorite") return email.isFavorite;
    return true;
  });

  const currentEmails = filteredEmails.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
      setSelectedEmailId(emailId);
      markAsRead(emailId);
    } catch (error) {
      console.error("Error fetching email body:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 bg-background flex justify-start items-center w-full gap-2 pl-12 pt-12  ">
        <h3 className="">Filter By:</h3>
        <div className="flex  ml-1 gap-4 h-8 ">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("unread")}>Unread</button>
          <button onClick={() => setFilter("read")}>Read</button>
          <button onClick={() => setFilter("favorite")}>Favorites</button>
        </div>
      </header>
      <div className="min-h-screen flex bg-background border-2 border-green-500">
        <div className="ml-10 mr-10 w-auto h-[calc(100vh-6rem)] mt-20">
          <div className="h-full overflow-y-scroll scrollbar-hide no-scrollbar ">
            {currentEmails.length > 0 ? (
              currentEmails.map((data) => (
                <EmailCardComponent
                  key={data.id}
                  data={data}
                  isSelected={data.id === selectedEmailId}
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
