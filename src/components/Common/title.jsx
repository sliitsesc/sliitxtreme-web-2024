const Title = ({ title, className, aos }) => {
  return (
    <div className={`text-3xl md:text-3xl font-bold text-black text-center ${className}`} data-aos={aos}>
      {title}
    </div>
  );
};

export default Title;
