import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, MemoryRouter, Route, Routes} from "react-router-dom";
import Home from "./screen/home/Home.tsx";
import MenuDetail from "./screen/MenuDetails/MenuDetail.tsx";
import "./global.css.ts"
import SelectOptions from "./screen/SelectOptions/SelectOptions.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <MemoryRouter>
          <Routes>
              <Route path='/' element={<Home/>} />
              {/* fixme: see MenuDetail.tsx */}
              <Route path='/MenuDetail' element={<MenuDetail /* key={id} id={id} */ />} />
              <Route path='/SelectOptions' element={<SelectOptions/>}></Route>
          </Routes>
      </MemoryRouter>
  </StrictMode>
)
