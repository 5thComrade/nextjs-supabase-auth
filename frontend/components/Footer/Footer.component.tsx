import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer className="mt-4 bg-gray-100 px-4 py-2 flex items-center gap-2">
      <p className="font-light">This project is available on Github</p>
      <SocialIcon
        url="https://github.com/5thComrade/nextjs-supabase-auth"
        style={{ height: "32px", width: "32px" }}
      />
    </footer>
  );
}

export default Footer;
