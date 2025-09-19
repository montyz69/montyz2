import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Experience() {
  return (
    <div
      className="relative z-10 text-white flex flex-col items-center justify-start min-h-screen w-screen overflow-y-auto py-10 px-10"
      style={{ fontFamily: "Dynalight, cursive" }}
    >
      <p className="text-8xl text-white mb-10">Experience</p>

      <div className="flex flex-col md:flex-row w-full gap-10">
        {/* Left Half - Internship */}
        <div className="flex-1 flex flex-col">
          <p className="text-4xl mb-6">Internship</p>

          <Accordion type="single" collapsible className="w-full max-w-full mt-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-3xl">
                What was the name of the Company?
              </AccordionTrigger>
              <AccordionContent className="text-2xl">
                bizAmica Pvt Ltd., Pune, India
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full max-w-full mt-4">
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-3xl">What was my role?</AccordionTrigger>
              <AccordionContent className="text-2xl">
                Software Engineer Intern
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full max-w-full mt-4">
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-3xl">How long was the internship?</AccordionTrigger>
              <AccordionContent className="text-2xl">
                6 months <br />
                June 2024 - December 2024
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full max-w-full mt-4">
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-3xl">
                Technologies used
              </AccordionTrigger>
              <AccordionContent className="text-2xl">
                <ul className="list-disc list-inside">
                  <li>Angular</li>
                  <li>Django</li>
                  <li>FastAPI</li>
                  <li>Prometheus</li>
                  <li>Grafana</li>
                  <li>AWS</li>
                  <li>SQL</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Right Half - Full-Time */}
        <div className="flex-1 flex flex-col">
          <p className="text-4xl mb-6">Full-Time</p>

          <Accordion type="single" collapsible className="w-full max-w-full mt-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-3xl">
                What is the name of the Company?
              </AccordionTrigger>
              <AccordionContent className="text-2xl">
                HashedIn by Deloitte , Bengaluru , India
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full max-w-full mt-4">
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-3xl">What is my role?</AccordionTrigger>
              <AccordionContent className="text-2xl">
                Software Developer I
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full max-w-full mt-4">
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-3xl">Am I currently working here?</AccordionTrigger>
              <AccordionContent className="text-2xl">
                Yet to join...
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
