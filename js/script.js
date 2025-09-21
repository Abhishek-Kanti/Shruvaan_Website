// Script for DETONATE Research Website

document.addEventListener('DOMContentLoaded', function() {
    // Button click handlers
    const paperBtn = document.getElementById('paperBtn');
    const codeBtn = document.getElementById('codeBtn');
    
    // Paper button click handler
    paperBtn.addEventListener('click', function() {
        // Placeholder for Cornell/arXiv paper link
        // Replace with actual paper URL when available
        console.log('Paper button clicked - Add Cornell/arXiv URL here');
        
        // For now, show an alert
        alert('Paper link will be added here. This will redirect to the Cornell/arXiv paper.');
        
        // Uncomment and add actual URL when ready:
        // window.open('https://arxiv.org/abs/your-paper-id', '_blank');
    });
    
    // Code button click handler
    codeBtn.addEventListener('click', function() {
        // Placeholder for GitHub repository link  
        // Replace with actual GitHub URL when available
        console.log('Code button clicked - Add GitHub repository URL here');
        
        // For now, show an alert
        alert('Code repository link will be added here. This will redirect to the GitHub repository.');
        
        // Uncomment and add actual URL when ready:
        // window.open('https://github.com/your-username/your-repo', '_blank');
    });
    
    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation for buttons
    function addLoadingState(button) {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        button.disabled = true;
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 1000);
    }
    
    // Enhanced button interactions
    paperBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    paperBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
    
    codeBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    codeBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
    
    // Console welcome message
    console.log('%c🚀 DETONATE Research Website', 'color: #4ade80; font-size: 16px; font-weight: bold;');
    console.log('Research paper presentation website ready!');
    console.log('Add your paper and code repository links in the button event handlers.');
});

// Utility function to update links when ready
function updateLinks(paperUrl, codeUrl) {
    const paperBtn = document.getElementById('paperBtn');
    const codeBtn = document.getElementById('codeBtn');
    
    if (paperUrl) {
        paperBtn.onclick = () => window.open(paperUrl, '_blank');
    }
    
    if (codeUrl) {
        codeBtn.onclick = () => window.open(codeUrl, '_blank');
    }
    
    console.log('Links updated successfully!');
}

// Example usage (uncomment when you have the actual URLs):
// updateLinks('https://arxiv.org/abs/your-paper-id', 'https://github.com/your-username/your-repo');