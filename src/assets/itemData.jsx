import pencils from "./items/pencils-miguelpadrinan.jpg";
import brushes from "./items/brushes-ravikant.jpg";
import sketchpad from "./items/sketchpad-messalaciulla.jpg";
import watercolourpad from "./items/watercolourpad-deeanaarts.jpg";

const itemData =
    [
        {
            "id": 0,
            "name": "Coloured pencils",
            "quantity": "Set of 15",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "price": 10,
            "url": pencils,
            "alt": "15 coloured pencils",
            "credit": "Miguel Á. Padriñán",
            "creditURL": "https://www.pexels.com/@padrinan/",
        },
        {
            "id": 1,
            "name": "Paint brushes",
            "quantity": "Set of 8",
            "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "price": 20,
            "url": brushes,
            "alt": "8 white paint brushes.",
            "credit": "Ravi Kant",
            "creditURL": "https://www.pexels.com/@ravikant/",
        },
        {
            "id": 2,
            "name": "Sketch pad",
            "quantity": "200 pages",
            "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "price": 15,
            "url": sketchpad,
            "alit": "An opened notebook with blank white pages on a wooden surface.",
            "credit": "Messala Ciulla",
            "creditURL": "https://www.pexels.com/@messalaciulla/",
        },
        {
            "id": 3,
            "name": "Watercolour pad",
            "quantity": "100 pages",
            "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "price": 15,
            "url": watercolourpad,
            "alt": "An opened notebook with blank white pages on a wooden surface with paint brushes.",
            "credit": "Deeana Arts",
            "creditURL": "https://www.pexels.com/@deeanacreates/",
        },
    ];

export default itemData;