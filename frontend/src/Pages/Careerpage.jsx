import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, FileText, X, CheckCircle } from "lucide-react";
import Navbar from "../Components/Navbar";
import axios from "axios";

const Careerpage = () => {
  const [file, setFile] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitCooldown, setSubmitCooldown] = useState(false);

  useEffect(() => {
    const cooldownUntil = localStorage.getItem("resumeCooldownUntil");

    if (!cooldownUntil) return;

    const remainingTime = Number(cooldownUntil) - Date.now();

    if (remainingTime <= 0) {
      localStorage.removeItem("resumeCooldownUntil");
      return;
    }

    setSubmitCooldown(true);

    const timer = setTimeout(() => {
      setSubmitCooldown(false);
      localStorage.removeItem("resumeCooldownUntil");
    }, remainingTime);

    return () => clearTimeout(timer);
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    setStatusMessage("");
    const selectedFile = acceptedFiles[0];

    if (!selectedFile) return;

    if (selectedFile.size > 15 * 1024 * 1024) {
      setFile(null);
      setStatusMessage("File size must be under 15MB");
      return;
    }

    setFile(selectedFile);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    disabled: isSubmitting || submitCooldown,
    onDrop,
    onDropRejected: () => {
      setFile(null);
      setStatusMessage("Only PDF files are allowed");
    },
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
  });

  const removeFile = (e) => {
    e.stopPropagation();
    setStatusMessage("");
    setFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !email || isSubmitting || submitCooldown) return;

    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatusMessage("Enter a valid email address");
      return;
    }

    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("resume", file);
      formData.append("email", email);

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/resume`,
        formData,
      );

      const cooldownExpiry = Date.now() + 10000;

      localStorage.setItem("resumeCooldownUntil", String(cooldownExpiry));

      setSubmitCooldown(true);

      setTimeout(() => {
        setSubmitCooldown(false);
        localStorage.removeItem("resumeCooldownUntil");
      }, 10000);

      setStatusMessage(res.data.message);
      setFile(null);
      setEmail("");
    } catch (error) {
      console.log(error);

      if (error.response?.data?.message) {
        setStatusMessage(error.response.data.message);
      } else {
        setStatusMessage("Failed to submit resume. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[80vh] bg-white font-['Satoshi'] flex flex-col items-center justify-center pb-20">
      <Navbar />

      <div className="max-w-xl text-center mb-8 pt-8 px-6">
        <h1 className="text-5xl font-black text-black tracking-tighter mb-3">
          Join the Team
        </h1>
        <p className="text-zinc-500 text-md">
          We’re seeking dedicated professionals with passion for engineering,
          drilling, and operational excellence in the oil & gas industry. Share
          your CV with us.Our team will reach out to you shorlty.
        </p>
        <p className="text-black text-md pt-5">
          Facing issues submitting your CV ? Email it directly to{" "}
          <span className="font-bold">hr@petrocore.in</span>
        </p>
      </div>

      <div className="w-full max-w-md pl-4 pr-4">
        <div
          {...getRootProps()}
          className={`relative border-2 border-dashed rounded-2xl p-8 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center
            ${
              isDragActive
                ? "border-blue-600 bg-blue-50/50 scale-[1.01]"
                : "border-zinc-200 bg-zinc-50 hover:border-zinc-300 hover:bg-zinc-100/50"
            }`}
        >
          <input {...getInputProps()} />

          {!file ? (
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-white border border-zinc-200 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <Upload className="text-zinc-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-black mb-1">
                {isDragActive ? "Drop your PDF here" : "Upload your Resume"}
              </h3>
              <p className="text-zinc-400 text-sm mb-6 font-medium">
                Drag & drop or click to browse (PDF only)
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-black hover:bg-zinc-800 transition-all">
                Select File
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center w-full">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-blue-200">
                <FileText size={24} />
              </div>
              <p className="text-black font-bold text-lg mb-1 truncate max-w-[200px]">
                {file.name}
              </p>
              <div className="flex items-center gap-2 text-blue-600 mb-6">
                <CheckCircle size={14} strokeWidth={3} />
                <span className="text-sm font-black tracking-wide">
                  Document Attached
                </span>
              </div>
              <button
                onClick={removeFile}
                className=" text-red-500 flex items-center gap-2 text-sm font-bold"
              >
                <X size={14} /> Remove File
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col mt-2 ">
          <p className="text-sm">Enter your email here</p>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="john@gmail.com"
            required
            className="border-2 w-full pt-2 pb-2 pl-4 pr-4 rounded-xl mt-2 border-neutral-300"
            onChange={(e) => {
              setStatusMessage("");
              setEmail(e.target.value);
            }}
          />
        </div>
        {statusMessage && (
          <p className="text-center text-lg font-semibold mt-4 text-emerald-600 font-medium">
            {statusMessage}
          </p>
        )}
        <button
          onClick={handleSubmit}
          disabled={!file || !email || isSubmitting || submitCooldown}
          className={`w-full mt-3 py-4 mb-10 md:mb-0 rounded-xl font-black transition-all duration-300 shadow-lg
            ${
              file && email && !isSubmitting && !submitCooldown
                ? "bg-black text-white hover:bg-blue-600 shadow-zinc-200"
                : "bg-zinc-100 text-zinc-400 cursor-not-allowed shadow-none"
            }`}
        >
          {isSubmitting
            ? "Submitting..."
            : submitCooldown
              ? "Please wait..."
              : "Submit Application"}
        </button>
      </div>
    </div>
  );
};

export default Careerpage;
