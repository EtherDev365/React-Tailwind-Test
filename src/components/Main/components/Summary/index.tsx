

const items = [
  {
    title: "YOU FLIP FLOP BACK AND FORTH IN RELATIONSHIPS",
    description: "Love can sometimes feel like an exhausting dance as you step towards connection, love and intimacy – only to then take a step back because you feel smothered and need to regain your space."   
  },
  {
    title: "YOU FEAR BEING BETRAYED IN RELATIONSHIPS",
    description: "As a fearful avoidant, your superpower is your ability to read other people. But this also means that you might overanalyze your partner’s behavior, micro-expressions and body language – always scanning for signs of betrayal and feeling uneasy"   
  },
  {
    title: "YOU OFTEN FEEL UNSEEN OR TAKEN ADVANTAGE OF",
    description: "You’re often very generous with your energy, time and support because of your empathetic nature. But sometimes you can “over-give”, feeling like you’ve been taken advantage of and that your needs, wants and opinions don’t really matter"   
  },
  {
    title: "PERFECTIONISM AND OVERWHELMING FEELINGS OF GUILT",
    description: "You set impossibly high standards for yourself because you believe you need to be perfect before you can be fully loved. You’re also prone to feeling excessive guilt, which only reinforces your belief that something is wrong with you."   
  }
]


const Summary = () => {
  return (
    <div className="relative xl:mt-10">
      <div className="w-full text-start px-4 xl:p-0">
        {items.map((item, index) => 
          <div key={index} className="mt-4">
            <div className="text-[15px] sm:text-[20px] xl:text-[17px] font-bold font-poppins tracking-[4px] xl:tracking-[6px]">
              {item.title}
            </div>
            <div className="text-[11px] sm:text-[14px] xl:text-[14px]  mt-4 font-poppins font-medium">
              {item.description}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Summary;
