import MakeCenter from "../components/make-center";
import { data } from "../data/data";
const Initiatives = () => {
  return (
    <div id="initiatives">
      <MakeCenter>
        <h1 className="heading">Work Experience</h1>
        <div className="flex flex-col gap-10">
            {data.workexperience.map((workexperience) => 
            <div key={workexperience.id} className="full-card w-full max-w-4xl smooth-trasnsition">
              <div className="   flex justify-between items-center">
                <h1 className="text-2xl font-medium p-4">{workexperience.CompanyName}</h1>
                <img src={workexperience.CompanyLogoURL} alt={`${workexperience.CompanyName} logo`} className="h-10 cursor-pointer" onClick={()=>window.open(workexperience.CompanyWebSiteURL)}/>
                </div>
                <h3 className="text-1xl font-small p-4 text-gray-500">{workexperience.Designation}</h3>
                <h3 className="text-1xl font-small p-4">{workexperience.RoleDescription}</h3>
                <h4 className="text-1xl font-small p-4 text-gray-500">{workexperience.StartDate} - {workexperience.EndDate}</h4>
              </div>
          )}
        </div>
      </MakeCenter>
    </div>
  );
};

export default Initiatives;
