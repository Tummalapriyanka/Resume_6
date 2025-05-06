
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import ResumeUploadCard from '@/components/jobseeker/ResumeUploadCard';
import JobMatchesSection from '@/components/jobseeker/JobMatchesSection';
import JobDetailModal from '@/components/jobseeker/JobDetailModal';
import { mockJobs } from '@/data/mockJobs.js';
import { useNavigate } from 'react-router-dom';

const JobSeekerDashboard = ({ onLogout, onStartTest }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [resumeFile, setResumeFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [selectedJobForModal, setSelectedJobForModal] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "application/pdf" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || file.type === "text/plain")) {
      setResumeFile(file);
      toast({
        title: "Resume Selected",
        description: `${file.name}`,
      });
      setAnalysisResult(null);
    } else {
      toast({
        variant: "destructive",
        title: "Invalid File Type",
        description: "Please upload a PDF, DOCX, or TXT file.",
      });
      if(event.target) event.target.value = null;
    }
  };

  const handleAnalyzeResume = () => {
    if (!resumeFile) {
      toast({
        variant: "destructive",
        title: "No Resume Selected",
        description: "Please select a resume file first.",
      });
      return;
    }

    toast({
      title: "Analyzing Resume...",
      description: "This might take a moment. (Simulation)",
    });

    setTimeout(() => {
      const simulatedSkills = ["React", "JavaScript", "TailwindCSS", "Node.js", "AWS", "Problem Solving", "Communication", "SQL"];
      // Use mockJobs from the imported data file
      setAnalysisResult({
        skills: simulatedSkills,
        matchedJobs: mockJobs.map(job => ({
          ...job,
          match: Math.min(98, Math.floor(Math.random() * 40) + 55) 
        })).sort((a, b) => b.match - a.match)
      });
      toast({
        title: "Analysis Complete",
        description: "Found potential job matches based on your resume.",
      });
    }, 1500);
  };

  const removeFile = () => {
    setResumeFile(null);
    setAnalysisResult(null);
    if (fileInputRef.current) {
        fileInputRef.current.value = null;
    }
    toast({
        title: "Resume Removed",
    });
  };

  const handleTakeTest = (job) => {
    onStartTest(job);
    setSelectedJobForModal(null); // Close modal
    navigate(`/test/${job.id}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-6 md:p-10 space-y-8">
      <motion.div
        className="flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-primary">Job Seeker Dashboard</h1>
        <Button variant="outline" onClick={onLogout}>Logout</Button>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div variants={itemVariants} className="lg:col-span-1">
          <ResumeUploadCard
            resumeFile={resumeFile}
            fileInputRef={fileInputRef}
            onFileChange={handleFileChange}
            onAnalyzeResume={handleAnalyzeResume}
            onRemoveFile={removeFile}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="lg:col-span-2">
          <JobMatchesSection
            analysisResult={analysisResult}
            onViewDetails={setSelectedJobForModal}
          />
        </motion.div>
      </motion.div>
        
      <JobDetailModal
        job={selectedJobForModal}
        isOpen={!!selectedJobForModal}
        onClose={() => setSelectedJobForModal(null)}
        onTakeTest={handleTakeTest}
      />
    </div>
  );
};

export default JobSeekerDashboard;
  