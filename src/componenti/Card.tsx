import type { ReactNode } from "react";

type CardProps = {
  title: string;
  imgUrl: string;
  alreadyHave: boolean;
  children: ReactNode;
}


function Card({ title, imgUrl, alreadyHave, children }: CardProps) {
    return (
    <div className=" rounded-md bg-[oklch(0.62_0.23_138.44_/0.64)] border-2 border-green-600 max-[668px]:w-[90%] max-[668px]:mx-auto">
        <img src={imgUrl} alt="" style={{width: "100%", height: "200px", objectFit: "cover"}}></img>
        <div className="flex flex-col items-center p-4">
            <h2 className="text-2x1 text-[1.2em] text-white font-bold">{title}</h2>
            <p className=" text-[oklch(0.42 0 0)] mb-5" >{children}</p> 
            {alreadyHave && <span className="font-bold">✅ Ce l'ho!</span>} 
            {!alreadyHave && <span className="font-bold">❌ Non ce l'ho...</span>}
        </div>
    </div>
    )
  }
export default Card;