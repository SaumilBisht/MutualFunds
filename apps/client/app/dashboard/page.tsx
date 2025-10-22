import { auth } from "@/auth"
import MfTable from "./components/MfTable"

export default async function Dashboard() {

  const session = await auth()
  const user = session?.user

  return (
    <main className="mt-[64px] py-2 px-6">
      <h1 className="text-2xl font-semibold mb-4">Available Mutual Funds</h1>

      <div className="border p-4 mb-6 rounded-lg shadow">
        <MfTable />
      </div>

      {user ? (
        <p className="text-gray-700">Logged in as {user.name}</p>
      ) : (
        <p className="text-gray-500">
          You’re browsing as a guest. Sign in to continue your KYC and SIP setup.
        </p>
      )}
    </main>
  )
}
