import logo from '../assets/logo.png'
import poster from '../assets/poster.jpg'
import demand from '../assets/demandTitle.PNG'
import pTitle from '../assets/projectTitle.PNG'
import chat from '../assets/chat.png'
import love from '../assets/love.png'
import engineering from '../assets/engineering.png'
import exam from '../assets/exam.jpg'
import vote from '../assets/vote.png'
import sedia from '../assets/sedia.png'
import git from '../assets/git.png'

export const categories = [
    {
      name: 'School Life',
      image: logo,
    },
    {
      name: 'Exam',
      image: exam,
    },
    {
      name: 'Software Engineering',
      image: engineering,
    },
    {
      name: 'SEDIA',
      image: sedia,
    },
    {
      name: 'Vote',
      image: vote,
      create: 'no'
    },
    {
      name: 'Love',
      image: love,
    },
    {
      name: 'Chit Chat',
      image: chat,
    },
    {
      name: 'Project Poster',
      image: poster,
      create: 'no'
    },
    {
      name: 'Project Document',
      image: pTitle,
      create: 'no'
    },
    {
      name: 'Project Analysis',
      image: demand,
      create: 'no'
    },
    {
      name: 'Github Repository',
      image: git,
      create: 'no'
    }
];
  
  export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      } `;
  
  export const pinDetailQuery = (pinId) => {
    const query = `*[_type == "pin" && _id == '${pinId}']{
      image{
        asset->{
          url
        }
      },
      _id,
      title, 
      about,
      category,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
     save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
      comments[]{
        comment,
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      }
    }`;
    return query;
  };
  
  export const pinDetailMorePinQuery = (pin) => {
    const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };
  
  export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              destination,
              postedBy->{
                _id,
                userName,
                image
              },
              save[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
    return query;
  };
  
  export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
  };
  
  export const userCreatedPinsQuery = (userId) => {
    const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };
  
  export const userSavedPinsQuery = (userId) => {
    const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };

  export const existUsersQuery = (userId) => {
    const query = `*[_type == "user" && _id != '${userId}'] | order(_createdAt desc)`;
    return query;
  };