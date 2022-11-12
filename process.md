!------------ Dead Line for Deploy : 11 Novemember ------------!


## Install the react-router-dom
- npm install react-router-dom26
    -Create the Index.js is entry point.
    - Add in index.jx[import {BrowserRouter} from "react-router-dom]
    - Add <BrowserRouter> <App /> </BrowserRouter>
## Route
- App.js

## Floating Menu
 - Should be in the button format should float on the every page 
 - Hover to show the menu 
 - Add menu :-
        - Home
        - Products
        - Store Locator
        - Buy/Sell 
        - Offer's
        
## Nav
- Add Nav & Footer  in the App.js as <header></header> & Footer - <footer></footer>
- Any constant component

## Link
- Will not reload the page
- For buttons need to add the <Lilnk to="/{Path}" className=""> </Link>
- For dynamic Data display
    - 

## useParams()
    - import {useParams} from "react-router-dom";
    - console.log(key.object_name)
    - const {ObjectId}=useParams()
    - const --varibale_name-- = Functions declared in functions

## useNavigate()
    - Navigate to the exact page
    - navigate() - isn function to send the component link
    - To pass the values to the 
            - navigate("/{component_link}",{sate:{variable_name : useRef()-value.current.value}}) 

## useRef()
    - To pass the form Elements

## useLocation()
    - Used to retrive the data
    - 

## Child Router
- <Route path="" element={<component_name />}>
    <Route path=":---Component Data_id---" element={<component_name/>}/>
    !---/component/sun-component_data---!
    </Route>

- 2 Tree nested route

## Api

- Store Locator
    - Store Name
    - Lan
    - Lat
    - Contact Number

- Products
    - Product Image
    - Product Name
    - Product price
    - Product Discription
    - Status (Available - Green, Out of stock - Red)
    
## Get the form Request data 
    - Add component in the App.js
    - UseNavigate Hook to render the sucess request 202
    - ref={name} to collect the data

## condition
    - {variable && (

            Get the result
        )}

