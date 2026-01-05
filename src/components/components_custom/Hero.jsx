import React from "react";
import { Button } from "@/components/ui/button";
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
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="hero bg-blue-700 text-white">
      <div className="hero-content text-center">
        <div className="max-w-5xl">
          <h1 className="text-3xl font-bold pt-6">Find Your Dream Home</h1>
          <p className="py-1 text-sm">
            Discover the perfect place to call home
          </p>

          <Card className="py-1 mt-3 mb-8">
            <CardContent>
              <form>
                <div className="flex items-center p-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    className="border border-gray-300 focus:border-blue-500 focus:outline-none"
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
      </div>
    </div>
  );
};

export default Hero;
