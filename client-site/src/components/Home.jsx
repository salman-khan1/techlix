import { Card, CardMedia, CardContent,Container, TextField, Typography,CardActionArea,CardActions,Button} from '@mui/material';
import React,{useState} from 'react'


const persons = [
    {
      id: 1,
      name: 'John Doe',
      skills: 'JavaScript, React, Node.js',
      description: 'Passionate developer with a focus on creating interactive web applications.',
      image: 'user1.jpg', // Replace with the actual image path
    },
    {
      id: 2,
      name: 'Tom Cruise',
      skills: 'HTML, CSS, UI/UX Design',
      description: 'Experienced front-end developer with a keen eye for design.',
      image: 'user2.jpg', // Replace with the actual image path
    },
    {
      id: 3,
      name: 'John Wick',
      skills: 'HTML, CSS, UI/UX Design',
      description: 'Experienced front-end developer with a keen eye for design.',
      image: 'user3.jpg', // Replace with the actual image path
    },
    {
      id: 4,
      name: 'Jackson',
      skills: 'Dotnet, java',
      description: 'Experienced front-end developer with a keen eye for design.',
      image: 'user4.jpg', // Replace with the actual image path
    },
    {
      id: 5,
      name: 'Ceaser',
      skills: 'Cyber security',
      description: 'Experienced front-end developer with a keen eye for design.',
      image: 'user5.jpg', // Replace with the actual image path
    },
    // Add more persons here...
  ];

const Home = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPersons, setFilteredPersons] = useState(persons);
  
    const handleSearchChange = (event) => {
      const newSearchTerm = event.target.value;
      setSearchTerm(newSearchTerm);
  
      const filtered = persons.filter((person) =>
        person.skills.toLowerCase().includes(newSearchTerm.toLowerCase())
      );
      setFilteredPersons(filtered);
    };
    return (
        <>
        <Container maxWidth="md" sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
          <TextField type="search" id="search" label="Search" sx={{ width: 600 }} value={searchTerm} onChange={handleSearchChange} />
        </Container>
  
        <Container
          maxWidth="md"
          sx={{
            mt: 2,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(345px, 1fr))',
            gap: '10px',
          }}
        >
          {filteredPersons.map((person) => (
            <Card key={person.id} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={person.image}
                  alt={person.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {person.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Skills: {person.skills}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {person.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              
            </Card>
          ))}
        </Container>
      </>
        )
}

export default Home;