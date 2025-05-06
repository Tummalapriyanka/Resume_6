
import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { PlayCircle } from 'lucide-react';

const JobDetailModal = ({ job, isOpen, onClose, onTakeTest }) => {
  if (!job) return null;

  const renderDetailedExam = (details) => {
    if (!details) return <p>No detailed exam information available.</p>;
    return (
      <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
        {details.mcqs && <li><strong>MCQs:</strong> {details.mcqs.count} bits on {details.mcqs.topics.join(', ')}.</li>}
        {details.coding && <li><strong>Coding:</strong> {details.coding.count} question ({details.coding.difficulty}) on {details.coding.topic}.</li>}
        {details.portfolio && <li><strong>Portfolio:</strong> {details.portfolio}.</li>}
        {details.designTask && <li><strong>Design Task:</strong> {details.designTask.count} task, {details.designTask.scope}. Tools: {details.designTask.tools}.</li>}
        {details.presentation && <li><strong>Presentation:</strong> {details.presentation}.</li>}
        {details.sql && <li><strong>SQL:</strong> {details.sql.count} bits on {details.sql.topics.join(', ')}.</li>}
        {details.python && <li><strong>Python:</strong> {details.python.count} bits on {details.python.topics.join(', ')}.</li>}
        {details.caseStudy && <li><strong>Case Study:</strong> {details.caseStudy.count} ({details.caseStudy.type}).</li>}
        {details.practical && <li><strong>Practical:</strong> {details.practical.count} ({details.practical.type}).</li>}
        {details.testCase && <li><strong>Test Case Writing:</strong> {details.testCase.count} task - {details.testCase.scope}.</li>}
        {details.automation && <li><strong>Automation:</strong> {details.automation}.</li>}
        {details.interview && <li><strong>Interview:</strong> {details.interview}.</li>}
      </ul>
    );
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-primary">{job.title} at {job.company}</AlertDialogTitle>
          <AlertDialogDescription>
            Detailed exam structure and what to expect:
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="max-h-[50vh] overflow-y-auto pr-2 my-4">
         {renderDetailedExam(job.detailedExam)}
        </div>
        <AlertDialogFooter className="sm:justify-between">
          <Button variant="outline" onClick={() => onTakeTest(job)} className="w-full sm:w-auto mb-2 sm:mb-0">
            <PlayCircle className="mr-2 h-4 w-4" /> Take Test
          </Button>
          <AlertDialogAction onClick={onClose} className="bg-primary hover:bg-primary/90 w-full sm:w-auto">Got it!</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default JobDetailModal;
  