import db from '../db/connection.js'
import Post from '../models/post.js'
import faker from 'faker'

const insertData = async () => {
  await db.dropDatabase()

  const seedData = [
    {
      title: "Super1",
      imgURL: "https://lumiere-a.akamaihd.net/v1/images/avengers-characterpose-shuri_862c61d5.png?region=0%2C0%2C173%2C280",
      content: "Princess of Wakanda and younger sister to King T'Challa, Shuri grew up in the shadow of her prodigious older brother.",
      author: "Shuri"
    },
    {
      title: "Super2",
      imgURL: "https://lumiere-a.akamaihd.net/v1/images/avengers-characterpose-okoye_d6401d30.png?region=0%2C0%2C174%2C247",
      content: "Okoye serves with distinction as head of the Dora Milake, a ceremonial order of warrior women tasked with protecting the leader of Wakanda.",
      author: "Okoye"
    },
    {
      title: "Super3",
      imgURL: "https://lumiere-a.akamaihd.net/v1/images/avengers-characterpose-mariahill_f4c13729.png?region=0%2C0%2C125%2C280",
      content: "PA cunning, sharp-witted S.H.I.E.L.D. Agent, Maria Hill’s natural talents and perfected skills allowed her to quickly climb the ladder at S.H.I.E.L.D. ",
      author: "Maria Hill"
    },
    {
      title: "Super4",
      imgURL: "https://lumiere-a.akamaihd.net/v1/images/avengers-characterpose-wasp_9b17a292.png?region=0%2C0%2C173%2C270",
      content: "Endowed with the amazing ability to shrink in size and fly, Hope Van Dyne is the newest heroine to bear the name Wasp!  ",
      author: "Wasp"
    },
    {
      title: "Backstreet is not back",
      imgURL:"https://th.bing.com/th/id/R.6fddd6eab468172cbd988faa1e7db15b?rik=Grjz2oyHwb%2fuig&riu=http%3a%2f%2fcdn01.cdn.justjared.com%2fwp-content%2fuploads%2fheadlines%2f2019%2f01%2fbackstreet-breathe.jpg&ehk=WfJey3yyI8QpfjQsGD6YxVyD1txDtwRx5Dm2F3BUcbU%3d&risl=&pid=ImgRaw",
      content: "We to old to sing and dance",
      author: "never A fan"
      },
      {
      title: "Fish Tacos",
      imgURL:"https://th.bing.com/th/id/R.6333825afd756cf4219d88420adf3574?rik=6raG%2fEJ01Yd5Cw&riu=http%3a%2f%2fimages.freeimages.com%2fimages%2fpremium%2fpreviews%2f2293%2f22937620-cartoon-fish-taco.jpg&ehk=KRig%2fQ6Tyswa4wLzeyXsC%2bEX0EIHgZb8aZ4qeJwygPs%3d&risl=&pid=ImgRaw",
      content: " This shouldn't be a thing",
      author: "No Sea-food"
      },
      {
      title: " Best show ever",
      imgURL:"https://th.bing.com/th/id/OIP.1LbBHtnPVCw_rGWJdyXI5QHaE8?w=294&h=196&c=7&o=5&pid=1.7",
      content: "I hate people who watch tv",
      author: "Outdoor girl!"
      },
      {
      title: "Go to downtown",
      imgURL:"https://www.adweek.com/wp-content/uploads/2018/08/connect-food-CONTENT-2018.jpg",
      content: "The city of Providence has really good food!",
      author: "401guy"
      },
      {
      title: "Can never find the right one",
      imgURL:"https://th.bing.com/th/id/OIP.tg2Y5AkuKlcXVH_-Qo90VQHaDt?pid=ImgDet&rs=1",
      content: "Tell all those dating app to pound sand!!",
      author: "Foreveralone"
      },
      {
      title: "catch em",
      imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsRQk8yXVR8--z_FKKyE72KVIjFqRM0T1LSg&usqp=CAU",
      content:"pokemon got this",
      author:"you already know"
      },
      {
      title: "why you cray cray",
      imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbF4CpEkpmF0XZJwbNkmdD8zw8lbwpvq8-Fg&usqp=CAU",
      content:"what the crap??",
      author:" rusty crusty dog"
      },
      {
      title: "Oh NO NO",
      imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5EqXbiu_GCIl1NLVsGZ4xsq9U3_HP8zfUfg&usqp=CAU",
      content:"NOOOOO, you no no",
      author:"who made this"
      },
      {
      title: "panda time",
      imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT37fJfPugaJi2Sk7AtztlIUtksXCZphiq0Sw&usqp=CAU",
      content:"panda, panda, panda",
      author:"panda, panda, panda"
      },
      {
      title: "panda time",
      imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT37fJfPugaJi2Sk7AtztlIUtksXCZphiq0Sw&usqp=CAU",
      content:"panda, panda, panda",
      author:"panda, panda, panda"
      },
      {
        title: "Spain",
        imgURL: "https://cdn.britannica.com/36/4336-050-056AC114/Flag-Spain.jpg",
        content: "Spain, a country on Europe's Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures. Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European masters. Segovia has a medieval castle (the Alcázar) and an intact Roman aqueduct. Catalonia's capital, Barcelona, is defined by Antoni Gaudí's whimsical modernist landmarks like the Sagrada Família church",
        author: "Toby Hand"
        },
        {
          title: "Italy",
          imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png",
          content: "Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo's David and Brunelleschi's Duomo; Venice, the city of canals; and Milan, Italy's fashion capital.",
          author: "Alina Kore"
          },
          {
            title: "Greece",
            imgURL: "https://vignette.wikia.nocookie.net/cyberpunk/images/f/fd/Greece_Flag.png/revision/latest?cb=20200130010907",
            content: "Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas. Influential in ancient times, it's often called the cradle of Western civilization. Athens, its capital, retains landmarks including the 5th-century B.C. Acropolis citadel with the Parthenon temple. Greece is also known for its beaches, from the black sands of Santorini to the party resorts of Mykonos",
            author: "Rosamond Gulnara"
            },
            {
              title: "New Zealand",
              imgURL: "https://mch.govt.nz/sites/default/files/NZ-Flag_of_New_Zealand_svg.png",
              content: "New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and more than 700 smaller islands, covering a total area of 268,021 square kilometres",
              author: "Veceslav Ula"
              },
              {
                title: "Portugal",
                imgURL: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
                content: "Portugal is a southern European country on the Iberian Peninsula, bordering Spain. Its location on the Atlantic Ocean has influenced many aspects of its culture: salt cod and grilled sardines are national dishes, the Algarve's beaches are a major destination and much of the nation's architecture dates to the 1500s–1800s, when Portugal had a powerful maritime empire",
                author: "Nazia Ivet"
                }
  ]

  await Post.insertMany(seedData)
  console.log(`Created posts!`)

  db.close()
}

insertData()