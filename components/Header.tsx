import Image from "next/image";

const profileImage = "/profile.jpg";

function Header() {
  return (
    <header className="py-16 text-center bg-linear-to-br from-blue-300 to-indigo-700 rounded-2xl mb-4 shadow-lg">
      <Image
        src={profileImage}
        alt="Young woman works on a computer"
        width={144}
        height={144}
        className="w-36 h-36 rounded-full mx-auto mb-6 object-cover shadow-lg ring-4 ring-white dark:ring-gray-700"
      />
      <h1 className="text-5xl font-bold text-white mb-3">Diana Chukhrai</h1>
      <p className="text-lg font-medium text-blue-200 mb-3">
        Frontend Developer in Training
      </p>
      <p className="text-blue-100 max-w-sm mx-auto text-sm leading-relaxed">
        HackYourFuture c55 · Paid Social Specialist · Based in Netherlands 🇳🇱
      </p>
    </header>
  );
}

export default Header;
