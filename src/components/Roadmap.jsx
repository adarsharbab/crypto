import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Rocket,
  Wrench,
  Zap,
  Expand,
  Headphones,
  Users,
  Sunrise,
  ChevronDown,
} from "lucide-react";
import { GlowingBorder } from "@/App";

const phases = [
  {
    title: "Phase 1: Foundation",
    icon: <Rocket className="w-6 h-6" />,
    content: [
      "Develop the concept for the Crypto Man comic and Metaverse.",
      "Set up social media and community channels to start building awareness.",
      "Finalize the tokenomics and smart contract development for the Cryptopher Reeves coin, which will govern the entire Crypto Man metaverse.",
      "Build partnerships and collaborations with artists, developers, and influencers in the crypto space.",
    ],
  },
  {
    title: "Phase 2: Preparation",
    icon: <Wrench className="w-6 h-6" />,
    content: [
      "Character development for Cryptopher Reeves, Crypto Man, and the Cryptonian Crystal, along with other key figures like Aurora Chains and Dark Chain.",
      "Begin production of the comic and motion comic for the Crypto Man universe.",
      "Create the first series of dynamic NFTs tied to the Cryptopher Reeves coin and the Crypto Man universe.",
      "Develop and integrate a minting section on the website where users can mint limited edition dynamic NFTs, with exclusivity due to limited numbers.",
      "Deploy the smart contract for the Cryptopher Reeves coin.",
      "Build a marketing and awareness campaign to promote the limited NFT drop and the fair launch, gathering community support.",
      "Initiate discussions with blockchain platforms for potential NFT minting or marketplace partnerships, such as OpenSea or Rarible, for broader exposure.",
    ],
  },
  {
    title: "Phase 3: Launch",
    icon: <Zap className="w-6 h-6" />,
    content: [
      "Initiate the fair launch of the Cryptopher Reeves coin.",
      "Provide initial liquidity and lock it for at least one year to ensure stability in early trading.",
      "Offer exclusive NFTs tied to the fair launch for early supporters.",
      "Deploy the smart contract for the rewards system, enabling staking of tokens in the contract. Coin holders will earn rewards based on their activity within the ecosystem, such as staking and engagement.",
      "Engage with the community through live airdrops during events.",
    ],
  },
  {
    title: "Phase 4: Expansion",
    icon: <Expand className="w-6 h-6" />,
    content: [
      "Begin fundraising for the development of a 3D virtual reality comic based on the Crypto Man universe.",
      "Add the marketing and development wallet to the ecosystem, with tokens locked and vested over time. This ensures transparency and responsible fund use for ongoing development and promotion.",
      "Use the Cryptopher Reeves coin as a versatile utility token, enabling access to a wide range of features in the ecosystem. This includes unlocking exclusive content, customizing NFTs, accessing special items and experiences, and earning rewards.",
      "Introduce the concept of governance to the community, explaining how it will allow coin holders to vote on fund allocation and project direction in the future. Full governance implementation will come once the community is more established.",
      "Release additional NFT series with exclusive traits tied to Crypto Man, Aurora Chains, Dark Chain, and other characters.",
      "Explore further partnerships and collaborations to expand the reach of the Cryptopher Reeves coin and its ecosystem.",
    ],
  },
  {
    title: "Phase 5: Immersion",
    icon: <Headphones className="w-6 h-6" />,
    content: [
      "Develop the 3D virtual reality experience of the Crypto Man comic, transitioning from a 2D motion comic to a fully immersive environment.",
      "Create an interactive metaverse where users can explore the world of Crypto Man, interact with characters, and engage in exclusive NFT sales and events.",
      "Offer unique experiences within the metaverse, where the Cryptopher Reeves coin serves as the governing currency and tool for participation, accessing special content, and shaping the evolving storyline.",
      "Begin implementing the governance system gradually, enabling early decision-making on minor aspects of the project, such as content releases and NFT features.",
    ],
  },
  {
    title: "Phase 6: Engagement",
    icon: <Users className="w-6 h-6" />,
    content: [
      "Host virtual events and interactive experiences within the metaverse, offering exclusive NFT and token rewards to participants.",
      "Begin hosting events where users can buy exclusive NFTs, upgrades, and other virtual items within the Crypto Man universe.",
      "Expand the community through marketing campaigns and strategic partnerships that grow the Cryptopher Reeves coin's user base.",
      "Integrate cross-chain compatibility for NFTs and tokens, further expanding the utility of the Cryptopher Reeves coin within the metaverse.",
      "Collaborate with other NFT and crypto projects to broaden the reach of the Cryptopher Reeves coin ecosystem.",
    ],
  },
  {
    title: "Phase 7: Evolution",
    icon: <Sunrise className="w-6 h-6" />,
    content: [
      "Continuously update and enhance the metaverse experience, including the immersive comic features.",
      "Develop new storylines, characters, and interactive experiences, governed by Cryptopher Reeves coin holders through a decentralized voting system.",
      "Expand the lore and backstory of the universe, adding new elements as directed by the coin's governance structure.",
      "Grow the ecosystem with new utility features for the Cryptopher Reeves coin, enabling governance decisions, rewards, and real-world applications for both the coin and NFTs.",
    ],
  },
];

