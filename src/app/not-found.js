// app/not-found.js
import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Nicole Santarsiero",
};

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="card__frame not-found__card">
        <p className="not-found__code">404</p>
        <h1>This page got lost in the scrapbook</h1>
        <p>
          The page you&apos;re looking for was never glued in. Let&apos;s get
          you back to the good stuff.
        </p>
        <Link className="send not-found__link" href="/">
          back to home
        </Link>
      </div>
    </section>
  );
}
