import React from "react";
import { Card, CardBody, Progress } from "@heroui/react";
import { Icon } from "@iconify/react";

interface ScoreCardProps {
  title: string;
  score: number;
  icon: string;
  description: string;
}

export const ScoreCard: React.FC<ScoreCardProps> = ({ title, score, icon, description }) => {
  const getScoreClass = (score: number) => {
    if (score >= 90) return "score-excellent";
    if (score >= 75) return "score-good";
    if (score >= 60) return "score-average";
    return "score-poor";
  };
  
  const getScoreText = (score: number) => {
    if (score >= 90) return "Excellent";
    if (score >= 75) return "Good";
    if (score >= 60) return "Average";
    return "Needs Improvement";
  };
  
  const getScoreColor = (score: number) => {
    if (score >= 90) return "success";
    if (score >= 75) return "primary";
    if (score >= 60) return "warning";
    return "danger";
  };
  
  return (
    <Card>
      <CardBody>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-md font-medium">{title}</h3>
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon icon={icon} className="text-primary" />
          </div>
        </div>
        
        <div className="flex items-end justify-between mb-2">
          <div className={`text-3xl font-bold ${getScoreClass(score)}`}>
            {score}%
          </div>
          <div className="text-sm text-default-500">
            {getScoreText(score)}
          </div>
        </div>
        
        <Progress 
          value={score} 
          color={getScoreColor(score) as any}
          className="mb-2"
          size="sm"
        />
        
        <p className="text-xs text-default-500">{description}</p>
      </CardBody>
    </Card>
  );
};