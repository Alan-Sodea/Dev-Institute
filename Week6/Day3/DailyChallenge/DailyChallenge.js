// Définition de la classe Video
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

// Instanciation de deux objets Video
const video1 = new Video('Introduction to JavaScript', 'John Doe', 300);
const video2 = new Video('Advanced CSS Techniques', 'Jane Smith', 600);

// Appel de la méthode watch() pour chaque instance
video1.watch();  // Affiche: John Doe watched all 300 seconds of Introduction to JavaScript!
video2.watch();  // Affiche: Jane Smith watched all 600 seconds of Advanced CSS Techniques!

// Bonus: Utilisation d'un tableau pour stocker les données de cinq vidéos
const videoData = [
    { title: 'Python for Beginners', uploader: 'Alice Johnson', time: 450 },
    { title: 'React Crash Course', uploader: 'Bob Brown', time: 900 },
    { title: 'HTML & CSS Basics', uploader: 'Charlie Green', time: 200 },
    { title: 'Node.js Overview', uploader: 'Dave Black', time: 650 },
    { title: 'Vue.js Deep Dive', uploader: 'Eve White', time: 700 }
];

// Bonus: Boucle pour instancier les objets Video à partir du tableau
const videos = videoData.map(data => new Video(data.title, data.uploader, data.time));

// Appel de la méthode watch() pour chaque vidéo créée dans le tableau
videos.forEach(video => video.watch());
