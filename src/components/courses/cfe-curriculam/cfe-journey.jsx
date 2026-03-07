import React from "react";
import CourseJourney from "../common/course-journey";

const CfeJourney = () => {
  return (
    <CourseJourney
      heading="Your Complete Guide to CFE Mastery –"
      highlight="Value, Learning, Format"
      connectorImage="https://i.postimg.cc/4dVWknz1/step-line.png"
      steps={[
        {
          number: 1,
          title: "MOST VALUED FOR",
          items: [
            "Forensic Auditor",
            "Internal Auditor",
            "Statutory Auditor",
            "Risk/GRC Analyst",
            "Finance and Accounts",
            "Professional Investigator",
          ],
        },
        {
          number: 2,
          title: "WHAT YOU WILL LEARN",
          items: [
            "Fraud Investigation",
            "Legal Challenges",
            "Interview Skills",
            "Criminology",
            "Global Best Practices",
            "Industry-Specific Fraud Risks",
          ],
        },
        {
          number: 3,
          title: "CFE EXAM FORMAT",
          items: [
            "Multiple-Choice Questions ",
            "No Negative Marking",
            "Passing Score (75 Marks)",
            "Two Hours (Exam Time)",
            "One Exam Per Module (4 Modules)",
            "100 Questions (One Mark Each)",
          ],
        },
      ]}
    />
  );
};

export default CfeJourney;
