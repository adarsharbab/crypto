import React from "react";
import { Instagram, Facebook, VideoIcon as Vimeo } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const TeamMemberCard = ({ name, role, imageUrl, socialLinks, imgCover }) => {
  return (
    <div className="text-center">
      <div className="mb-4 mx-auto w-40 h-40 overflow-hidden rounded-full">
        <img
          src={imageUrl}
          alt={name}
          className={`w-full h-full ${imgCover ? "object-cover" : ""}`}
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white glow">{name}</h3>
      <p className="text-blue-400 glow-subtle mb-4">{role}</p>
      {socialLinks && (
        <div className="flex justify-center space-x-4">
          {socialLinks.instagram1 && (
            <a
              href={socialLinks.instagram1}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Instagram size={24} />
            </a>
          )}
          {socialLinks.facebook && (
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Facebook size={24} />
            </a>
          )}
          {socialLinks.vimeo && (
            <a
              href={socialLinks.vimeo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Vimeo size={24} />
            </a>
          )}
          {socialLinks.x && (
            <a
              href={socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <FaXTwitter size={24} />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

const teamMembers = [
  {
    name: "Phil Torio (king of base)",
    role: "Crypto ambassador",
    imageUrl: "/team/phil.png",
    socialLinks: {
      x: "https://x.com/Philly_flowers1",
    },
  },
  {
    name: "Abdul Wahed",
    role: "Metaverse developer",
    imageUrl: "/team/abdul.png",
    socialLinks: {
      instagram1:
        "https://www.instagram.com/abdulwahed.forever/profilecard/?igsh=MnAzM3BwYTU2anNq",
    },
  },
  {
    name: "Jim Jimenez",
    role: "Illustrator",
    imageUrl: "/team/jim.png",
    socialLinks: {
      instagram1:
        "https://www.instagram.com/jimnjimenezart/profilecard/?igsh=MWZyZGhlMXZ0ZDF4bA==",
    },
  },

  {
    name: "Levy",
    role: "Colorist",
    imageUrl: "/team/levy.png",
    socialLinks: {
      facebook:
        "https://www.facebook.com/profile.php?viewas=100000686899395&id=100064002645850",
    },
  },

  {
    name: "Philip Bryan Valenzuela",
    role: "Motion comic developer",
    imageUrl: "/team/philip.png",
    socialLinks: {
      vimeo: "https://vimeo.com/flippmotion",
    },
  },
  {
    name: "Amine HRIGUICH",
    role: "Blockchain Developer",
    imageUrl: "/team/amine.jpg",
    socialLinks: {
      x: "https://x.com/Marodev",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 pb-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-white ">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`
                ${
                  index === teamMembers.length - 1 &&
                  teamMembers.length % 3 === 1
                    ? "sm:col-span-2 lg:col-span-1 lg:col-start-2"
                    : ""
                }
                ${
                  index === teamMembers.length - 1 &&
                  teamMembers.length % 2 === 1
                    ? "sm:col-span-2"
                    : ""
                }
              `}
            >
              <TeamMemberCard
                {...member}
                imgCover={member.imageUrl !== "/team/anthony.png"}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .glow {
          text-shadow: 0 0 10px #fff, 0 0 20px #0ff, 0 0 50px #0ff,
            0 0 60px #0ff, 0 0 100px #0ff;
        }
      `}</style>
    </section>
  );
}

