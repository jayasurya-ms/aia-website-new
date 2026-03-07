import { Button } from "@/components/ui/button";
import CourseCurriculum from "../common/course-curriculam";
import CfeJoinDialog from "./join-prep";
import { Link } from "react-router-dom";
import { ENROLL_URL } from "@/api/base-url";

const curriculumData = [
  {
    id: 1,
    title: "Financial Transactions & Fraud Schemes",
    content: [
      `This module builds a strong foundation in understanding<strong> how fraud actually occurs within financial transactions </strong>. Learners examine core accounting and financial concepts through a fraud examiner’s lens, uncovering how numbers are manipulated and controls are bypassed. <strong>The curriculum explores key fraud schemes, including financial statement fraud, asset misappropriation, bribery and corruption, identity theft, and procurement-related schemes</strong>. 
       Strong emphasis is placed on identifying red flags, transactional patterns, and understanding how fraudsters exploit system weaknesses <strong> across industries such as banking, insurance, healthcare, and PSUs.</strong>`,
    ],
  },
  {
    id: 2,
    title: "Law",
    content: [
      `The Law module provides a practical and applied understanding of legal principles essential for fraud examinations. Learners <strong> gain clarity on criminal and civil law concepts, individual rights, rules of evidence, and legal processes that govern fraud investigations</strong>. The module covers areas such as money laundering, tax fraud, securities fraud, and bankruptcy-related offences, while explaining how cases move through the legal system.
       Emphasis is placed on conducting investigations lawfully, ethically, and professionally, ensuring <strong>evidence collection, documentation, and reporting stand up to legal scrutiny and support prosecution or litigation</strong> when required`,
    ],
  },
  {
    id: 3,
    title: "Investigation",
    content: [
      `This module<strong> develops the core investigative skills required to conduct effective and defensible fraud investigations</strong>. Learners are trained in investigation planning, information gathering, interviewing and interrogation techniques, document examination, data analysis, and digital forensics fundamentals
      The module also covers tracing illicit funds, analysing complex transaction trails, and identifying concealed assets. Strong focus is placed on evidence handling, documentation standards, and professional report writing,<strong> enabling learners to translate investigation findings into clear, logical, and court-ready reports that support decision-making and legal action</strong>.`,
    ],
  },
  {
    id: 4,
    title: "Fraud Prevention & Deterrence",
    content: [
      `This <strong>module focuses on preventing fraud before it occurs by strengthening governance, ethics, and risk management frameworks.</strong> .behavior, white-collar crime, corporate governance structures, management accountability, and the role of auditors and compliance functions in fraud prevention. 
      The curriculum emphasizes fraud risk assessment, internal controls, ethical culture, and fraud risk management strategies. Learners <strong> gain the ability to design, evaluate, and improve systems that reduce exposure to fraud, enhance transparency, and build long-term organizational integrity across diverse business environments. </strong>`,
    ],
  },
];

const CfeCourseCurriculum = () => {
  return (
    <>
      <CourseCurriculum
        title="CFE Course Curriculum"
        description={`The Certified Fraud Examiner (CFE) credential is globally recognized as a benchmark for professionals in fraud detection, investigation, and prevention. The certification<strong> validates a professional’s ability to understand & identify fraud schemes, conduct </strong> structured investigations, and design effective fraud prevention frameworks across organizations. The<strong> CFE exam is divided into four core modules that</strong> cover financial fraud schemes, legal aspects, investigation techniques, and fraud prevention and deterrence. <br/> \nAt AIA, we design our <strong>CFE training program to ensure that aspirants develop a clear organizational understanding and an investigator mindset.</strong>The course structure helps learners view transactions through a fraud-risk framework, understand how controls fail, and analyze fraud from the perspective of how it occurs. `}
        curriculumData={curriculumData}
      />

      <div className="flex justify-center gap-2">
        <CfeJoinDialog
          // title="dd"
          // subtitle="dd"
          course="CFE"
          buttonlabel="Know More"
        />
        <Button
          className="
              bg-[#F3831C] text-white
              px-6 py-2.5 rounded-none
              font-semibold
              hover:bg-[#F3831C]/90
              transition-all
          cursor-pointer
            "
        >
          <Link to={`${ENROLL_URL}`} target="_blank" rel="noopener noreferrer">
            Enroll Now
          </Link>
        </Button>
      </div>
    </>
  );
};

export default CfeCourseCurriculum;
