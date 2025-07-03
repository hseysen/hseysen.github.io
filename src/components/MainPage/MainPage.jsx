export default function MainPage() {
  return (
    <div className="flex flex-col mx-[140px] text-left font-[Chakra_Petch] mt-[120px] cursor-default">
      <h1 className="text-[#C6C6C6] text-[64px]">Hasan Isgandarli</h1>
      <span className="text-[#C6C6C6] text-[32px] mb-[32px] hover:text-[#F5F5F5] transition duration-300 cursor-default">
        AI Engineer | Game Developer | Data Science
      </span>

      <div className="flex flex-col gap-y-[48px]">
        {[
          { title: "Education", desc: "My Learning Journey" },
          { title: "Experience", desc: "My Learning Journey" },
          { title: "Projects", desc: "Things I've made" },
          { title: "Skills / Tech Stack", desc: "My Learning Journey" },
        ].map(({ title, desc }, index) => (
          <button
            key={index}
            className="px-[20px] text-sm text-[#C6C6C6] bg-transparent text-left border-solid border-4 border-[#C6C6C6] cursor-pointer rounded-[14px] font-[Chakra_Petch] transition duration-400 hover:border-[#5EC5EA] hover:rounded-[14px] hover:shadow-[20px_12px_2px_1px_#5EC5EA]"
          >
            <h2 className="text-[48px]">{title}</h2>
            <p className="text-[36px]">{desc}</p>
          </button>
        ))}

        <div className="flex flex-row gap-[80px]">
          {["Contact", "CV"].map((label, i) => (
            <button
              key={i}
              className="text-[#C6C6C6] text-[36px] font-[Chakra_Petch] bg-transparent px-[48px] py-[16px] border-solid border-4 border-[#C6C6C6] rounded-[14px] cursor-pointer hover:rounded-[14px] hover:shadow-[8px_8px_2px_1px_#5EC5EA] transition duration-400 hover:border-[#5EC5EA]"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
