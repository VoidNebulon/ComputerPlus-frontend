
"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, CaptionProps } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  const years = Array.from({ length: 50 }, (_, i) => 1980 + i);

  // Extend CaptionProps to include onMonthChange and onYearChange
  interface ExtendedCaptionProps extends CaptionProps {
    onMonthChange?: (date: Date) => void;
    onYearChange?: (date: Date) => void;
  }

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 w-[340px] transition-all duration-300", className)}
      classNames={{
        months: "flex flex-col space-y-2",
        month: "space-y-2 w-full",
        caption: "w-full flex flex-col items-center gap-2 relative",
        caption_label: "text-sm font-semibold",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-8 w-8 p-0 border text-foreground hover:bg-primary hover:text-primary-foreground rounded-md transition-colors duration-200"
        ),
        table: "w-full border-collapse mt-2",
        head_row: "grid grid-cols-7",
        head_cell: "text-muted-foreground text-center text-[0.75rem] py-1",
        row: "grid grid-cols-7 gap-[2px]",
        cell: "h-10 w-10 flex justify-center items-center p-0 relative rounded-md focus-within:z-10",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-10 w-10 p-0 text-sm rounded-md transition-all duration-200 hover:bg-primary/20"
        ),
        day_selected: "bg-primary text-primary-foreground rounded-md",
        day_today: "bg-accent text-accent-foreground rounded-md",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-30",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Caption: (props: ExtendedCaptionProps) => {
          const { displayMonth, locale, onMonthChange, onYearChange } = props;
          const loc = locale || navigator.language;

          return (
            <div className="w-full flex flex-col items-center gap-2">
              <div className="w-full flex justify-center items-center relative">
                <button
                  onClick={() => onMonthChange?.(new Date(displayMonth.getFullYear(), displayMonth.getMonth() - 1))}
                  className="absolute left-0 h-8 w-8 flex items-center justify-center border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <span className="text-sm font-semibold">
                  {displayMonth.toLocaleString(loc, { month: "long" })}, {displayMonth.getFullYear()}
                </span>

                <button
                  onClick={() => onMonthChange?.(new Date(displayMonth.getFullYear(), displayMonth.getMonth() + 1))}
                  className="absolute right-0 h-8 w-8 flex items-center justify-center border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-row justify-center gap-3 w-full">
                <Select
                  value={String(displayMonth.getMonth())}
                  onValueChange={(val) => onMonthChange?.(new Date(displayMonth.getFullYear(), Number(val)))}
                >
                  <SelectTrigger className="h-8 w-[140px] text-sm border rounded-md bg-background shadow-sm hover:shadow-md transition-all duration-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="shadow-lg rounded-md border border-gray-200">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <SelectItem key={i} value={String(i)} className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                        {new Date(0, i).toLocaleString(loc, { month: "long" })}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={String(displayMonth.getFullYear())}
                  onValueChange={(val) => onYearChange?.(new Date(Number(val), displayMonth.getMonth()))}
                >
                  <SelectTrigger className="h-8 w-[120px] text-sm border rounded-md bg-background shadow-sm hover:shadow-md transition-all duration-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="shadow-lg rounded-md border border-gray-200">
                    {years.map((y) => (
                      <SelectItem key={y} value={String(y)} className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                        {y}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          );
        },
        Dropdown: () => null,
        IconLeft: () => null,
        IconRight: () => null,
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };