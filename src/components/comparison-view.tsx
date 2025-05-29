import React from "react";
import { Card, CardBody, CardHeader, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

interface ComparisonViewProps {
  data: any;
}

export const ComparisonView: React.FC<ComparisonViewProps> = ({ data }) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex gap-3">
          <Icon icon="lucide:user" className="text-xl text-primary" />
          <div className="flex flex-col">
            <p className="text-md font-semibold">Basic Information</p>
            <p className="text-small text-default-500">Comparison of personal details</p>
          </div>
        </CardHeader>
        <CardBody>
          <Table removeWrapper aria-label="Basic information comparison">
            <TableHeader>
              <TableColumn>FIELD</TableColumn>
              <TableColumn>LINKEDIN</TableColumn>
              <TableColumn>RESUME</TableColumn>
              <TableColumn>MATCH</TableColumn>
            </TableHeader>
            <TableBody>
              {data.basicInfo.map((item: any, index: number) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.field}</TableCell>
                  <TableCell>{item.linkedin}</TableCell>
                  <TableCell>{item.resume}</TableCell>
                  <TableCell>
                    {item.match ? (
                      <Chip color="success" variant="flat" size="sm">Match</Chip>
                    ) : (
                      <Chip color="danger" variant="flat" size="sm">Mismatch</Chip>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
      
      <Card>
        <CardHeader className="flex gap-3">
          <Icon icon="lucide:briefcase" className="text-xl text-primary" />
          <div className="flex flex-col">
            <p className="text-md font-semibold">Experience Comparison</p>
            <p className="text-small text-default-500">Work history differences</p>
          </div>
        </CardHeader>
        <CardBody>
          <div className="space-y-6">
            {data.experience.map((exp: any, index: number) => (
              <div key={index} className="border-b border-default-100 pb-4 last:border-0 last:pb-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium flex items-center gap-2">
                      <Icon icon="logos:linkedin-icon" className="text-base" />
                      LinkedIn
                    </h4>
                    <div className="mt-2 p-3 bg-default-50 rounded-md">
                      <p className="font-medium">{exp.linkedin.title}</p>
                      <p className="text-sm text-default-600">{exp.linkedin.company}</p>
                      <p className="text-sm text-default-500">{exp.linkedin.duration}</p>
                      <p className="text-sm mt-2">{exp.linkedin.description}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium flex items-center gap-2">
                      <Icon icon="lucide:file-text" className="text-base text-primary" />
                      Resume
                    </h4>
                    <div className="mt-2 p-3 bg-default-50 rounded-md">
                      <p className="font-medium">{exp.resume.title}</p>
                      <p className="text-sm text-default-600">{exp.resume.company}</p>
                      <p className="text-sm text-default-500">{exp.resume.duration}</p>
                      <p className="text-sm mt-2">{exp.resume.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3">
                  <h5 className="text-xs font-medium text-default-500 mb-1">ANALYSIS</h5>
                  <div className="flex items-center gap-2">
                    <Icon 
                      icon={exp.analysis.match ? "lucide:check-circle" : "lucide:alert-circle"} 
                      className={`text-base ${exp.analysis.match ? "text-success" : "text-danger"}`} 
                    />
                    <p className="text-sm">{exp.analysis.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
      
      <Card>
        <CardHeader className="flex gap-3">
          <Icon icon="lucide:graduation-cap" className="text-xl text-primary" />
          <div className="flex flex-col">
            <p className="text-md font-semibold">Education Comparison</p>
            <p className="text-small text-default-500">Academic background differences</p>
          </div>
        </CardHeader>
        <CardBody>
          <Table removeWrapper aria-label="Education comparison">
            <TableHeader>
              <TableColumn>DEGREE/SCHOOL</TableColumn>
              <TableColumn>LINKEDIN</TableColumn>
              <TableColumn>RESUME</TableColumn>
              <TableColumn>MATCH</TableColumn>
            </TableHeader>
            <TableBody>
              {data.education.map((item: any, index: number) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="font-medium">{item.degree}</div>
                    <div className="text-small text-default-500">{item.school}</div>
                  </TableCell>
                  <TableCell>{item.linkedin}</TableCell>
                  <TableCell>{item.resume}</TableCell>
                  <TableCell>
                    {item.match ? (
                      <Chip color="success" variant="flat" size="sm">Match</Chip>
                    ) : (
                      <Chip color="danger" variant="flat" size="sm">Mismatch</Chip>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};