import logo from './logo.svg';
import creditstar from './creditstar.svg';
import user from './user.png';
import eye from './eye.png';
import magic from './magic.png';
import share from './share.png';
import profile from './profile.png';
import gen from './gen.png';
import email from './email.png';
import password from './password.png';
import cross from './cross.png';
export const assets ={
    logo, 
    creditstar,
    user,
    profile,
    gen,
    email,
    password,
    cross,
}

export const stepsData =[
    {
      title:'Describe Your Vision' ,
      description: 'Enter a few words- a phrase or a sentence that capture what you want to see. ',
      icon: eye,
    },
    {
      title:'Let the Magic Unfold ' ,
      description: 'Hit Generate and watch AI bring your imagination to life. ',
      icon: magic,

    },
    {
      title:'Download & Share ' ,
      description: 'Love it? Just click Download to save your masterpiece! ',
      icon: share,
    }
]

export const plans =[
  {
     id:'Basic',
     price: '10 ',
     credits: '100',
     desc: 'Best for personal use',
  },
  {
     id:'Advanced',
     price: '50',
     credits: '500',
     desc: 'Best for business use. ',
  },
  {
     id:'Business ',
     price: '100 ',
     credits: '5000',
     desc: 'Best for enterprise use ',
  },
]