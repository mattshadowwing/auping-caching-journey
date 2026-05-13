import Link from "next/link";
import { ServerPokemonListAction } from "@/components/ServerPokemonListAction";
import { ClientPokemonListAction } from "@/components/ClientPokemonListAction";

// Force static generation - full page cache
export const dynamic = "force-static";
export const revalidate = 3600;

export default function Round3() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Round 3 - Server Action with Cache
          </h1>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <h2 className="mb-2 text-lg font-semibold text-orange-900 dark:text-orange-100">
              Caching Strategy
            </h2>
            <p className="text-sm text-orange-700 dark:text-orange-300">
              • <code className="rounded bg-orange-100 px-1 py-0.5 dark:bg-orange-800">
                dynamic = &quot;force-dynamic&quot;
              </code>
              <br />
              • Both components use the same cached Server Actions
              <br />
              • Server actions leveraging Nextjs{" "}
              <code className="rounded bg-orange-100 px-1 py-0.5 dark:bg-orange-800">
                &quot;fetch api&quot;
              </code>{" "}
              caching
              <br />
              • Cache lifetime: 24 hours (
              <code className="rounded bg-orange-100 px-1 py-0.5 dark:bg-orange-800">
                revalidate: 60 * 60 * 24
              </code>
              )
              <br />• Unified caching layer shared between server and client
              components
            </p>
          </div>

          {/* Navigation */}
          <nav className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/"
              className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              Default
            </Link>
            <Link
              href="/round-1"
              className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              Round 1
            </Link>
            <Link
              href="/round-2"
              className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              Round 2
            </Link>
            <Link
              href="/round-3"
              className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white"
            >
              Round 3
            </Link>
          </nav>
        </div>

        {/* Server Component Section */}
        <div className="mb-12">
          <ServerPokemonListAction />
        </div>

        {/* Client Component Section */}
        <div>
          <ClientPokemonListAction />
        </div>
      </div>
    </div>
  );
}
