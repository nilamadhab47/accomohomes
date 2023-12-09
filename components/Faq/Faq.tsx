import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

const FaqData = 
[
    {
        ques: "What is Housr Coliving all about?",
        ans: "At Housr, we've combined equal parts innovation, convenience, community and opulence to create an extraordinary living experience for India’s workingvopulence to create an extraordinary living experience for India’s working"
    },
    {
        ques: "How does Housr Coliving set itself apart from traditional housing options?",
        ans: "At Housr, we've combined equal parts innovation, convenience, community and opulence to create an extraordinary living experience for India’s workingvopulence to create an extraordinary living experience for India’s working"
    },
    {
        ques: "What does a Housr membership include?",
        ans: "At Housr, we've combined equal parts innovation, convenience, community and opulence to create an extraordinary living experience for India’s workingvopulence to create an extraordinary living experience for India’s working"
    },
    {
        ques: "Are the apartments/flats at Housr Co living pet-friendly?",
        ans: "At Housr, we've combined equal parts innovation, convenience, community and opulence to create an extraordinary living experience for India’s workingvopulence to create an extraordinary living experience for India’s working"
    },
    {
        ques: "What are the locations where Housr Coliving is currently available?",
        ans: "At Housr, we've combined equal parts innovation, convenience, community and opulence to create an extraordinary living experience for India’s workingvopulence to create an extraordinary living experience for India’s working"
    },
    {
        ques: "How do I book a Housr Coliving or apartments for rent?",
        ans: "At Housr, we've combined equal parts innovation, convenience, community and opulence to create an extraordinary living experience for India’s workingvopulence to create an extraordinary living experience for India’s working"
    },
]

const Faq = () => {
  return (
    <div className=' my-8' style={{margin: "0 auto"}}>
        <div className=' max-w-[1000px] my-24 mx-auto'>

        
        {FaqData.map((fq, key)=> (
            <Accordion className=' px-12 mx-auto my-4 bg-[#E5E7FF] ' key={key} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className=' text-xl font-bold '>{fq.ques}</AccordionTrigger>
              <AccordionContent>
                {fq.ans}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
        
        </div>
    </div>
  )
}

export default Faq