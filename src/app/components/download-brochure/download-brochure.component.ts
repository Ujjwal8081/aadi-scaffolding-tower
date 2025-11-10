import { Component, ViewChild } from '@angular/core';
import { ContactNowComponent } from '../contact-now/contact-now.component';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-download-brochure',
  templateUrl: './download-brochure.component.html',
  styleUrls: ['./download-brochure.component.css']
})
export class DownloadBrochureComponent {
  @ViewChild(ContactNowComponent) contactNowDialog!: ContactNowComponent;
  
  downloadBrochure() {
    const doc = new jsPDF();
    let yPosition = 20;
    
    // Company Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(26);
    doc.setTextColor(16, 185, 129); // Emerald color
    doc.text('Shrijan Scaffolding Towers', 105, yPosition, { align: 'center' });
    
    yPosition += 8;
    doc.setFontSize(14);
    doc.setTextColor(100, 100, 100);
    doc.text('Premium Scaffolding Solutions Since 2005', 105, yPosition, { align: 'center' });
    
    // Line separator
    yPosition += 5;
    doc.setDrawColor(16, 185, 129);
    doc.setLineWidth(0.5);
    doc.line(20, yPosition, 190, yPosition);
    
    // Company Overview
    yPosition += 10;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('Company Overview', 20, yPosition);
    
    yPosition += 8;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    const overview = 'Shrijan Scaffolding Towers is a leading provider of premium quality aluminium scaffolding\nsolutions in India. With over 15 years of experience, we have established ourselves as\na trusted name for construction and maintenance professionals across the region.\n\nOur commitment to excellence, safety, and customer satisfaction has made us the\npreferred choice for thousands of clients.';
    doc.text(overview, 20, yPosition);
    
    // Contact Information
    yPosition += 45;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('Contact Information', 20, yPosition);
    
    yPosition += 8;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text('Address: Jail Road, Achalpur, Vikash Nagar, Pratapgarh, UP', 20, yPosition);
    yPosition += 7;
    doc.text('Phone: +91 8416839999', 20, yPosition);
    yPosition += 7;
    doc.text('Email: aadicu@zohomail.in', 20, yPosition);
    yPosition += 7;
    doc.text('Website: www.aadiscaffolding.com', 20, yPosition);
    
    // Our Products & Services
    yPosition += 12;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Our Products & Services', 20, yPosition);
    
    yPosition += 8;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    const products = [
      '1. Aluminium Scaffolding',
      '   • High-quality aluminum construction',
      '   • Easy assembly and dismantling',
      '   • Various height options available',
      '',
      '2. Scaffolding Towers',
      '   • Mobile scaffolding towers',
      '   • Excellent stability and safety',
      '   • Suitable for indoor and outdoor use',
      '',
      '3. Industrial Ladders',
      '   • Heavy-duty construction',
      '   • Multiple size options',
      '   • Anti-slip safety features',
      '',
      '4. Hydraulic Scissor Lifts',
      '   • Electric and hydraulic options',
      '   • Height access solutions',
      '   • Safe and efficient operation'
    ];
    
    products.forEach(product => {
      doc.text(product, 20, yPosition);
      yPosition += 6;
    });
    
    // Add new page
    doc.addPage();
    yPosition = 20;
    
    // Why Choose Us
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('Why Choose Shrijan  Scaffolding?', 20, yPosition);
    
    yPosition += 8;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    const features = [
      '✓ 15+ Years of Experience in the industry',
      '✓ ISO Certified Products with quality assurance',
      '✓ Premium Quality Materials for durability',
      '✓ Competitive Pricing with flexible payment options',
      '✓ 24/7 Customer Support for all queries',
      '✓ On-time Delivery guaranteed',
      '✓ Expert Installation Services available',
      '✓ Maintenance Support throughout product lifecycle',
      '✓ Customized Solutions for specific requirements',
      '✓ Safety Training Programs for users'
    ];
    
    features.forEach(feature => {
      doc.text(feature, 20, yPosition);
      yPosition += 8;
    });
    
    // Our Vision
    yPosition += 5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Our Vision', 20, yPosition);
    
    yPosition += 8;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    const vision = 'To be the leading provider of innovative and safe scaffolding solutions across India,\nsetting industry standards for quality, reliability, and customer satisfaction. We envision\na future where every construction project has access to world-class scaffolding\nequipment that ensures worker safety and project efficiency.';
    doc.text(vision, 20, yPosition);
    
    // Our Mission
    yPosition += 30;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Our Mission', 20, yPosition);
    
    yPosition += 8;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    const mission = 'To deliver premium quality aluminium scaffolding products and services that exceed\ncustomer expectations while maintaining the highest safety standards. We are\ncommitted to continuous innovation, employee development, and building long-lasting\nrelationships with our clients through exceptional service and support.';
    doc.text(mission, 20, yPosition);
    
    // Client Testimonials
    yPosition += 30;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Client Testimonials', 20, yPosition);
    
    yPosition += 8;
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text('"Best Vendor in supplying of Aluminium Mobile Scaffolding" - BV Balaji, Hyderabad', 20, yPosition);
    yPosition += 7;
    doc.text('"Excellent quality and service" - Satheesh, Nalgonda', 20, yPosition);
    yPosition += 7;
    doc.text('"Highly recommended for construction projects" - Syed Imran, Anantapur', 20, yPosition);
    
    // Footer
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text('© 2024 Shrijan Scaffolding Towers. All rights reserved.', 105, 285, { align: 'center' });
    
    // Save the PDF
    doc.save('Shrijan-Scaffolding-Company-Brochure.pdf');
  }
  
