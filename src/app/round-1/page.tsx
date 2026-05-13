import Link from "next/link";
import { ServerPokemonList } from "@/components/ServerPokemonList";
import { ClientPokemonList } from "@/components/ClientPokemonList";

// Force static generation - full page cache
export const dynamic = "force-static";
export const revalidate = 60 * 60 * 24;

export default function Round1() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Round 1 - Full Page SSG
          </h1>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h2 className="mb-2 text-lg font-semibold text-green-900 dark:text-green-100">
              Caching Strategy
            </h2>
            <p className="text-sm text-green-700 dark:text-green-300">
              • <code className="rounded bg-green-100 px-1 py-0.5 dark:bg-green-800">
                dynamic = &quot;force-static&quot;
              </code>
              <br />
              • Full page is statically generated at build time
              <br />
              • Server component data is baked into the HTML
              <br />• Client component fetches on first client render (then cached by Apollo on browser session)
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
              className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white"
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
              className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              Round 3
            </Link>
          </nav>
        </div>

        {/* Server Component Section */}
        <div className="mb-12">
          <ServerPokemonList />
        </div>

        {/* Client Component Section */}
        <div>
          <ClientPokemonList />
        </div>
      </div>
    </div>
  );
}
