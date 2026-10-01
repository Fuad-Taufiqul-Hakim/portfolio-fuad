import { isRouteErrorResponse, useRouteError } from "react-router";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFoundPage() {
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? error.status : error ? 500 : 404;
  const message =
    status === 404
      ? "This page doesn't exist — maybe it mutated."
      : "Something went wrong while loading this page.";

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-gradient font-display text-8xl font-bold">{status}</p>
      <h1 className="mt-4 text-2xl font-semibold">
        {status === 404 ? "Page not found" : "Unexpected error"}
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">{message}</p>
      <ButtonLink to="/" className="mt-8">
        Back to homepage
      </ButtonLink>
    </div>
  );
}
