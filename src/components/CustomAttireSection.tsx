import React, { useState, useRef } from 'react';
import { SAMPLE_STYLE_INSPIRATIONS } from '../data/products';
import { CustomAttireRequest } from '../types';
import { 
  Sparkles, 
  Ruler, 
  Upload, 
  Check, 
  MessageCircle, 
  Mail, 
  Scissors, 
  Info, 
  Camera, 
  Calendar,
  X,
  ChevronRight,
  Eye
} from 'lucide-react';

interface CustomAttireSectionProps {
  onSaveCustomRequest?: (request: CustomAttireRequest) => void;
}

export const CustomAttireSection: React.FC<CustomAttireSectionProps> = ({
  onSaveCustomRequest
}) => {
  // Pop-up header visibility state
  const [showPopup, setShowPopup] = useState(true);

  // Measurement unit
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches');

  // Selected sample style inspiration
  const [selectedStyleId, setSelectedStyleId] = useState<string>(SAMPLE_STYLE_INSPIRATIONS[0].id);

  // User uploaded reference image
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fabric & styling options
  const [fabric, setFabric] = useState<string>('Duchess Satin');
  const [color, setColor] = useState<string>('Blush Pink & Jet Black');
  const [occasion, setOccasion] = useState<string>('Red Carpet / Gala Evening');
  const [targetDate, setTargetDate] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  // Client info
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');

  // Measurement fields
  const [measurements, setMeasurements] = useState({
    bust: '',
    underbust: '',
    waist: '',
    highHips: '',
    fullHips: '',
    shoulderToShoulder: '',
    sleeveLength: '',
    armCircumference: '',
    dressLength: '',
    trouserLength: '',
    inseam: '',
    neck: '',
  });

  // Guide helper modal
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const fabricsList = [
    'Duchess Satin',
    'Italian Wool Crepe',
    'Pure Mulberry Silk',
    'French Beaded Lace',
    'African Wax Print (Ankara Fusion)',
    'Silk Velvet',
    'Stiffened Organza',
    'Brocade Damask'
  ];

  const handleMeasurementChange = (field: keyof typeof measurements, value: string) => {
    setMeasurements(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const selectedSampleStyle = SAMPLE_STYLE_INSPIRATIONS.find(s => s.id === selectedStyleId);

  const generateWhatsAppMessage = () => {
    const chosenSample = selectedSampleStyle?.name || 'Custom Silhouette';
    return `*SHOPWITHUWA BESPOKE ATTIRE ORDER SPECIFICATION*
Attn: Uwaila Imafidon Glory (Abuja Atelier)

*Client Details:*
Name: ${clientName || 'Valued Client'}
Phone: ${clientPhone || 'Not provided'}
Email: ${clientEmail || 'Not provided'}

*Style & Inspiration:*
Sample Style: ${chosenSample}
Fabric: ${fabric}
Color Scheme: ${color}
Occasion: ${occasion}
Target Fitting Date: ${targetDate || 'Flexible'}
${uploadedFileName ? `Client Reference Image Uploaded: Yes (${uploadedFileName})` : ''}

*Measurements (${unit}):*
• Bust: ${measurements.bust || 'Pending'} ${unit}
• Underbust: ${measurements.underbust || 'Pending'} ${unit}
• Waist: ${measurements.waist || 'Pending'} ${unit}
• High Hips: ${measurements.highHips || 'Pending'} ${unit}
• Full Hips: ${measurements.fullHips || 'Pending'} ${unit}
• Shoulder to Shoulder: ${measurements.shoulderToShoulder || 'Pending'} ${unit}
• Sleeve Length: ${measurements.sleeveLength || 'Pending'} ${unit}
• Arm Circumference: ${measurements.armCircumference || 'Pending'} ${unit}
• Desired Dress/Gown Length: ${measurements.dressLength || 'Pending'} ${unit}
• Trouser Length: ${measurements.trouserLength || 'Pending'} ${unit}
• Inseam: ${measurements.inseam || 'Pending'} ${unit}
• Neck: ${measurements.neck || 'Pending'} ${unit}

*Client Notes:*
${notes || 'No special notes'}

Please review my specifications and provide atelier availability and consultation!`;
  };

  const handleSendWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const url = `https://wa.me/2347015578653?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setSubmittedFeedback(true);
    setTimeout(() => setSubmittedFeedback(false), 3500);
  };

  const handleSendEmail = () => {
    const message = generateWhatsAppMessage();
    const subject = encodeURIComponent(`Bespoke Custom Attire Order - ${clientName || 'Client'}`);
    const body = encodeURIComponent(message);
    window.open(`mailto:shopwithuwa@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="custom-made" className="py-16 sm:py-24 bg-gradient-to-b from-[#1c0a18] via-[#10050d] to-[#1e0a1b] border-b border-pink-500/30 relative">
      {/* Decorative ambient pink glows */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-pink-500/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* EXACT REQUIRED HEADER POP-UP BANNER - HIGH VIBRANT PINK GLAMOUR */}
        {showPopup && (
          <div className="relative mb-12 p-6 sm:p-9 rounded-3xl bg-gradient-to-r from-[#320f27] via-[#431435] to-[#2b0c21] border-2 border-pink-400 shadow-[0_0_45px_rgba(244,114,182,0.4)] overflow-hidden">
            <div className="absolute top-0 right-0 p-3">
              <button
                onClick={() => setShowPopup(false)}
                className="text-pink-300 hover:text-white p-2 rounded-full hover:bg-pink-500/30 transition-colors"
                title="Dismiss message"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 text-black flex items-center justify-center font-black shadow-[0_0_20px_rgba(244,114,182,0.6)] shrink-0 mt-0.5">
                <Scissors className="w-7 h-7 text-black" />
              </div>
              <div className="space-y-2 pr-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/30 border border-pink-300/50 text-xs font-extrabold uppercase tracking-widest text-pink-200">
                  <Sparkles className="w-3.5 h-3.5 text-pink-300 animate-spin" />
                  <span>The shopwithuwa Atelier Experience</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug drop-shadow-md">
                  “We understand our customers want to be able to create their own style so here you go”
                </h3>
                <p className="text-sm text-pink-100 font-normal max-w-3xl leading-relaxed">
                  Our master fashion designers and seamstresses in Abuja take your exact body measurements and inspiration images to construct a 1-of-1 haute couture garment. Zero mass-production compromise.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-pink-300 text-xs font-extrabold uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-400/40">
              <Ruler className="w-3.5 h-3.5 text-pink-400" />
              <span>Haute Couture Made to Measure</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Bespoke Measurement & Design Studio
            </h2>
            <p className="text-pink-100/80 text-sm sm:text-base mt-2 max-w-2xl font-normal">
              Choose from our curated sample style JPEGs, or upload your own sketch/reference photo. Input your measurements below and dispatch directly to our Abuja design team.
            </p>
          </div>

          {/* Unit Toggle and Guide */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowGuideModal(true)}
              className="px-4 py-2.5 rounded-full bg-pink-500/20 hover:bg-pink-500/30 border border-pink-400 text-xs font-extrabold text-pink-200 hover:text-white flex items-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(244,114,182,0.25)]"
            >
              <Info className="w-4 h-4 text-pink-300" />
              <span>Measurement Guide Tips</span>
            </button>

            <div className="flex items-center bg-[#250e20] border-2 border-pink-400/50 rounded-full p-1 text-xs shadow-inner">
              <button
                onClick={() => setUnit('inches')}
                className={`px-4 py-1.5 rounded-full font-extrabold transition-all cursor-pointer ${
                  unit === 'inches'
                    ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-black shadow-[0_0_10px_rgba(244,114,182,0.5)]'
                    : 'text-pink-300 hover:text-white'
                }`}
              >
                Inches (in)
              </button>
              <button
                onClick={() => setUnit('cm')}
                className={`px-4 py-1.5 rounded-full font-extrabold transition-all cursor-pointer ${
                  unit === 'cm'
                    ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-black shadow-[0_0_10px_rgba(244,114,182,0.5)]'
                    : 'text-pink-300 hover:text-white'
                }`}
              >
                Centimeters (cm)
              </button>
            </div>
          </div>
        </div>

        {/* PART 1: SAMPLE STYLE JPEGS & REFERENCE UPLOAD */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>1. Select Sample Style JPEG or Upload Your Idea</span>
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                Click a sample inspiration below to serve as the design foundation, or upload your own screenshot/sketch.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAMPLE_STYLE_INSPIRATIONS.map(style => {
              const isSelected = selectedStyleId === style.id;
              return (
                <div
                  key={style.id}
                  onClick={() => setSelectedStyleId(style.id)}
                  className={`group rounded-2xl bg-[#111114] border overflow-hidden cursor-pointer transition-all duration-300 flex flex-col ${
                    isSelected
                      ? 'border-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.3)] ring-2 ring-pink-400/50'
                      : 'border-white/10 hover:border-pink-300/40'
                  }`}
                >
                  <div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden">
                    <img
                      src={style.image}
                      alt={style.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] uppercase font-bold text-pink-300 border border-pink-400/30">
                        {style.category}
                      </span>
                    </div>

                    {isSelected && (
                      <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-pink-400 text-black flex items-center justify-center font-bold shadow-lg">
                        <Check className="w-5 h-5" />
                      </div>
                    )}
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <h4 className="font-serif text-base font-bold text-white group-hover:text-pink-200">
                        {style.name}
                      </h4>
                      <p className="text-zinc-400 text-xs mt-1 line-clamp-2">
                        {style.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/5 text-[11px] text-pink-200/80">
                      Recommended: {style.recommendedFabrics.join(', ')}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* User Image Upload Box */}
          <div className="mt-8 p-6 rounded-2xl bg-[#111114] border border-dashed border-pink-300/40 hover:border-pink-400 transition-colors">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-400/30 flex items-center justify-center text-pink-300 shrink-0">
                  <Camera className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">
                    Have your own design JPEG or Pinterest sketch?
                  </h4>
                  <p className="text-zinc-400 text-xs mt-0.5">
                    Upload any image from your phone or laptop. Our Abuja fashion designers will review the seamlines and construct it.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto">
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  className="hidden"
                />

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-pink-500/20 text-white hover:text-pink-200 border border-pink-300/40 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <Upload className="w-4 h-4 text-pink-300" />
                  <span>{uploadedFileName ? 'Replace Uploaded JPEG' : 'Upload Style JPEG'}</span>
                </button>

                {uploadedImage && (
                  <div className="relative group shrink-0">
                    <img
                      src={uploadedImage}
                      alt="Uploaded Reference"
                      className="w-12 h-12 rounded-lg object-cover border-2 border-pink-400"
                    />
                    <button
                      onClick={() => {
                        setUploadedImage(null);
                        setUploadedFileName(null);
                      }}
                      className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 text-[10px]"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {uploadedFileName && (
              <div className="mt-3 text-xs text-pink-300 flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Uploaded Reference: <strong>{uploadedFileName}</strong> (Attached to fashion design request)</span>
              </div>
            )}
          </div>
        </div>

        {/* PART 2: COMPREHENSIVE MEASUREMENTS INPUT & FABRIC SELECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Measurements Form */}
          <div className="lg:col-span-8 bg-gradient-to-b from-[#240f21] via-[#1a0a16] to-[#12050f] border-2 border-pink-500/40 rounded-3xl p-6 sm:p-9 space-y-8 shadow-[0_8px_35px_rgba(244,114,182,0.18)]">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>2. Input Your Precise Measurements</span>
                </h3>
                <span className="text-black font-extrabold text-xs uppercase tracking-wider bg-gradient-to-r from-pink-400 to-rose-300 px-3 py-1 rounded-full shadow-sm">
                  Units: {unit.toUpperCase()}
                </span>
              </div>
              <p className="text-pink-100/70 text-xs mt-1">
                Every measurement is hand-checked by Uwaila Imafidon Glory's tailoring team to guarantee a snug, flattering fit.
              </p>
            </div>

            {/* Grid of Measurements with pink styling */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-pink-200 mb-1.5">
                  Bust / Chest ({unit}) *
                </label>
                <input
                  type="text"
                  placeholder={`e.g. 36 ${unit}`}
                  value={measurements.bust}
                  onChange={(e) => handleMeasurementChange('bust', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/20 border-2 border-pink-500/30 text-white placeholder-pink-300/40 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-400/50 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-pink-200 mb-1.5">
                  Underbust ({unit})
                </label>
                <input
                  type="text"
                  placeholder={`e.g. 31 ${unit}`}
                  value={measurements.underbust}
                  onChange={(e) => handleMeasurementChange('underbust', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/20 border-2 border-pink-500/30 text-white placeholder-pink-300/40 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-400/50 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-pink-200 mb-1.5">
                  Natural Waist ({unit}) *
                </label>
                <input
                  type="text"
                  placeholder={`e.g. 28 ${unit}`}
                  value={measurements.waist}
                  onChange={(e) => handleMeasurementChange('waist', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/20 border-2 border-pink-500/30 text-white placeholder-pink-300/40 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-400/50 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-pink-200 mb-1.5">
                  High Hips ({unit})
                </label>
                <input
                  type="text"
                  placeholder={`e.g. 35 ${unit}`}
                  value={measurements.highHips}
                  onChange={(e) => handleMeasurementChange('highHips', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/20 border-2 border-pink-500/30 text-white placeholder-pink-300/40 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-400/50 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-pink-200 mb-1.5">
                  Full Hips ({unit}) *
                </label>
                <input
                  type="text"
                  placeholder={`e.g. 42 ${unit}`}
                  value={measurements.fullHips}
                  onChange={(e) => handleMeasurementChange('fullHips', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/20 border-2 border-pink-500/30 text-white placeholder-pink-300/40 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-400/50 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-pink-200 mb-1.5">
                  Shoulder to Shoulder ({unit})
                </label>
                <input
                  type="text"
                  placeholder={`e.g. 15.5 ${unit}`}
                  value={measurements.shoulderToShoulder}
                  onChange={(e) => handleMeasurementChange('shoulderToShoulder', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/20 border-2 border-pink-500/30 text-white placeholder-pink-300/40 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-400/50 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-pink-200 mb-1.5">
                  Sleeve Length ({unit})
                </label>
                <input
                  type="text"
                  placeholder={`e.g. 24 ${unit}`}
                  value={measurements.sleeveLength}
                  onChange={(e) => handleMeasurementChange('sleeveLength', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/20 border-2 border-pink-500/30 text-white placeholder-pink-300/40 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-400/50 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-pink-200 mb-1.5">
                  Arm Circumference (Bicep)
                </label>
                <input
                  type="text"
                  placeholder={`e.g. 12 ${unit}`}
                  value={measurements.armCircumference}
                  onChange={(e) => handleMeasurementChange('armCircumference', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/20 border-2 border-pink-500/30 text-white placeholder-pink-300/40 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-400/50 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-pink-200 mb-1.5">
                  Dress/Gown Length ({unit})
                </label>
                <input
                  type="text"
                  placeholder={`e.g. 60 ${unit} (Floor)`}
                  value={measurements.dressLength}
                  onChange={(e) => handleMeasurementChange('dressLength', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/20 border-2 border-pink-500/30 text-white placeholder-pink-300/40 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-400/50 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-pink-200 mb-1.5">
                  Trouser Length ({unit})
                </label>
                <input
                  type="text"
                  placeholder={`e.g. 43 ${unit}`}
                  value={measurements.trouserLength}
                  onChange={(e) => handleMeasurementChange('trouserLength', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/20 border-2 border-pink-500/30 text-white placeholder-pink-300/40 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-400/50 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-pink-200 mb-1.5">
                  Inseam ({unit})
                </label>
                <input
                  type="text"
                  placeholder={`e.g. 33 ${unit}`}
                  value={measurements.inseam}
                  onChange={(e) => handleMeasurementChange('inseam', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/20 border-2 border-pink-500/30 text-white placeholder-pink-300/40 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-400/50 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-pink-200 mb-1.5">
                  Neck Circumference ({unit})
                </label>
                <input
                  type="text"
                  placeholder={`e.g. 14 ${unit}`}
                  value={measurements.neck}
                  onChange={(e) => handleMeasurementChange('neck', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/20 border-2 border-pink-500/30 text-white placeholder-pink-300/40 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-400/50 text-sm transition-all"
                />
              </div>
            </div>

            {/* Fabric & Color Customization */}
            <div className="pt-6 border-t border-pink-500/30 space-y-4">
              <h4 className="text-pink-300 font-extrabold text-sm uppercase tracking-wider flex items-center gap-2">
                <Scissors className="w-4 h-4 text-pink-400" />
                <span>3. Choose Fabric & Styling Details</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-pink-200 mb-1.5">
                    Preferred Luxury Fabric
                  </label>
                  <select
                    value={fabric}
                    onChange={(e) => setFabric(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#2b1024] border-2 border-pink-500/40 text-white text-sm focus:outline-none focus:border-pink-300"
                  >
                    {fabricsList.map(fab => (
                      <option key={fab} value={fab}>{fab}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-pink-200 mb-1.5">
                    Color Scheme / Palette
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Blush Pink, Jet Black, Emerald Green, Champagne"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/20 border-2 border-pink-500/30 text-white placeholder-pink-300/40 focus:outline-none focus:border-pink-300 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-pink-200 mb-1.5">
                    Occasion / Event Type
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Wedding Guest, Gala, Executive Conference, Birthday Shoot"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/20 border-2 border-pink-500/30 text-white placeholder-pink-300/40 focus:outline-none focus:border-pink-300 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-pink-200 mb-1.5">
                    Target Fitting / Delivery Date
                  </label>
                  <input
                    type="date"
                    value={targetDate}
                    onChange={(e) => setTargetDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/20 border-2 border-pink-500/30 text-white focus:outline-none focus:border-pink-300 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-pink-200 mb-1.5">
                  Designer Notes & Special Preferences
                </label>
                <textarea
                  rows={3}
                  placeholder="Detail any slit preferences, corset boning level, sleeve style, modesty lining, or design tweaks..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/20 border-2 border-pink-500/30 text-white placeholder-pink-300/40 focus:outline-none focus:border-pink-300 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Spec Summary & Direct WhatsApp/Email Dispatch with Rich Pink Container */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-gradient-to-b from-[#311129] via-[#240c1d] to-[#180614] border-2 border-pink-400 rounded-3xl p-6 sm:p-7 shadow-[0_10px_40px_rgba(244,114,182,0.35)] space-y-6">
              <div className="border-b border-pink-500/30 pb-4">
                <span className="text-pink-300 text-xs font-extrabold uppercase tracking-wider block">
                  Atelier Dispatch Card
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                  Ready to Bring It to Life
                </h4>
                <p className="text-pink-100/70 text-xs mt-1">
                  No automated checkout bots or upfront prices. Connect directly with Uwaila Imafidon Glory's atelier in Abuja.
                </p>
              </div>

              {/* Client Contact Info Input */}
              <div className="space-y-3">
                <span className="text-xs font-extrabold text-pink-200 uppercase tracking-wider block">
                  Your Contact Information
                </span>

                <div>
                  <input
                    type="text"
                    placeholder="Your Full Name *"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/30 border-2 border-pink-400/40 text-white placeholder-pink-300/50 text-xs focus:outline-none focus:border-pink-300"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp Number *"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/30 border-2 border-pink-400/40 text-white placeholder-pink-300/50 text-xs focus:outline-none focus:border-pink-300"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/30 border-2 border-pink-400/40 text-white placeholder-pink-300/50 text-xs focus:outline-none focus:border-pink-300"
                  />
                </div>
              </div>

              {/* Spec Brief Overview */}
              <div className="p-4 rounded-2xl bg-black/50 border border-pink-500/30 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-pink-200/70">Chosen Silhouette:</span>
                  <span className="text-pink-300 font-bold">{selectedSampleStyle?.name || 'Custom'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-pink-200/70">Fabric Choice:</span>
                  <span className="text-white font-semibold">{fabric}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-pink-200/70">Color Palette:</span>
                  <span className="text-white font-semibold">{color}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-pink-200/70">Measurements Logged:</span>
                  <span className="text-pink-400 font-extrabold">
                    {Object.values(measurements).filter(Boolean).length} / 12 fields
                  </span>
                </div>
                {uploadedFileName && (
                  <div className="flex justify-between text-emerald-400 font-bold">
                    <span>JPEG Attached:</span>
                    <span>Yes</span>
                  </div>
                )}
              </div>

              {/* Dispatch Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full py-4 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2 cursor-pointer group hover:scale-102"
                >
                  <MessageCircle className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
                  <span>Send Spec to WhatsApp (07015578653)</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 hover:from-pink-400 hover:to-rose-300 text-black text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(244,114,182,0.4)]"
                >
                  <Mail className="w-4 h-4 text-black" />
                  <span>Email Spec to shopwithuwa@gmail.com</span>
                </button>
              </div>

              {submittedFeedback && (
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Bespoke order sheet generated! WhatsApp has opened to 07015578653.</span>
                </div>
              )}

              <p className="text-[11px] text-zinc-400 text-center leading-normal">
                📍 Atelier visits & VIP fitting appointments available in Abuja, Nigeria.
              </p>
            </div>
          </div>
        </div>

        {/* Measurement Guide Modal */}
        {showGuideModal && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#121216] border border-pink-400/40 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setShowGuideModal(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 text-pink-300 flex items-center justify-center">
                  <Ruler className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-serif text-xl font-bold">
                    How to Take Accurate Body Measurements
                  </h3>
                  <p className="text-zinc-400 text-xs">For best results, wear fitted undergarments and use a flexible tailor’s tape.</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-zinc-300">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <strong className="text-pink-300 block mb-0.5">1. Bust / Chest:</strong>
                  <span>Wrap tape around the fullest part of your bust, keeping tape level across your back.</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <strong className="text-pink-300 block mb-0.5">2. Natural Waist:</strong>
                  <span>Measure the narrowest point of your torso, usually 1 to 2 inches above your navel.</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <strong className="text-pink-300 block mb-0.5">3. Full Hips:</strong>
                  <span>Stand with feet together and measure around the fullest curve of your hips and buttocks.</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <strong className="text-pink-300 block mb-0.5">4. Dress & Gown Length:</strong>
                  <span>Measure from the top edge of your shoulder, over the bust point, straight down to desired hemline (floor length with heels).</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <strong className="text-pink-300 block mb-0.5">5. Need Showroom Assistance?</strong>
                  <span>Call or visit our Abuja atelier at <a href="tel:07015578653" className="text-white font-bold underline">07015578653</a> for a complimentary professional body measurement session.</span>
                </div>
              </div>

              <button
                onClick={() => setShowGuideModal(false)}
                className="w-full py-2.5 rounded-xl bg-pink-400 text-black font-bold text-xs uppercase tracking-wider"
              >
                Understood, Return to Form
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
