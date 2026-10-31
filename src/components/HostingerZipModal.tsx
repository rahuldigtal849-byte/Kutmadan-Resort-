import React, { useState } from 'react';
import { X, Download, Server, CheckCircle2, ShieldCheck, Globe, Search, Copy, Check } from 'lucide-react';
import { generateHostingerZip } from '../utils/zipGenerator';
import { RESORT_INFO } from '../data/resortData';

interface HostingerZipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HostingerZipModal: React.FC<HostingerZipModalProps> = ({ isOpen, onClose }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'hostinger' | 'google-indexing'>('hostinger');
  const [copiedUrl, setCopiedUrl] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      const zipBlob = await generateHostingerZip();
      const downloadUrl = URL.createObjectURL(zipBlob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'kutmadan-resort-cherrapunji-hostinger.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 5000);
    } catch (err) {
      console.error('Error generating zip:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const copySitemap = () => {
    navigator.clipboard.writeText('https://kutmadanresortcherrapunji.in/sitemap.xml');
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="bg-[#FAF8F5] rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-stone-200 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#081C15] text-white p-6 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-[#D4AF37] flex items-center justify-center">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-white">
                Hostinger ZIP Package & Google Indexing
              </h3>
              <p className="text-xs text-stone-400">
                Official Domain: <span className="text-[#D4AF37]">https://kutmadanresortcherrapunji.in</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-stone-200 bg-stone-100 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('hostinger')}
            className={`pb-3 px-4 text-xs font-bold border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'hostinger'
                ? 'border-[#1B4332] text-[#1B4332]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <Server className="w-4 h-4" />
            <span>Hostinger Upload (10 Steps)</span>
          </button>
          <button
            onClick={() => setActiveTab('google-indexing')}
            className={`pb-3 px-4 text-xs font-bold border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'google-indexing'
                ? 'border-[#1B4332] text-[#1B4332]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Google Search Console Setup</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow text-sm text-stone-700">
          {/* Direct Download Action Card */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif font-bold text-lg text-stone-900">
                Hostinger-Ready ZIP Archive
              </h4>
              <p className="text-xs text-stone-500 mt-0.5">
                Contains static HTML pages, all 6 room photos, scenic assets, robots.txt, sitemap.xml, and Tawk.to chat.
              </p>
            </div>

            <button
              onClick={handleDownload}
              disabled={isGenerating}
              className="w-full sm:w-auto bg-[#1B4332] hover:bg-[#143427] text-white font-bold px-6 py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow transition cursor-pointer shrink-0 disabled:opacity-60"
            >
              <Download className="w-4 h-4" />
              <span>{isGenerating ? 'Generating ZIP...' : downloadSuccess ? 'Downloaded!' : 'Download ZIP Package'}</span>
            </button>
          </div>

          {activeTab === 'hostinger' ? (
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-base text-stone-900">
                Step-by-Step Deployment Instructions (Hostinger hPanel)
              </h4>

              <ol className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-stone-200">
                  <span className="w-6 h-6 rounded-full bg-[#1B4332] text-white font-bold text-xs flex items-center justify-center shrink-0">1</span>
                  <div>
                    <strong>Download the ZIP Package</strong> using the button above to your computer.
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-stone-200">
                  <span className="w-6 h-6 rounded-full bg-[#1B4332] text-white font-bold text-xs flex items-center justify-center shrink-0">2</span>
                  <div>
                    Log in to your <strong>Hostinger hPanel</strong> (<a href="https://hpanel.hostinger.com" target="_blank" rel="noreferrer" className="text-emerald-700 underline font-medium">hpanel.hostinger.com</a>).
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-stone-200">
                  <span className="w-6 h-6 rounded-full bg-[#1B4332] text-white font-bold text-xs flex items-center justify-center shrink-0">3</span>
                  <div>
                    Navigate to <strong>Websites</strong> &rarr; click <strong>Manage</strong> next to <code>kutmadanresortcherrapunji.in</code> &rarr; click <strong>File Manager</strong>.
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-stone-200">
                  <span className="w-6 h-6 rounded-full bg-[#1B4332] text-white font-bold text-xs flex items-center justify-center shrink-0">4</span>
                  <div>
                    Double-click into the <strong>public_html</strong> directory. (Delete any placeholder <code>default.php</code> if present).
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-stone-200">
                  <span className="w-6 h-6 rounded-full bg-[#1B4332] text-white font-bold text-xs flex items-center justify-center shrink-0">5</span>
                  <div>
                    Click the <strong>Upload</strong> icon (arrow up) at the top of the File Manager toolbar and choose the downloaded ZIP file.
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-stone-200">
                  <span className="w-6 h-6 rounded-full bg-[#1B4332] text-white font-bold text-xs flex items-center justify-center shrink-0">6</span>
                  <div>
                    Right-click the uploaded ZIP file inside <code>public_html</code> and select <strong>Extract</strong>.
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-stone-200">
                  <span className="w-6 h-6 rounded-full bg-[#1B4332] text-white font-bold text-xs flex items-center justify-center shrink-0">7</span>
                  <div>
                    Ensure <code>index.html</code> is directly at the root of <code>public_html</code> so your site opens at the domain root.
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-stone-200">
                  <span className="w-6 h-6 rounded-full bg-[#1B4332] text-white font-bold text-xs flex items-center justify-center shrink-0">8</span>
                  <div>
                    Verify domain DNS settings in hPanel to ensure <code>kutmadanresortcherrapunji.in</code> points to your Hostinger server IP.
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-stone-200">
                  <span className="w-6 h-6 rounded-full bg-[#1B4332] text-white font-bold text-xs flex items-center justify-center shrink-0">9</span>
                  <div>
                    Go to <strong>Security &rarr; SSL</strong> in hPanel and ensure <strong>Free Lifetime SSL</strong> is active (HTTPS).
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-stone-200">
                  <span className="w-6 h-6 rounded-full bg-[#1B4332] text-white font-bold text-xs flex items-center justify-center shrink-0">10</span>
                  <div>
                    Open <strong>https://kutmadanresortcherrapunji.in</strong> in your browser and test WhatsApp booking (+91 6207799112) and Tawk.to live chat!
                  </div>
                </li>
              </ol>
            </div>
          ) : (
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-base text-stone-900">
                Google Search Console Indexing Checklist
              </h4>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900">
                <strong>Important:</strong> Google Search Console indexing requires proper verification and sitemap submission. While Google indexing depends on search crawler schedules, this site includes 100% compliant JSON-LD, clean robots.txt, canonical tags, and an XML sitemap.
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">1. Add Property to Google Search Console</div>
                  <p className="text-stone-600">
                    Visit <a href="https://search.google.com/search-console" target="_blank" rel="noreferrer" className="text-emerald-700 underline font-medium">search.google.com/search-console</a> and add <code>https://kutmadanresortcherrapunji.in</code> as a URL Prefix or Domain property.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">2. Verify Domain Ownership</div>
                  <p className="text-stone-600">
                    Verify via Hostinger DNS TXT record or by placing the Google HTML verification file into <code>public_html</code> via File Manager.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">3. Submit sitemap.xml</div>
                  <p className="text-stone-600">
                    In the Search Console sidebar, click <strong>Sitemaps</strong> &rarr; enter <code>sitemap.xml</code> and click <strong>Submit</strong>.
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value="https://kutmadanresortcherrapunji.in/sitemap.xml"
                      className="bg-stone-50 border border-stone-200 px-3 py-1.5 rounded-lg text-xs font-mono flex-grow"
                    />
                    <button
                      onClick={copySitemap}
                      className="bg-stone-800 text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      {copiedUrl ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedUrl ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">4. Inspect URL & Request Indexing</div>
                  <p className="text-stone-600">
                    Use the <strong>URL Inspection</strong> tool at the top of Search Console, input <code>https://kutmadanresortcherrapunji.in</code>, and click <strong>Request Indexing</strong>.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">5. Google Analytics (Optional)</div>
                  <p className="text-stone-600">
                    If desired, set up Google Analytics 4 (GA4) and paste the measurement tag into the <code>&lt;head&gt;</code> of <code>index.html</code>.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-white border-t border-stone-200 p-4 px-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
