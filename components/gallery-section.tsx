"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function GallerySection() {
  const [currentImage, setCurrentImage] = useState(0)
  const { t } = useLanguage()

  const images = [
    { src: "/g1.jpg", title: t("श्री राम मंदिर की प्राण प्रतिष्ठा के कार्यक्रम का आयोजन ढाई हजार दीपों द्वारा सम्पन्न") },
    { src: "/g2.jpg", title: t("श्री राम मंदिर की प्राण प्रतिष्ठा पर ढाई हजार दीपों के द्वारा सम्पन्न हुआ") },
    { src: "/g3.jpg", title: t("श्री राम मंदिर प्राणप्रतिष्ठा के आयोजन पर ढाई हजार दीपों द्वारा किया गया पूर्ण") },
    { src: "/g4.jpg", title: t("बसंत पंचमी का आयोजन") },
    { src: "/g5.jpg", title: t("कुष्ठ रोगियों को कपड़े और भोजन वितरीत किया जाता हैं") },
    { src: "/g6.jpg", title: t("रंगोत्सव होली का आयोजन किया गया") },
    { src: "/g7.jpg", title: t("दुर्बल वर्ग को पुस्तकों का वितरण") },
    { src: "/g8.jpg", title: t("दुर्बल वर्ग की बच्चों को पुस्तकों का वितरण") },
    { src: "/g9.jpg", title: t("रामायण वैदिक एजुकेशन फाउंडेशन का निज कार्यशाला एवं कार्यालय निर्माण") },
    { src: "/g10.jpg", title: t("वैदिक खगोल यंत्र पूजन") },
    { src: "/g11.jpg", title: t("वेद माता गायत्री पूजन गायत्री जयंती पर कार्यक्रम आयोजित") },
    { src: "/g12.jpg", title: t("कंवर में शिव भक्तों ने रामायण वैदिक एजुकेशन फाउंडेशन परिवार द्वारा कार्यालय परिसर में रुकने के लिए विद्युत और जल की व्यवस्था की गई") },
    { src: "/g13.jpg", title: t("गौ सेवा को गठित कार्यकारणी द्वारा स्वच्छ पेयजल की व्यवस्था करना घोषित हुआ") },
    { src: "/g14.jpg", title: t("यज्ञ का आयोजन किया गया जिसमे श्री रामायण वैदिक एजुकेशन फाउंडेशन परिवार द्वारा सक्रिय भाग लिया गया") },
    { src: "/g15.jpg", title: t("रामायण वैदिक एजुकेशन फाउंडेशन परिवार द्वारा आयोजित छटी का श्रृंगात्मिक स्वरूप के दर्शन श्रीमती रमा राघवेन्द्र जी द्वारा आयोजित एवं संचालन संपन्न हु") },
    { src: "/g16.jpg", title: t("आहुतियों के साथ आरम्भ हुआ यज्ञ जिसमें श्री रामायण वैदिक एजुकेशन फाउंडेशन परिवार द्वारा सक्रिय रूप से भाग लिया हैं") },
    { src: "/g17.jpg", title: t("संस्थान की निर्माण के समय का चित्र") },
    { src: "/g18.jpg", title: t("संस्थान की निर्माण के समय का चित्र") },
    { src: "https://i.ibb.co/gFcSqBC4/g19.jpg", title: t("कावड़िया श्री शिवजी के दर्शन योगी रामायण वैदिक शिक्षा द्वार रात्रि प्रबोधन कर दे") },
  ]

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Camera className="h-8 w-8 text-saffron-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">{t("gallery.title")}</h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={images[currentImage].src || "/placeholder.svg"}
                alt={images[currentImage].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-bold">{images[currentImage].title}</h3>
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex justify-center mt-8 space-x-4 overflow-x-auto pb-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                  currentImage === index ? "ring-4 ring-saffron-500 scale-110" : "hover:scale-105"
                }`}
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.title} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
