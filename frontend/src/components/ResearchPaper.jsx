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
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              {/* Colorful geometric shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Chat bubble */}
                  <div className="absolute top-0 left-0 w-8 h-8 bg-teal-400 rounded-lg transform -rotate-12"></div>
                  {/* X document */}
                  <div className="absolute top-2 right-0 w-6 h-8 bg-gray-300 rounded transform rotate-12 flex items-center justify-center">
                    <span className="text-red-500 font-bold text-xs">X</span>
                  </div>
                  {/* Chart/graph */}
                  <div className="absolute bottom-0 left-2 w-8 h-8 bg-blue-300 rounded transform rotate-6"></div>
                  {/* Central purple element */}
                  <div className="w-12 h-12 bg-purple-500 rounded-lg transform -rotate-6"></div>
                  {/* Orange swoosh */}
                  <div className="absolute -bottom-2 -left-4 w-16 h-8">
                    <svg viewBox="0 0 64 32" className="w-full h-full">
                      <path
                        d="M4,28 Q20,8 40,16 Q50,20 60,12"
                        stroke="#f97316"
                        strokeWidth="3"
                        fill="none"
                        opacity="0.8"
                      />
                      <path
                        d="M2,24 Q18,4 38,12 Q48,16 58,8"
                        stroke="#f97316"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.6"
                      />
                      <path
                        d="M0,20 Q16,0 36,8 Q46,12 56,4"
                        stroke="#f97316"
                        strokeWidth="1"
                        fill="none"
                        opacity="0.4"
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