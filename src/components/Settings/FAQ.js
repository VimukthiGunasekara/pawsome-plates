import React, { useState } from 'react';
import FooterSection from "../Footer";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is the 'Pawsome Plates Recipe E-Book'?",
            answer: "The 'Pawsome Plates Recipe E-Book' is a collection of 20 homemade dog food recipes designed to provide nutritious and delicious meals for your furry companion."
        },
        {
            question: "Who is this e-book for?",
            answer: "This e-book is perfect for dog owners who want to prepare healthy meals for their pets using fresh, wholesome ingredients."
        },
        {
            question: "Are the recipes suitable for all dogs?",
            answer: "The recipes in the e-book are crafted to cater to a variety of dietary needs and preferences. However, it's essential to consult with your veterinarian before making significant changes to your dog's diet, especially if they have specific health concerns or dietary restrictions."
        },
        {
            question: "What types of ingredients are used in the recipes?",
            answer: "Our recipes feature common, pet-safe ingredients that are easy to find in most grocery stores. Each recipe emphasizes wholesome ingredients like lean meats, vegetables, and grains suitable for dogs."
        },
        {
            question: "How difficult are the recipes to prepare?",
            answer: "Our recipes are designed with simplicity in mind, making them accessible even for those with limited cooking experience. Each recipe includes clear step-by-step instructions to guide you through the cooking process."
        },
        {
            question: "Can I customize the recipes to suit my dog's preferences or dietary needs?",
            answer: "Absolutely! The e-book provides a variety of recipes to choose from, allowing you to tailor meals to your dog's taste preferences and specific dietary requirements."
        },
        {
            question: "Are the recipes balanced and nutritionally complete for dogs?",
            answer: "While our recipes emphasize nutrition and balance, it's essential to use them as part of a varied diet for your dog. We recommend consulting with your veterinarian to ensure your dog's nutritional needs are met."
        },
        {
            question: "Can I use these recipes for puppies or senior dogs?",
            answer: "Puppies and senior dogs have different nutritional requirements compared to adult dogs. While some recipes may be suitable with adjustments, it's crucial to seek advice from your vet to meet the specific needs of these life stages."
        },
        {
            question: "Is the e-book available in a print version?",
            answer: "Currently, the 'Pawsome Plates Recipe E-Book' is available exclusively as a digital download in PDF format, which you can view on your computer, tablet, or smartphone."
        },
        {
            question: "How can I purchase the e-book?",
            answer: "You can purchase the 'Pawsome Plates Recipe E-Book' directly from our website using secure online payment methods. After completing your purchase, you'll receive an email with a download link to access your e-book."
        },
        {
            question: "Do you offer refunds?",
            answer: "Due to the nature of digital products, we do not offer refunds once the e-book has been purchased and downloaded. However, if you encounter any issues with your purchase, please contact our customer support for assistance."
        },
        {
            question: "How can I contact customer support if I have further questions?",
            answer: "If you have any additional questions or need support, please reach out to our customer service team. We're here to help!"
        }
    ];

    const toggleFAQ = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <div className="faq">
                <h2>Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleFAQ(index)}>
                        <h3>
                            {faq.question}
                        </h3>
                        <div className={`answer ${activeIndex === index ? 'active' : ''}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
            <FooterSection />
        </div>

    );
};

export default FAQ;
