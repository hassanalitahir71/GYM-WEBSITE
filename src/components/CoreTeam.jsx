import Card from "./Card";

export default function CoreTeam() {
  const teamMembers = [
    {
      name: "Sajjad Azam",
      role: "Muscle Instructor",
      image: "/img/core1 (2).png",
    },
    {
      name: "Ahmed Ali",
      role: "Crossfit Trainer",
      image: "/img/core2 (2).png",
    },
    {
      name: "Ibrar Hussain",
      role: "Fitness Coach",
      image: "/img/core3 (2).png",
    },
  ];
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-white">
        <div className="flex w-[80%]   flex-col items-center justify-center">
          <div className="bg-yellow h-4 w-4 rotate-45"></div>
          <div className="flex flex-row mt-4 items-center justify-center gap-5 text-black">
            <div className="mt-1 h-0 w-10 border border-black"></div>
            <h1 className="font-made font-bold">CORE TEAM</h1>
            <div className="mt-1 h-0 w-10 border border-black"></div>
          </div>

          <h1 className="font-made mt-5 text-4xl font-bold">
            TEAM OF GYM AND FITNESS
          </h1>
          <div className="grid mt-10 mb-10 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className=" flex cursor-pointer flex-col items-center"
              >
                <Card  img={member.image} role={member.role} name={member.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
