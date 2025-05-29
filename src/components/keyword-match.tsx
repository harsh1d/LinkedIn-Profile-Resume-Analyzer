import React from "react";

interface KeywordMatchProps {
  keyword: string;
  type: "matched" | "missing" | "suggested";
}

export const KeywordMatch: React.FC<KeywordMatchProps> = ({ keyword, type }) => {
  const getStyles = () => {
    switch (type) {
      case "matched":
        return "bg-success/10 text-success border-success/30";
      case "missing":
        return "bg-danger/10 text-danger border-danger/30";
      case "suggested":
        return "bg-primary/10 text-primary border-primary/30";
      default:
        return "bg-default-100 text-default-700";
    }
  };
  
  const getIcon = () => {
    switch (type) {
      case "matched":
        return "✓";
      case "missing":
        return "✗";
      case "suggested":
        return "+";
      default:
        return "";
    }
  };
  
  return (
    <div className={`px-3 py-1 rounded-full text-sm border ${getStyles()} flex items-center gap-1`}>
      {type !== "suggested" && <span className="text-xs">{getIcon()}</span>}
      {keyword}
    </div>
  );
};