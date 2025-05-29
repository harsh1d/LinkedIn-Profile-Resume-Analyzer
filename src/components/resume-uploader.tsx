import React from "react";
import { Card, CardBody, CardHeader, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface ResumeUploaderProps {
  onUpload: (data: any) => void;
  resumeData: any;
}

export const ResumeUploader: React.FC<ResumeUploaderProps> = ({ onUpload, resumeData }) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = React.useState("");
  const [error, setError] = React.useState("");
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file type
    if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
      setError("Please upload a PDF or Word document");
      return;
    }
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("File size should be less than 5MB");
      return;
    }
    
    setFileName(file.name);
    setError("");
    
    // Mock data for demonstration
    const mockResumeData = {
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      phone: "(555) 123-4567",
      summary: "Experienced software engineer with 5+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies.",
      experience: [
        {
          title: "Senior Software Engineer",
          company: "Tech Solutions Inc.",
          duration: "January 2020 - Present",
          description: "Lead developer for cloud-based enterprise solutions. Implemented microservices architecture using Node.js and Docker."
        },
        {
          title: "Software Developer",
          company: "WebDev Experts",
          duration: "March 2017 - December 2019",
          description: "Developed responsive web applications using React and Redux. Implemented RESTful APIs with Express.js."
        }
      ],
      education: [
        {
          degree: "Master of Computer Science",
          school: "University of California, Berkeley",
          year: "2017"
        },
        {
          degree: "BS in Computer Engineering",
          school: "Stanford University",
          year: "2015"
        }
      ],
      skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "AWS", "Docker", "Python", "Git"]
    };
    
    onUpload(mockResumeData);
  };
  
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  
  return (
    <Card className="h-full">
      <CardHeader className="flex gap-3 bg-primary/5">
        <Icon icon="lucide:file-text" className="text-2xl text-primary" />
        <div className="flex flex-col">
          <p className="text-md font-semibold">Resume</p>
          <p className="text-small text-default-500">Upload your resume document</p>
        </div>
      </CardHeader>
      <CardBody>
        {resumeData ? (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon icon="lucide:file-text" className="text-2xl text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium">{resumeData.name}</h3>
                <p className="text-default-500">{resumeData.email}</p>
                <p className="text-small text-default-400">{resumeData.phone}</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-default-600 mb-1">Summary</h4>
              <p className="text-sm text-default-600">{resumeData.summary}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-default-600 mb-1">Experience</h4>
              <ul className="space-y-2">
                {resumeData.experience.map((exp: any, index: number) => (
                  <li key={index} className="text-sm">
                    <div className="font-medium">{exp.title}</div>
                    <div className="text-default-500">{exp.company} • {exp.duration}</div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-default-600 mb-1">Skills</h4>
              <div className="flex flex-wrap gap-1">
                {resumeData.skills.map((skill: string, index: number) => (
                  <span key={index} className="px-2 py-1 bg-default-100 rounded-md text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="pt-2">
              <Button 
                color="primary" 
                variant="light" 
                size="sm"
                onPress={() => onUpload(null)}
                startContent={<Icon icon="lucide:refresh-cw" />}
              >
                Change Resume
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full py-8">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.doc,.docx"
            />
            
            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-4">
              <Icon icon="lucide:file-plus" className="text-3xl text-primary" />
            </div>
            
            <h3 className="text-lg font-medium mb-2">Upload your resume</h3>
            <p className="text-default-500 text-center mb-4">
              Drag and drop your resume file here or click to browse
            </p>
            
            <Button 
              color="primary"
              variant="flat"
              onPress={handleUploadClick}
              startContent={<Icon icon="lucide:upload" />}
            >
              Select Resume File
            </Button>
            
            {fileName && (
              <p className="mt-3 text-sm text-default-600">
                Selected: {fileName}
              </p>
            )}
            
            {error && (
              <p className="mt-3 text-sm text-danger">
                {error}
              </p>
            )}
            
            <p className="mt-6 text-xs text-default-400 text-center">
              Supported formats: PDF, DOC, DOCX (Max 5MB)
            </p>
          </div>
        )}
      </CardBody>
    </Card>
  );
};