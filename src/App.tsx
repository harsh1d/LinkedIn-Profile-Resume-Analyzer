import React from "react";
import { Card, CardBody, Tabs, Tab } from "@heroui/react";
import { Header } from "./components/header";
import { ProfileUploader } from "./components/profile-uploader";
import { ResumeUploader } from "./components/resume-uploader";
import { ComparisonView } from "./components/comparison-view";
import { AnalysisResults } from "./components/analysis-results";
import { mockAnalysisData } from "./data/mock-data";

export default function App() {
  const [activeTab, setActiveTab] = React.useState("upload");
  const [profileData, setProfileData] = React.useState<any>(null);
  const [resumeData, setResumeData] = React.useState<any>(null);
  const [analysisData, setAnalysisData] = React.useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);

  // Simulate analysis process
  const handleAnalyze = () => {
    if (!profileData && !resumeData) return;
    
    setIsAnalyzing(true);
    setActiveTab("analyzing");
    
    // Simulate API call with timeout
    setTimeout(() => {
      setAnalysisData(mockAnalysisData);
      setIsAnalyzing(false);
      setActiveTab("results");
    }, 3000);
  };

  const handleProfileUpload = (data: any) => {
    setProfileData(data);
  };

  const handleResumeUpload = (data: any) => {
    setResumeData(data);
  };

  const handleReset = () => {
    setProfileData(null);
    setResumeData(null);
    setAnalysisData(null);
    setActiveTab("upload");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="w-full max-w-5xl mx-auto shadow-sm">
          <CardBody className="p-0">
            <Tabs 
              aria-label="LinkedIn and Resume Analysis Options" 
              selectedKey={activeTab}
              onSelectionChange={(key) => setActiveTab(key as string)}
              classNames={{
                tabList: "bg-content2 rounded-t-lg p-0",
                cursor: "bg-primary",
                tab: "h-12 px-8 data-[selected=true]:text-primary"
              }}
            >
              <Tab 
                key="upload" 
                title="Upload"
                isDisabled={activeTab === "analyzing" || activeTab === "results"}
              >
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <ProfileUploader 
                      onUpload={handleProfileUpload} 
                      profileData={profileData}
                    />
                    <ResumeUploader 
                      onUpload={handleResumeUpload}
                      resumeData={resumeData}
                    />
                  </div>
                </div>
              </Tab>
              <Tab 
                key="analyzing" 
                title="Analyzing"
                isDisabled={activeTab !== "analyzing"}
              >
                <div className="p-6 min-h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block animate-pulse-slow mb-4">
                      <div className="w-24 h-24 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                    </div>
                    <h3 className="text-xl font-medium mb-2">Analyzing Your Profile & Resume</h3>
                    <p className="text-default-500">
                      We're comparing your LinkedIn profile and resume to identify gaps and opportunities.
                    </p>
                  </div>
                </div>
              </Tab>
              <Tab 
                key="results" 
                title="Results"
                isDisabled={!analysisData || activeTab === "analyzing"}
              >
                <div className="p-6">
                  {analysisData && <AnalysisResults data={analysisData} />}
                </div>
              </Tab>
              <Tab 
                key="comparison" 
                title="Comparison"
                isDisabled={!analysisData || activeTab === "analyzing"}
              >
                <div className="p-6">
                  {analysisData && <ComparisonView data={analysisData} />}
                </div>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
        
        <div className="flex justify-center mt-6 gap-4">
          {(activeTab === "upload" && (profileData || resumeData)) && (
            <button 
              onClick={handleAnalyze}
              className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-600 transition-colors"
            >
              Analyze Profile & Resume
            </button>
          )}
          
          {(activeTab === "results" || activeTab === "comparison") && (
            <button 
              onClick={handleReset}
              className="px-6 py-2 bg-default-100 text-default-700 rounded-md hover:bg-default-200 transition-colors"
            >
              Start New Analysis
            </button>
          )}
        </div>
      </main>
      <footer className="py-4 text-center text-default-500 text-sm">
        <p>LinkedIn Profile & Resume Analyzer © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}