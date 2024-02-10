import { Metadata } from "next";
import Dashboard from "~~/components/Dashboard";
import DefaultLayout from "~~/components/Dashboard/DefaultLayout";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";

export default function Home() {
  return (
    <ScaffoldEthAppWithProviders>
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </ScaffoldEthAppWithProviders>
  );
}
