(function () {
  "use strict";

  var form = document.getElementById("vacancyForm");
  if (!form) return;

  var fileInput = document.getElementById("resumeFile");
  var dropArea = document.getElementById("fileDropArea");
  var fileInfo = document.getElementById("fileInfo");
  var submitBtn = document.getElementById("formSubmit");
  var statusEl = document.getElementById("formStatus");
  var honeypot = form.querySelector('input[name="website"]');

  var selectedFile = null;

  // Validation patterns
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phoneRegex = /^[\+]?[\d\s\-\(\)]{7,20}$/;
  var allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  var allowedExtensions = [".pdf", ".doc", ".docx"];
  var maxFileSize = 10 * 1024 * 1024; // 10MB

  // File drop area events
  if (dropArea) {
    dropArea.addEventListener("click", function () {
      fileInput.click();
    });

    dropArea.addEventListener("dragover", function (e) {
      e.preventDefault();
      dropArea.classList.add("dragover");
    });

    dropArea.addEventListener("dragleave", function () {
      dropArea.classList.remove("dragover");
    });

    dropArea.addEventListener("drop", function (e) {
      e.preventDefault();
      dropArea.classList.remove("dragover");
      if (e.dataTransfer.files.length > 0) {
        handleFile(e.dataTransfer.files[0]);
      }
    });
  }

  if (fileInput) {
    fileInput.addEventListener("change", function () {
      if (fileInput.files.length > 0) {
        handleFile(fileInput.files[0]);
      }
    });
  }

  function handleFile(file) {
    var ext = "." + file.name.split(".").pop().toLowerCase();
    if (allowedExtensions.indexOf(ext) === -1 || file.size > maxFileSize) {
      selectedFile = null;
      dropArea.classList.remove("has-file");
      dropArea.classList.add("error");
      fileInfo.classList.remove("visible");
      showFieldError("fileError");
      return;
    }

    selectedFile = file;
    dropArea.classList.remove("error");
    dropArea.classList.add("has-file");
    hideFieldError("fileError");

    var sizeMB = (file.size / (1024 * 1024)).toFixed(2);
    fileInfo.textContent = file.name + " (" + sizeMB + " MB)";
    fileInfo.classList.add("visible");
  }

  function showFieldError(id) {
    var el = document.getElementById(id);
    if (el) el.classList.add("visible");
  }

  function hideFieldError(id) {
    var el = document.getElementById(id);
    if (el) el.classList.remove("visible");
  }

  function clearErrors() {
    form.querySelectorAll(".form-error").forEach(function (el) {
      el.classList.remove("visible");
    });
    form.querySelectorAll("input.error, textarea.error").forEach(function (el) {
      el.classList.remove("error");
    });
    if (dropArea) dropArea.classList.remove("error");
  }

  function validate() {
    var valid = true;
    clearErrors();

    var name = form.querySelector('input[name="fullName"]');
    if (!name.value.trim()) {
      name.classList.add("error");
      showFieldError("nameError");
      valid = false;
    }

    var email = form.querySelector('input[name="email"]');
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
      email.classList.add("error");
      showFieldError("emailError");
      valid = false;
    }

    var phone = form.querySelector('input[name="phone"]');
    if (!phone.value.trim() || !phoneRegex.test(phone.value.trim())) {
      phone.classList.add("error");
      showFieldError("phoneError");
      valid = false;
    }

    if (!selectedFile) {
      if (dropArea) dropArea.classList.add("error");
      showFieldError("fileError");
      valid = false;
    }

    return valid;
  }

  function showStatus(type, message) {
    statusEl.textContent = message;
    statusEl.className = "form-status visible " + type;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Honeypot check
    if (honeypot && honeypot.value) {
      showStatus("success", form.getAttribute("data-success") || "Application submitted successfully!");
      submitBtn.disabled = true;
      return;
    }

    if (!validate()) return;

    submitBtn.disabled = true;

    var formData = new FormData();
    formData.append("fullName", form.querySelector('input[name="fullName"]').value.trim());
    formData.append("email", form.querySelector('input[name="email"]').value.trim());
    formData.append("phone", form.querySelector('input[name="phone"]').value.trim());
    formData.append("message", form.querySelector('textarea[name="message"]').value.trim());
    formData.append("position", form.getAttribute("data-position") || "");
    formData.append("resume", selectedFile);

    // Try API first, fallback to mailto
    fetch("/api/vacancy-apply", {
      method: "POST",
      body: formData,
    })
      .then(function (res) {
        if (!res.ok) throw new Error("Server error");
        return res.json();
      })
      .then(function () {
        showStatus("success", form.getAttribute("data-success") || "Application submitted successfully!");
      })
      .catch(function () {
        // Fallback to mailto
        var name = form.querySelector('input[name="fullName"]').value.trim();
        var email = form.querySelector('input[name="email"]').value.trim();
        var phone = form.querySelector('input[name="phone"]').value.trim();
        var message = form.querySelector('textarea[name="message"]').value.trim();
        var position = form.getAttribute("data-position") || "";

        var subject = encodeURIComponent("Job Application: " + position);
        var body = encodeURIComponent(
          "Name: " + name + "\n" +
          "Email: " + email + "\n" +
          "Phone: " + phone + "\n" +
          "Position: " + position + "\n\n" +
          "Message:\n" + message + "\n\n" +
          "(Please attach your resume file manually)"
        );

        window.location.href = "mailto:info@lbp.ge?subject=" + subject + "&body=" + body;
        showStatus("success", form.getAttribute("data-success") || "Opening email client... Please attach your resume manually.");
      })
      .finally(function () {
        submitBtn.disabled = false;
      });
  });
})();
