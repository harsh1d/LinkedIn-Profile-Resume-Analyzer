import React from "react";
import { Card, CardBody, CardHeader, Input, Button, Checkbox } from "@heroui/react";
import { Icon } from "@iconify/react";

interface ProfileUploaderProps {
  onUpload: (data: any) => void;
  profileData: any;
}

export const ProfileUploader: React.FC<ProfileUploaderProps> = ({ onUpload, profileData }) => {
  const [linkedInUrl, setLinkedInUrl] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [agreeToTerms, setAgreeToTerms] = React.useState(false);
  const [error, setError] = React.useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!linkedInUrl) {
      setError("LinkedIn URL is required");
      return;
    }
    
    if (!linkedInUrl.includes("linkedin.com")) {
      setError("Please enter a valid LinkedIn URL");
      return;
    }
    
    if (!agreeToTerms) {
      setError("You must agree to the terms");
      return;
    }
    
    // Mock data for demonstration
    const mockProfileData = {
      name: "Alex Johnson",
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      connections: 500,
      experience: [
        {
          title: "Senior Software Engineer",
          company: "Tech Solutions Inc.",
          duration: "Jan 2020 - Present",
          description: "Leading development of cloud-based solutions"
        },
        {
          title: "Software Engineer",
          company: "WebDev Experts",
          duration: "Mar 2017 - Dec 2019",
          description: "Full-stack development using React and Node.js"
        }
      ],
      education: [
        {
          school: "University of California, Berkeley",
          degree: "Master of Computer Science",
          years: "2015 - 2017"
        },
        {
          school: "Stanford University",
          degree: "Bachelor of Science in Computer Engineering",
          years: "2011 - 2015"
        }
      ],
      skills: ["JavaScript", "React", "Node.js", "AWS", "Python", "Docker"]
    };
    
    onUpload(mockProfileData);
    setError("");
  };
  
  return (
    <Card className="h-full">
      <CardHeader className="flex gap-3 bg-primary/5">
        <Icon icon="logos:linkedin-icon" className="text-2xl" />
        <div className="flex flex-col">
          <p className="text-md font-semibold">LinkedIn Profile</p>
          <p className="text-small text-default-500">Upload your LinkedIn profile data</p>
        </div>
      </CardHeader>
      <CardBody>
        {profileData ? (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon icon="lucide:user" className="text-2xl text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium">{profileData.name}</h3>
                <p className="text-default-500">{profileData.title}</p>
                <p className="text-small text-default-400">{profileData.location} • {profileData.connections}+ connections</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-default-600 mb-1">Experience</h4>
              <ul className="space-y-2">
                {profileData.experience.map((exp: any, index: number) => (
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
                {profileData.skills.map((skill: string, index: number) => (
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
                Change Profile
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="LinkedIn Profile URL"
              placeholder="https://www.linkedin.com/in/yourprofile"
              value={linkedInUrl}
              onValueChange={setLinkedInUrl}
              startContent={<Icon icon="lucide:link" className="text-default-400" />}
            />
            
            <div className="text-center my-2 text-default-500 text-sm">
              <p>- OR -</p>
            </div>
            
            <Input
              label="LinkedIn Email"
              placeholder="your.email@example.com"
              value={email}
              onValueChange={setEmail}
              startContent={<Icon icon="lucide:mail" className="text-default-400" />}
            />
            
            <Input
              label="LinkedIn Password"
              placeholder="••••••••"
              type="password"
              value={password}
              onValueChange={setPassword}
              startContent={<Icon icon="lucide:lock" className="text-default-400" />}
            />
            
            <div>
              <Checkbox 
                isSelected={agreeToTerms}
                onValueChange={setAgreeToTerms}
                size="sm"
              >
                <span className="text-sm">
                  I agree to the <a href="#" className="text-primary underline">terms and conditions</a>
                </span>
              </Checkbox>
            </div>
            
            {error && (
              <div className="text-danger text-sm">{error}</div>
            )}
            
            <div className="pt-2">
              <Button 
                color="primary" 
                type="submit"
                fullWidth
                startContent={<Icon icon="lucide:upload" />}
              >
                Upload LinkedIn Profile
              </Button>
            </div>
            
            <p className="text-xs text-default-400 text-center">
              Your credentials are only used to extract your profile data and are never stored.
            </p>
          </form>
        )}
      </CardBody>
    </Card>
  );
};