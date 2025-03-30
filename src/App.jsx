import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import Roadmap from "./components/Roadmap";
import {
  DiscIcon as Discord,
  Send,
  BookOpen,
  ChevronDown,
  X,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./components/ui/chart";
import { NavBar } from "./components/Navbar";
import useEmblaCarousel from "embla-carousel-react";
import { FaXTwitter } from "react-icons/fa6";
import TeamSection from "./components/Team";
import AnimatedModal from "./components/AnimatedModal";

export const GlowingBorder = ({
  children,
  className = "",
  borderColor = "#00f3ff",
}) => {
  return (
    <div className={`relative ${className}`}>
      {children}
      <div
        className="
          absolute left-0 right-0 bottom-0
          h-[1px] bg-[#00f3ff]
          before:absolute before:inset-0
          before:animate-pulse
          animate-pulse
        "
        style={{
          boxShadow: `0 0 15px ${borderColor}, 0 0 5px ${borderColor}`,
        }}
      />
    </div>
  );
};

const GlowWrapper = ({ children, className, rounded }) => {
  return (
    <div className={"relative " + className}>
      {children}
      <div
        className={
          rounded
            ? `
absolute inset-0 z-0
border border-[#00f3ff]
before:absolute before:inset-0
before:border before:border-[#00f3ff]
before:animate-pulse
shadow-[0_0_15px_#00f3ff]
[box-shadow:_0_0_15px_#00f3ff,_inset_0_0_15px_#00f3ff]
animate-pulse
rounded-lg before:rounded-lg
`
            : `
absolute inset-0 z-0
border border-[#00f3ff]
before:absolute before:inset-0
before:border before:border-[#00f3ff]
before:animate-pulse
shadow-[0_0_15px_#00f3ff]
[box-shadow:_0_0_15px_#00f3ff,_inset_0_0_15px_#00f3ff]
animate-pulse
`
        }
      />
    </div>
  );
};

export function Hero({ showVideo, setShowVideo }) {
  const [isGifLoaded, setIsGifLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/coin.gif";
    img.onload = () => setIsGifLoaded(true);
  }, []);

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden">
      {showVideo && (
        <AnimatedModal isOpen={showVideo} onClose={() => closeVideo()} />
      )}
      <div className="absolute inset-0">
        <img
          src="/Main Section.jpg"
          alt="Crypto background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-8">
        <div className="flex flex-col items-center">
          {isGifLoaded ? (
            <img
              src="/coin.gif"
              width={200}
              height={200}
              alt="Cryptopher Reeves Coin Animated Logo"
              className="w-48 h-48 object-contain"
            />
          ) : (
            <div className="w-48 h-48 bg-gray-300 animate-pulse rounded-full"></div>
          )}
          <h1 className="mt-4 text-4xl font-bold text-white text-shadow-lg">
            Cryptopher Reeves Coin
          </h1>
          <p className="mt-2 text-xl text-white text-shadow-md">
            Welcome to a new era of Crypto/Comics/virtual reality
          </p>
        </div>
        <div className="space-y-4 text-center max-w-2xl">
          <p className="text-sm sm:text-base text-white">
            The Cryptopher Reeves Token - the fuel powering the Crypto Man
            Metaverse! More than just a token, this dynamic cryptocurrency
            integrates seamlessly into our ecosystem, unlocking exclusive comic
            content, unique experiences, and limited edition NFTs. With utility
            at its core, the Cryptopher Reeves Coin invites you to dive into the
            future of digital entertainment and storytelling.
          </p>
        </div>
        <Button
          className="mt-8 bg-[#0052FF] text-white hover:bg-[#0052FF]/90"
          onClick={() =>
            document
              .getElementById("legend")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore the Crypto Man Universe <ChevronDown className="ml-2" />
        </Button>
        <Button
          className="mt-8 bg-[#0052FF] text-white hover:bg-[#0052FF]/90"
          onClick={() =>
            {
              window.open("https://www.dextools.io/app/en/token/cryptopherreeves", "_blank", "noopener,noreferrer");
            }
          }
        >
          DEXTOOLS CHART
        </Button>
        
      </div>
    </section>
  );
}

export function WebComic() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <GlowingBorder>
      <section className="py-20  px-4 " ref={sectionRef}>
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Cryptoman Web Comic
        </h2>
        <div className="relative max-w-3xl mx-auto aspect-video bg-gray-100 flex items-center justify-center">
          {!isVideoVisible ? (
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <Play className="w-16 h-16 text-[#0052FF]" />
            </div>
          ) : (
            <GlowWrapper>
              <video
                ref={videoRef}
                width="100%"
                height="100%"
                src="/CRYPTOMANwebcomic.mp4"
                title="CRYPTOMANwebcomic"
                autoPlay
                playsInline
                loop
                muted
              />{" "}
            </GlowWrapper>
          )}
        </div>
        <p className="text-center mt-5 text-xl">Chapter 1 Coming soon</p>

        <p className="mt-5 text-center max-w-2xl mx-auto text-white">
          Unleash the legend. Crypto Man isn’t just a comic—it’s a revolution.
          Experience a story powered by the blockchain, where heroes rise, the
          stakes are cosmic, and you’re at the center of it all. Your journey
          starts now.
        </p>
      </section>
    </GlowingBorder>
  );
}

