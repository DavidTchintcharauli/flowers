import ConnectSupabaseSteps from "./components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "./components/tutorial/sign-up-user-steps";
import ProductsPage from "./products/page";
import { hasEnvVars } from "./utils/supabase/check-env-vars";

export default async function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        <ProductsPage />
      </main>
    </>
  );
}
