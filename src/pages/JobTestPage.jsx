
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { ChevronLeft, CheckCircle, Send } from 'lucide-react';

const JobTestPage = ({ job, onEndTest }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(job?.test?.durationMinutes ? job.test.durationMinutes * 60 : 30 * 60); // Default 30 minutes
  const [testSubmitted, setTestSubmitted] = useState(false);

  const testQuestions = job?.test?.questions || [];
  const codingQuestion = job?.test?.codingQuestion || null;

  useEffect(() => {
    if (testSubmitted) return;
    if (timeLeft <= 0) {
      submitTest();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, testSubmitted]);

  if (!job || !job.test) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <p className="text-xl text-destructive">Test information not available for this job.</p>
        <Button onClick={() => navigate('/job-seeker-dashboard')} className="mt-4">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Button>
      </div>
    );
  }

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleCodingAnswerChange = (event) => {
    setAnswers((prev) => ({...prev, coding: event.target.value}));
  }

  const submitTest = () => {
    if (testSubmitted) return;
    setTestSubmitted(true);
    const score = testQuestions.reduce((acc, q) => {
      return acc + (answers[q.id] === q.correctAnswer ? 1 : 0);
    }, 0);
    
    toast({
      title: "Test Submitted!",
      description: `You scored ${score} out of ${testQuestions.length} on MCQs. Coding question submitted. (Results are simulated)`,
      duration: 5000,
    });
    // onEndTest(); // Clears currentTestJob from App state and localStorage
  };

  const currentQuestion = testQuestions[currentQuestionIndex];

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (testSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-100 to-white"
      >
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <CardTitle className="text-2xl font-bold text-primary">Test Submitted Successfully!</CardTitle>
            <CardDescription>Your responses have been recorded.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-2">Thank you for completing the test for {job.title}.</p>
            <p className="text-lg font-semibold">Your Score (MCQs): {testQuestions.reduce((acc, q) => acc + (answers[q.id] === q.correctAnswer ? 1 : 0), 0)} / {testQuestions.length}</p>
            {codingQuestion && <p className="text-sm text-muted-foreground mt-1">Coding question response also submitted.</p>}
          </CardContent>
          <CardFooter>
            <Button onClick={() => { onEndTest(); navigate('/job-seeker-dashboard'); }} className="w-full bg-primary hover:bg-primary/90">
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Dashboard
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    );
  }


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto p-4 md:p-8 flex flex-col items-center min-h-screen"
    >
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <CardTitle className="text-2xl font-bold text-primary">{job.title} - Assessment</CardTitle>
            <div className={`font-semibold px-3 py-1 rounded-md text-sm ${timeLeft < 300 ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
              Time Left: {formatTime(timeLeft)}
            </div>
          </div>
          <CardDescription>
            {currentQuestionIndex < testQuestions.length 
              ? `MCQ Question ${currentQuestionIndex + 1} of ${testQuestions.length}`
              : `Coding Question`}
          </CardDescription>
        </CardHeader>
        <CardContent className="min-h-[300px]">
          {currentQuestionIndex < testQuestions.length && currentQuestion ? (
            <motion.div 
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800">{currentQuestion.text}</h3>
              <RadioGroup
                value={answers[currentQuestion.id] || ""}
                onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
                className="space-y-3"
              >
                {currentQuestion.options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2 p-3 border rounded-md hover:bg-blue-50 transition-colors">
                    <RadioGroupItem value={option.id} id={`${currentQuestion.id}-${option.id}`} />
                    <Label htmlFor={`${currentQuestion.id}-${option.id}`} className="text-sm cursor-pointer flex-1">{option.text}</Label>
                  </div>
                ))}
              </RadioGroup>
            </motion.div>
          ) : codingQuestion ? (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
               <h3 className="text-lg font-semibold mb-2 text-gray-800">{codingQuestion.title}</h3>
               <p className="text-sm text-muted-foreground mb-4 whitespace-pre-wrap">{codingQuestion.description}</p>
               <textarea 
                  value={answers.coding || ""}
                  onChange={handleCodingAnswerChange}
                  placeholder="Write your code here..."
                  className="w-full h-64 p-3 border rounded-md focus:ring-2 focus:ring-primary outline-none font-mono text-sm"
                />
            </motion.div>
          ) : (
             <p className="text-center text-muted-foreground">No more questions.</p>
          )}
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button 
            variant="outline" 
            onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
            disabled={currentQuestionIndex === 0 || testSubmitted}
          >
            Previous
          </Button>
          {currentQuestionIndex < testQuestions.length -1 ? (
            <Button onClick={() => setCurrentQuestionIndex(prev => prev + 1)} disabled={testSubmitted}>Next Question</Button>
          ) : currentQuestionIndex === testQuestions.length -1 && codingQuestion ? (
             <Button onClick={() => setCurrentQuestionIndex(prev => prev + 1)} disabled={testSubmitted}>Proceed to Coding Question</Button>
          ) : (
            <Button onClick={submitTest} disabled={testSubmitted} className="bg-green-600 hover:bg-green-700 text-white">
              <Send className="mr-2 h-4 w-4"/> Submit Test
            </Button>
          )}
        </CardFooter>
      </Card>
      <Button variant="link" onClick={() => { onEndTest(); navigate('/job-seeker-dashboard');}} className="mt-6 text-primary">
         <ChevronLeft className="mr-1 h-4 w-4" /> Exit Test & Go to Dashboard
      </Button>
    </motion.div>
  );
};

export default JobTestPage;
  