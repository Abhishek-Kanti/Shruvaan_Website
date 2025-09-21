import React from 'react';
import { Button } from './ui/button';
import { FileText, Code2 } from 'lucide-react';

const ResearchPaper = () => {
  const handlePaperClick = () => {
    // Placeholder for paper URL - user will modify this later
    console.log('Paper button clicked - add your Cornell paper URL here');
  };

  const handleCodeClick = () => {
    // Placeholder for code URL - user will modify this later
    console.log('Code button clicked - add your GitHub repository URL here');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-8">
          {/* Logo/Icon */}
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 md:w-40 md:h-40 logo-container">
              {/* Colorful geometric shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Teal chat bubble with message lines */}
                  <div className="absolute top-1 left-1 w-10 h-8 bg-teal-400 rounded-lg transform -rotate-12 flex items-center justify-center">
                    <div className="space-y-0.5">
                      <div className="w-6 h-0.5 bg-white rounded"></div>
                      <div className="w-4 h-0.5 bg-white rounded"></div>
                      <div className="w-5 h-0.5 bg-white rounded"></div>
                    </div>
                  </div>
                  
                  {/* Document with X */}
                  <div className="absolute top-2 right-1 w-7 h-9 bg-gray-200 rounded transform rotate-12 flex items-center justify-center border border-gray-300">
                    <span className="text-red-600 font-bold text-sm">✕</span>
                  </div>
                  
                  {/* Blue chart/graph */}
                  <div className="absolute bottom-1 left-3 w-9 h-8 bg-blue-400 rounded transform rotate-6 flex items-end justify-center p-1">
                    <div className="flex items-end space-x-0.5">
                      <div className="w-1 h-2 bg-white rounded-sm"></div>
                      <div className="w-1 h-4 bg-white rounded-sm"></div>
                      <div className="w-1 h-3 bg-white rounded-sm"></div>
                      <div className="w-1 h-5 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Central purple element */}
                  <div className="w-14 h-12 bg-purple-600 rounded-lg transform -rotate-3 flex items-center justify-center">
                    <div className="w-8 h-2 bg-purple-300 rounded-full"></div>
                  </div>
                  
                  {/* Orange swoosh lines */}
                  <div className="absolute -bottom-2 -left-6 w-20 h-12">
                    <svg viewBox="0 0 80 48" className="w-full h-full">
                      <path
                        d="M8,40 Q30,12 50,24 Q65,30 76,18"
                        stroke="#f97316"
                        strokeWidth="3"
                        fill="none"
                        opacity="0.9"
                      />
                      <path
                        d="M6,36 Q28,8 48,20 Q63,26 74,14"
                        stroke="#f97316"
                        strokeWidth="2.5"
                        fill="none"
                        opacity="0.7"
                      />
                      <path
                        d="M4,32 Q26,4 46,16 Q61,22 72,10"
                        stroke="#f97316"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.5"
                      />
                      <path
                        d="M2,28 Q24,0 44,12 Q59,18 70,6"
                        stroke="#f97316"
                        strokeWidth="1.5"
                        fill="none"
                        opacity="0.3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Title and Info */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight">
              A Benchmark for Text-to-Image Alignment and<br />
              Kernelized Direct Preference Optimization
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              DETONATE
            </h2>
            
            {/* Authors */}
            <div className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
              <span className="inline-block mr-2">
                Renjith Prasad <sup className="text-red-500">*</sup>,
              </span>
              <span className="inline-block mr-2">
                Abhilekh Borah <sup className="text-red-500">*</sup>,
              </span>
              <span className="inline-block mr-2">
                Hasnat Md Abdullah <sup className="text-red-500">*</sup>,
              </span>
              <span className="inline-block mr-2">
                Chathurangi Shyalika,
              </span>
              <span className="inline-block mr-2">
                Gurpreet Singh,
              </span>
              <span className="inline-block mr-2">
                Ritvik Garimella,
              </span>
              <span className="inline-block mr-2">
                Rajarshi Roy,
              </span>
              <span className="inline-block mr-2">
                Harshul Surana,
              </span>
              <span className="inline-block mr-2">
                Nasrin Imanpour,
              </span>
              <span className="inline-block mr-2">
                Suranjana Trivedy,
              </span>
              <span className="inline-block mr-2">
                Amit Sheth,
              </span>
              <span className="inline-block">
                Amitava Das
              </span>
            </div>

            {/* Institution */}
            <div className="text-sm md:text-base text-gray-600 mb-2">
              AI Institute, University of South Carolina, USA
            </div>
            
            {/* Equal contribution note */}
            <div className="text-sm text-red-500 mb-6">
              *: equal contribution
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handlePaperClick}
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors"
              >
                <FileText size={20} />
                Paper
              </Button>
              <Button
                onClick={handleCodeClick}
                variant="outline"
                className="border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors"
              >
                <Code2 size={20} />
                Code
              </Button>
            </div>
          </div>
        </div>

        {/* Diagram Section */}
        <div className="mb-12">
          <div className="bg-gray-50 rounded-lg p-6 md:p-8">
            <div className="aspect-video bg-white rounded-lg border border-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                  <FileText size={32} />
                </div>
                <p className="text-lg font-medium">Technical Diagram Placeholder</p>
                <p className="text-sm mt-2">
                  Replace this area with your research diagram/figure
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Abstract Section */}
        <div className="max-w-none">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Abstract
          </h2>
          
          <div className="text-base md:text-lg leading-relaxed text-gray-800 space-y-6">
            <p>
              Alignment is crucial for text-to-image (T2I) models to ensure that the generated images faithfully capture user intent while maintaining safety and fairness. <strong>Direct Preference Optimization (DPO)</strong> has emerged as a key alignment technique for large language models (LLMs), and its influence is now extending to T2I systems. This paper introduces <strong>DPO-Kernels for T2I models</strong>, a novel extension of DPO that enhances alignment across three key dimensions: (i) <strong>Hybrid Loss</strong>, which integrates embedding-based objectives with the traditional probability-based loss to improve optimization; (ii) <strong>Kernelized Representations</strong>, leveraging <strong>Radial Basis Function (RBF)</strong>, <strong>Polynomial</strong>, and <strong>Wavelet</strong> kernels to enable richer feature transformations, ensuring better separation between safe and unsafe inputs; and (iii) <strong>Divergence Selection</strong>, expanding beyond DPO's default <strong>Kullback-Leibler (KL)</strong> regularizer by incorporating alternative divergence measures such as <strong>Wasserstein</strong> and <strong>Rényi</strong> divergences to enhance stability and robustness in alignment training as shown in Fig. 1.
            </p>
            
            <p>
              We introduce <strong>DETONATE</strong>, the first large-scale benchmark of its kind, comprising approximately 100K curated image pairs, categorized as chosen and rejected. This benchmark encapsulates three critical axes of social bias and discrimination: <strong>Race</strong>, <strong>Gender</strong>, and <strong>Disability</strong>. The prompts are sourced from the hate speech database, while the images are generated using state-of-the-art T2I models, including <strong>Stable Diffusion 3.5 Large (SD-3.5)</strong>, <strong>Stable Diffusion XL (SD-XL)</strong>, and <strong>Midjourney</strong>. Furthermore, to evaluate alignment beyond surface metrics, we introduce the <strong>Alignment Quality Index (AQI)</strong>, a novel geometric measure that quantifies latent space separability of safe/unsafe image activations, revealing hidden model vulnerabilities. While alignment techniques often risk overfitting, we empirically demonstrate that <strong>DPO-Kernels</strong> preserve strong generalization bounds using the theory of <strong>Heavy-Tailed Self-Regularization (HT-SR)</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaper;