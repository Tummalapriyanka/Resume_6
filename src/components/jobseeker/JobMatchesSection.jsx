
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Info } from 'lucide-react';
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";


const JobMatchesSection = ({ analysisResult, onViewDetails }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Card className="h-full bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-blue-800">Analysis & Job Matches</CardTitle>
        <CardDescription>
          {!analysisResult ? "Analyze your resume to see results here." : `Showing matches based on extracted skills:`}
          {analysisResult && (
              <span className="ml-2 text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                  {analysisResult.skills.slice(0, 5).join(', ')}{analysisResult.skills.length > 5 ? '...' : ''}
              </span>
          )}
          </CardDescription>
      </CardHeader>
      <CardContent>
        {analysisResult ? (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {analysisResult.matchedJobs.map((job) => (
              <motion.div key={job.id} variants={itemVariants}>
                <Card className="border-l-4 border-primary bg-blue-50/50">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                          <CardTitle className="text-lg text-blue-900">{job.title}</CardTitle>
                          <CardDescription className="text-sm text-blue-700">{job.company}</CardDescription>
                      </div>
                      <div className="text-right">
                          <span className={`text-lg font-semibold ${job.match >= 80 ? 'text-green-600' : job.match >= 60 ? 'text-orange-500' : 'text-red-500'}`}>{job.match}%</span>
                          <p className="text-xs text-muted-foreground">Match</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs font-semibold text-blue-800 mb-1">Exam Pattern Summary:</p>
                    <p className="text-xs text-muted-foreground truncate">{job.examPattern}</p>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="link" size="sm" className="text-xs p-0 h-auto mt-1 text-primary" onClick={() => onViewDetails(job)}>
                            <Info className="mr-1 h-3 w-3" /> View Detailed Exam Pattern
                        </Button>
                      </AlertDialogTrigger>
                    </AlertDialog>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-10 text-muted-foreground">
              <BarChart className="mx-auto h-12 w-12 text-blue-300 mb-2" />
              <p>Your job matches and analysis details will appear here.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default JobMatchesSection;
  