import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
  {
    id: 1,
    brandLogo: 'https://images.seeklogo.com/logo-png/28/1/amazon-logo-png_seeklogo-286206.png',
    company: 'Amazon',
    datePosted: '5 days ago',
    post: 'Senior UI/UX Designer',
    tag1: 'part time',
    tag2: 'senior level',
    pay: 120,
    location: 'Mumbai, India'
  },
  {
    id: 2,
    brandLogo: 'https://images.seeklogo.com/logo-png/6/1/google-logo-png_seeklogo-62136.png',
    company: 'Google',
    datePosted: '2 weeks ago',
    post: 'Full Stack Developer',
    tag1: 'full time',
    tag2: 'senior level',
    pay: 150,
    location: 'Bangalore, India'
  },
  {
    id: 3,
    brandLogo: 'https://images.seeklogo.com/logo-png/16/2/microsoft-logo-png_seeklogo-168319.png',
    company: 'Microsoft',
    datePosted: '1 week ago',
    post: 'Cloud Solutions Architect',
    tag1: 'full time',
    tag2: 'senior level',
    pay: 140,
    location: 'Hyderabad, India'
  },
  {
    id: 4,
    brandLogo: 'https://images.seeklogo.com/logo-png/27/1/apple-logo-png_seeklogo-272825.png',
    company: 'Apple',
    datePosted: '3 days ago',
    post: 'iOS Developer',
    tag1: 'full time',
    tag2: 'senior level',
    pay: 160,
    location: 'Pune, India'
  },
  {
    id: 5,
    brandLogo: 'https://images.seeklogo.com/logo-png/31/1/netflix-n-logo-png_seeklogo-318950.png',
    company: 'Netflix',
    datePosted: '10 days ago',
    post: 'Product Manager',
    tag1: 'full time',
    tag2: 'senior level',
    pay: 130,
    location: 'Delhi, India'
  },
  {
    id: 6,
    brandLogo: 'https://images.seeklogo.com/logo-png/16/2/microsoft-logo-png_seeklogo-168319.png',
    company: 'Microsoft',
    datePosted: '4 days ago',
    post: 'Data Scientist',
    tag1: 'full time',
    tag2: 'junior level',
    pay: 100,
    location: 'Bangalore, India'
  },
  {
    id: 7,
    brandLogo: 'https://images.seeklogo.com/logo-png/6/1/google-logo-png_seeklogo-62136.png',
    company: 'Google',
    datePosted: '1 day ago',
    post: 'UX Researcher',
    tag1: 'part time',
    tag2: 'junior level',
    pay: 85,
    location: 'Mumbai, India'
  },
  {
    id: 8,
    brandLogo: 'https://images.seeklogo.com/logo-png/28/1/amazon-logo-png_seeklogo-286206.png',
    company: 'Amazon',
    datePosted: '6 days ago',
    post: 'Backend Engineer',
    tag1: 'full time',
    tag2: 'senior level',
    pay: 145,
    location: 'Bangalore, India'
  },
  {
    id: 9,
    brandLogo: 'https://images.seeklogo.com/logo-png/27/1/apple-logo-png_seeklogo-272825.png',
    company: 'Apple',
    datePosted: '2 weeks ago',
    post: 'QA Automation Engineer',
    tag1: 'full time',
    tag2: 'junior level',
    pay: 95,
    location: 'Pune, India'
  },
  {
    id: 10,
    brandLogo: 'https://images.seeklogo.com/logo-png/31/1/netflix-n-logo-png_seeklogo-318950.png',
    company: 'Netflix',
    datePosted: '5 days ago',
    post: 'DevOps Engineer',
    tag1: 'full time',
    tag2: 'senior level',
    pay: 155,
    location: 'Delhi, India'
  }
]

console.log(jobOpenings);

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem){
        return <Card 
          key={elem.id}
          brandLogo={elem.brandLogo}
          company={elem.company}
          datePosted={elem.datePosted}
          post={elem.post}
          tag1={elem.tag1}
          tag2={elem.tag2}
          pay={elem.pay}
          location={elem.location}
        />
      })}
    </div>
  )
}

export default App