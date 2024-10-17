"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Scissors } from "lucide-react"

interface CouponProps {
  discountAmount: string
  expirationDate: string
  code: string
}

function Coupon({ discountAmount, expirationDate, code }: CouponProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="w-full border-t-4 border-primary">
      <CardHeader className="relative pb-2">
        <CardTitle className="text-xl sm:text-2xl font-bold text-center">{discountAmount}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 pt-2">
        <div className="flex items-center justify-between">
          <Label className="text-xs sm:text-sm text-muted-foreground">Expires:</Label>
          <span className="text-xs sm:text-sm font-medium">{expirationDate}</span>
        </div>
        <div className="relative">
          <div className="absolute -left-2 -ml-px h-full w-0.5 bg-primary" />
          <div className="pl-4">
            <Label className="text-xs sm:text-sm text-muted-foreground">Code:</Label>
            <div className="font-mono text-sm sm:text-base font-bold mt-1">{code}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full text-xs sm:text-sm" onClick={handleCopyCode}>
          {copied ? "Copied!" : "Copy Code"}
          <Scissors className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

const coupons: CouponProps[] = [
  { discountAmount: "Free Dance Show ", expirationDate: "2024-12-01", code: "LETSDANCE" },
  { discountAmount: "Movie Night (You Pick the Movie)", expirationDate: "2024-12-01", code: "MOVIENIGHT" },
  { discountAmount: "No-Questions-Asked Snack Delivery", expirationDate: "2024-12-01", code: "SNACKTIME" },
  { discountAmount: "Free Massage", expirationDate: "No Expiration Date", code: "FREESPA" },
  { discountAmount: "Breakfast in Bed", expirationDate: "2024-12-01", code: "BFAST" },
  { discountAmount: "Sing a Song", expirationDate: "2024-12-01", code: "BESTSINGER" },
  { discountAmount: "Unlimited Kisses", expirationDate: "2024-12-01", code: "FREESHIP" },
  { discountAmount: "Unlimited Hugs", expirationDate: "2024-12-01", code: "HUGS2GO" },
  { discountAmount: "Personal Uber", expirationDate: "2024-12-01", code: "UBER24" },
]

export default function Component() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Available Coupons to use during your birthday weekend with Karl Tiama!</h1>
      <p className="text-center text-muted-foreground mb-8">
        Browse our selection of exclusive discounts and special offers. Click &apos;Copy Code&apos; to use at checkout! Or Text 734-634-6113 to redeem over the phone!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {coupons.map((coupon, index) => (
          <Coupon key={index} discountAmount={coupon.discountAmount} expirationDate={coupon.expirationDate} code={coupon.code} />
        ))}
      </div>
    </div>
  )
}