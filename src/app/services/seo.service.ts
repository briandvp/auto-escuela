import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class SeoService {

    constructor(private titleService: Title, private metaService: Meta) { }

    updateSeoData(title: string, description: string, keywords: string) {
        this.titleService.setTitle(`${title} | Autoescuela Silver`);
        this.metaService.updateTag({ name: 'description', content: description });
        this.metaService.updateTag({ name: 'keywords', content: keywords });

        // Open Graph
        this.metaService.updateTag({ property: 'og:title', content: `${title} | Autoescuela Silver` });
        this.metaService.updateTag({ property: 'og:description', content: description });
        this.metaService.updateTag({ property: 'og:url', content: window.location.href });
    }
}
