
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { UploadCloud, FileText, BarChart, X } from 'lucide-react';

const ResumeUploadCard = ({ resumeFile, fileInputRef, onFileChange, onAnalyzeResume, onRemoveFile }) => {
  
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card className="h-full flex flex-col bg-gradient-to-br from-blue-50 to-white shadow-lg border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center text-blue-800">
          <FileText className="mr-2 h-5 w-5" /> Your Resume
        </CardTitle>
        <CardDescription>Upload your latest resume to get matched.</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col items-center justify-center space-y-4">
        <input
          type="file"
          ref={fileInputRef}
          onChange={onFileChange}
          className="hidden"
          accept=".pdf,.docx,.txt"
        />
        {!resumeFile ? (
           <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ type: "spring", stiffness: 260, damping: 20 }}
           className="text-center"
         >
          <Button variant="secondary" size="lg" onClick={handleUploadClick} className="bg-white border border-blue-300 hover:bg-blue-100 text-blue-700">
            <UploadCloud className="mr-2 h-5 w-5" /> Select Resume
          </Button>
          <p className="text-xs text-muted-foreground mt-2">PDF, DOCX, or TXT files only</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center space-y-3 p-4 bg-blue-100 rounded-lg border border-blue-300 w-full"
          >
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium text-blue-900 truncate pr-2">{resumeFile.name}</p>
              <Button variant="ghost" size="icon" onClick={onRemoveFile} className="h-6 w-6 text-red-500 hover:bg-red-100">
                  <X className="h-4 w-4" />
              </Button>
            </div>
            <Button onClick={onAnalyzeResume} className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
              <BarChart className="mr-2 h-4 w-4" /> Analyze & Find Jobs
            </Button>
          </motion.div>
        )}
      </CardContent>
      <CardFooter>
          <p className="text-xs text-muted-foreground text-center w-full">
              We'll extract skills to match you with the best opportunities.
          </p>
      </CardFooter>
    </Card>
  );
};

export default ResumeUploadCard;
  