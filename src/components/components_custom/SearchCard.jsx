import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";

const SearchCard = () => {
  return (
    <div>
        <Card className="py-1 mt-3 mb-8 w-fit">
            <CardContent>
              <form>
                <div className="flex items-center p-2">
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="border border-gray-300 focus:border-blue-500 focus:outline-none w-96"
                required
              />

              <div className="px-3">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant="outline" className="bg-white text-black">
                      All Types
                      <MdKeyboardArrowDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Type</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>House</DropdownMenuItem>
                    <DropdownMenuItem>Apartment</DropdownMenuItem>
                    <DropdownMenuItem>Villa</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="px-3">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant="outline" className="bg-white text-black">
                      All Prices
                      <MdKeyboardArrowDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Prices</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>R0 - R500k</DropdownMenuItem>
                    <DropdownMenuItem>R500 - R1M</DropdownMenuItem>
                    <DropdownMenuItem>R1M+</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

                  <div>
                    <button className="btn px-3 bg-blue-600 hover:bg-blue-700 text-white rounded p-1">
                      <RiSearchLine />
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
    </div>
  )
}

export default SearchCard