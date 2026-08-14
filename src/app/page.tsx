import { auth } from  "@/src/lib/auth"
import Link from "next/link";

export default async function Home(){
  const session = await auth();

  if(!session){
    return <div>
      Kamu Belum{" "}
      <Link style={{ color: "blue" }} href={"/api/auth/sigin"}>LOGIN</Link>
    </div>
  }

  return <div>{JSON.stringify(session)}</div>
}