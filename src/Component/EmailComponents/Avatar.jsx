const Avatar = ({ src, className, children }) => {
  return (
    <div
      className={`flex items-center justify-center h-12 w-12 bg-accent rounded-full text-white font-bold text-xl ${className}`}
    >
      {children}
    </div>
  );
};

export { Avatar };
