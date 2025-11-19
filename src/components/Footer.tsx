
export default function Footer() {
    return(
        <>
            <footer className="p-8 w-full h-[205px] bg-[#F5F5F5] items-center justify-left flex flex-row gap-20">
                
                {/*컬럼(?)*/}
                <div className="flex flex-col gap-4">
                    <span className="font-semibold text-sm">최상단</span>
                    <nav className="flex flex-col gap-2 text-gray-800 text-sm">
                        <button>링크1</button>
                        <button>링크2</button>
                        <button>링크3</button>
                        <button>링크4</button>
                    </nav>
                </div>

            </footer>
        </>
    );
}