"use client"

import { CreditCard, Smartphone, Building2, Copy, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function PaymentPage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">दान जानकारी</h1>
            <Link href="/">
              <Button variant="outline">मुख्य पृष्ठ पर वापस जाएं</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">दान करें और धर्म में योगदान दें</h2>
            <p className="text-xl text-gray-600">वैदिक शिक्षा के प्रसार में हमारा साथ दें</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* QR Code Section */}
            <Card className="shadow-xl border-0">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center text-2xl text-gray-800">
                  <QrCode className="h-6 w-6 mr-2 text-saffron-600" />
                  QR कोड से भुगतान
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Payment QR Code"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
                <p className="text-gray-600">अपने फोन के कैमरे या किसी भी UPI ऐप से QR कोड स्कैन करें</p>
              </CardContent>
            </Card>

            {/* UPI Details */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-800">
                  <Smartphone className="h-6 w-6 mr-2 text-saffron-600" />
                  UPI भुगतान
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-saffron-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">UPI ID:</h3>
                  <div className="flex items-center justify-between bg-white p-3 rounded border">
                    <span className="font-mono text-lg">vedic-ngo@paytm</span>
                    <Button size="sm" variant="outline" onClick={() => copyToClipboard("vedic-ngo@paytm")}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">समर्थित UPI ऐप्स:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-lg shadow text-center">
                      <p className="font-medium">Google Pay</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow text-center">
                      <p className="font-medium">PhonePe</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow text-center">
                      <p className="font-medium">Paytm</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow text-center">
                      <p className="font-medium">BHIM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bank Details */}
          <Card className="shadow-xl border-0 mt-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-gray-800">
                <Building2 className="h-6 w-6 mr-2 text-saffron-600" />
                बैंक विवरण
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-saffron-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">खाता नाम:</h3>
                    <p className="text-lg">वैदिक शिक्षा संस्थान</p>
                  </div>

                  <div className="bg-saffron-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">खाता संख्या:</h3>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-lg">1234567890123456</span>
                      <Button size="sm" variant="outline" onClick={() => copyToClipboard("1234567890123456")}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-saffron-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">IFSC कोड:</h3>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-lg">SBIN0001234</span>
                      <Button size="sm" variant="outline" onClick={() => copyToClipboard("SBIN0001234")}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-saffron-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">बैंक का नाम:</h3>
                    <p className="text-lg">भारतीय स्टेट बैंक</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">महत्वपूर्ण सूचना:</h3>
                <p className="text-gray-700">
                  कृपया भुगतान के बाद अपना ट्रांजैक्शन ID और संपर्क विवरण हमें भेजें। आपका दान 80G के तहत कर छूट के लिए पात्र है।
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact for Payment Confirmation */}
          <Card className="shadow-xl border-0 mt-8 bg-gradient-to-r from-saffron-500 to-orange-500 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">भुगतान की पुष्टि के लिए</h3>
              <p className="text-lg mb-6">भुगतान के बाद कृपया हमसे संपर्क करें और अपना ट्रांजैक्शन ID साझा करें</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center">
                  <Smartphone className="h-5 w-5 mr-2" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  <span>info@vedic-ngo.org</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
