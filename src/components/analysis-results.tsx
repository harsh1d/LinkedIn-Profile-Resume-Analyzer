import React from "react";
import { Card, CardBody, CardHeader, Progress, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ScoreCard } from "./score-card";
import { KeywordMatch } from "./keyword-match";
import { SkillsChart } from "./skills-chart";

interface AnalysisResultsProps {
  data: any;
}

export const AnalysisResults: React.FC<AnalysisResultsProps> = ({ data }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ScoreCard 
          title="Overall Match"
          score={data.scores.overall}
          icon="lucide:check-circle"
          description="How well your resume matches your LinkedIn profile"
        />
        <ScoreCard 
          title="Keyword Optimization"
          score={data.scores.keywords}
          icon="lucide:tag"
          description="Relevant keywords found in both documents"
        />
        <ScoreCard 
          title="Experience Alignment"
          score={data.scores.experience}
          icon="lucide:briefcase"
          description="Consistency between work experiences"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex gap-3">
            <Icon icon="lucide:list-checks" className="text-xl text-primary" />
            <div className="flex flex-col">
              <p className="text-md font-semibold">Key Findings</p>
              <p className="text-small text-default-500">Important insights from your analysis</p>
            </div>
          </CardHeader>
          <CardBody>
            <ul className="space-y-3">
              {data.findings.map((finding: any, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <div className={`mt-0.5 ${finding.type === 'positive' ? 'text-success' : 'text-danger'}`}>
                    <Icon 
                      icon={finding.type === 'positive' ? 'lucide:check-circle' : 'lucide:alert-circle'} 
                      className="text-lg"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{finding.title}</p>
                    <p className="text-sm text-default-500">{finding.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
        
        <Card>
          <CardHeader className="flex gap-3">
            <Icon icon="lucide:lightbulb" className="text-xl text-primary" />
            <div className="flex flex-col">
              <p className="text-md font-semibold">Recommendations</p>
              <p className="text-small text-default-500">Suggestions to improve your profile and resume</p>
            </div>
          </CardHeader>
          <CardBody>
            <ul className="space-y-3">
              {data.recommendations.map((recommendation: any, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-0.5 text-primary">
                    <Icon icon="lucide:zap" className="text-lg" />
                  </div>
                  <div>
                    <p className="font-medium">{recommendation.title}</p>
                    <p className="text-sm text-default-500">{recommendation.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="flex gap-3">
          <Icon icon="lucide:bar-chart" className="text-xl text-primary" />
          <div className="flex flex-col">
            <p className="text-md font-semibold">Skills Analysis</p>
            <p className="text-small text-default-500">Comparison of skills between LinkedIn and resume</p>
          </div>
        </CardHeader>
        <CardBody>
          <div className="h-[300px]">
            <SkillsChart data={data.skills} />
          </div>
        </CardBody>
      </Card>
      
      <Card>
        <CardHeader className="flex gap-3">
          <Icon icon="lucide:tag" className="text-xl text-primary" />
          <div className="flex flex-col">
            <p className="text-md font-semibold">Keyword Matching</p>
            <p className="text-small text-default-500">Important keywords found in your documents</p>
          </div>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium mb-3">Present in Both</h4>
              <div className="flex flex-wrap gap-2">
                {data.keywords.matched.map((keyword: string, index: number) => (
                  <KeywordMatch key={index} keyword={keyword} type="matched" />
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-3">Missing Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {data.keywords.missing.map((keyword: string, index: number) => (
                  <KeywordMatch key={index} keyword={keyword} type="missing" />
                ))}
              </div>
            </div>
          </div>
          
          <Divider className="my-4" />
          
          <div>
            <h4 className="text-sm font-medium mb-3">Industry-Relevant Keywords to Consider</h4>
            <div className="flex flex-wrap gap-2">
              {data.keywords.suggested.map((keyword: string, index: number) => (
                <KeywordMatch key={index} keyword={keyword} type="suggested" />
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};