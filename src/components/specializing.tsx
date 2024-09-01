"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import HeadingDivider from "./ui/heading-divider";
import { Tilt } from "react-tilt";

export default function Specializing() {
 return (
  <section className="min-h-screen pt-24 px-20" id="specializing">
   <HeadingDivider title="What I Do?" />
   <div className="flex flex-col lg:flex-row lg:mt-8 gap-12">
    <Card className="shadow-md relative ">
     <CardHeader className=" grid place-content-center">
      <div className="h-48 w-48 bg-primary rounded-full grid place-content-center">
       <Tilt options={{ max: 25 }}>
        <Image src="/images/rocket.png" alt="rocket" width={150} height={150} />
       </Tilt>
      </div>
     </CardHeader>
     <CardContent>
      <h5 className="text-primary text-center mb-4 text-2xl font-semibold">
       Performance
      </h5>
      <p className="text-center text-slate-600 text-lg dark:text-slate-200">
       Having a fast website is key to keeping people around, which ultimately
       converts them into customers. Design is useless without performance
      </p>
     </CardContent>
    </Card>

    <Card className="shadow-md relative">
     <CardHeader className=" grid place-content-center">
      <div className="h-48 w-48 bg-primary rounded-full grid place-content-center">
       <Image src="/images/code.png" alt="code" width={150} height={150} />
      </div>
     </CardHeader>
     <CardContent>
      <h5 className="text-primary text-center mb-4 text-2xl font-semibold">
       Readable Code
      </h5>
      <p className="text-center text-slate-600 text-lg dark:text-slate-200">
       “If a programmer who just joined the development team reads my software,
       will they be able to understand what I have written here?”
      </p>
     </CardContent>
    </Card>

    <Card className="shadow-md relative">
     <CardHeader className=" grid place-content-center">
      <div className="h-48 w-48 bg-primary rounded-full grid place-content-center">
       <Image src="/images/pencil.png" alt="rocket" width={150} height={150} />
      </div>
     </CardHeader>
     <CardContent>
      <h5 className="text-primary text-center mb-4 text-2xl font-semibold">
       Modern Design
      </h5>
      <p className="text-center text-slate-600 text-lg dark:text-slate-200">
       A website should be designed for the people who will use it, so that's
       exactly what I do. User-focused design should be the primary goal of any
       website.
      </p>
     </CardContent>
    </Card>
   </div>
  </section>
 );
}
