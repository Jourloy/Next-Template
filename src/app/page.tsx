import Image from 'next/image'

export const metadata = {
    title: "Next Template",
};

export default function Home() {
    return (
        <main className={`min-h-screen grid place-items-center p-5`}>
            <div className={`max-w-[850px] w-[100%] flex justify-center`}>
                <div className={`max-w-[850px] w-[100%] grid grid-cols-2 gap-4 place-items-center`}>
                    <div className={`col-span-2 max-w-[850px] w-[100%] mb-[-50px]`}>
                        <div
                            className={`font-['SF_Pro_Display_Thin'] grid grid-cols-7 gap-4 
							place-items-center max-w-[850px] w-[100%] text-[90px] mb-[25px] md:text-[130px] md:mb-[25px]
							lg:text-[170px] lg:mb-[30px]`}
                        >
                            <h1>J</h1>
                            <h1>O</h1>
                            <h1>U</h1>
                            <h1 className={`rotate-180 text-indigo-500`}>R</h1>
                            <h1>L</h1>
                            <h1>O</h1>
                            <h1>Y</h1>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
