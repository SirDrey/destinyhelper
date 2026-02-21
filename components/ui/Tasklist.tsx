"use client";

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CalendarHeartIcon } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";

const Todolist = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Task list</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarHeartIcon />
            {date ? format(date, "PPP") : <span>Pick Date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      <div className="p-6">
        <div className="flex flex-col gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <label htmlFor="item1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <label htmlFor="item1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <label htmlFor="item1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <label htmlFor="item1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <label htmlFor="item1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <label htmlFor="item1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <label htmlFor="item1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              </label>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
