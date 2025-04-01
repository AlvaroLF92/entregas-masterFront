import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

interface Image {
  id: number;
  src: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class GalleryComponent implements OnInit, OnDestroy {
  images: Image[] = [
    { id: 1, src: '/assets/img1.jpg', title: 'Foto 1' },
    { id: 2, src: '/assets/img2.jpg', title: 'Foto 2' },
    { id: 3, src: '/assets/img3.jpg', title: 'Foto 3' },
    { id: 4, src: '/assets/img4.jpg', title: 'Foto 4' },
    { id: 5, src: '/assets/img5.jpg', title: 'Foto 5' },
    { id: 6, src: '/assets/img6.jpg', title: 'Foto 6' },
    { id: 7, src: '/assets/img7.webp', title: 'Foto 7' },
    { id: 8, src: '/assets/img8.webp', title: 'Foto 8' }
  ];

  selectedImage: Image = this.images[0];
  currentIndex: number = 0;
  
  intervalId: number | null = null;
  isPlaying: boolean = false;

  pageSize: number = 3;
  currentPage: number = 0;

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.stopSlideshow();
  }

  selectImage(image: Image): void {
    this.selectedImage = image;
    this.currentIndex = this.images.findIndex(img => img.id === image.id);
  }

  nextImage(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.selectedImage = this.images[this.currentIndex];
    }
  }

  prevImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.selectedImage = this.images[this.currentIndex];
    }
  }

  zoomIn(): void {
    const img = document.getElementById('selected-image') as HTMLImageElement;
    if (img) img.style.transform = 'scale(1.4)';
  }

  zoomOut(): void {
    const img = document.getElementById('selected-image') as HTMLImageElement;
    if (img) img.style.transform = 'scale(1)';
  }

  startSlideshow(): void {
    if (this.isPlaying || this.intervalId) return;
    
    this.isPlaying = true;
    this.intervalId = window.setInterval(() => {
      if (this.currentIndex < this.images.length - 1) {
        this.nextImage();
      } else {
        this.stopSlideshow();
      }
    }, 2000);
  }

  stopSlideshow(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isPlaying = false;
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if ((this.currentPage + 1) * this.pageSize < this.images.length) {
      this.currentPage++;
    }
  }

  get paginatedImages(): Image[] {
    const start = this.currentPage * this.pageSize;
    return this.images.slice(start, start + this.pageSize);
  }
}
