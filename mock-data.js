/**
 * NEXUS - Mock User Data
 * Realistic user profiles for discovery page
 */

const MOCK_USERS = [
  {
    id: 1,
    name: "Sophia Chen",
    location: "San Francisco, CA",
    gender: "Female",
    bio: "UX designer by day, amateur chef by night. Love exploring new hiking trails and trying fusion cuisines. Looking for genuine connections with creative souls.",
    intent: "dating",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    facebook: "https://facebook.com/sophiachen",
    instagram: "https://instagram.com/sophiadesigns"
  },
  {
    id: 2,
    name: "Marcus Williams",
    location: "New York, NY",
    gender: "Male",
    bio: "Jazz musician and vinyl collector. When I'm not performing, you'll find me at coffee shops reading philosophy. Let's have deep conversations.",
    intent: "both",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    instagram: "https://instagram.com/marcusjazz"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Miami, FL",
    gender: "Female",
    bio: "Marine biologist passionate about ocean conservation. Weekend salsa dancer. Looking for adventure buddies who care about our planet.",
    intent: "friendship",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    facebook: "https://facebook.com/elenasea"
  },
  {
    id: 4,
    name: "James Mitchell",
    location: "Austin, TX",
    gender: "Male",
    bio: "Tech startup founder who still makes time for family BBQs. Love live music, indie films, and spontaneous road trips. Life's too short for boring conversations.",
    intent: "dating",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    facebook: "https://facebook.com/jamesmitchell",
    instagram: "https://instagram.com/jamesm_austin"
  },
  {
    id: 5,
    name: "Aisha Patel",
    location: "Seattle, WA",
    gender: "Female",
    bio: "Software engineer with a passion for sustainable living. Minimalist lifestyle, maximalist heart. Looking for friends who enjoy farmers markets and board games.",
    intent: "friendship",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    instagram: "https://instagram.com/aishagreen"
  },
  {
    id: 6,
    name: "David Kim",
    location: "Los Angeles, CA",
    gender: "Male",
    bio: "Cinematographer chasing golden hour light. I believe every person has a story worth telling. Let's grab coffee and share ours.",
    intent: "both",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    instagram: "https://instagram.com/davidkim_dp"
  },
  {
    id: 7,
    name: "Olivia Thompson",
    location: "Chicago, IL",
    gender: "Female",
    bio: "Architect designing spaces that spark joy. Art museum enthusiast and amateur watercolor artist. Looking for someone who appreciates the beauty in details.",
    intent: "dating",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
    facebook: "https://facebook.com/oliviaarchitects",
    instagram: "https://instagram.com/olivia_designs"
  },
  {
    id: 8,
    name: "Alexander Novak",
    location: "Denver, CO",
    gender: "Male",
    bio: "Mountain guide and wilderness photographer. Happiest above 10,000 feet. Seeking adventure partners for backcountry skiing and sunset hikes.",
    intent: "both",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face",
    instagram: "https://instagram.com/alexinthewild"
  },
  {
    id: 9,
    name: "Maya Johnson",
    location: "Portland, OR",
    gender: "Female",
    bio: "Bookstore owner and tea connoisseur. Curating cozy spaces and meaningful connections. Let's discuss your favorite novel over a warm cup.",
    intent: "friendship",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    facebook: "https://facebook.com/mayasbooks"
  },
  {
    id: 10,
    name: "Ryan Brooks",
    location: "Boston, MA",
    gender: "Male",
    bio: "Neuroscience researcher by profession, podcast host by passion. Curious about everything from black holes to breakfast recipes. Looking for minds that wander.",
    intent: "dating",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    instagram: "https://instagram.com/ryanthinks"
  },
  {
    id: 11,
    name: "Isabella Martinez",
    location: "San Diego, CA",
    gender: "Female",
    bio: "Professional surfer and yoga instructor. Chasing waves and inner peace. Looking for friends who understand that sunrise sessions are non-negotiable.",
    intent: "both",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face",
    facebook: "https://facebook.com/isabellasurf",
    instagram: "https://instagram.com/bella_waves"
  },
  {
    id: 12,
    name: "Nathan Wright",
    location: "Nashville, TN",
    gender: "Male",
    bio: "Singer-songwriter finding poetry in everyday moments. Craft beer enthusiast. Looking for someone who'd harmonize on road trip playlists.",
    intent: "dating",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
    facebook: "https://facebook.com/nathanwritesmusic",
    instagram: "https://instagram.com/nathanwright_music"
  },
  {
    id: 13,
    name: "Zoe Anderson",
    location: "Phoenix, AZ",
    gender: "Female",
    bio: "Wildlife veterinarian and desert dweller. Spending weekends at animal sanctuaries. Seeking friends with big hearts and love for four-legged souls.",
    intent: "friendship",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
    instagram: "https://instagram.com/zoe_animalcare"
  },
  {
    id: 14,
    name: "Chris Taylor",
    location: "Atlanta, GA",
    gender: "Male",
    bio: "Executive chef exploring global flavors in the South. Farmers market regular. Looking for dining companions who appreciate the art of a perfect meal.",
    intent: "both",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    facebook: "https://facebook.com/chefchristaylor",
    instagram: "https://instagram.com/chef_chris_atl"
  },
  {
    id: 15,
    name: "Luna Park",
    location: "Minneapolis, MN",
    gender: "Female",
    bio: "Contemporary dancer and movement therapist. Finding expression through art. Looking for creative souls who aren't afraid to feel deeply.",
    intent: "dating",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face",
    instagram: "https://instagram.com/luna_moves"
  },
  {
    id: 16,
    name: "Jordan Lee",
    location: "Washington, DC",
    gender: "Non-binary",
    bio: "Policy analyst by day, community organizer always. Passionate about social justice and building bridges. Here to meet like-minded change-makers.",
    intent: "friendship",
    avatar: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=400&h=400&fit=crop&crop=face",
    facebook: "https://facebook.com/jordanforchange",
    instagram: "https://instagram.com/jordanlee_dc"
  }
];

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MOCK_USERS };
}
