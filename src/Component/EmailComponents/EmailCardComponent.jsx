const EmailCardComponent = () => {
  return (
    <div className="border border-accent  rounded-lg p-4 max-w-md mx-auto my-4 flex items-start gap-4">
      {/* avatar circle will be here */}
      <div className="flex items-center justify-center h-12 w-12 bg-accent rounded-full text-white font-bold text-xl">
        F
      </div>
      {/* details of the email wil be here */}

      <div>
        <p className="text-sm text-text">
          From: <span className="font-bold">Foo Bar</span> &lt;
          <span className="font-normal text-gray-700">foo.bar@gmail.com</span>
          &gt;
        </p>
        <p className="text-sm text-text">
          Subject: <span className="font-bold">Lorem Ipsum</span>
        </p>
        <p className="text-text text-sm truncate">
          Vestibulum sit amet ipsum aliquet, lacinia ...
        </p>
        <p className="text-xs text-gray-400 mt-2">26/02/2020 10:30am</p>
      </div>
    </div>
  );                                                        
};

export { EmailCardComponent };
