"use client"

import Image from "next/image"
import { Users } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function CommitteeSection() {
  const { t } = useLanguage()
  return (
    <section id="committee" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-saffron-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">हमारे कमेटी के बारे में</h2>
          </div>
          <p className="text-xl text-gray-600">वैदिक शिक्षा और सनातन संस्कारों के प्रचार-प्रसार में समर्पित हमारा संगठन</p>
        </div>

        <div className="grid gap-10">
          {/* Person 1 */}
          <article className="grid md:grid-cols-[240px,1fr] gap-6 items-start bg-gradient-to-r from-saffron-50 to-orange-50 rounded-xl p-6 shadow-md">
            <div className="relative w-full md:w-[240px] h-[240px] rounded-xl overflow-hidden ring-4 ring-saffron-200">
              <Image
                src="/fo1.jpg"
                alt="संस्थापक डॉ. रामकुमार शर्मा"
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">स्वराज्य प्रकाश</h3>
              <p className="mt-3 text-gray-700 leading-7">पूज्यनीय श्री स्वराज्य प्रकाश (शिक्षक) जी ने ऐसी संस्थान को बनाने हेतु मार्गदर्शन दिया कि सनातन धर्म को वैदिक शिक्षा के साथ साथ में योग, पुराण, उपनिषद्, वेदांक, वेद, श्री राम चरित मानस अध्ययन कार्यशाला के माध्यम से दी जाए इसके लिए समय पर वे विभिन्न विद्यालयों में उनको बुलाया जाता था आपकी शिक्षा परास्नातक (भूगोल) हिन्दू महाविद्यालय आगरा विश्वविद्यालय, आगरा से पूर्ण किया उसके उपरांत विधिक शिक्षा कानपुर विश्वविद्यालय, कानपुर से पूर्ण किया आपका जन्म 02 मई 1947 में हुआ और आपका देहावसान 11 नवम्बर 2024 को लंबी बीमारी के चलते रहने के कारण हुआ आपके पिता जी कुशल चिकित्सक थे और आप दुर्बल वर्ग को पुस्तकों को देना, उनकी फीस देना, निःशुल्क शिक्षा देते हुए सम्पूर्ण जीवन में वे एक मिशन बना दिया जिसके कारण यह संस्थान का गठन करने में उनका अभूतपूर्व प्रयास किया</p>
            </div>
          </article>

          {/* Person 2 */}
          <article className="grid md:grid-cols-[240px,1fr] gap-6 items-start bg-gradient-to-r from-saffron-50 to-orange-50 rounded-xl p-6 shadow-md">
            <div className="relative w-full md:w-[240px] h-[240px] rounded-xl overflow-hidden ring-4 ring-saffron-200">
              <Image
                src="/fo2.jpg"
                alt={`${t("committee.p2.name")} का चित्र`}
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">शान्ति देवी</h3>
              <p className="mt-3 text-gray-700 leading-7">पूज्यनीय श्रीमती शान्ति देवी (शिक्षक) अपना जीवन शिक्षा को समर्पित किया जिसमें सनातन धर्म की शिक्षा विशेष रूप से है आपकी शिक्षा स्नातक थी और आपकी चिकित्सकीय शिक्षा क्वीन मेरी मेडिकल कॉलेज लखनऊ , उर्सला हॉर्स मैन चिकित्सालय, कानपुर से पूर्ण की था और आपका रुझान वैदिक पूजन और सनातन कर्मकाण्ड में था जिसके कारण महिलाओं को वैदिक शिक्षा और तकनीकी शिक्षा की और प्रयास किया जिसके चलते उहोंने संस्थान के गठन हेतुभूमि और आवश्यक पूंजी दान में अपनी स्थिति के अनुसार किया गया है आपका जन्म 08 सितंबर 1953 को हुआ और देहावसान 15 फ़रवरी 2015 को हुआ था</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