export function MetaVerseSection() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <GlowingBorder>
      <section className="py-20  px-4 " ref={sectionRef}>
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Cryptoman Metaverse
        </h2>
        <div className="relative max-w-3xl mx-auto aspect-video bg-gray-100 flex items-center justify-center">
          {!isVideoVisible ? (
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <Play className="w-16 h-16 text-[#0052FF]" />
            </div>
          ) : (
            <GlowWrapper>
              <video
                ref={videoRef}
                width="100%"
                height="100%"
                src="/Cman_Intro_4k.mp4"
                title="CRYPTOMAN metaverse"
                autoPlay
                playsInline
                loop
                muted
              />{" "}
            </GlowWrapper>
          )}
        </div>
        
        <p className="mt-5 text-center max-w-2xl mx-auto text-white">
          Welcome to the Crypto Man Metaverse! Step into a groundbreaking virtual reality experience where you become part of the comic world. Explore immersive rooms that transport you inside the story, offering cinematic adventures and gamified spaces. Dive into an experience unlike anything you’ve seen before!
        </p>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <a 
            href="https://www.spatial.io/s/CRYPTOMAN-METAVERSE-675b9936e2bed5fe54b9be7d?share=2633470775055379742" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid black",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Enter Metaverse
            </button>
          </a>
        </div>
      </section>
    </GlowingBorder>
  );
}

export function LegendBegins() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <GlowingBorder>
      <section className="py-20 px-4 " ref={sectionRef}>
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          The Legend Begins
        </h2>
        <div className="relative max-w-3xl mx-auto aspect-video bg-gray-100 flex items-center justify-center ">
          {!isVideoVisible ? (
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <Play className="w-16 h-16 text-[#0052FF]" />
            </div>
          ) : (
            <GlowWrapper>
              <video
                className="relative z-10 border border-[#00f2ff] "
                ref={videoRef}
                width="100%"
                height="100%"
                src="/Crypto final colour.mp4"
                title="Crypto Man Origin Story"
                autoPlay
                playsInline
                controls
                loop
              />
            </GlowWrapper>
          )}
        </div>
        <p className="max-w-2xl mx-auto text-center mt-10">
          Cryptopher Reeves was a brilliant scientist whose life was shattered
          when his wife and unborn child died due to a preventable technological
          failure. Consumed by guilt, he conducted a dangerous experiment on
          himself to push the boundaries of human potential. The experiment left
          him with Node Collapse Syndrome, confining him to a wheelchair. Years
          later, a mysterious Ethereum-like crystal crashed to Earth, bonding
          with Cryptopher and transforming him into Crypto Man—a hero with
          superhuman abilities and a mission to protect humanity from corruption
          and greed. But his rise awakened Dark Chain, a vengeful force
          determined to plunge the world into chaos. Now, Crypto Man must fight
          to save the future while concealing his true identity.
        </p>

        {/* New GIF and Section */}
        <div className="mt-20">
          <div className="max-w-3xl mx-auto ">
            <h3 className="text-2xl font-bold mb-10 text-white text-center ">
              Build Your Crypto Man: Unlock the Power of Cryptonia
            </h3>
            <GlowWrapper>
              <img
                src="/dynamicNfts.gif"
                alt="Dynamic NFTs transitioning"
                className="w-full h-auto"
              />
            </GlowWrapper>
          </div>
          <div className="mt-10 text-center">
            <p className="max-w-2xl mx-auto">
              Forge your hero with our dynamic NFT collection! Customize Crypto
              Man with mystery box upgrades and uncover rare fragments of
              Cryptonia. These ultra-rare NFTs grant exclusive perks and open
              doors to unique adventures within our metaverse.
            </p>
          </div>
        </div>
      </section>
    </GlowingBorder>
  );
}

