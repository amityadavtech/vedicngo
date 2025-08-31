"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function AcademyPage() {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 to-orange-50">
      <div className="container mx-auto px-4 py-10">
        <Card className="max-w-5xl mx-auto border-0 shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-full">
              <Image src="/vedic-academy-campus-saffron-tones.png" alt="अकादमी" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="p-8">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-3xl font-bold text-gray-800">{t("academy.page.title")}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <p className="text-gray-700">{t("academy.page.desc")}</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>संस्कृत भाषा और व्याकरण</li>
                  <li>श्रीमद्भगवद्गीता, उपनिषद्, वेद अंग</li>
                  <li>योग और ध्यान</li>
                  <li>धार्मिक संस्कार एवं आचार</li>
                </ul>
                <div className="pt-4 flex gap-3">
                  <Link href="/admission">
                    <Button className="bg-saffron-600 hover:bg-saffron-700 text-white">प्रवेश लें</Button>
                  </Link>
                  <Link href="/">
                    <Button
                      variant="outline"
                      className="border-saffron-600 text-saffron-700 hover:bg-saffron-50 bg-transparent"
                    >
                      मुख्य पृष्ठ
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
