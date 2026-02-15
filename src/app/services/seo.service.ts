import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoData {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    ogUrl?: string;
    type?: string;
}

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    private readonly defaultTitle = 'Autoescuela Silver | Escuela de Manejo en Buenos Aires';
    private readonly defaultDesc = 'Aprende a manejar con Autoescuela Silver. Clases de manejo de auto y moto en Capital Federal y Gran Buenos Aires. Instructores calificados y vehículos doble comando.';
    private readonly defaultImage = 'https://www.miautoescuela.es/assets/img/logo.png';
    private readonly siteUrl = 'https://www.miautoescuela.es';

    constructor(
        private titleService: Title,
        private metaService: Meta,
        @Inject(DOCUMENT) private doc: Document
    ) { }

    updateSeoData(data: SeoData) {
        // Title
        const title = data.title ? `${data.title} | Autoescuela Silver` : this.defaultTitle;
        this.titleService.setTitle(title);
        this.metaService.updateTag({ property: 'og:title', content: title });
        this.metaService.updateTag({ name: 'twitter:title', content: title });

        // Description
        const desc = data.description || this.defaultDesc;
        this.metaService.updateTag({ name: 'description', content: desc });
        this.metaService.updateTag({ property: 'og:description', content: desc });
        this.metaService.updateTag({ name: 'twitter:description', content: desc });

        // Keywords
        if (data.keywords) {
            this.metaService.updateTag({ name: 'keywords', content: data.keywords });
        }

        // Image
        const image = data.ogImage || this.defaultImage;
        this.metaService.updateTag({ property: 'og:image', content: image });
        this.metaService.updateTag({ name: 'twitter:image', content: image });

        // URL & Canonical
        const url = data.ogUrl || this.siteUrl;
        this.metaService.updateTag({ property: 'og:url', content: url });
        this.createLinkForCanonicalURL(url);

        // Type
        this.metaService.updateTag({ property: 'og:type', content: data.type || 'website' });
        this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    }

    setJsonLd(data: any) {
        let script = this.doc.getElementById('json-ld-structured-data') as HTMLScriptElement;

        if (!script) {
            script = this.doc.createElement('script');
            script.id = 'json-ld-structured-data';
            script.type = 'application/ld+json';
            this.doc.head.appendChild(script);
        }

        script.text = JSON.stringify(data);
    }

    private createLinkForCanonicalURL(url: string) {
        let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
        if (!link) {
            link = this.doc.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.doc.head.appendChild(link);
        }
        link.setAttribute('href', url);
    }
}