  downloadSafetyManual() {
    const doc = new jsPDF();
    let yPosition = 20;
    
    // Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(26);
    doc.setTextColor(37, 99, 235); // Blue color
    doc.text('Safety & Compliance Manual', 105, yPosition, { align: 'center' });
    
    yPosition += 8;
    doc.setFontSize(14);
    doc.setTextColor(100, 100, 100);
    doc.text('Shrijan Scaffolding Towers', 105, yPosition, { align: 'center' });
    
    yPosition += 5;
    doc.setDrawColor(37, 99, 235);
    doc.setLineWidth(0.5);
    doc.line(20, yPosition, 190, yPosition);
    
    // Introduction
    yPosition += 10;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('Introduction', 20, yPosition);
    
    yPosition += 8;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    const intro = 'This Safety & Compliance Manual outlines our commitment to maintaining the highest\nsafety standards in all scaffolding operations. Safety is our top priority, and we ensure\nthat all our products and services comply with international safety regulations.';
    doc.text(intro, 20, yPosition);
    
    // Safety Standards
    yPosition += 25;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('Safety Standards & Certifications', 20, yPosition);
    
    yPosition += 8;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    const standards = [
      '• ISO 9001:2015 Quality Management System',
      '• ISO 14001:2015 Environmental Management',
      '• OHSAS 18001 Occupational Health & Safety',
      '• EN 1004 Standards Compliance',
      '• BS Standards for Scaffolding',
      '• Regular third-party safety audits'
    ];
    
    standards.forEach(standard => {
      doc.text(standard, 20, yPosition);
      yPosition += 7;
    });
    
    // Safety Protocols
    yPosition += 8;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Safety Protocols', 20, yPosition);
    
    yPosition += 8;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    const protocols = [
      '1. Pre-Installation Inspection',
      '   • Check all components for damage',
      '   • Verify ground conditions and stability',
      '   • Ensure proper tools and equipment',
      '',
      '2. During Installation',
      '   • Follow manufacturer guidelines',
      '   • Use appropriate personal protective equipment',
      '   • Maintain safe working practices',
      '   • Regular supervision by trained personnel',
      '',
      '3. Regular Maintenance',
      '   • Weekly visual inspections',
      '   • Monthly detailed inspections',
      '   • Immediate repair of any damage',
      '   • Proper documentation of all checks',
      '',
      '4. User Training',
      '   • Mandatory safety training programs',
      '   • Proper usage instructions',
      '   • Emergency procedures awareness'
    ];
    
    protocols.forEach(protocol => {
      if (yPosition > 260) {
        doc.addPage();
        yPosition = 20;
      }
      doc.text(protocol, 20, yPosition);
      yPosition += 6;
    });
    
    // Add new page for equipment standards
    doc.addPage();
    yPosition = 20;
    
    // Equipment Standards
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Equipment Standards', 20, yPosition);
    
    yPosition += 8;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    const equipment = [
      'Load Capacity Specifications:',
      '• Standard platforms: 150 kg/m²',
      '• Heavy-duty platforms: 200-250 kg/m²',
      '• Working height: Up to 200 meters',
      '',
      'Material Specifications:',
      '• Aluminum alloy grade: 6061-T6',
      '• Corrosion-resistant coating',
      '• Non-slip platform surfaces',
      '• Weather-resistant components',
      '',
      'Safety Features:',
      '• Guardrails on all platforms',
      '• Toe boards for fall protection',
      '• Secure locking mechanisms',
      '• Stabilizers for additional support',
      '• Load capacity indicators'
    ];
    
    equipment.forEach(item => {
      doc.text(item, 20, yPosition);
      yPosition += 7;
    });
    
    // Emergency Procedures
    yPosition += 10;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Emergency Procedures', 20, yPosition);
    
    yPosition += 8;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    const emergency = [
      'In Case of Emergency:',
      '1. Stop all work immediately',
      '2. Evacuate the area safely',
      '3. Contact emergency services: 112',
      '4. Notify site supervisor',
      '5. Secure the site',
      '6. Document the incident',
      '',
      'Emergency Contact:',
      'Phone: +91 8416839999',
      'Email: aadicu@zohomail.in',
      '24/7 Support Available'
    ];
    
    emergency.forEach(item => {
      doc.text(item, 20, yPosition);
      yPosition += 7;
    });
    
    // Footer
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text('© 2024 Shrijan Scaffolding Towers. All rights reserved.', 105, 285, { align: 'center' });
    doc.text('For more information, contact: +91 8416839999', 105, 290, { align: 'center' });
    
    // Save the PDF
    doc.save('Shrijan-Scaffolding-Safety-Manual.pdf');
  }
  
  openDialog() {
    this.contactNowDialog.openDialog();
  }
}
