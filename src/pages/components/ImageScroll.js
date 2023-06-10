import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from './css/page.module.css'
import Image from "next/image";

const ImageScroll = (props) => {
  const imageRef = useRef(null);
const imagePaths = [
    "/image2/male0001.webp",
   "/image2/male0002.webp",
   "/image2/male0003.webp",
   "/image2/male0004.webp",
   "/image2/male0005.webp",
   "/image2/male0006.webp",
   "/image2/male0007.webp",
   "/image2/male0008.webp",
   "/image2/male0009.webp",
   "/image2/male0010.webp",
   "/image2/male0011.webp",
   "/image2/male0012.webp",
   "/image2/male0013.webp",
   "/image2/male0014.webp",
   "/image2/male0015.webp",
   "/image2/male0016.webp",
   "/image2/male0017.webp",
   "/image2/male0018.webp",
   "/image2/male0019.webp",
   "/image2/male0020.webp",
   "/image2/male0021.webp",
   "/image2/male0022.webp",
   "/image2/male0023.webp",
   "/image2/male0024.webp",
   "/image2/male0025.webp",
   "/image2/male0026.webp",
   "/image2/male0027.webp",
   "/image2/male0028.webp",
   "/image2/male0029.webp",
   "/image2/male0030.webp",
   "/image2/male0031.webp",
   "/image2/male0032.webp",
   "/image2/male0033.webp",
   "/image2/male0034.webp",
   "/image2/male0035.webp",
   "/image2/male0036.webp",
   "/image2/male0037.webp",
   "/image2/male0038.webp",
   "/image2/male0039.webp",
   "/image2/male0040.webp",
   "/image2/male0041.webp",
   "/image2/male0042.webp",
   "/image2/male0043.webp",
   "/image2/male0044.webp",
   "/image2/male0045.webp",
   "/image2/male0046.webp",
   "/image2/male0047.webp",
   "/image2/male0048.webp",
   "/image2/male0049.webp",
   "/image2/male0050.webp",
   "/image2/male0051.webp",
   "/image2/male0052.webp",
   "/image2/male0053.webp",
   "/image2/male0054.webp",
   "/image2/male0055.webp",
   "/image2/male0056.webp",
   "/image2/male0057.webp",
   "/image2/male0058.webp",
   "/image2/male0059.webp",
   "/image2/male0060.webp",
   "/image2/male0061.webp",
   "/image2/male0062.webp",
   "/image2/male0063.webp",
   "/image2/male0064.webp",
   "/image2/male0065.webp",
   "/image2/male0066.webp",
   "/image2/male0067.webp",
   "/image2/male0068.webp",
   "/image2/male0069.webp",
   "/image2/male0070.webp",
   "/image2/male0071.webp",
   "/image2/male0072.webp",
   "/image2/male0073.webp",
   "/image2/male0074.webp",
   "/image2/male0075.webp",
   "/image2/male0076.webp",
   "/image2/male0077.webp",
   "/image2/male0078.webp",
   "/image2/male0079.webp",
   "/image2/male0080.webp",
   "/image2/male0081.webp",
   "/image2/male0082.webp",
   "/image2/male0083.webp",
   "/image2/male0084.webp",
   "/image2/male0085.webp",
   "/image2/male0086.webp",
   "/image2/male0087.webp",
   "/image2/male0088.webp",
   "/image2/male0089.webp",
   "/image2/male0090.webp",
   "/image2/male0091.webp",
   "/image2/male0092.webp",
   "/image2/male0093.webp",
   "/image2/male0094.webp",
   "/image2/male0095.webp",
   "/image2/male0096.webp",
   "/image2/male0097.webp",
   "/image2/male0098.webp",
   "/image2/male0099.webp",
   "/image2/male0100.webp",
   "/image2/male0101.webp",
   "/image2/male0102.webp",
   "/image2/male0103.webp",
   "/image2/male0104.webp",
   "/image2/male0105.webp",
   "/image2/male0106.webp",
   "/image2/male0107.webp",
   "/image2/male0108.webp",
   "/image2/male0109.webp",
   "/image2/male0110.webp",
   "/image2/male0111.webp",
   "/image2/male0112.webp",
   "/image2/male0113.webp",
   "/image2/male0114.webp",
   "/image2/male0115.webp",
   "/image2/male0116.webp",
   "/image2/male0117.webp",
   "/image2/male0118.webp",
   "/image2/male0119.webp",
   "/image2/male0120.webp",
   "/image2/male0121.webp",
   "/image2/male0122.webp",
   "/image2/male0123.webp",
   "/image2/male0124.webp",
   "/image2/male0125.webp",
   "/image2/male0126.webp",
   "/image2/male0127.webp",
   "/image2/male0128.webp",
   "/image2/male0129.webp",
   "/image2/male0130.webp",
   "/image2/male0131.webp",
   "/image2/male0132.webp",
   "/image2/male0133.webp",
   "/image2/male0134.webp",
   "/image2/male0135.webp",
   "/image2/male0136.webp",
   "/image2/male0137.webp",
   "/image2/male0138.webp",
   "/image2/male0139.webp",
   "/image2/male0140.webp",
   "/image2/male0141.webp",
   "/image2/male0142.webp",
   "/image2/male0143.webp",
   "/image2/male0144.webp",
   "/image2/male0145.webp",
   "/image2/male0146.webp",
   "/image2/male0147.webp",
   "/image2/male0148.webp",
   "/image2/male0149.webp",
   "/image2/male0150.webp",
   "/image2/male0151.webp",
   "/image2/male0152.webp",
   "/image2/male0153.webp",
   "/image2/male0154.webp",
   "/image2/male0155.webp",
   "/image2/male0156.webp",
   "/image2/male0157.webp",
   "/image2/male0158.webp",
   "/image2/male0159.webp",
   "/image2/male0160.webp",
   "/image2/male0161.webp",
   "/image2/male0162.webp",
   "/image2/male0163.webp",
   "/image2/male0164.webp",
   "/image2/male0165.webp",
   "/image2/male0166.webp",
   "/image2/male0167.webp",
   "/image2/male0168.webp",
   "/image2/male0169.webp",
   "/image2/male0170.webp",
   "/image2/male0171.webp",
   "/image2/male0172.webp",
   "/image2/male0173.webp",
   "/image2/male0174.webp",
   "/image2/male0175.webp",
   "/image2/male0176.webp",
   "/image2/male0177.webp",
   "/image2/male0178.webp",
   "/image2/male0179.webp",
   "/image2/male0180.webp",
   "/image2/male0181.webp",
   "/image2/male0182.webp",
   "/image2/male0183.webp",
   "/image2/male0184.webp",
   "/image2/male0185.webp",
   "/image2/male0186.webp",
   "/image2/male0187.webp",
   "/image2/male0188.webp",
   "/image2/male0189.webp",
   "/image2/male0190.webp",
   "/image2/male0191.webp",
   "/image2/male0192.webp",
   "/image2/male0193.webp",
   "/image2/male0194.webp",
   "/image2/male0195.webp",
   "/image2/male0196.webp",
   "/image2/male0197.webp",
   "/image2/male0198.webp",
   "/image2/male0199.webp",
   "/image2/male0200.webp",
   "/image2/male0201.webp",
   "/image2/male0202.webp",
   "/image2/male0203.webp",
   "/image2/male0204.webp",
   "/image2/male0205.webp",
   "/image2/male0206.webp",
   "/image2/male0207.webp",
   "/image2/male0208.webp",
   "/image2/male0209.webp",
   "/image2/male0210.webp",
   "/image2/male0211.webp",
   "/image2/male0212.webp",
   "/image2/male0213.webp",
   "/image2/male0214.webp",
   "/image2/male0215.webp",
   "/image2/male0216.webp",
   "/image2/male0217.webp",
   "/image2/male0218.webp",
   "/image2/male0219.webp",
   "/image2/male0220.webp",
   "/image2/male0221.webp",
   "/image2/male0222.webp",
   "/image2/male0223.webp",
   "/image2/male0224.webp",
   "/image2/male0225.webp",
   "/image2/male0226.webp",
   "/image2/male0227.webp",
   "/image2/male0228.webp",
   "/image2/male0229.webp",
   "/image2/male0230.webp",
   "/image2/male0231.webp",
   "/image2/male0232.webp",
   "/image2/male0233.webp",
   "/image2/male0234.webp",
   "/image2/male0235.webp",
   "/image2/male0236.webp",
   "/image2/male0237.webp",
   "/image2/male0238.webp",
   "/image2/male0239.webp",
   "/image2/male0240.webp",
   "/image2/male0241.webp",
   "/image2/male0242.webp",
   "/image2/male0243.webp",
   "/image2/male0244.webp",
   "/image2/male0245.webp",
   "/image2/male0246.webp",
   "/image2/male0247.webp",
   "/image2/male0248.webp",
   "/image2/male0249.webp",
   "/image2/male0250.webp",
   "/image2/male0251.webp",
   "/image2/male0252.webp",
   "/image2/male0253.webp",
   "/image2/male0254.webp",
   "/image2/male0255.webp",
   "/image2/male0256.webp",
   "/image2/male0257.webp",
   "/image2/male0258.webp",
   "/image2/male0259.webp",
   "/image2/male0260.webp",
   "/image2/male0261.webp",
   "/image2/male0262.webp",
   "/image2/male0263.webp",
   "/image2/male0264.webp",
   "/image2/male0265.webp",
   "/image2/male0266.webp",
   "/image2/male0267.webp",
   "/image2/male0268.webp",
   "/image2/male0269.webp",
   "/image2/male0270.webp",
   "/image2/male0271.webp",
   "/image2/male0272.webp",
   "/image2/male0273.webp",
   "/image2/male0274.webp",
   "/image2/male0275.webp",
   "/image2/male0276.webp",
   "/image2/male0277.webp",
   "/image2/male0278.webp",
   "/image2/male0279.webp",
   "/image2/male0280.webp",
   "/image2/male0281.webp",
   "/image2/male0282.webp",
   "/image2/male0283.webp",
   "/image2/male0284.webp",
   "/image2/male0285.webp",
   "/image2/male0286.webp",
   "/image2/male0287.webp",
   "/image2/male0288.webp",
   "/image2/male0289.webp",
   "/image2/male0290.webp",
   "/image2/male0291.webp",
   "/image2/male0292.webp",
   "/image2/male0293.webp",
   "/image2/male0294.webp",
   "/image2/male0295.webp",
   "/image2/male0296.webp",
   "/image2/male0297.webp",
   "/image2/male0298.webp",
   "/image2/male0299.webp",
   "/image2/male0300.webp",

    // Add more image paths as needed
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const currentIndex = Math.floor(scrollPosition / props.height * 33) % imagePaths.length;

      if (imageRef.current !== null) {
        imageRef.current.src = imagePaths[currentIndex];

        // imageRef.current.setAttribute("src", imagePaths[currentIndex]);
        // imageRef.current.setAttribute("srcset", `${imagePaths[currentIndex]} 1x, ${imagePaths[currentIndex + 1]} 2x`);
      }
    };

    const frameCount = 300;
    const currentFrame = (index) =>
      `/image2/male${(index + 1).toString().padStart(4, '0')}.webp`;

    const loadImages = async () => {
      try {
        const loadedImages = await Promise.all(
          Array.from({ length: frameCount }, (_, index) => {
            return new Promise((resolve, reject) => {
              const image = new Image();
              image.src = currentFrame(index);
              image.onload = () => resolve(image);
              image.onerror = reject;
            });
          })
        );

        imagePaths.push(...loadedImages.map((img) => img.src));
        imageRef.current.src = imagePaths[0];
        handleScroll();
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: imageRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        window.addEventListener("scroll", handleScroll);
      },
      onLeaveBack: () => {
        window.removeEventListener("scroll", handleScroll);
      },
    });

    loadImages();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <img
        ref={imageRef}
        src={imagePaths[0]}
        alt="Scrolling Image"
        className={styles.scrollimage}
        loading="lazy"
      />
      {/* <Image
        ref={imageRef}
        src={imagePaths[0]}
        alt="Scrolling Image"
        className={styles.scrollimage}
        width={1200}
        height={100}
        objectFit="cover"
        priority
      /> */}
    </>
  );
};

export default ImageScroll;
