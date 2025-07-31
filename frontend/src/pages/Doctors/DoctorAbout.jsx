
import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Vivek Maurya
          </span>
        </h3>
        <p className="text_para">
          It takes years of education and training to become a doctor. Before
          starting medical school, students enrol in general education courses
          as well as courses in Biology, Chemistry, and Physics. After that,
          students attend medical school for four to five years. In medical
          school, graduates often receive a doctor degree after the completion
          of the course.{" "}
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semiblod">
                {formateDate("12-03-2014")} - {formateDate("1-06-2016")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[16px] leading-6 font-medium text-textColor">
            Madras Medical College, Chennai
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semiblod">
              {formateDate("1-05-2017")} -  {formateDate("3-05-2022")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                MBBS in Surgeon
              </p>
            </div>
            <p className="text-[16px] leading-6 font-medium text-textColor">
            College of Physicians and Surgeons of Mumbai           
             </p>
          </li>
        </ul>
      </div>


      <div className="mt-12">
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
        <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semiblod">
            {formateDate("1-05-2017")} -  {formateDate("3-05-2022")}
            </span>
           
            <p className="text-[16px] leading-6 font-medium text-textColor">
                Sr. Surgeon
              </p>
                  
            <p className="text-[14px] leading-6 font-medium text-textColor">
            College of Physicians and Surgeons of Mumbai 
              </p>
        </li>
        <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semiblod">
            {formateDate("1-05-2019")} -  {formateDate("3-07-2022")}
            </span>
           
            <p className="text-[16px] leading-6 font-medium text-textColor">
                Sr. Surgeon
              </p>
                  
            <p className="text-[14px] leading-6 font-medium text-textColor">
            Madras Medical College, Chennai
              </p>
        </li>
        </ul>
        

      </div>









    </div>
  );
};

export default DoctorAbout;
