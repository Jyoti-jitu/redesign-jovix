"use client";

import React, { useState } from "react";
import {
  Calendar,
  CheckCircle2,
  FileText,
  Activity,
  Send,
  Stethoscope,
  MapPin,
  Clock,
  Award,
  Video,
  Star,
  Users,
  Bell,
  Scale,
  ShieldCheck,
  Briefcase,
  Utensils,
  QrCode,
  Flame,
  Wine,
  GraduationCap,
  BookOpen,
  CreditCard,
  ArrowRight,
  Sun,
  Layers,
  ShoppingBag,
  Cpu,
  RefreshCw,
  Train,
  Ticket,
  Link2,
  Copy,
} from "lucide-react";

export default function DemoLiveSimulator({ demo }) {
  // --- URL Shortener State ---
  const [shortLongUrl, setShortLongUrl] = useState("https://jovix.co.uk/services/custom-software-engineering?utm_campaign=launch2026");
  const [shortCustomSlug, setShortCustomSlug] = useState("jovix-launch");
  const [shortList, setShortList] = useState([
    {
      id: "sl-1",
      slug: "jovix-launch",
      shortUrl: "snap.link/jovix-launch",
      originalUrl: "https://jovix.co.uk/services/custom-software-engineering?utm_campaign=launch2026",
      clicks: 142,
      created: "Just now",
    },
    {
      id: "sl-2",
      slug: "railsetu",
      shortUrl: "snap.link/railsetu",
      originalUrl: "https://rail-setu-nu.vercel.app/",
      clicks: 840,
      created: "2h ago",
    },
  ]);
  const [shortCopiedId, setShortCopiedId] = useState(null);

  // --- Railway & RailSetu State ---
  const [railTab, setRailTab] = useState("search");
  const [railFrom, setRailFrom] = useState("NDLS - New Delhi");
  const [railTo, setRailTo] = useState("BBS - Bhubaneswar");
  const [railClass, setRailClass] = useState("3A");
  const [railPnrInput, setRailPnrInput] = useState("2458910245");
  const [railPnrResult, setRailPnrResult] = useState(null);
  const [railBookedTrain, setRailBookedTrain] = useState(null);

  // --- Coaching Total Management State ---
  const [coachTab, setCoachTab] = useState("attendance");
  const [coachBatch, setCoachBatch] = useState("JEE Super-30 (Physics • Prof. Verma)");
  const [coachStudents, setCoachStudents] = useState([
    { id: 1, name: "Aarav Sen", roll: "Roll #01", present: true },
    { id: 2, name: "Shreya Mohanty", roll: "Roll #02", present: true },
    { id: 3, name: "Rohan Das", roll: "Roll #03", present: false },
    { id: 4, name: "Priyanka Sahoo", roll: "Roll #04", present: true },
  ]);
  const [coachAttendanceDispatched, setCoachAttendanceDispatched] = useState(false);
  const [coachFeePaid, setCoachFeePaid] = useState(false);

  // --- Customized Software State ---
  const [customIndustry, setCustomIndustry] = useState("manufacturing");
  const [customModules, setCustomModules] = useState({
    inventory: true,
    billing: true,
    roles: true,
    webhooks: true,
    analytics: false,
  });
  const [customWorkflowExecuted, setCustomWorkflowExecuted] = useState(false);
  const [customViewSchema, setCustomViewSchema] = useState(false);

  // --- Restaurant QR Order & Table Booking State ---
  const [restTab, setRestTab] = useState("qr");
  const [restTableNum, setRestTableNum] = useState(4);
  const [restCart, setRestCart] = useState({ pizza: 1, pasta: 1, drink: 2 });
  const [restOrderFired, setRestOrderFired] = useState(false);
  const [restPartySize, setRestPartySize] = useState("4 Guests");
  const [restZone, setRestZone] = useState("Rooftop Terrace");
  const [restSlot, setRestSlot] = useState("08:15 PM");
  const [restGuestName, setRestGuestName] = useState("Ananya Das");
  const [restBookingConfirmed, setRestBookingConfirmed] = useState(false);

  // --- Advocate Personalized Website & Booking State ---
  const [advMatterType, setAdvMatterType] = useState("Corporate & Commercial Contracts");
  const [advMode, setAdvMode] = useState("chamber");
  const [advChamberVenue, setAdvChamberVenue] = useState("highcourt");
  const [advClientName, setAdvClientName] = useState("Vikramaditya Rout");
  const [advSelectedSlot, setAdvSelectedSlot] = useState("05:30 PM (Evening Chamber)");
  const [advBooked, setAdvBooked] = useState(false);

  // --- Doctor Personalized Website State ---
  const [docChamber, setDocChamber] = useState("apollo");
  const [docConsultType, setDocConsultType] = useState("clinic");
  const [docPatientName, setDocPatientName] = useState("Sunil Verma");
  const [docSelectedSlot, setDocSelectedSlot] = useState("06:00 PM");
  const [docBooked, setDocBooked] = useState(false);

  // --- MedixCare Clinic Operations & Appointment State ---
  const [clinicTab, setClinicTab] = useState("booking");
  const [clinicSelectedSlot, setClinicSelectedSlot] = useState("10:30 AM");
  const [clinicDoctor, setClinicDoctor] = useState("Dr. Alok Mohapatra (Cardiology)");
  const [clinicPatientName, setClinicPatientName] = useState("Rajesh Mohanty");
  const [clinicBooked, setClinicBooked] = useState(false);
  const [currentQueueToken, setCurrentQueueToken] = useState(14);

  // --- MediRx EHR State ---
  const [ehrPatientName, setEhrPatientName] = useState("Priya Sharma (Age: 29)");
  const [ehrMedicine, setEhrMedicine] = useState("Amoxicillin 500mg — 1-0-1 (5 Days)");
  const [ehrGenerated, setEhrGenerated] = useState(false);

  // --- HealthLab State ---
  const [labStage, setLabStage] = useState(2);

  // --- Solar Calculator State ---
  const [monthlyBill, setMonthlyBill] = useState(6500);

  // --- FastInvoice State ---
  const [invoiceAmount, setInvoiceAmount] = useState(25000);

  // --- Chatbot State ---
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi! Welcome to Jovix. Looking for a custom healthcare web app, clinic management software, or AI automation?",
    },
  ]);
  const [chatInput, setChatInput] = useState("");

  // --- CRM State ---
  const [crmLeads, setCrmLeads] = useState([
    { id: 1, name: "Kalinga Metals Pvt Ltd", value: "₹4.5L", stage: "Proposal" },
    { id: 2, name: "Dr. Mohapatra Clinic", value: "₹1.8L", stage: "Negotiation" },
    { id: 3, name: "SmartSolar Energies", value: "₹6.2L", stage: "Won" },
  ]);

  // --- E-Commerce State ---
  const [ecomQuantity, setEcomQuantity] = useState(1);
  const [ecomCheckedOut, setEcomCheckedOut] = useState(false);

  // --- Industrial Soil Calc State ---
  const [soilType, setSoilType] = useState("loamy");

  const handleSendChat = (text) => {
    const userText = text || chatInput;
    if (!userText.trim()) return;

    const newMsgs = [...chatMessages, { sender: "user", text: userText }];
    setChatMessages(newMsgs);
    setChatInput("");

    setTimeout(() => {
      let reply = "We design and build bespoke, production-ready web platforms and software. What timeline do you have in mind?";
      const lower = userText.toLowerCase();
      if (lower.includes("medical") || lower.includes("clinic") || lower.includes("doctor")) {
        reply = "We engineer full-scale healthcare systems: patient booking portals, digital Rx generators (MediRx), and diagnostic lab report trackers!";
      } else if (lower.includes("price") || lower.includes("cost")) {
        reply = "We work with transparent fixed milestones based on project scope. We can send a customized proposal within 24 hours.";
      } else if (lower.includes("crm") || lower.includes("erp") || lower.includes("invoice")) {
        reply = "Yes! Our custom CRM & ERP systems include GST billing, lead pipelines, inventory, and staff roles without restrictive SaaS fees.";
      }
      setChatMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 600);
  };

  // Solar calculations
  const recommendedKW = (monthlyBill / 1200).toFixed(1);
  const annualSavings = Math.round(monthlyBill * 12 * 0.85);
  const paybackYears = ((55000 * recommendedKW) / annualSavings).toFixed(1);

  // Invoice calculations
  const cgst = Math.round(invoiceAmount * 0.09);
  const sgst = Math.round(invoiceAmount * 0.09);
  const totalWithTax = invoiceAmount + cgst + sgst;

  if (!demo) return null;

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-3.5 sm:p-8">
      {/* 0. Customized Software ERP & Module Configurator */}
      {demo.demoType === "custom-software" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base text-slate-950">FlexiCore Customized Software Architecture</span>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">
                  Interactive Simulator
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Configure bespoke modules, test automated workflow rules, and inspect database architecture live.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCustomViewSchema(!customViewSchema)}
                className="px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {customViewSchema ? "Hide DB Schema" : "Inspect PostgreSQL Schema"}
              </button>
            </div>
          </div>

          {/* Industry Archetype Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Select Your Business Workflow Model:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: "manufacturing", label: "Manufacturing & Distribution" },
                { id: "clinic", label: "Multi-Speciality Healthcare" },
                { id: "retail", label: "Multi-Branch Retail & E-Com" },
                { id: "services", label: "Professional Law / Consulting" },
              ].map((ind) => (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => {
                    setCustomIndustry(ind.id);
                    setCustomWorkflowExecuted(false);
                  }}
                  className={`p-3 text-left rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    customIndustry === ind.id
                      ? "border-blue-600 bg-blue-50/80 text-blue-900 shadow-xs"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <div className="text-[10px] text-slate-400 font-medium uppercase mb-0.5">Industry</div>
                  <div>{ind.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Modular Architecture Checkboxes */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Active Tailor-Made Software Modules:
              </label>
              <span className="text-[11px] text-blue-600 font-semibold">Click to toggle modules</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {[
                { key: "inventory", label: "Multi-Warehouse Stock & Batch Tracking", desc: "Live barcode scanning & minimum reorder threshold" },
                { key: "billing", label: "Automated GST Invoicing & e-Way Billing", desc: "CGST/SGST/IGST calculation with digital signatures" },
                { key: "roles", label: "Granular Role & Department Access", desc: "Superadmin, branch manager, cashier permission matrix" },
                { key: "webhooks", label: "WhatsApp & SMS Real-Time Webhooks", desc: "Automated trigger notifications dispatched to clients" },
                { key: "analytics", label: "Executive Margin & Cash Flow Ledger", desc: "Daily P&L audits and operational cost analytics" },
              ].map((mod) => (
                <div
                  key={mod.key}
                  onClick={() =>
                    setCustomModules((prev) => ({ ...prev, [mod.key]: !prev[mod.key] }))
                  }
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    customModules[mod.key]
                      ? "border-emerald-300 bg-emerald-50/50 text-emerald-950"
                      : "border-slate-200 bg-slate-50 text-slate-500 opacity-60"
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-xs">
                    <span>{mod.label}</span>
                    <span
                      className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                        customModules[mod.key] ? "bg-emerald-600 text-white" : "border border-slate-300"
                      }`}
                    >
                      {customModules[mod.key] && "✓"}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Live Workflow Simulator */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>Simulate Automated Business Rule</span>
              </div>
              <span className="text-[11px] bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-full font-mono">
                PostgreSQL • Node.js • Webhooks
              </span>
            </div>

            <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 space-y-1.5">
              <div className="text-slate-400">{"// Inbound Workflow Event:"}</div>
              <div>
                <span className="text-amber-400">Trigger:</span>{" "}
                {customIndustry === "manufacturing"
                  ? "Requisition #REQ-4819 filed by Depot 02 (500 units steel electrode)"
                  : customIndustry === "clinic"
                  ? "Patient token #T-14 assigned to Dr. Chamber 02 & consultation Rx locked"
                  : customIndustry === "retail"
                  ? "Branch #3 inventory dropped below 15 units of SKU-881"
                  : "Retainer Agreement #AG-209 digitally signed by Client"}
              </div>
              <div>
                <span className="text-emerald-400">Security Check:</span> Role verified (Department Head Authorization)
              </div>
              <div>
                <span className="text-blue-400">Action:</span> Automated GST invoice drafted + WhatsApp dispatch alert queued
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={() => setCustomWorkflowExecuted(true)}
                className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Activity className="w-4 h-4" />
                <span>Execute Custom Event Simulation</span>
              </button>

              {customWorkflowExecuted && (
                <div className="inline-flex items-center gap-2 text-xs text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-800/80 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Workflow Dispatched in 0.04s • WhatsApp webhook triggered!</span>
                </div>
              )}
            </div>
          </div>

          {/* Database Schema Viewer */}
          {customViewSchema && (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 space-y-2">
              <div className="font-bold text-slate-900 font-sans flex items-center justify-between">
                <span>Tailored PostgreSQL Schema (Generated for {customIndustry.toUpperCase()}):</span>
                <span className="text-[10px] text-blue-600 font-bold">Normalized 3NF</span>
              </div>
              <pre className="p-3 bg-white border border-slate-200 rounded-xl overflow-x-auto text-[11px] leading-relaxed">
{`CREATE TABLE business_tenants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  gstin_tax_id VARCHAR(15) UNIQUE,
  active_modules JSONB DEFAULT '{"inventory": true, "billing": true}'
);

CREATE TABLE customized_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES business_tenants(id),
  subtotal_amount NUMERIC(12,2) NOT NULL,
  cgst_tax NUMERIC(10,2) GENERATED ALWAYS AS (subtotal_amount * 0.09) STORED,
  sgst_tax NUMERIC(10,2) GENERATED ALWAYS AS (subtotal_amount * 0.09) STORED,
  approval_status VARCHAR(20) DEFAULT 'APPROVED_BY_ROLE',
  created_at TIMESTAMPTZ DEFAULT NOW()
);`}
              </pre>
            </div>
          )}
        </div>
      )}

      {/* 1. Coaching Total Management */}
      {demo.demoType === "coaching-management" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base text-slate-950">CoachPulse ERP</span>
                <span className="text-xs bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full">
                  Live Prototype
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Batch attendance, parent absence alerts, fee tracking &amp; course timetables
              </p>
            </div>

            <div className="flex items-center bg-slate-100 p-1 rounded-xl self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setCoachTab("attendance")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  coachTab === "attendance" ? "bg-white text-blue-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Users className="w-3.5 h-3.5 inline mr-1" />
                Attendance
              </button>
              <button
                type="button"
                onClick={() => setCoachTab("fees")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  coachTab === "fees" ? "bg-white text-blue-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <CreditCard className="w-3.5 h-3.5 inline mr-1" />
                Fee Tracker
              </button>
              <button
                type="button"
                onClick={() => setCoachTab("courses")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  coachTab === "courses" ? "bg-white text-blue-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 inline mr-1" />
                Batches
              </button>
            </div>
          </div>

          {coachTab === "attendance" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Select Active Batch:
                </label>
                <select
                  value={coachBatch}
                  onChange={(e) => {
                    setCoachBatch(e.target.value);
                    setCoachAttendanceDispatched(false);
                  }}
                  className="w-full p-2.5 text-sm border border-slate-300 rounded-xl bg-white"
                >
                  <option value="JEE Super-30 (Physics • Prof. Verma)">
                    JEE Super-30 (Physics • Prof. Verma)
                  </option>
                  <option value="NEET Rankers Batch (Biology • Dr. Mishra)">
                    NEET Rankers Batch (Biology • Dr. Mishra)
                  </option>
                  <option value="Class 10 Foundation (Maths • Mrs. Rout)">
                    Class 10 Foundation (Maths • Mrs. Rout)
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-500 flex justify-between px-1">
                  <span>Student Name &amp; Roll Number</span>
                  <span>Click to Toggle Status</span>
                </div>
                {coachStudents.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                  >
                    <div>
                      <span className="font-bold text-slate-900">{student.name}</span>
                      <span className="text-xs text-slate-500 ml-2 font-mono">{student.roll}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setCoachStudents((prev) =>
                          prev.map((s) => (s.id === student.id ? { ...s, present: !s.present } : s))
                        );
                        setCoachAttendanceDispatched(false);
                      }}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                        student.present
                          ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                          : "bg-red-100 text-red-800 hover:bg-red-200"
                      }`}
                    >
                      {student.present ? "✓ Present" : "✕ Absent"}
                    </button>
                  </div>
                ))}
              </div>

              {coachAttendanceDispatched ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-emerald-900">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Attendance Submitted • Automated Parent WhatsApp Alerts Dispatched!</span>
                  </div>
                  <div className="p-3 bg-white border border-emerald-200 rounded-xl text-xs text-slate-700 font-mono leading-relaxed">
                    <span className="text-red-600 font-bold">📲 WhatsApp Alert to Parents of Absent Students:</span>
                    <br />
                    &ldquo;Attention Guardian: Rohan Das was marked ABSENT for Class 12 Physics (Batch Super-30) today at 10:30 AM. Current monthly attendance: 78%. For queries, contact Institute Desk.&rdquo;
                  </div>
                  <button
                    type="button"
                    onClick={() => setCoachAttendanceDispatched(false)}
                    className="text-xs text-blue-600 font-bold hover:underline cursor-pointer"
                  >
                    ← Test another batch attendance update
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setCoachAttendanceDispatched(true)}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Attendance &amp; Dispatch Parent WhatsApp Alerts</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}

          {coachTab === "fees" && (
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900">Aarav Sen (Roll #01)</div>
                    <div className="text-xs text-slate-500 mt-0.5">Course: JEE Advanced 2-Year Classroom Program</div>
                  </div>
                  <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2.5 py-1 rounded-full">
                    Installment 2 Due
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-200 text-center">
                  <div>
                    <span className="text-xs text-slate-500 block">Total Course Fee</span>
                    <span className="text-sm font-extrabold text-slate-900">₹85,000</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Paid So Far</span>
                    <span className="text-sm font-extrabold text-emerald-600">₹50,000</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Remaining Dues</span>
                    <span className="text-sm font-extrabold text-red-600">
                      {coachFeePaid ? "₹20,000" : "₹35,000"}
                    </span>
                  </div>
                </div>
              </div>

              {coachFeePaid ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-emerald-900">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Fee Receipt #RCPT-EDU-928 Generated!</span>
                  </div>
                  <div className="p-3 bg-white border border-emerald-200 rounded-xl text-xs text-slate-700 font-mono leading-relaxed">
                    <span className="text-emerald-700 font-bold">📲 WhatsApp Payment Receipt to Parent:</span>
                    <br />
                    &ldquo;Namaste Mr. Sen, received ₹15,000 towards Aarav&apos;s JEE Course Fee (Receipt #RCPT-EDU-928). Balance dues: ₹20,000. Download official GST invoice PDF: jovix.co/inv/928&rdquo;
                  </div>
                  <button
                    type="button"
                    onClick={() => setCoachFeePaid(false)}
                    className="text-xs text-blue-600 font-bold hover:underline cursor-pointer"
                  >
                    ← Test another fee payment
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCoachFeePaid(true)}
                    className="py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Collect ₹15,000 &amp; Issue Receipt</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => alert("Simulated: Automated WhatsApp UPI payment link dispatched to student guardian!")}
                    className="py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send WhatsApp UPI Link</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {coachTab === "courses" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs bg-blue-50 border border-blue-200 p-3 rounded-xl">
                <span className="font-bold text-blue-950 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  Active Batches &amp; Timetable
                </span>
                <span className="text-xs bg-blue-600 text-white font-bold px-2.5 py-0.5 rounded-full">
                  86% Capacity Utilized
                </span>
              </div>

              <div className="space-y-2.5 text-sm">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900">JEE Target 2027 (Advance Batch)</span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      48 Enrolled
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 flex items-center justify-between">
                    <span>Mon, Wed, Fri • 08:00 AM - 11:00 AM</span>
                    <span className="font-semibold text-slate-700">Lecture Hall A-1 (Prof. Verma)</span>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900">NEET Medical 2026 (Dropper Batch)</span>
                    <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                      62 Enrolled
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 flex items-center justify-between">
                    <span>Tue, Thu, Sat • 09:30 AM - 12:30 PM</span>
                    <span className="font-semibold text-slate-700">Chamber B (Dr. Mishra)</span>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900">Class 10 Foundation (Maths &amp; Science)</span>
                    <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                      35 Enrolled
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 flex items-center justify-between">
                    <span>Daily • 04:30 PM - 06:30 PM</span>
                    <span className="font-semibold text-slate-700">Classroom C-2 (Mrs. Rout)</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 2. Restaurant QR Code Order & Table Booking */}
      {demo.demoType === "restaurant-qr" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base text-slate-950">DineFlow Console</span>
                <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                  Table #{restTableNum} • Active
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Contactless dining, kitchen routing &amp; guest reservations
              </p>
            </div>

            <div className="flex items-center bg-slate-100 p-1 rounded-xl self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setRestTab("qr")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  restTab === "qr" ? "bg-white text-blue-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <QrCode className="w-3.5 h-3.5 inline mr-1" />
                QR Order
              </button>
              <button
                type="button"
                onClick={() => setRestTab("booking")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  restTab === "booking" ? "bg-white text-blue-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Utensils className="w-3.5 h-3.5 inline mr-1" />
                Book Table
              </button>
              <button
                type="button"
                onClick={() => setRestTab("kot")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  restTab === "kot" ? "bg-white text-blue-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Flame className="w-3.5 h-3.5 inline mr-1" />
                Kitchen KOT
              </button>
            </div>
          </div>

          {restTab === "qr" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-amber-50/70 border border-amber-200 p-3 rounded-xl">
                <div className="flex items-center gap-2.5">
                  <QrCode className="w-6 h-6 text-amber-700" />
                  <div>
                    <div className="font-bold text-sm text-amber-950">Table #{restTableNum} (Indoor Dining)</div>
                    <div className="text-xs text-amber-800">Scanned via guest smartphone camera</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-amber-700 block">Current Bill</span>
                  <span className="text-base font-black text-amber-950">
                    ₹{restCart.pizza * 420 + restCart.pasta * 480 + restCart.drink * 180}
                  </span>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <div>
                    <div className="text-sm font-bold text-slate-900">Wood-Fired Margherita Pizza</div>
                    <div className="text-xs text-slate-500">San Marzano tomatoes, fresh buffalo mozzarella • ₹420</div>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-slate-300 rounded-lg p-1">
                    <button
                      type="button"
                      onClick={() => setRestCart((prev) => ({ ...prev, pizza: Math.max(0, prev.pizza - 1) }))}
                      className="w-6 h-6 flex items-center justify-center text-sm font-bold text-slate-600 hover:bg-slate-100 rounded cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-sm font-bold w-5 text-center">{restCart.pizza}</span>
                    <button
                      type="button"
                      onClick={() => setRestCart((prev) => ({ ...prev, pizza: prev.pizza + 1 }))}
                      className="w-6 h-6 flex items-center justify-center text-sm font-bold text-slate-600 hover:bg-slate-100 rounded cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <div>
                    <div className="text-sm font-bold text-slate-900">Truffle Wild Mushroom Risotto</div>
                    <div className="text-xs text-slate-500">Arborio rice, aged parmesan, white truffle oil • ₹480</div>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-slate-300 rounded-lg p-1">
                    <button
                      type="button"
                      onClick={() => setRestCart((prev) => ({ ...prev, pasta: Math.max(0, prev.pasta - 1) }))}
                      className="w-6 h-6 flex items-center justify-center text-sm font-bold text-slate-600 hover:bg-slate-100 rounded cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-sm font-bold w-5 text-center">{restCart.pasta}</span>
                    <button
                      type="button"
                      onClick={() => setRestCart((prev) => ({ ...prev, pasta: prev.pizza + 1 }))}
                      className="w-6 h-6 flex items-center justify-center text-sm font-bold text-slate-600 hover:bg-slate-100 rounded cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <div>
                    <div className="text-sm font-bold text-slate-900">Smoked Cold Brew Mocktail</div>
                    <div className="text-xs text-slate-500">Arabica single-origin with rosemary smoke • ₹180</div>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-slate-300 rounded-lg p-1">
                    <button
                      type="button"
                      onClick={() => setRestCart((prev) => ({ ...prev, drink: Math.max(0, prev.drink - 1) }))}
                      className="w-6 h-6 flex items-center justify-center text-sm font-bold text-slate-600 hover:bg-slate-100 rounded cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-sm font-bold w-5 text-center">{restCart.drink}</span>
                    <button
                      type="button"
                      onClick={() => setRestCart((prev) => ({ ...prev, drink: prev.drink + 1 }))}
                      className="w-6 h-6 flex items-center justify-center text-sm font-bold text-slate-600 hover:bg-slate-100 rounded cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {restOrderFired ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-emerald-900">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>KOT #K-82 Fired to Kitchen Display!</span>
                  </div>
                  <div className="p-3 bg-white border border-emerald-200 rounded-xl text-xs text-slate-700 font-mono leading-relaxed">
                    <span className="text-emerald-700 font-bold">👨‍🍳 Kitchen Ticket Status:</span>
                    <br />
                    Table #04 • 3 Items (Total ₹{restCart.pizza * 420 + restCart.pasta * 480 + restCart.drink * 180}) • Cooking Station 1 • Est. Prep Time: 12-14 mins.
                  </div>
                  <button
                    type="button"
                    onClick={() => setRestOrderFired(false)}
                    className="text-xs text-blue-600 font-bold hover:underline cursor-pointer"
                  >
                    ← Place another order for Table #{restTableNum}
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setRestOrderFired(true)}
                  className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-sm font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Flame className="w-4 h-4" />
                  <span>Fire Order to Kitchen Display (Table #{restTableNum})</span>
                </button>
              )}
            </div>
          )}

          {restTab === "booking" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Party Size / Guests:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {["2 Guests", "4 Guests", "6 Guests", "8+ Group"].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => {
                        setRestPartySize(size);
                        setRestBookingConfirmed(false);
                      }}
                      className={`py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
                        restPartySize === size ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Seating Preference Zone:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Rooftop Terrace", "Main Dining Hall", "Private Lounge"].map((zone) => (
                    <button
                      key={zone}
                      type="button"
                      onClick={() => {
                        setRestZone(zone);
                        setRestBookingConfirmed(false);
                      }}
                      className={`p-2.5 text-xs font-bold rounded-xl transition-colors cursor-pointer text-center ${
                        restZone === zone ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {zone}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Reservation Slot:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {["07:30 PM", "08:15 PM", "09:00 PM", "09:45 PM"].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => {
                        setRestSlot(slot);
                        setRestBookingConfirmed(false);
                      }}
                      className={`py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
                        restSlot === slot ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Primary Guest Name:
                </label>
                <input
                  type="text"
                  value={restGuestName}
                  onChange={(e) => {
                    setRestGuestName(e.target.value);
                    setRestBookingConfirmed(false);
                  }}
                  placeholder="e.g. Ananya Das"
                  className="w-full p-2.5 text-sm border border-slate-300 rounded-xl bg-white"
                />
              </div>

              {restBookingConfirmed ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-emerald-900">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Table Reserved • Booking ID #TBL-ROOF-4</span>
                  </div>
                  <div className="p-3 bg-white border border-emerald-200 rounded-xl text-xs text-slate-700 font-mono leading-relaxed">
                    <span className="text-emerald-700 font-bold">📲 WhatsApp Confirmation to Guest:</span>
                    <br />
                    &ldquo;Namaste {restGuestName}, your table reservation for {restPartySize} at {restZone} is confirmed for {restSlot} today. Booking ID #TBL-ROOF-4.&rdquo;
                  </div>
                  <button
                    type="button"
                    onClick={() => setRestBookingConfirmed(false)}
                    className="text-xs text-blue-600 font-bold hover:underline cursor-pointer"
                  >
                    ← Test another table reservation
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setRestBookingConfirmed(true)}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirm Table Reservation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}

          {restTab === "kot" && (
            <div className="space-y-3 bg-slate-950 text-white p-4 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-sm">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <span className="font-extrabold text-orange-400">KOT #K-82</span>
                  <span className="bg-slate-800 text-slate-300 text-xs px-2 py-0.5 rounded font-mono">
                    Table #{restTableNum}
                  </span>
                </div>
                <span className="text-emerald-400 font-mono text-xs">⏱️ 05:18 min</span>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span>[x{restCart.pizza}] Wood-Fired Margherita Pizza</span>
                  <span className="text-slate-400">Oven 1</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span>[x{restCart.pasta}] Truffle Mushroom Risotto</span>
                  <span className="text-slate-400">Sauté 2</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span>[x{restCart.drink}] Smoked Cold Brew Mocktail</span>
                  <span className="text-slate-400">Bar 1</span>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between">
                <span className="text-xs text-slate-400">Chef: Station 1 &amp; Bar</span>
                <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-800 px-2.5 py-1 rounded">
                  Cooking in Progress
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3. Advocate Personalized Website & Booking */}
      {demo.demoType === "advocate-website" && (
        <div className="space-y-6">
          <div className="flex items-start justify-between border-b border-slate-100 pb-4 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base text-slate-950">Adv. Satyajit Patnaik</span>
                <span className="text-xs bg-slate-900 text-white font-bold px-2 py-0.5 rounded">
                  Bar Reg. #OD-1428/2006
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Senior Advocate • Orissa High Court &amp; Supreme Court Affiliated • 18+ Yrs Practice
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 shrink-0">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>4.95 (180+ Reviews)</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
              Legal Matter / Practice Area:
            </label>
            <select
              value={advMatterType}
              onChange={(e) => {
                setAdvMatterType(e.target.value);
                setAdvBooked(false);
              }}
              className="w-full p-2.5 text-sm border border-slate-300 rounded-xl bg-white"
            >
              <option value="Corporate & Commercial Contracts">
                Corporate &amp; Commercial Contracts / Due Diligence
              </option>
              <option value="Property, Land Title & RERA Dispute">Property, Land Title &amp; RERA Dispute</option>
              <option value="High Court Civil Writs & Constitutional Law">
                High Court Civil Writs &amp; Constitutional Law
              </option>
              <option value="Arbitration & Commercial Dispute Resolution">
                Arbitration &amp; Commercial Dispute Resolution
              </option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Consultation Format:</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setAdvMode("chamber");
                  setAdvBooked(false);
                }}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  advMode === "chamber"
                    ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                    : "bg-white border-slate-200 hover:border-slate-300 text-slate-800"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-blue-400" /> Chamber Visit
                  </span>
                  <span className={`text-xs font-extrabold ${advMode === "chamber" ? "text-amber-400" : "text-slate-900"}`}>
                    ₹2,000
                  </span>
                </div>
                <span className="text-xs opacity-75 block">Physical file &amp; deed inspection</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setAdvMode("video");
                  setAdvBooked(false);
                }}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  advMode === "video"
                    ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                    : "bg-white border-slate-200 hover:border-slate-300 text-slate-800"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold flex items-center gap-1.5">
                    <Video className="w-4 h-4 text-blue-400" /> Video Consult
                  </span>
                  <span className={`text-xs font-extrabold ${advMode === "video" ? "text-amber-400" : "text-slate-900"}`}>
                    ₹1,500
                  </span>
                </div>
                <span className="text-xs opacity-75 block">45-Min Google Meet session</span>
              </button>
            </div>
          </div>

          {advMode === "chamber" && (
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Select Chamber Location:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setAdvChamberVenue("highcourt");
                    setAdvBooked(false);
                  }}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    advChamberVenue === "highcourt"
                      ? "bg-blue-50 border-blue-600 ring-1 ring-blue-600"
                      : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>High Court Chamber</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Bar Association Room 12, Cuttack</div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setAdvChamberVenue("office");
                    setAdvBooked(false);
                  }}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    advChamberVenue === "office"
                      ? "bg-blue-50 border-blue-600 ring-1 ring-blue-600"
                      : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Bhubaneswar Law Office</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Plot 18, Forest Park, Bhubaneswar</div>
                </button>
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
              Available Consultation Slots:
            </label>
            <div className="grid grid-cols-4 gap-2">
              {["11:30 AM", "04:30 PM", "05:30 PM", "07:00 PM"].map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => {
                    setAdvSelectedSlot(slot);
                    setAdvBooked(false);
                  }}
                  className={`py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
                    advSelectedSlot === slot ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Client Full Name / Entity:</label>
            <input
              type="text"
              value={advClientName}
              onChange={(e) => {
                setAdvClientName(e.target.value);
                setAdvBooked(false);
              }}
              placeholder="e.g. Vikramaditya Rout"
              className="w-full p-2.5 text-sm border border-slate-300 rounded-xl bg-white"
            />
          </div>

          {advBooked ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Legal Consultation Ref #LEX-8491 Confirmed!</span>
              </div>
              <div className="p-3 bg-white border border-emerald-200 rounded-xl text-xs text-slate-700 font-mono leading-relaxed">
                <span className="text-emerald-700 font-bold">📲 WhatsApp Notification to Advocate &amp; Client:</span>
                <br />
                &ldquo;Namaste Adv. Satyajit Patnaik, new legal consultation scheduled for {advClientName} regarding &apos;{advMatterType}&apos; on Friday at {advSelectedSlot} ({advMode === "video" ? "Secure Video Consultation" : advChamberVenue === "highcourt" ? "High Court Chamber, Cuttack" : "Bhubaneswar Law Office"}). Ref #LEX-8491.&rdquo;
              </div>
              <button
                type="button"
                onClick={() => setAdvBooked(false)}
                className="text-xs text-blue-600 font-bold hover:underline cursor-pointer"
              >
                ← Test another legal consultation booking
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setAdvBooked(true)}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Simulate 1-Click Consultation Booking</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* 4. Doctor Personalized Website */}
      {demo.demoType === "doctor-website" && (
        <div className="space-y-6">
          <div className="flex items-start justify-between border-b border-slate-100 pb-4 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base text-slate-950">Dr. Alok Mohapatra</span>
                <span className="text-xs bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded">
                  MD, DM (Cardiology)
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Senior Consultant Interventional Cardiologist • AIIMS Alum • 14+ Yrs Exp
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 shrink-0">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>4.9 (420+ Reviews)</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Select Consultation Mode:</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setDocConsultType("clinic");
                  setDocBooked(false);
                }}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  docConsultType === "clinic"
                    ? "bg-blue-50 border-blue-600 ring-1 ring-blue-600"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Stethoscope className="w-4 h-4 text-blue-600" /> In-Clinic Visit
                  </span>
                  <span className="text-xs font-extrabold text-blue-600">
                    {docChamber === "apollo" ? "₹800" : "₹700"}
                  </span>
                </div>
                <span className="text-xs text-slate-500 block">Physical examination &amp; ECG</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setDocConsultType("video");
                  setDocBooked(false);
                }}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  docConsultType === "video"
                    ? "bg-blue-50 border-blue-600 ring-1 ring-blue-600"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Video className="w-4 h-4 text-blue-600" /> Video Consult
                  </span>
                  <span className="text-xs font-extrabold text-emerald-600">₹600</span>
                </div>
                <span className="text-xs text-slate-500 block">HD video link via WhatsApp</span>
              </button>
            </div>
          </div>

          {docConsultType === "clinic" && (
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Choose Hospital / OPD Chamber:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setDocChamber("apollo");
                    setDocBooked(false);
                  }}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    docChamber === "apollo"
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <div className="text-sm font-bold flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Apollo Hospitals OPD</span>
                  </div>
                  <div className="text-xs opacity-80 mt-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>Mon, Wed, Fri • 5:00 - 8:30 PM</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setDocChamber("private");
                    setDocBooked(false);
                  }}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    docChamber === "private"
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <div className="text-sm font-bold flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Care Heart Clinic (Private)</span>
                  </div>
                  <div className="text-xs opacity-80 mt-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>Tue, Thu, Sat • 9:00 AM - 1:00 PM</span>
                  </div>
                </button>
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Select Preferred Time Slot:</label>
            <div className="grid grid-cols-4 gap-2">
              {["05:00 PM", "05:45 PM", "06:30 PM", "07:15 PM"].map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => {
                    setDocSelectedSlot(slot);
                    setDocBooked(false);
                  }}
                  className={`py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
                    docSelectedSlot === slot ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Patient Full Name:</label>
            <input
              type="text"
              value={docPatientName}
              onChange={(e) => {
                setDocPatientName(e.target.value);
                setDocBooked(false);
              }}
              placeholder="e.g. Sunil Verma"
              className="w-full p-2.5 text-sm border border-slate-300 rounded-xl bg-white"
            />
          </div>

          {docBooked ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Token #DOC-24 Confirmed!</span>
              </div>
              <div className="p-3 bg-white border border-emerald-200 rounded-xl text-xs text-slate-700 font-mono leading-relaxed">
                <span className="text-emerald-700 font-bold">📲 WhatsApp Notification to Doctor &amp; Patient:</span>
                <br />
                &ldquo;Namaste Dr. Alok Mohapatra, new consultation confirmed for {docPatientName} ({docConsultType === "video" ? "Video Consultation" : docChamber === "apollo" ? "Apollo Hospitals OPD" : "Care Heart Clinic"}) at {docSelectedSlot}. Token #DOC-24.&rdquo;
              </div>
              <button
                type="button"
                onClick={() => setDocBooked(false)}
                className="text-xs text-blue-600 font-bold hover:underline cursor-pointer"
              >
                ← Test another booking slot
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setDocBooked(true)}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Simulate 1-Click WhatsApp Booking</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* 5. MedixCare Clinic Operations & Appointment */}
      {demo.demoType === "clinic-booking" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base text-slate-950">MedixCare Console</span>
                <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">
                  Live Prototype
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Integrated OPD appointments &amp; reception queue management
              </p>
            </div>

            <div className="flex items-center bg-slate-100 p-1 rounded-xl self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setClinicTab("booking")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  clinicTab === "booking" ? "bg-white text-blue-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Calendar className="w-3.5 h-3.5 inline mr-1" />
                Book Slot
              </button>
              <button
                type="button"
                onClick={() => setClinicTab("queue")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  clinicTab === "queue" ? "bg-white text-blue-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Users className="w-3.5 h-3.5 inline mr-1" />
                OPD Queue
              </button>
            </div>
          </div>

          {clinicTab === "booking" ? (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Select Consulting Doctor:</label>
                <select
                  value={clinicDoctor}
                  onChange={(e) => {
                    setClinicDoctor(e.target.value);
                    setClinicBooked(false);
                  }}
                  className="w-full p-2.5 text-sm border border-slate-300 rounded-xl bg-white"
                >
                  <option value="Dr. Alok Mohapatra (Cardiology — Chamber 1)">
                    Dr. Alok Mohapatra (Cardiology — Chamber 1)
                  </option>
                  <option value="Dr. Sneha Ray (General Medicine & Diabetology — Chamber 2)">
                    Dr. Sneha Ray (General Medicine &amp; Diabetology — Chamber 2)
                  </option>
                  <option value="Dr. Rajesh Panda (Orthopedics & Joint Care — Chamber 3)">
                    Dr. Rajesh Panda (Orthopedics &amp; Joint Care — Chamber 3)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Pick Available OPD Time Slot:</label>
                <div className="grid grid-cols-3 gap-2">
                  {["10:00 AM", "10:30 AM", "11:45 AM", "04:30 PM", "06:00 PM", "07:15 PM"].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => {
                        setClinicSelectedSlot(slot);
                        setClinicBooked(false);
                      }}
                      className={`py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
                        clinicSelectedSlot === slot ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Patient Full Name:</label>
                <input
                  type="text"
                  value={clinicPatientName}
                  onChange={(e) => {
                    setClinicPatientName(e.target.value);
                    setClinicBooked(false);
                  }}
                  placeholder="e.g. Rajesh Mohanty"
                  className="w-full p-2.5 text-sm border border-slate-300 rounded-xl bg-white"
                />
              </div>

              {clinicBooked ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-emerald-900">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Appointment Confirmed • Token #MED-18</span>
                  </div>
                  <div className="p-3 bg-white border border-emerald-200 rounded-xl text-xs text-slate-700 font-mono leading-relaxed">
                    <span className="text-emerald-700 font-bold">📲 WhatsApp Alert to Patient:</span>
                    <br />
                    &ldquo;Namaste {clinicPatientName}, your appointment with {clinicDoctor.split("(")[0]} is confirmed for {clinicSelectedSlot}. Token #MED-18. Report 10 mins prior to reception.&rdquo;
                  </div>
                  <button
                    type="button"
                    onClick={() => setClinicBooked(false)}
                    className="text-xs text-blue-600 font-bold hover:underline cursor-pointer"
                  >
                    ← Book another patient slot
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setClinicBooked(true)}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirm Appointment &amp; Issue Token</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                <div>
                  <span className="text-xs uppercase font-bold text-slate-500 block">Chamber 1 — Dr. Alok Mohapatra</span>
                  <span className="text-sm font-extrabold text-slate-950 flex items-center gap-2 mt-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Now Consulting Token #{currentQueueToken}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 block">Queue Length</span>
                  <span className="text-sm font-bold text-blue-600">3 Patients Waiting</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl text-sm">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">
                      #{currentQueueToken}
                    </span>
                    <div>
                      <div className="font-bold text-slate-900">Pooja Patnaik</div>
                      <div className="text-xs text-slate-500">BP: 120/80 • Follow-up</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                    Inside Chamber
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50/50 border border-blue-200 rounded-xl text-sm">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                      #{currentQueueToken + 1}
                    </span>
                    <div>
                      <div className="font-bold text-slate-900">Rahul Mishra</div>
                      <div className="text-xs text-slate-500">New Consultation • Waiting 6m</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
                    Next in Line
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-slate-400 text-white text-xs font-bold flex items-center justify-center">
                      #{currentQueueToken + 2}
                    </span>
                    <div>
                      <div className="font-bold text-slate-900">{clinicPatientName}</div>
                      <div className="text-xs text-slate-500">Vitals Recorded • Reception</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-600 bg-slate-200 px-2.5 py-1 rounded-full">
                    Checked In
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setCurrentQueueToken((prev) => prev + 1)}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Bell className="w-4 h-4 text-amber-400" />
                <span>Call Next Patient (Token #{currentQueueToken + 1})</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* 6. MediRx EHR */}
      {demo.demoType === "clinic-ehr" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-900 border-b border-slate-100 pb-3">
            <span className="flex items-center gap-2 text-blue-600 text-sm font-extrabold">
              <FileText className="w-4 h-4" /> Digital Rx Prescription Creator
            </span>
            <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">Ready</span>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Patient Name &amp; Age:</label>
            <input
              type="text"
              value={ehrPatientName}
              onChange={(e) => setEhrPatientName(e.target.value)}
              className="w-full p-2.5 text-sm border border-slate-300 rounded-xl"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Select Prescribed Medicine:</label>
            <select
              value={ehrMedicine}
              onChange={(e) => setEhrMedicine(e.target.value)}
              className="w-full p-2.5 text-sm border border-slate-300 rounded-xl bg-white"
            >
              <option value="Amoxicillin 500mg — 1-0-1 (5 Days)">Amoxicillin 500mg — 1-0-1 (5 Days)</option>
              <option value="Paracetamol 650mg — 1-1-1 (3 Days)">Paracetamol 650mg — 1-1-1 (3 Days)</option>
              <option value="Cetirizine 10mg — 0-0-1 (At Bedtime)">Cetirizine 10mg — 0-0-1 (At Bedtime)</option>
            </select>
          </div>

          {ehrGenerated ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto mb-1.5" />
              <div className="text-sm font-bold text-emerald-900">Digital Prescription Generated!</div>
              <div className="text-xs text-emerald-700 mt-1">
                Rx #MED-482910 ready for instant PDF download and patient WhatsApp dispatch.
              </div>
              <button
                type="button"
                onClick={() => setEhrGenerated(false)}
                className="mt-3 text-xs text-blue-600 font-bold hover:underline cursor-pointer"
              >
                ← Create another prescription
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setEhrGenerated(true)}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all shadow-xs cursor-pointer"
            >
              Generate Digital Prescription (PDF &amp; WhatsApp)
            </button>
          )}
        </div>
      )}

      {/* 7. HealthLab Diagnostic Sample Pipeline */}
      {demo.demoType === "clinic-lab" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-900 border-b border-slate-100 pb-3">
            <span className="flex items-center gap-2 text-blue-600 text-sm font-extrabold">
              <Activity className="w-4 h-4" /> Lab Sample Pipeline Tracker
            </span>
            <span className="text-xs bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full font-mono">
              Sample #LAB-4819
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              { num: 1, label: "Collected" },
              { num: 2, label: "Processing" },
              { num: 3, label: "Verified" },
              { num: 4, label: "Dispatched" },
            ].map((step) => (
              <button
                key={step.num}
                type="button"
                onClick={() => setLabStage(step.num)}
                className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  labStage >= step.num
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                    : "bg-slate-50 text-slate-400 border-slate-200"
                }`}
              >
                <div>Step {step.num}</div>
                <div className="text-[11px] font-normal">{step.label}</div>
              </button>
            ))}
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
            <div className="flex justify-between font-bold text-slate-900">
              <span>CBC &amp; Lipid Profile Test</span>
              <span className="text-emerald-600">
                {labStage === 4 ? "Report Sent via WhatsApp" : "In Progress"}
              </span>
            </div>
            <p className="text-slate-500">
              Current Status: {labStage === 1 && "Sample checked-in at phlebotomy counter."}
              {labStage === 2 && "Automated analyzer running biochemistry assays."}
              {labStage === 3 && "Pathologist Dr. Das verified normal reference values."}
              {labStage === 4 && "Instant secure PDF report link dispatched to patient phone."}
            </p>
          </div>
        </div>
      )}

      {/* 8. Solar Calculator */}
      {demo.demoType === "calculator" && (
        <div className="space-y-5">
          <div className="flex items-center justify-between text-xs font-bold text-slate-900 border-b border-slate-100 pb-3">
            <span className="flex items-center gap-2 text-amber-600 text-sm font-extrabold">
              <Sun className="w-4 h-4" /> Live Rooftop Solar Calculator
            </span>
            <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">Interactive</span>
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
              <span>Monthly Electricity Bill (INR):</span>
              <span className="text-blue-600 font-extrabold text-sm">₹{monthlyBill.toLocaleString("en-IN")}</span>
            </div>
            <input
              type="range"
              min="1500"
              max="35000"
              step="500"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center">
            <div>
              <span className="text-xs text-slate-500 block">Recommended</span>
              <span className="text-base font-black text-slate-950">{recommendedKW} kW</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Annual Savings</span>
              <span className="text-base font-black text-emerald-600">₹{annualSavings.toLocaleString("en-IN")}</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Payback ROI</span>
              <span className="text-base font-black text-blue-600">{paybackYears} Years</span>
            </div>
          </div>
        </div>
      )}

      {/* 9. AI Chatbot */}
      {demo.demoType === "chatbot" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-900 border-b border-slate-100 pb-3">
            <span className="flex items-center gap-2 text-emerald-600 text-sm font-extrabold">
              <Send className="w-4 h-4" /> Conversa AI WhatsApp Assistant
            </span>
            <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">Online</span>
          </div>

          <div className="h-48 overflow-y-auto space-y-2 p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
            {chatMessages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2.5 rounded-xl max-w-[85%] leading-relaxed ${
                  msg.sender === "user"
                    ? "ml-auto bg-blue-600 text-white"
                    : "bg-white text-slate-800 border border-slate-200 shadow-xs"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => handleSendChat("I need a clinic management system with WhatsApp")}
              className="text-[11px] px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg cursor-pointer"
            >
              🏥 Medical System?
            </button>
            <button
              type="button"
              onClick={() => handleSendChat("How much does a custom CRM or ERP cost?")}
              className="text-[11px] px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg cursor-pointer"
            >
              💼 Cost Estimate?
            </button>
            <button
              type="button"
              onClick={() => handleSendChat("What is your standard turnaround time?")}
              className="text-[11px] px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg cursor-pointer"
            >
              ⚡ Turnaround Time?
            </button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendChat();
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask the AI simulator..."
              className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* 10. FastInvoice */}
      {demo.demoType === "invoice" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-900 border-b border-slate-100 pb-3">
            <span className="flex items-center gap-2 text-blue-600 text-sm font-extrabold">
              <FileText className="w-4 h-4" /> GST Billing Calculator Simulator
            </span>
            <span className="text-xs text-slate-500 font-mono">GSTIN: 21AAACJ0001Z1</span>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
              Subtotal Amount (INR):
            </label>
            <input
              type="number"
              value={invoiceAmount}
              onChange={(e) => setInvoiceAmount(Number(e.target.value))}
              className="w-full p-2.5 text-sm border border-slate-300 rounded-xl"
            />
          </div>

          <div className="space-y-1.5 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs">
            <div className="flex justify-between">
              <span>Base Subtotal:</span>
              <span className="font-semibold text-slate-900">₹{invoiceAmount.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>CGST (9%):</span>
              <span>₹{cgst.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>SGST (9%):</span>
              <span>₹{sgst.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-slate-200 font-extrabold text-blue-600 text-sm">
              <span>Total Invoice Value:</span>
              <span>₹{totalWithTax.toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>
      )}

      {/* 11. CRM / Kanban */}
      {demo.demoType === "crm" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-900 border-b border-slate-100 pb-3">
            <span className="flex items-center gap-2 text-purple-600 text-sm font-extrabold">
              <Layers className="w-4 h-4" /> OmniDesk CRM Deal Pipeline
            </span>
            <span className="text-xs bg-purple-100 text-purple-800 font-bold px-2 py-0.5 rounded-full">Active</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {crmLeads.map((lead) => (
              <div key={lead.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-xs">
                <div className="font-bold text-slate-900">{lead.name}</div>
                <div className="text-emerald-600 font-bold">{lead.value}</div>
                <div className="inline-block text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-600">
                  Stage: {lead.stage}
                </div>
              </div>
            ))}
          </div>

          <div className="text-xs text-slate-500 text-center pt-2">
            Simulated CRM pipeline with automated deal probability scoring &amp; role-based access.
          </div>
        </div>
      )}

      {/* 12. E-Commerce */}
      {demo.demoType === "ecommerce" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-900 border-b border-slate-100 pb-3">
            <span className="flex items-center gap-2 text-emerald-600 text-sm font-extrabold">
              <ShoppingBag className="w-4 h-4" /> SwiftCommerce 1-Click Storefront
            </span>
            <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">In Stock</span>
          </div>

          <div className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs">
            <div>
              <div className="font-bold text-slate-900 text-sm">Industrial Grade Brass Earthing Clamp (Pack of 10)</div>
              <div className="text-slate-500 mt-0.5">₹1,450 per unit • Instant Delivery</div>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-300 rounded-lg p-1">
              <button
                type="button"
                onClick={() => setEcomQuantity((q) => Math.max(1, q - 1))}
                className="w-5 h-5 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-100 rounded cursor-pointer"
              >
                -
              </button>
              <span className="font-bold w-4 text-center">{ecomQuantity}</span>
              <button
                type="button"
                onClick={() => setEcomQuantity((q) => q + 1)}
                className="w-5 h-5 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-100 rounded cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {ecomCheckedOut ? (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-xs">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
              <div className="font-bold text-emerald-900">Order #SWIFT-9281 Confirmed!</div>
              <div className="text-emerald-700 mt-0.5">UPI payment simulated. Stock reserved instantly.</div>
              <button
                type="button"
                onClick={() => setEcomCheckedOut(false)}
                className="mt-2 text-blue-600 font-bold hover:underline cursor-pointer"
              >
                ← Place another order
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setEcomCheckedOut(true)}
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Simulate 1-Click UPI Checkout (₹{(ecomQuantity * 1450).toLocaleString("en-IN")})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}

      {/* 13. Industrial */}
      {demo.demoType === "industrial" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-900 border-b border-slate-100 pb-3">
            <span className="flex items-center gap-2 text-slate-900 text-sm font-extrabold">
              <Cpu className="w-4 h-4 text-blue-600" /> Industrial Electrode Soil Calculator
            </span>
            <span className="text-xs bg-slate-100 text-slate-800 font-bold px-2 py-0.5 rounded-full">IEEE Spec</span>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Select Soil Geological Profile:</label>
            <select
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
              className="w-full p-2.5 text-sm border border-slate-300 rounded-xl bg-white"
            >
              <option value="loamy">Loamy / Cultivated Soil (Resistivity: 30 Ω·m)</option>
              <option value="clay">Clay &amp; Silt Soil (Resistivity: 15 Ω·m)</option>
              <option value="rocky">Rocky &amp; Granitic Bedrock (Resistivity: 300 Ω·m)</option>
            </select>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
            <div className="flex justify-between font-bold text-slate-900">
              <span>Recommended Electrode:</span>
              <span className="text-blue-600">
                {soilType === "rocky" ? "50mm Copper Bonded (3.0m) + BFC" : "17.2mm Copper Clad (2.0m)"}
              </span>
            </div>
            <p className="text-slate-500">
              Formula based on IEEE-80 standards for substation and commercial building grounding installations.
            </p>
          </div>
        </div>
      )}

      {/* 14. Railway Portal & RailSetu */}
      {demo.demoType === "railway" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base text-slate-950">RailSetu Express Journey Simulator</span>
                <span className="text-xs bg-blue-100 text-blue-800 font-bold px-2.5 py-0.5 rounded-full">
                  IRCTC Sync v2.4
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Simulated real-time train availability engine, seat quota matrix &amp; PNR confirmation tracker
              </p>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setRailTab("search")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  railTab === "search" ? "bg-white text-blue-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Train className="w-3.5 h-3.5" />
                <span>Search Trains</span>
              </button>
              <button
                type="button"
                onClick={() => setRailTab("pnr")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  railTab === "pnr" ? "bg-white text-blue-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Ticket className="w-3.5 h-3.5" />
                <span>Check PNR</span>
              </button>
            </div>
          </div>

          {railTab === "search" && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">From Station:</label>
                  <select
                    value={railFrom}
                    onChange={(e) => setRailFrom(e.target.value)}
                    className="w-full p-2.5 text-xs font-semibold border border-slate-300 rounded-xl bg-white"
                  >
                    <option value="NDLS - New Delhi">NDLS - New Delhi</option>
                    <option value="BBS - Bhubaneswar">BBS - Bhubaneswar</option>
                    <option value="HWH - Howrah Junction">HWH - Howrah Junction</option>
                    <option value="CSMT - Mumbai CST">CSMT - Mumbai CST</option>
                    <option value="MAS - Chennai Central">MAS - Chennai Central</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">To Station:</label>
                  <select
                    value={railTo}
                    onChange={(e) => setRailTo(e.target.value)}
                    className="w-full p-2.5 text-xs font-semibold border border-slate-300 rounded-xl bg-white"
                  >
                    <option value="BBS - Bhubaneswar">BBS - Bhubaneswar</option>
                    <option value="NDLS - New Delhi">NDLS - New Delhi</option>
                    <option value="PURI - Puri Terminal">PURI - Puri Terminal</option>
                    <option value="HWH - Howrah Junction">HWH - Howrah Junction</option>
                    <option value="SBC - KSR Bengaluru">SBC - KSR Bengaluru</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Travel Class:</label>
                  <select
                    value={railClass}
                    onChange={(e) => setRailClass(e.target.value)}
                    className="w-full p-2.5 text-xs font-semibold border border-slate-300 rounded-xl bg-white"
                  >
                    <option value="3A">AC 3 Tier (3A)</option>
                    <option value="2A">AC 2 Tier (2A)</option>
                    <option value="1A">AC First Class (1A)</option>
                    <option value="CC">AC Chair Car (CC)</option>
                    <option value="SL">Sleeper (SL)</option>
                  </select>
                </div>
              </div>

              {/* Available Trains List */}
              <div className="space-y-3">
                <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                  Available Trains on Route ({railFrom.split(" - ")[0]} &rarr; {railTo.split(" - ")[0]}):
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl border border-blue-200 bg-blue-50/50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-extrabold text-blue-900">22824 • Tejas Rajdhani Express</span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          AVAILABLE - 28
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-600 mt-2">
                        <div>
                          <p className="font-extrabold text-slate-900 text-sm">17:00</p>
                          <p className="text-2xs text-slate-500">{railFrom.split(" - ")[0]}</p>
                        </div>
                        <div className="text-center">
                          <span className="text-2xs text-slate-400 font-semibold">24h 30m</span>
                          <div className="w-16 h-0.5 bg-blue-300 my-1 mx-auto" />
                          <span className="text-2xs text-blue-600 font-bold">Daily</span>
                        </div>
                        <div className="text-right">
                          <p className="font-extrabold text-slate-900 text-sm">17:30 (+1)</p>
                          <p className="text-2xs text-slate-500">{railTo.split(" - ")[0]}</p>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setRailBookedTrain("22824 Tejas Rajdhani")}
                      className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
                    >
                      {railBookedTrain === "22824 Tejas Rajdhani" ? "✓ Seat Reserved in Prototype" : `Book Ticket (${railClass} • ₹2,450)`}
                    </button>
                  </div>

                  <div className="p-4 rounded-2xl border border-orange-200 bg-orange-50/40 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-extrabold text-orange-950">20836 • Vande Bharat Express</span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          AVAILABLE - 54
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-600 mt-2">
                        <div>
                          <p className="font-extrabold text-slate-900 text-sm">06:15</p>
                          <p className="text-2xs text-slate-500">{railFrom.split(" - ")[0]}</p>
                        </div>
                        <div className="text-center">
                          <span className="text-2xs text-slate-400 font-semibold">6h 40m</span>
                          <div className="w-16 h-0.5 bg-orange-300 my-1 mx-auto" />
                          <span className="text-2xs text-orange-600 font-bold">Except Thu</span>
                        </div>
                        <div className="text-right">
                          <p className="font-extrabold text-slate-900 text-sm">12:55</p>
                          <p className="text-2xs text-slate-500">{railTo.split(" - ")[0]}</p>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setRailBookedTrain("20836 Vande Bharat")}
                      className="mt-4 w-full py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
                    >
                      {railBookedTrain === "20836 Vande Bharat" ? "✓ Seat Reserved in Prototype" : "Book Ticket (CC • ₹1,420)"}
                    </button>
                  </div>
                </div>

                {railBookedTrain && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center justify-between">
                    <span className="font-semibold">
                      Seat simulated for <strong>{railBookedTrain}</strong> ({railClass}). Prototype testing active!
                    </span>
                    <a
                      href="https://rail-setu-nu.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-bold text-emerald-950"
                    >
                      Open Live RailSetu App &rarr;
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {railTab === "pnr" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Enter 10-Digit PNR Number:</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    maxLength={10}
                    value={railPnrInput}
                    onChange={(e) => setRailPnrInput(e.target.value)}
                    placeholder="e.g. 2458910245"
                    className="flex-1 p-2.5 text-xs font-mono font-bold border border-slate-300 rounded-xl bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setRailPnrResult({
                        trainNo: "22824 / Tejas Rajdhani",
                        pnr: railPnrInput || "2458910245",
                        status: "CNF (Confirmed)",
                        coach: "B4",
                        berth: "34 (Lower)",
                        quota: "General",
                        chartStatus: "Chart Not Prepared",
                      });
                    }}
                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
                  >
                    Check Status
                  </button>
                </div>
              </div>

              {railPnrResult && (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="text-xs font-extrabold text-slate-900">PNR #{railPnrResult.pnr}</span>
                    <span className="text-xs bg-emerald-100 text-emerald-800 font-extrabold px-2.5 py-0.5 rounded-full">
                      {railPnrResult.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div className="bg-white p-2.5 rounded-xl border border-slate-100">
                      <span className="text-2xs text-slate-400 block font-bold">Train</span>
                      <span className="font-extrabold text-slate-900">{railPnrResult.trainNo}</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-100">
                      <span className="text-2xs text-slate-400 block font-bold">Coach</span>
                      <span className="font-extrabold text-blue-600">{railPnrResult.coach}</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-100">
                      <span className="text-2xs text-slate-400 block font-bold">Berth / Seat</span>
                      <span className="font-extrabold text-blue-600">{railPnrResult.berth}</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-100">
                      <span className="text-2xs text-slate-400 block font-bold">Chart Status</span>
                      <span className="font-semibold text-slate-700">{railPnrResult.chartStatus}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 15. URL Shortener & Link Telemetry */}
      {demo.demoType === "url-shortener" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base text-slate-950">SnapLink URL Shortener &amp; Link Telemetry</span>
                <span className="text-xs bg-purple-100 text-purple-800 font-bold px-2.5 py-0.5 rounded-full">
                  Edge v1.8
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Instant nano-hash slug generator, dynamic QR codes, and sub-10ms cloud redirection
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Live Status:</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Vercel Edge Active
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Destination URL (Long URL):</label>
              <div className="relative">
                <input
                  type="url"
                  value={shortLongUrl}
                  onChange={(e) => setShortLongUrl(e.target.value)}
                  placeholder="https://example.com/very/long/query?params=1"
                  className="w-full p-2.5 pl-8 text-xs font-mono border border-slate-300 rounded-xl bg-white"
                />
                <Link2 className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex-1 w-full">
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Custom Alias / Slug (Optional):</label>
                <div className="flex items-center">
                  <span className="px-3 py-2 bg-slate-200 border border-r-0 border-slate-300 text-slate-600 text-xs font-mono font-bold rounded-l-xl">
                    snap.link/
                  </span>
                  <input
                    type="text"
                    value={shortCustomSlug}
                    onChange={(e) => setShortCustomSlug(e.target.value)}
                    placeholder="my-campaign"
                    className="flex-1 p-2 text-xs font-mono font-bold border border-slate-300 rounded-r-xl bg-white"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (!shortLongUrl.trim()) return;
                  const slug = shortCustomSlug.trim() || Math.random().toString(36).substring(2, 8);
                  const newEntry = {
                    id: "sl-" + Date.now(),
                    slug: slug,
                    shortUrl: `snap.link/${slug}`,
                    originalUrl: shortLongUrl,
                    clicks: 0,
                    created: "Just now",
                  };
                  setShortList([newEntry, ...shortList]);
                  setShortCustomSlug("");
                }}
                className="w-full sm:w-auto mt-4 sm:mt-5 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
              >
                Shorten Link &rarr;
              </button>
            </div>
          </div>

          {/* Links List */}
          <div className="space-y-3">
            <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
              Active Shortened Links ({shortList.length}):
            </span>

            <div className="space-y-2">
              {shortList.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 bg-white border border-slate-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm text-purple-700 font-mono">{item.shortUrl}</span>
                      <button
                        type="button"
                        onClick={() => {
                          setShortCopiedId(item.id);
                          setTimeout(() => setShortCopiedId(null), 1500);
                        }}
                        className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                        title="Copy to clipboard"
                      >
                        {shortCopiedId === item.id ? (
                          <span className="text-2xs font-bold text-emerald-600 px-1 bg-emerald-50 rounded">Copied!</span>
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                    <p className="text-2xs text-slate-500 font-mono truncate max-w-sm sm:max-w-md">
                      {item.originalUrl}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <div className="text-right">
                      <span className="text-xs font-black text-slate-900 block">{item.clicks} clicks</span>
                      <span className="text-2xs text-slate-400">{item.created}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setShortList((prev) =>
                          prev.map((l) => (l.id === item.id ? { ...l, clicks: l.clicks + 1 } : l))
                        );
                      }}
                      className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-2xs font-bold transition-colors"
                    >
                      +1 Test Click
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
