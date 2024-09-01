import HeadingDivider from "./ui/heading-divider";
import {
 Card,
 CardHeader,
 CardTitle,
 CardDescription,
 CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
 return (
  <section className="min-h-screen pt-24 px-20" id="contact">
   <HeadingDivider title="Contact" />
   <Card className="w-full bg-inherit border-none grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-8">
    <CardHeader>
     <CardTitle className="text-3xl">Lets Get in Touch</CardTitle>
     <CardDescription className="text-xl">
      Feel free to reach out for collaborations or just a friendly hello!
     </CardDescription>
    </CardHeader>
    <CardContent className="">
     <form className="grid gap-4">
      <div className="grid gap-2">
       <Label htmlFor="name">Name</Label>
       <Input id="name" placeholder="Enter your name" />
      </div>
      <div className="grid gap-2">
       <Label htmlFor="email">Email</Label>
       <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div className="grid gap-2">
       <Label htmlFor="message">Message</Label>
       <Textarea
        id="message"
        placeholder="Tell us how we can help"
        className="min-h-[150px]"
       />
      </div>
      <Button type="submit" className="w-full">
       Submit
      </Button>
     </form>
    </CardContent>
   </Card>
  </section>
 );
}
