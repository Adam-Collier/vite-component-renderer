export const form = () => {
  if (!document.querySelector(".signup-form")) return "";

  return /* html */ `
<script>
    document.addEventListener("DOMContentLoaded", function () {
        let signupForm = new MgResponsive.NewsletterSignup.NewsletterSignup(
            ".signup-form .form-validate",
            ".signup-form .form-input",
            ".signup-form .form-result",
            ".signup-form .form-button",
            ".signup-form .js-newsletter-terms"
        );
    });
</script>
`;
};
