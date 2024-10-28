'use client'
import React from 'react'
import { useState,ChangeEvent } from 'react'
import { Label } from './ui/label'
import { Button } from './ui/button'
// import Input from './ui/input'
import { Input } from './ui/input'
import { Card, CardContent, CardDescription,CardFooter,CardHeader,CardTitle } from './ui/card'

const TipCalculatorPage = () => {
    //states
    const [billAmount, setBillAmount] = useState<number | null>(null)
    const [tipPercentage, setTipPercentage] = useState<number | null>(null)
    const [tipAmount, setTipAmount] = useState<number>(0)
    const [totalAmount, setTotalTipAmount] = useState<number>(0)

    // methods
    const handleBillAmount = (e: ChangeEvent<HTMLInputElement>): void =>{
        setBillAmount(parseFloat(e.target.value))

    }
    const handleTipPercentage = (e: ChangeEvent<HTMLInputElement>): void => {
        setTipPercentage(parseFloat(e.target.value))
    }

    const calculateTip = (): void => {
        if (billAmount !== null && tipPercentage !== null) {
            const tip = billAmount * (tipPercentage / 100)
            setTipAmount(tip)
            setTotalTipAmount(billAmount + tip)
        }
    }
  return (
   <>
       <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
  <Card className="w-full max-w-md p-8 bg-white dark:bg-gray-800 shadow-2xl rounded-3xl">
    <CardHeader className="text-center">
      <CardTitle className="text-2xl font-extrabold text-gray-800 dark:text-white">Tip Calculator</CardTitle>
      <CardDescription className="text-gray-600 dark:text-gray-300">
        Enter the bill amount and tip percentage to calculate the tip and total.
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-6 mt-4">
      <div className="grid gap-4">
        <Label htmlFor="bill-amount" className="text-lg font-medium text-gray-800 dark:text-gray-200">Bill Amount</Label>
        <Input
          id="bill-amount"
          type="number"
          placeholder="Enter bill amount"
          value={billAmount !== null ? billAmount : ""}
          onChange={handleBillAmount}
          className="p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
      <div className="grid gap-4">
        <Label htmlFor="tip-percentage" className="text-lg font-medium text-gray-800 dark:text-gray-200">Tip Percentage</Label>
        <Input
          id="tip-percentage"
          type="number"
          placeholder="Enter tip percentage"
          value={tipPercentage !== null ? tipPercentage : ""}
          onChange={handleTipPercentage}
          className="p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
      <Button
        onClick={calculateTip}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Calculate
      </Button>
    </CardContent>
    <CardFooter className="mt-6 space-y-4">
      <div className="flex items-center justify-between space-x-4">
        <span className="text-lg text-gray-700 dark:text-gray-300">Tip Amount:</span>
        <span className="text-xl font-bold text-gray-900 dark:text-white">${tipAmount.toFixed(2)}</span>
      </div>
      <div className="flex items-center justify-between space-x-4">
        <span className="text-lg text-gray-700 dark:text-gray-300">Total Amount:</span>
        <span className="text-xl font-bold text-gray-900 dark:text-white">${totalAmount.toFixed(2)}</span>
      </div>
    </CardFooter>
  </Card>
</div>


   </>
  )
}

export default TipCalculatorPage