import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Calendar as CalendarIcon, Clock, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { toast } from "sonner";

interface BookingModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

type Step = "datetime" | "details" | "success";

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM"
];

const BookingModal = ({ isOpen, onOpenChange }: BookingModalProps) => {
  const [step, setStep] = useState<Step>("datetime");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const resetModal = () => {
    setStep("datetime");
    setSelectedTime(null);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleOpenChange = (open: boolean) => {
    onOpenChange(open);
    if (!open) {
      setTimeout(resetModal, 300);
    }
  };

  const handleNext = () => {
    if (!date || !selectedTime) {
      toast.error("Please select a date and time slot.");
      return;
    }
    setStep("details");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep("success");
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className={cn(
        "sm:max-w-[500px] p-0 overflow-hidden transition-all duration-300 ease-in-out",
        step === "datetime" ? "sm:max-w-[700px]" : "sm:max-w-[500px]"
      )}>
        {step === "datetime" && (
          <div className="flex flex-col md:flex-row h-full">
            <div className="p-6 border-r border-border md:w-1/2">
              <DialogHeader className="mb-4">
                <DialogTitle className="text-2xl">Select a Date</DialogTitle>
                <DialogDescription>
                  When would you like to speak with us?
                </DialogDescription>
              </DialogHeader>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow-sm"
                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
              />
            </div>
            <div className="p-6 md:w-1/2 bg-muted/30">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-lg">Available Slots</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant={selectedTime === slot ? "default" : "outline"}
                    className={cn(
                      "justify-center h-10 transition-all",
                      selectedTime === slot ? "bg-accent text-accent-foreground border-accent" : "hover:border-accent hover:text-accent"
                    )}
                    onClick={() => setSelectedTime(slot)}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
              <div className="mt-8">
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-white font-medium h-11"
                  onClick={handleNext}
                >
                  Continue
                </Button>
                {date && selectedTime && (
                  <p className="text-xs text-center mt-3 text-muted-foreground flex items-center justify-center gap-1">
                    <CalendarIcon className="w-3 h-3" />
                    {format(date, "MMMM do")} at {selectedTime}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {step === "details" && (
          <div className="p-8">
            <Button 
              variant="ghost" 
              size="sm" 
              className="-ml-2 mb-4 text-muted-foreground hover:text-foreground"
              onClick={() => setStep("datetime")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Date & Time
            </Button>
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl">Consultation Details</DialogTitle>
              <DialogDescription>
                Tell us about yourself and your company.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  placeholder="Acme Inc."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">How can we help? (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project requirements..."
                  className="min-h-[100px] resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-white font-medium h-12 mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Confirm Booking"}
              </Button>
            </form>
          </div>
        )}

        {step === "success" && (
          <div className="p-10 text-center animate-in fade-in zoom-in duration-500">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 rounded-full p-3 dark:bg-green-900/30">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Awesome!</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your consultation has been successfully scheduled. We will contact you shortly.
            </p>
            <div className="bg-muted p-4 rounded-lg mb-8 text-left border border-border">
              <div className="flex items-start gap-3 mb-2">
                <CalendarIcon className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">{format(date!, "EEEE, MMMM do, yyyy")}</p>
                  <p className="text-xs text-muted-foreground">Consultation Date</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">{selectedTime}</p>
                  <p className="text-xs text-muted-foreground">Time Slot (30 mins)</p>
                </div>
              </div>
            </div>
            <Button 
              className="w-full h-12"
              onClick={() => handleOpenChange(false)}
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
