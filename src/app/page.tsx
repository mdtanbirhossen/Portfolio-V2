import Banner from "@/components/Banner/Banner";


export default async function Home() {
  const res = await fetch('https://ijrp-backend-production-01eb.up.railway.app/v1/admin?limit=100&page=1')
  const data = await res.json()
  return (
    <div className=" flex flex-col md:flex-row">

      <p className="">About me</p>
      <div className="text-7xl">Tanbir Hossen</div>
      <Banner data={data.data} />
    </div>
  );
}
