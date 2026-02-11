import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  formData = {
    nombre: '',
    telefono: '',
    email: '',
    curso: '',
    mensaje: ''
  };

  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  onSubmit(): void {
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

      window.open(`https://api.whatsapp.com/send?phone=+541170844411&text=${message}`, '_blank');

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
    }, 1000);
  }
}
