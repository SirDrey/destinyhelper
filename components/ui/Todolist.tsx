"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
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
      <h1 className="text-lg font-medium mb-6">Todo list</h1>
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

      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          <Card>
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              </label>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              </label>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              </label>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              </label>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              </label>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              </label>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              </label>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              </label>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Todolist;
