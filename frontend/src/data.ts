import { Food } from "./app/shared/models/Food";
import { Tag } from "./app/shared/models/Tag";
export const sampleFood : Food[] = [
    {
        id: '1' , 
        name : 'Paneer Tikka' , 
        price: 200 , 
        cookTime : '30-35' ,
        favorite: false ,
        tags : ['All'] ,
        stars : 3.5 , 
        imageUrl : 'assets/food1.jpg' ,
        origins: ['India'] ,  
    } , 
    {
        id: '2' , 
        name : 'Chicken Biryani' , 
        price: 350 , 
        cookTime : '60-80' ,
        favorite: false , 
        stars : 4.5 , 
        imageUrl : 'assets/food2.jpg' ,
        origins: ['India'] ,
        tags : ['All'] ,
    } 
    ,{
        id: '3' , 
        name : 'Reshmi Kebab' , 
        price: 250 , 
        cookTime : '40-45' ,
        favorite: true , 
        stars : 5.0 ,
        imageUrl : 'assets/food3.jpg' ,
        origins: ['India' ] ,  
        tags : ['All' , 'Chicken']   ,
    } 
    ,{
        id: '4' , 
        name : 'Chowmein' , 
        price: 150 , 
        cookTime : '15-20' ,
        favorite: false , 
        stars : 3.0 , 
        imageUrl :'assets/food4.jpg' ,
        origins: ['India','China'] ,  
        tags : ['All' , 'FastFood'] ,

    } ,
    {
        id: '5' , 
        name : 'Pizza' , 
        price: 220 , 
        cookTime : '30-35' ,
        favorite: true , 
        stars : 4.0 ,
        imageUrl : 'assets/food5.jpg' ,
        tags : ['All' , 'Pizza'] ,
        origins: ['Italy'] ,  
    } ,
    {
        id: '6' , 
        name : 'Kang-Pao Chicken' , 
        price: 280 , 
        cookTime : '30-35' ,
        favorite: false , 
        tags : ['All' , 'Chicken' , 'Savoury'] ,
        stars : 4.5 , 
        imageUrl : 'assets/food6.jpg' ,
        origins: ['Thailand'] ,  
    } ,
]

export const sampleTag:Tag[]  = [
    {name : 'All' , count :6} ,
    {name : 'FastFood' , count :1} ,
    {name : 'Pizza' , count :1} ,
    {name : 'Healthy' , count :2} ,
    {name : 'Chicken' , count :2} ,
    {name : 'FastFood' , count :3} ,
]