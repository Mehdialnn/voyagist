"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 bg-[#1E1E1E] text-[#E0E0E0] rounded-lg", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-[#2A2A2A] text-[#E0E0E0] hover:bg-[#3A3A3A] hover:text-[#FFFFFF] p-0 opacity-50 hover:opacity-100 rounded-full"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-[#A0A0A0] rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-[#2A2A2A] first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal text-[#E0E0E0] hover:bg-[#2A2A2A] aria-selected:opacity-100 rounded-full"
        ),
        day_selected: "bg-[#1E5631] text-[#FFFFFF] hover:bg-[#2E7D32] hover:text-[#FFFFFF] focus:bg-[#1E5631] focus:text-[#FFFFFF] rounded-full",
        day_today: "bg-[#2A2A2A] text-[#FFFFFF] rounded-full",
        day_outside: "text-[#6E6E6E] opacity-50",
        day_disabled: "text-[#6E6E6E] opacity-50",
        day_range_middle: "aria-selected:bg-[#2A2A2A] aria-selected:text-[#E0E0E0]",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
