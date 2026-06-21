// Toast notifications
function createToastContainer() {
  if (document.querySelector('.toast-container')) return;
  const container = document.createElement('div');
  container.className = 'toast-container';
  document.body.appendChild(container);
}

export function showToast(message, type = 'info') {
  createToastContainer();
  const container = document.querySelector('.toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  let icon = 'fa-circle-info';
  if (type === 'error') icon = 'fa-circle-exclamation';
  if (type === 'success') icon = 'fa-circle-check';
  toast.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Loading overlay (global)
let spinnerElement = null;
export function showLoading() {
  if (!spinnerElement) {
    spinnerElement = document.createElement('div');
    spinnerElement.id = 'global-spinner';
    spinnerElement.innerHTML = `<div class="spinner-overlay"><div class="spinner"></div></div>`;
    // Add styles dynamically
    const style = document.createElement('style');
    style.textContent = `
      .spinner-overlay {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.3); backdrop-filter: blur(4px);
        display: flex; align-items: center; justify-content: center; z-index: 9998;
      }
      .spinner-overlay .spinner { width: 48px; height: 48px; border: 4px solid rgba(255,255,255,0.3); border-top-color: var(--primary); }
    `;
    document.head.appendChild(style);
  }
  document.body.appendChild(spinnerElement);
}

export function hideLoading() {
  if (spinnerElement && spinnerElement.parentNode) {
    spinnerElement.parentNode.removeChild(spinnerElement);
  }
}