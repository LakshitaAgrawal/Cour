export default function Mycourse(){
    return (
        <div className="my-10 ml-[5%]">
            <div className="w-[29%] px-4 py-6 rounded-xl shadow-2xl shadow-[#D9D9D9]">
                <div>
                    <img className="w-full h-full" src="../img/MCimg1.png"/>
                </div>
                <div className="space-y-3 mt-2">
                    <p className="font-pop font-semibold text-[18px]">AWS Certified Solutions Architect</p>
                    <div className=" flex items-center">
                        <img className="w-[32px] h-[32px]" src="../img/RCimg2.png"/>
                        <p className="font-pop font-medium text-[16px]">Lina</p>
                    </div>
                    <div className="h-[5px] bg-[#D9D9D9]">
                        <div className="h-[5px] bg-[#1DBF73]"></div>
                    </div>
                    <p className="font-pop text-end text-[12px]">Lesson 5 of 7</p>
                </div>
            </div>
        </div>
    );
}