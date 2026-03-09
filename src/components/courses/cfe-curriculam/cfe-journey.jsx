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
          title: "CFE Exam Format (2026)",
          items: [
            "M1 & M2 120 Ques. / 2.5 Hr",
            "M3 70 Ques. / 1.5 hr",
            "75% Passing Score",
            "Multiple-Choice Questions",
            "No Negative Marking",
            "One Exam for each module",
          ],
        },
      ]}
    />
  );
};

export default CfeJourney;
