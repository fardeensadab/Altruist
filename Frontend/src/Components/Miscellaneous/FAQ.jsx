import './styles.css';

export default function FAQ() {
    return (
        <div className='container'>
            {/* General Questions */}
            <div className='faq-section'>
                <h2>General Questions</h2>
                <details>
                    <summary>What is ClearAid?</summary>
                    <p>ClearAid is a fundraising platform that connects NGOs and charitable organizations with donors, facilitating transparent and efficient fundraising campaigns for various causes.</p>
                </details>

                <details>
                    <summary>Who can create a fundraiser?</summary>
                    <p>Any registered NGO or charitable organization can create a fundraiser on ClearAid, provided they meet our verification criteria.</p>
                </details>

                <details>
                    <summary>How does ClearAid work?</summary>
                    <p>Users can create an account, set up a fundraising campaign by providing details about their cause, and promote it to attract donors. Donors can browse campaigns and contribute directly through the platform.</p>
                </details>

                <details>
                    <summary>Is ClearAid free to use?</summary>
                    <p>Creating a fundraiser on ClearAid is free. Also no money is deducted from fund.</p>
                </details>

                <details>
                    <summary>How long can a fundraiser run?</summary>
                    <p>Fundraisers can run for a minimum of 12 hours and up to 6 months. Organizers can extend the duration if needed.</p>
                </details>
            </div>

            {/* For Donors */}
            <div className='faq-section'>
                <h2>For Donors</h2>
                <details>
                    <summary>How can I donate to a fundraiser?</summary>
                    <p>Donors can donate by selecting a campaign and choosing their preferred payment method, including mobile banking, card payment  and bank transfers.</p>
                </details>

                <details>
                    <summary>Is my donation secure?</summary>
                    <p>Yes, ClearAid uses SSL encryption and secure payment gateways to ensure that all personal and financial information is protected.</p>
                </details>

                <details>
                    <summary>Can I make an anonymous donation?</summary>
                    <p>Yes, donors can choose to donate anonymously by selecting the option during the donation process.</p>
                </details>

                <details>
                    <summary>Is my donation tax-deductible?</summary>
                    <p>Donations made through ClearAid are generally tax-deductible, but donors should consult with a tax professional to confirm eligibility based on local regulations.</p>
                </details>

                <details>
                    <summary>Can I donate from outside my country?</summary>
                    <p>Yes, ClearAid accepts international donations. However, currency conversion fees may apply depending on the payment method used.</p>
                </details>

                <details>
                    <summary>What happens to my donation if the fundraising goal is not met?</summary>
                    <p>Donations will still be processed, and the funds raised will be disbursed to the NGO, allowing them to continue their work, even if the goal isn’t met.</p>
                </details>
            </div>

            {/* For Fundraisers (Campaign Creators) */}
            <div className='faq-section'>
                <h2>For Fundraisers</h2>
                <details>
                    <summary>How do I start a fundraiser?</summary>
                    <p>To start a fundraiser, register on ClearAid, create a campaign by filling in necessary details about your NGO and fundraising goal, and submit for verification.</p>
                </details>

                <details>
                    <summary>What types of fundraisers can I create?</summary>
                    <p>ClearAid allows various types of fundraisers, including medical expenses, educational initiatives, and charitable projects.</p>
                </details>

                <details>
                    <summary>How do I promote my fundraiser?</summary>
                    <p>Share your campaign link on social media, email, and other platforms. You can also ask friends and family to spread the word.</p>
                </details>

                <details>
                    <summary>How do I track donations and thank donors?</summary>
                    <p>ClearAid provides real-time tracking of donations through your campaign dashboard. You can send thank-you messages directly to your donors via the platform.</p>
                </details>

                <details>
                    <summary>How do I withdraw funds?</summary>
                    <p>Funds can be withdrawn after the campaign ends, and the process typically involves submitting a withdrawal request, which ClearAid processes within 3 business days.</p>
                </details>

                <details>
                    <summary>What happens if I exceed my fundraising goal?</summary>
                    <p>If you exceed your goal, you can choose to keep raising funds to support additional projects or use the extra funds for future initiatives.</p>
                </details>
            </div>

            {/* Legal and Financial Questions */}
            <div className='faq-section'>
                <h2>Legal and Financial Questions</h2>
                <details>
                    <summary>Are there any fees for withdrawing funds?</summary>
                    <p>ClearAid does not charge fees for withdrawing funds.</p>
                </details>

                <details>
                    <summary>How are funds distributed?</summary>
                    <p>Funds are transferred directly to the NGO's registered bank account upon the completion of the fundraiser.</p>
                </details>

                <details>
                    <summary>Is there a minimum or maximum amount I can raise?</summary>
                    <p>There is no minimum limit for fundraising, but the maximum amount is subject to platform policies and local regulations.</p>
                </details>

                <details>
                    <summary>Can I edit my fundraiser after it’s published?</summary>
                    <p>Yes, campaign creators can edit their fundraisers after publication, including updating goals, descriptions, and images.</p>
                </details>

                <details>
                    <summary>What happens if I need to cancel my fundraiser?</summary>
                    <p>If you cancel your fundraiser, any donations collected will still go to the NGO, and you can inform donors of your decision through the platform.</p>
                </details>

                <details>
                    <summary>Is ClearAid a legitimate platform?</summary>
                    <p>Yes, ClearAid is a verified and trusted platform. We have partnerships with recognized NGOs and positive testimonials from our users.</p>
                </details>
            </div>

            {/* For Recipients (If Applicable) */}
            <div className='faq-section'>
                <h2>For Recipients</h2>
                <details>
                    <summary>How will the funds be used?</summary>
                    <p>Organizers can provide details about how the funds will be utilized for their cause in their campaign description.</p>
                </details>

                <details>
                    <summary>What happens if my campaign is flagged or reported?</summary>
                    <p>ClearAid will review any flagged campaigns for compliance with our guidelines and take appropriate action if necessary.</p>
                </details>
            </div>

            {/* Support and Troubleshooting */}
            <div className='faq-section'>
                <h2>Support and Troubleshooting</h2>
                <details>
                    <summary>What do I do if I have technical issues?</summary>
                    <p>If you experience technical issues, please contact ClearAid support through our help center or email us for assistance.</p>
                </details>

                <details>
                    <summary>How do I report a suspicious fundraiser?</summary>
                    <p>Users can report suspicious fundraisers directly through the campaign page using the "Report" button.</p>
                </details>

                <details>
                    <summary>What should I do if my payment method fails?</summary>
                    <p>If your payment fails, check with your bank or payment provider for issues, and try a different payment method if necessary.</p>
                </details>

                <details>
                    <summary>Can I update or change my donation amount?</summary>
                    <p>Yes, donors can adjust their contributions by contacting customer support or following the instructions in their donation confirmation email.</p>
                </details>
            </div>
        </div>
    );
}
