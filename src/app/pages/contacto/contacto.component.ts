import { Component } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  constructor(private seoService: SeoService) {
    this.seoService.updateSeoData({
      title: 'Contacto',
      description: 'Comunicate con Autoescuela. Consultá precios, horarios y zonas de cobertura. Estamos para ayudarte a obtener tu licencia.',
      keywords: 'contacto autoescuela, telefono autoescuela, precio clases manejo, horarios autoescuela, donde aprender a manejar'
    });
  }
  formData = {
    nombre: '',
    telefono: '',
    email: '',
    curso: '',
    mensaje: ''
  };

  fieldErrors: { [key: string]: string } = {};
  fieldTouched: { [key: string]: boolean } = {};
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  onFieldChange(fieldName: string): void {
    this.validateField(fieldName);
  }

  onFieldBlur(fieldName: string): void {
    this.fieldTouched[fieldName] = true;
    this.validateField(fieldName);
  }

  validateField(fieldName: string): void {
    const value = (this.formData as any)[fieldName]?.trim() || '';

    switch (fieldName) {
      case 'nombre':
        if (!value) {
          this.fieldErrors[fieldName] = 'El nombre es requerido';
        } else if (value.length < 3) {
          this.fieldErrors[fieldName] = 'El nombre debe tener al menos 3 caracteres';
        } else {
          delete this.fieldErrors[fieldName];
        }
        break;
      case 'telefono':
        if (!value) {
          this.fieldErrors[fieldName] = 'El teléfono es requerido';
        } else if (!/^[\d\s\-\+\(\)]{8,}$/.test(value)) {
          this.fieldErrors[fieldName] = 'Ingresa un teléfono válido';
        } else {
          delete this.fieldErrors[fieldName];
        }
        break;
      case 'email':
        if (!value) {
          this.fieldErrors[fieldName] = 'El email es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          this.fieldErrors[fieldName] = 'Ingresa un email válido';
        } else {
          delete this.fieldErrors[fieldName];
        }
        break;
      case 'mensaje':
        if (!value) {
          this.fieldErrors[fieldName] = 'El mensaje es requerido';
        } else if (value.length < 10) {
          this.fieldErrors[fieldName] = 'El mensaje debe tener al menos 10 caracteres';
        } else {
          delete this.fieldErrors[fieldName];
        }
        break;
    }
  }

  isFormValid(): boolean {
    const requiredFields = ['nombre', 'telefono', 'email', 'mensaje'];
    return requiredFields.every(field => {
      this.validateField(field);
      return !this.fieldErrors[field];
    });
  }

  onSubmit(): void {
    if (!this.isFormValid()) {
      Object.keys(this.formData).forEach(field => {
        this.fieldTouched[field] = true;
        this.validateField(field);
      });
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      // For now, we'll open WhatsApp with the form data
      const message = `Hola! Soy ${this.formData.nombre}.%0A` +
        `Teléfono: ${this.formData.telefono}%0A` +
        `Email: ${this.formData.email}%0A` +
        `Curso de interés: ${this.formData.curso || 'No especificado'}%0A` +
        `Mensaje: ${this.formData.mensaje}`;

      window.open(`https://api.whatsapp.com/send?phone=+541144717603&text=${message}`, '_blank');

      this.isSubmitting = false;
      this.submitSuccess = true;
      this.submitMessage = '¡Mensaje preparado! Se abrirá WhatsApp para enviarlo.';

      // Reset form
      this.formData = {
        nombre: '',
        telefono: '',
        email: '',
        curso: '',
        mensaje: ''
      };
      this.fieldErrors = {};
      this.fieldTouched = {};

      // Clear success message after 5 seconds
      setTimeout(() => {
        this.submitMessage = '';
        this.submitSuccess = false;
      }, 5000);
    }, 1000);
  }

  getFieldClass(fieldName: string): string {
    if (!this.fieldTouched[fieldName]) return '';
    return this.fieldErrors[fieldName] ? 'is-invalid' : 'is-valid';
  }
}

