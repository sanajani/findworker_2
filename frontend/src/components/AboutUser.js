
const AboutUser = ({name,personalInfo}) => {
  return (
    <div className="p-8 shadow-xl bg-gray-300 my-5 font-persionFont">
        <h1 className="text-2xl md:text-3xl font-bold my-2 text-right">جان {name} درمورد</h1>
        <p className="text-2xl text-right font-thin">
          {personalInfo}
        </p>
    </div>
  )
}

export default AboutUser