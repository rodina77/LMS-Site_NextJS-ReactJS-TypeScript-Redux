import React from 'react';
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from "@/components/ui/accordion";

export interface IAccordion {
    courseContent?: {
        [key: string]: {
            title: string;
            lessons: string[];
        };
    };
}

const AccordionComponent = ({ courseContent = {} }: IAccordion) => { 
    return (
        <AccordionRoot collapsible style={{overflow:'auto', width: '100%', border: '1px solid gray', padding: '20px 20px', margin: '20px 0px' }}>
            {Object.entries(courseContent).map(([moduleKey, moduleData]) => (
                <AccordionItem key={moduleKey} value={`course-${moduleKey}`} style={{ padding: '20px 0px', borderBottom: '1px solid gray' }}>
                    <AccordionItemTrigger>{moduleData.title}</AccordionItemTrigger>
                    <AccordionItemContent>
                        <ul>
                            {moduleData.lessons.map((lesson, index) => (
                                <li key={`${moduleKey}-${index}`}>{lesson}</li>
                            ))}
                        </ul>
                    </AccordionItemContent>
                </AccordionItem>
            ))}
        </AccordionRoot>
    );
};

export default AccordionComponent;