const characters = [
  {
    name: "Cryptopher Reeves",
    description:
      "Cryptopher Reeves, a renowned AI enthusiast, was a visionary driven by the promise of technology to elevate humanity. Known for his genius in cryptocurrency and artificial intelligence, he pushed the limits of innovation, tirelessly creating solutions for a more empowered, decentralized world. But beneath his accomplishments lay a tragedy that shaped his journey—a personal loss that ignited his resolve to create technology that could protect and serve others.",
    image: "/chars/Cryptopher Reeves .png",
  },
  {
    name: "Crypto Man",
    description:
      "One fateful day, Cryptopher encountered a mysterious crystal, the Ethereal Crystal, seemingly drawn to him from a distant world. When he touched it, the crystal bonded with his DNA, healing him from a disabling condition and transforming him into Crypto Man. Empowered with superhuman abilities, Cryptopher now defends humanity from hidden threats and dark forces within the digital and physical worlds. Driven by both purpose and resilience, he dedicates his life to protecting freedom and the future of technology as Crypto Man.",
    image: "/chars/Cryptoman.png",
  },
  {
    name: "Dark Chain",
    description:
      "Dark Chain was once a celestial guardian, a being of light entrusted with advanced knowledge and cosmic power. His desire to control and manipulate these forces led to his banishment from the divine realm. Now a fallen figure, Dark Chain leverages forbidden knowledge to create chaos, seeking to dominate decentralized systems and bend humanity's future to his will. The Ethereal Crystal, once under his protection, is now the key to his ultimate revenge—a source of power he will stop at nothing to reclaim.",
    image: "/chars/Dark chain.png",
  },
  {
    name: "Aurora Chains",
    description:
      "Aurora Chains is a time traveler from a distant future where technology has evolved to unimaginable levels. Sent back to protect humanity, she's on a mission to guide Crypto Man, warning him of powerful forces that threaten the digital world and beyond. Though her knowledge of the future is vast, Aurora remains cryptic, knowing that revealing too much could disrupt the course of events. She feels an undeniable connection to Crypto Man, rooted in a shared destiny tied to the Ethereal Crystal, guiding him from the shadows as a guardian of knowledge and protector of freedom.",
    image: "/chars/Aurora Chains.png",
  },
];

