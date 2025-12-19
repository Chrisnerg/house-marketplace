import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowDown } from "react-icons/md";

const Contents = () => {
  return (
    <div className="mt-12">
      <div>
        <p>Available Properties</p>
        <p>6 homes for sale</p>
        <div className="px-3">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" className="bg-white text-black">
                Sort 
                <MdKeyboardArrowDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Sort by:</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Newest</DropdownMenuItem>
              <DropdownMenuItem>Price:Low to High</DropdownMenuItem>
              <DropdownMenuItem>Price:High to Low</DropdownMenuItem>
              <DropdownMenuItem>Most Popular</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Contents;
