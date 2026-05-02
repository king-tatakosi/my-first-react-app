export function MoodBoardItem({color, image, description}){
   return (<div className="mood-board-item" style={{backgroundColor:color}}>
   <img src={image} className="mood-board-image"/>
  <h3 className="mood-board-text">{description}</h3>
   </div>
   )
}

export function MoodBoard(){
  const moodBoardItems = [
    {id:1,
    color:"#ffa3c4",
    image: "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg",
    description: "Santorini"
    },
    {id:2,
    color:"#a3c1c4",
    image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
    description: "Pathway"
    },
    {id:3,
    color:"#c105b6",
    image: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
    description: "Pigeon"
    },
    {id:4,
    color:"#1295a3",
    image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
    description: "Grass"
    }
  ]
  return (
    <div>
  <h1 className="mood-board-heading">Destination Mood Board</h1>
  <div className="mood-board"></div>
  {moodBoardItems.map(item => <MoodBoardItem 
  key={item.id}
  image={item.image}
  color={item.color}
  description={item.description}
  />)}
    </div>
  )
}