export function StepInsideComic() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <GlowingBorder>
      <section className="py-20 px-4 ">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Unveiling the Future: AI-Enhanced Character Reveal NFTs
        </h2>
        <div className="max-w-7xl mx-auto relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {characters.map((character) => (
                <div
                  className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_100%] md:flex-[0_0_520px] "
                  key={character.name}
                >
                  <Card
                    key={character.name}
                    className="flex flex-col md:flex-row h-full overflow-hidden w-[100%] md:w-[500px]  bg-black"
                  >
                    <div className="md:w-1/3 relative">
                      <div
                        className="
            absolute inset-0 z-0
            border border-[#00f3ff]
            before:absolute before:inset-0
            before:border before:border-[#00f3ff]
            before:animate-pulse
            shadow-[0_0_15px_#00f3ff]
            [box-shadow:_0_0_15px_#00f3ff,_inset_0_0_15px_#00f3ff]
            animate-pulse
            "
                      />
                      <img
                        src={character.image}
                        alt={`Character portrait of ${character.name}`}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-6 flex-grow md:w-2/3 relative">
                      <div
                        className="
            absolute inset-0 z-0
            border border-[#00f3ff]
            before:absolute before:inset-0
            before:border before:border-[#00f3ff]
            before:animate-pulse
            shadow-[0_0_15px_#00f3ff]
            [box-shadow:_0_0_15px_#00f3ff,_inset_0_0_15px_#00f3ff]
            animate-pulse
            "
                      />
                      <h3 className="text-xl font-bold mb-4 text-white">
                        {character.name}
                      </h3>
                      <p className="text-sm text-white">
                        {character.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <Button
            className="absolute left-4 xl:-left-16 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/20 text-black z-10"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            className="absolute right-4 xl:-right-16 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/20 text-black z-10"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        <p className="mt-10 text-center max-w-2xl mx-auto text-white">
          Witness Crypto Man's first adventure as he navigates the treacherous
          landscape of digital threats and blockchain mysteries. Join the
          journey and be part of the story!
        </p>
        <div className="text-center mt-8">
          {/*<Button className="bg-[#0052FF] text-white hover:bg-[#0052FF]/90">
            Subscribe for Future Chapters
          </Button>*/}
        </div>
      </section>
    </GlowingBorder>
  );
}

const NFTCollection = () => {
  return (
    <GlowingBorder>
      <section
        className="py-20 px-4 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/NFT section.jpg')" }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          aria-hidden="true"
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            Own a Piece of the Crypto Man Universe
          </h2>
          <p className="text-center mb-8">
            Our limited-edition NFT collection offers an exclusive opportunity
            to collect rare digital assets from the Crypto Man world. Each NFT
            is crafted to give early supporters a unique role in Crypto Man's
            journey. With visually stunning designs and powerful symbols from
            the story, these NFTs aren't just collectibles—they're rare
            artifacts tied to the legacy of Cryptonia.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              "Code of Eternity.mp4",
              "Orb of Knowledge.mp4",
              "The Key of Ascension.mp4",
              "The shard of infinity.mp4",
            ].map((nft) => (
              <GlowWrapper className={"rounded-lg overfg"} rounded>
                <Card
                  key={nft}
                  className="bg-gradient-to-br from-[#0052FF] to-[#ff2b2b]"
                >
                  <CardContent className="p-4">
                    <video
                      src={`nfts/${nft}`}
                      width={300}
                      height={300}
                      alt={`NFT ${nft}`}
                      className="rounded-lg"
                      autoPlay
                      muted
                      loop
                    />
                  </CardContent>
                </Card>
              </GlowWrapper>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-center mb-6 text-white">
            Unlock Your NFT Surprise Box
          </h3>
          <p className="text-center mb-8">
            Explore the entire collection before you unbox. Each box holds the
            chance to unlock a unique NFT, from one of the seven fragments of
            Kryptonia to powerful dynamic upgrades. You know what's
            possible—legendary artifacts, coveted upgrades, and the iconic
            Ethereal Crystal—but the thrill is in discovering which rare piece
            will be yours. Every box offers an exclusive piece of Crypto Man's
            story, reserved for only the first wave of collectors.
          </p>
          <div className="text-center mt-8">
            {/*<Button className="bg-[#ff2b2b] text-white hover:bg-[#ff2b2b]/90">
              Explore the Collection
            </Button>*/}
          </div>
        </div>
      </section>
    </GlowingBorder>
  );
};

const Tokenomics = () => {
  const tokenomicsData = [
    {
      name: "Liquidity",
      value: 20.3,
      description: "",
    },
    {
      name: "Development (Vested)",
      value: 12.75,
      description: "",
    },
    {
      name: "Community rewards",
      value: 6,
      description: "",
    },
    {
      name: "Partnership and CEX listings",
      value: 6,
      description: "",
    },
    {
      name: "Fair launch on Bepe",
      value: 54.95,
      description: "",
    },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
  ];

  return (
    <GlowingBorder>
      <section className="py-20 px-4 ">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          The Power Behind the Coin
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          <GlowWrapper
            rounded
            className={"w-full md:w-1/2 bg-black rounded-lg flex"}
          >
            <video
              className="w-full h-auto rounded-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/cryptopher REEVES LOGO.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </GlowWrapper>

          <Card
            className="w-full md:w-1/2 bg-black text-white border-[#00f3ff]"
            style={{
              boxShadow: `0 0 15px ${"#00f3ff"}`,
            }}
          >
            {/*<div className="w-full h-[60vh] md:h-full flex flex-col justify-center gap-y-5 items-center ">
              <h2 className="text-4xl glow">Locked Liquidity</h2>
              <h2 className="text-6xl text-center glow">1 Billion Supply</h2>
            </div>*/}
           <CardHeader>
              <CardTitle>Tokenomics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                <div className="w-full aspect-square max-h-[400px] flex items-center justify-center">
                  <ChartContainer
                    config={{
                      tokenomics: {
                        label: "Tokenomics",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                    className="h-full w-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart
                        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                      >
                        <Pie
                          data={tokenomicsData}
                          cx="50%"
                          cy="37%"
                          labelLine={false}
                          outerRadius="70%"
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {tokenomicsData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend
                          layout="horizontal"
                          verticalAlign="top"
                          align="center"
                          wrapperStyle={{
                            fontSize: "12px",
                            bottom: 30,
                            left: 0,
                            right: 0,
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue="item-0"
                >
                  {tokenomicsData.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger className="text-left">
                        {item.name} ({item.value}%)
                      </AccordionTrigger>
                      <AccordionContent>{item.description}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </CardContent> 
          </Card>
        </div>
        <div className="text-center mt-12">
          <p>2% Tax on Buys/Sells goes into the marketing wallet.</p>
          {/*<Button className="bg-[#ff2b2b] text-white hover:bg-[#ff2b2b]/90">
            Learn More About the Coin
          </Button>*/}
        </div>
      </section>
    </GlowingBorder>
  );
};

const Footer = () => {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  React.useEffect(() => {
    const video = document.getElementById("logo-video");
    if (video) {
      video.addEventListener("loadeddata", () => setIsVideoLoaded(true));
    }
    return () => {
      if (video) {
        video.removeEventListener("loadeddata", () => setIsVideoLoaded(true));
      }
    };
  }, []);

  return (
    <footer className="bg-[#0052FF] text-white">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center ">
          {!isVideoLoaded && (
            <div className="w-full aspect-video bg-blue-800 animate-pulse rounded-lg"></div>
          )}
          <div className="rounded-lg overflow-hidden w-fit">
            <video
              id="logo-video"
              className={`w-full rounded-lg  h-96 ${
                isVideoLoaded ? "block" : "hidden"
              }`}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/Meta Gaurdianz.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold text-center md:text-left mb-6">
            Join the Crypto Man Community
          </h2>
          <div className="flex justify-center md:justify-start gap-4 mb-8">
  {[
    { 
      name: "X", 
      icon: <FaXTwitter className="h-4 w-4" />,
      href: "https://x.com/MetaGuardianz"
    },
    { 
      name: "Telegram", 
      icon: <Send className="h-4 w-4" />,
      href: "https://t.me/MEtaGuardianz"
    },
  ].map((platform) => (
    <Button
      key={platform.name}
      variant="outline"
      size="icon"
      className="bg-white text-[#0052FF] hover:bg-gray-100"
      asChild
    >
      <a 
        href={platform.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sr-only">{platform.name}</span>
        {platform.icon}
      </a>
    </Button>
  ))}
</div>
          <p className="text-center md:text-left">
            Stay connected and be part of the Crypto Man revolution!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [showVideo, setShowVideo] = useState(true);

  return (
    <div className="relative min-h-screen ">
      {/* Background Image */}
      <img
        src="/bg.png"
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 min-h-screen text-white">
        <NavBar isAnimation={!showVideo} />
        <Hero showVideo={showVideo} setShowVideo={setShowVideo} />
        <div id="comics">
          <WebComic />
        </div>
        <div id="metaverse">
          <MetaVerseSection />
        </div>
        <div id="legend">
          <LegendBegins />
        </div>
        <div id="chars">
          <StepInsideComic />
        </div>

        <div id="nft-collection">
          <NFTCollection />
        </div>
        <div id="roadmap">
          <Roadmap />
        </div>
        <div id="tokenomics">
          <Tokenomics />
        </div>
        <div id="team">
          <TeamSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}

