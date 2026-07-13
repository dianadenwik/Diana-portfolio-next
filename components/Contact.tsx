import { sendMessage } from "@/app/contact/actions";

export default function Contact() {
  return (
    <section className="py-12 max-w-lg">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-brand pl-4">
        Get in Touch
      </h2>

      <form action={sendMessage} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="name"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
            className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="example@domain.com"
            className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Enter your message"
            className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:bg-gray-800 dark:text-white resize-none border-gray-300 dark:border-gray-600"
          />
        </div>

        <p className="text-xs text-gray-400">* Required fields</p>

        <button
          type="submit"
          className="bg-brand text-white px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 w-full sm:w-auto"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}