const TimelineCard = ({ phase, index, isFirst, inView }) => {
  const [isOpen, setIsOpen] = useState(isFirst ? true : false);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <div
      className={`flex flex-col md:flex-row pt-5 md:pt-0 ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      } items-stretch ${isFirst ? "pt-0" : ""}`}
    >
      <div
        className={`w-full md:w-[calc(50%-20px)] ${
          index % 2 === 0 ? "md:pl-8" : "md:pr-8"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card
            className={`border-2 ${index % 2 === 0 ? "md:mr-4" : "md:ml-4"} ${
              index == 0 ? "mt-4" : ""
            }  ${
              index == 6 ? "mb-4" : ""
            } border-[#00f3ff] transition-colors duration-300 h-full bg-black`}
            style={{
              boxShadow: `0 0 15px ${"#00f3ff"}`,
            }}
          >
            <CardContent
              className="p-4 cursor-pointer h-full flex flex-col justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className=" text-white p-2 rounded-full flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: {
                        opacity: 1,
                        height: "auto",
                        marginTop: "16px",
                      },
                      collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    className="bg-black rounded-xl overflow-hidden"
                  >
                    <motion.ul
                      className="list-disc pl-5 space-y-2 text-sm p-4"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1 },
                        collapsed: { opacity: 0 },
                      }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      {phase.content.map((item, itemIndex) => (
                        <motion.li
                          className="text-white"
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <div className="hidden md:flex flex-col items-center justify-center w-10 relative">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white z-10"
        >
          {phase.icon}
        </motion.div>
      </div>
    </div>
  );
};

export default function Roadmap() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <GlowingBorder>
      <section ref={ref} className="py-20 px-4 ">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-10 text-white"
        >
          Our Vision for the Future
        </motion.h2>
        <div className="max-w-4xl mx-auto relative overflow-hidden">
          <div
            className="hidden md:block w-0.5 bg-black absolute left-1/2 -translate-x-1/2"
            style={{
              top: "24px",
              bottom: "24px",
              backgroundColor: "#00f3ff",

              boxShadow: `0 0 15px ${"#00f3ff"}, 0 0 5px ${"#00f3ff"}`,
            }}
          ></div>
          {phases.map((phase, index) => (
            <TimelineCard
              key={index}
              phase={phase}
              index={index}
              isFirst={index === 0}
              inView={inView}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: phases.length * 0.1 }}
          className="text-center mt-20"
        >
          {/*<Button className="bg-gradient-to-r from-[#41b2fe] to-[#ff2b2b] text-white hover:opacity-90 transition-opacity">
            Join Our Journey
          </Button>*/}
        </motion.div>
      </section>
    </GlowingBorder>
  );
}

