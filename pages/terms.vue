<template>
  <div class="bg-white">
    <v-img
      :src="image"
      cover
      height="250"
      class="d-flex"
      gradient="to top right, rgba(256,256,256,.33), rgba(25,32,72,.7)"
    >
      <h1 class="text-h1 text-center pt-16 text-white">Terms of Use</h1>
      <div class="text-h6 text-center text-white">Last Update: Feb 24th, 2025</div>
    </v-img>

    <section class="contentSection mx-auto pt-10">
      Welcome to Spelly (“we,” “us,” “our”). These Terms of Use (“Terms”) govern your access to and
      use of our website, mobile application, and related services (collectively, the “Service”). By
      accessing or using our Service, you agree to be bound by these Terms, along with our Privacy
      Policy. If you do not agree to these Terms, please do not use our Service.

      <h2 class="text-h3 mt-10">1. Acceptance of Terms</h2>
      By using our Service, you confirm that you have read, understood, and agree to be bound by
      these Terms and any additional policies or supplemental guidelines posted on our website. If
      you use the Service on behalf of an organization, you represent that you have the authority to
      bind that organization.

      <h2 class="text-h3 mt-10">2. Eligibility and User Accounts</h2>

      <h3 class="text-h4 mt-5">2.1. Eligibility</h3>
      <ul>
        <li>
          <strong>General Users:</strong> Our Service is intended for users who are at least 13
          years old. Users under the age of 13 are not permitted to create an account or provide
          personal information without verifiable parental consent, in compliance with applicable
          laws such as COPPA.
        </li>
        <li>
          <strong>Minors:</strong> Some portions of our Service may not be intended for minors. If
          you are under 13, you must use our Service only under the supervision and with the express
          consent of a parent or legal guardian.
        </li>
        <li>
          <strong>Educators and School Use:</strong> If you are an educator or school personnel
          using the Service on behalf of an educational institution, you represent that you are
          authorized to agree to these Terms on behalf of your organization and its users.
        </li>
      </ul>

      <h3 class="text-h4 mt-5">2.2. Account Registration and Security</h3>
      <ul>
        <li>
          <strong>Registration:</strong> To access certain features, you must register for an
          account. You agree to provide accurate, current, and complete information and update it as
          necessary.
        </li>
        <li>
          <strong>Security:</strong> You are responsible for maintaining the confidentiality of your
          account credentials. Notify us immediately of any unauthorized use or suspected breach.
        </li>
      </ul>

      <h2 class="text-h3 mt-10">3. Use of the Service</h2>

      <h3 class="text-h4 mt-5">3.1. License Grant</h3>
      <p>
        Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable
        license to use the Service for personal, non-commercial purposes.
      </p>

      <h3 class="text-h4 mt-5">3.2. Prohibited Conduct</h3>
      <p>You agree not to use the Service to:</p>
      <ul>
        <li>Violate any laws or regulations.</li>
        <li>Engage in harmful, fraudulent, or deceptive activities.</li>
        <li>
          Attempt to access non-public areas of the Service or use automated tools (e.g., bots,
          spiders) for data scraping.
        </li>
        <li>
          Upload, post, or share content that is unlawful, defamatory, obscene, infringing, or that
          violates the privacy or intellectual property rights of others.
        </li>
        <li>Use the Service to commit academic dishonesty.</li>
      </ul>

      <h2 class="text-h3 mt-10">4. User Content and Intellectual Property</h2>

      <h3 class="text-h4 mt-5">4.1. Ownership</h3>
      <ul>
        <li>
          <strong>Content Ownership:</strong> All materials, including text, graphics, logos,
          images, videos, and code, are owned by Spelly or licensed to us and are protected by
          intellectual property laws.
        </li>
        <li>
          <strong>User Content:</strong> You retain ownership of any content you submit (“User
          Content”), but by submitting it, you grant us a worldwide, royalty-free, perpetual license
          to use, reproduce, modify, distribute, and display such content as necessary for operating
          and promoting the Service.
        </li>
      </ul>

      <h3 class="text-h4 mt-5">4.2. Copyright and Infringement</h3>
      <p>
        If you believe that any material on the Service infringes your copyright, please email us at
        {{ email }} with "Copyright Infringement" in the subject line. We reserve the right to
        remove infringing content and terminate accounts in violation of intellectual property
        rights.
      </p>

      <h2 class="text-h3 mt-10">5. Privacy and Data Protection</h2>
      <p>
        Your privacy is important to us. Please review our
        <a :href="privacyLink">Privacy Policy</a>, which explains how we collect, use, and disclose
        your personal information. By using the Service, you consent to our privacy practices as
        described in the Privacy Policy.
      </p>

      <h2 class="text-h3 mt-10">6. Disclaimers and Limitation of Liability</h2>

      <h3 class="text-h4 mt-5">6.1. Disclaimer of Warranties</h3>
      <p>
        The Service is provided on an “as is” and “as available” basis without warranties of any
        kind, express or implied, including warranties of merchantability, fitness for a particular
        purpose, and non-infringement. We do not warrant that the Service will be uninterrupted,
        secure, or error-free.
      </p>

      <h3 class="text-h4 mt-5">6.2. Limitation of Liability</h3>
      <p>
        To the fullest extent permitted by applicable law, Spelly and its affiliates shall not be
        liable for any direct, indirect, incidental, consequential, special, or punitive damages
        arising out of or in connection with your use of the Service. Our total liability shall not
        exceed the amount, if any, paid by you to use the Service.
      </p>

      <h3 class="text-h4 mt-5">6.3. Indemnification</h3>
      <p>
        You agree to indemnify, defend, and hold harmless Spelly, its officers, directors,
        employees, and agents from any claims, damages, or liabilities arising from your use of the
        Service or your violation of these Terms.
      </p>

      <h2 class="text-h3 mt-10">7. Modifications and Termination</h2>

      <h3 class="text-h4 mt-5">7.1. Changes to the Service and Terms</h3>
      <p>
        We reserve the right to modify, suspend, or discontinue the Service or any part thereof at
        any time without notice. We may also update these Terms from time to time. Your continued
        use of the Service constitutes acceptance of the revised Terms. In the event of material
        changes, we will endeavor to provide notice as required by law.
      </p>

      <h3 class="text-h4 mt-5">7.2. Termination</h3>
      <p>
        We may terminate or suspend your account immediately, without prior notice or liability, if
        you breach any of these Terms or for any other reason deemed necessary. Upon termination,
        your right to use the Service ceases immediately.
      </p>

      <h2 class="text-h3 mt-10">8. Export Compliance and International Use</h2>

      <h3 class="text-h4 mt-5">8.1. Export Compliance</h3>
      <p>
        You agree not to export or re-export any part of the Service in violation of applicable
        export laws or regulations.
      </p>

      <h3 class="text-h4 mt-5">8.2. International Users</h3>
      <p>
        If you reside outside the United States, you are responsible for complying with local laws.
        Some features or content may be restricted in certain jurisdictions.
      </p>

      <h2 class="text-h3 mt-10">9. Dispute Resolution</h2>
      <p>
        Any disputes arising from these Terms or your use of the Service shall be governed by the
        laws of California (without regard to conflict of law principles). You agree that any legal
        actions or disputes shall be resolved exclusively in the courts located in California. We
        encourage resolving disputes amicably by contacting us first at
        {{ email }}.
      </p>

      <h2 class="text-h3 mt-10">10. Miscellaneous</h2>

      <h3 class="text-h4 mt-5">10.1. Severability</h3>
      <p>
        If any provision of these Terms is found to be invalid or unenforceable, the remaining
        provisions will remain in full force and effect.
      </p>

      <h3 class="text-h4 mt-5">10.2. Entire Agreement</h3>
      <p>
        These Terms, together with our Privacy Policy and any other policies referenced herein,
        constitute the entire agreement between you and Spelly regarding the use of the Service.
      </p>

      <h3 class="text-h4 mt-5">10.3. Communication</h3>
      <p>
        You agree to receive communications from us electronically. All notices or other
        communications provided by us will be in writing and will be deemed to have been duly given
        when sent by email or posted on our website.
      </p>

      <h3 class="text-h4 mt-5">10.4. Contact Information</h3>
      <div class="contact-info mb-10">
        <p>
          Please contact <strong>Spelly</strong> with any comments or questions.<br />
          By email: {{ email }}<br />
          By mail: {{ address }}
        </p>
      </div>
    </section>
  </div>
</template>
<script setup>
  const image = new URL('../assets/images/terms.webp', import.meta.url).href
  const email = 'getspelly@gmail.com'
  const address = 'GetSpelly, PO Box 5000 PMB 92, Rancho Santa Fe, Ca 92067'
  const privacyLink = '/privacy'
</script>

<style scoped>
  .contentSection {
    max-width: 1000px;
  }
</style>
