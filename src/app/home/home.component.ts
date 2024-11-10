import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],  // Add CommonModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  funFacts = [
    'Honey never spoils.',
    'Octopuses have three hearts.',
    'Bananas are berries, but strawberries are not.',
    'A sneeze travels out of your mouth at over 100 miles per hour!',
    'Dolphins have names for each other.'
  ];

  randomFact: string = '';

  generateFact() {
    const randomIndex = Math.floor(Math.random() * this.funFacts.length);
    this.randomFact = this.funFacts[randomIndex];
  }
}
