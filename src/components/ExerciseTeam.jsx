import Card from "./Card";

function ExerciseTeam() {

    const teamMembers = [
      {
        name: "Ayesha Fatima",
        role: "Youga Instructor",
        image: "/img/team1.png",
      },
      {
        name: "Amir Hussain",
        role: "Nutritionist",
        image: "/img/team2.png",
      },
      {
        name: "Zain Ali",
        role: "Calisthenics Coach",
        image: "/img/team3.png",
      },
    ];
  return (
    <>
      <div className="flex h-screen sm:h-auto md:h-auto w-full   justify-center bg-white">
        <div className="flex w-[80%]  h-full flex-col items-center justify-center">
          <div className="bg-yellow h-4 w-4 rotate-45"></div>
          <div className="mt-4 flex flex-row items-center justify-center gap-5 text-black">
            <div className="mt-1 h-0 w-10 border border-black"></div>
            <h1 className="font-made font-bold">CORE TEAM</h1>
            <div className="mt-1 h-0 w-10 border border-black"></div>
          </div>

          <h1 className="font-made mt-5 text-4xl font-bold">
            TEAM OF GYM AND FITNESS
          </h1>
          <div className="mt-10 mb-27 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex cursor-pointer flex-col items-center"
              >
                
                <Card
                  img={member.image}

                  role={member.role}
                  name={member.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExerciseTeam;
