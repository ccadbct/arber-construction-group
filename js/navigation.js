// ==========================================================================
// NAVIGATION JAVASCRIPT FUNCTIONALITY
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing mobile menu...');
    
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    // Ensure all dropdowns start closed
    document.querySelectorAll('.mobile-dropdown').forEach(dd => {
        dd.classList.remove('active');
        console.log('Closed dropdown:', dd);
    });
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.classList.remove('active');
        console.log('Removed active from link:', link);
    });
    
    // Toggle mobile menu
    mobileToggle.addEventListener('click', function() {
        console.log('Mobile toggle clicked');
        mobileMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
        if (mobileMenu.classList.contains('active')) {
            console.log('Mobile menu opened, closing all dropdowns...');
            document.body.style.overflow = 'hidden';
            // Close all dropdowns and remove active from all nav links
            document.querySelectorAll('.mobile-dropdown').forEach(dd => {
                dd.classList.remove('active');
                console.log('Closed dropdown:', dd);
            });
            document.querySelectorAll('.mobile-nav-link').forEach(link => {
                link.classList.remove('active');
                console.log('Removed active from link:', link);
            });
        } else {
            console.log('Mobile menu closed');
            document.body.style.overflow = '';
        }
    });

    // Improved: Only close menu for links without a submenu
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Mobile link clicked:', link.textContent);
            // If this link is a parent for a dropdown, prevent default and just toggle dropdown
            if (link.classList.contains('mobile-nav-link') && link.nextElementSibling && link.nextElementSibling.classList.contains('mobile-dropdown')) {
                console.log('This is a dropdown parent, toggling...');
                e.preventDefault();
                toggleMobileDropdown(link);
            } else {
                console.log('This is a regular link, closing menu...');
                // Otherwise, close the menu as normal
                mobileMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close mobile menu on window resize (if desktop size)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 900) {
            mobileMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Active page highlighting
    highlightActivePage();
});

// Mobile dropdown toggle functionality (toggle open/close)
function toggleMobileDropdown(element) {
    console.log('toggleMobileDropdown called for:', element.textContent);
    const dropdown = element.nextElementSibling;
    const isActive = dropdown.classList.contains('active');
    console.log('Dropdown is currently active:', isActive);
    
    // Close all dropdowns and remove active from all nav links
    document.querySelectorAll('.mobile-dropdown').forEach(dd => {
        dd.classList.remove('active');
        console.log('Closed dropdown:', dd);
    });
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.classList.remove('active');
        console.log('Removed active from link:', link);
    });
    
    // Toggle current dropdown (open if closed, close if open)
    if (!isActive) {
        console.log('Opening dropdown for:', element.textContent);
        dropdown.classList.add('active');
        element.classList.add('active');
    } else {
        console.log('Closing dropdown for:', element.textContent);
    }
    // If isActive, do nothing (all dropdowns are now closed)
}

// Active page highlighting function
function highlightActivePage() {
    const currentPage = document.body.dataset.page;
    const navLinks = document.querySelectorAll('.nav-link[data-page], .dropdown-link[data-page], .mobile-dropdown-link[data-page]');
    
    navLinks.forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add('active');
        }
    });
}

// Header scroll effect (optional enhancement)
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 30px rgba(35, 48, 99, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(35, 48, 99, 0.1)';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});