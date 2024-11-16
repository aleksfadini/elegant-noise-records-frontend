const admin = require('firebase-admin');

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });


// Initialize Firebase Admin using environment variables
admin.initializeApp({
    credential: admin.credential.cert({
      private_key: process.env.NEXT_PUBLIC_FIREBASE_API_KEY.replace(/\\n/g, '\n'), // Adjust for newline formatting
      client_email: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
  });


const db = admin.firestore();

// Function to add a new artist
async function addArtist() {
  const artistData = {
    name: 'Emerson Bergenfield', // Replace with the artist's name
    artist_number: '003', // Replace with a unique artist number
    description: "Emerson Bergenfield is a Los Angeles-based vocalist and composer with roots in opera and the jazz tradition. Bergenfield began studying opera her freshman year of high school, where she attended the Las Vegas Academy of the Arts, and played in the school's various choir and jazz ensembles. Under the instruction of Dr. Josiah Boornazian at the University of Utah, Bergenfield deepened her connection and love for jazz and knew it was an art form that she would forever pursue. Now under the direction of Shigemi Matsumoto at California State University Northridge, Bergenfield continues to hone her skills as a classically trained vocalist and aims to combine her technique with her knowledge and love for jazz. Bergenfield's main influences stem from Maria Callas and Cecilia Bartoli, to Sarah Vaughan and Stan Getz. Her style of production is influenced by her love for the trip-hop genre, which includes bands like Massive Attack and Portishead. Emerson’s debut record titled Something In Return is a collection of songs written and arranged by her and her colleagues in the Utah jazz scene and is a reflection of her growth as an artist while meshing her love for all of her favorite styles of music.",
    picture: 'https://path-to-image.com', // Replace with an image URL
    ig_link: 'http://Instagram.com/emersonian', // Replace with Instagram URL
    fb_link: 'https://www.facebook.com/EmersonBergenfield', // Other fields as needed
    sc_link: '',
    sptfy_link: '',
    yt_link: '',
    flag: '',
    iframe_sc: '',
    slug: 'emerson' // Unique identifier for the artist's page URL
  };

  try {
    // Log the artist being added
    console.log(`Adding artist: ${artistData.name}`);
    
    // Log connection to Firestore
    console.log('Connecting to Firestore...');

    // Check if the artist already exists
    const existingArtist = await db
      .collection('artists')
      .where('slug', '==', artistData.slug)
      .get();

    if (!existingArtist.empty) {
      console.error(`Artist with slug "${artistData.slug}" already exists.`);
      return;
    }

    // Log before adding the new artist
    console.log(`Adding document to Firestore collection 'artists'...`);

    // Add the new artist
    await db.collection('artists').add(artistData);

    // Log success
    console.log('Artist added successfully');
  } catch (error) {
    console.error('Error adding artist:', error);
  }
}

// Run the addArtist function
addArtist();