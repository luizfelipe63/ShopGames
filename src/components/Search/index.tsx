import { Buttons, CardButton, FormSearch, LoginButton, SearchContainer } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import { ShoopingBag } from "../shoopingBag";
import { Handbag, MagnifyingGlass, User } from "phosphor-react";

export function Search(){
  return(
    <SearchContainer>
      <FormSearch>
        <div>
          <MagnifyingGlass weight="bold" size={16}/>
          <input type="search" name="" id="" placeholder="Search games..."/>
        </div>
      </FormSearch>
      <Buttons>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <CardButton>
              {/* <span>3</span> */}
              <Handbag weight="fill" size={24} />
            </CardButton>
          </Dialog.Trigger>
          <ShoopingBag />
        </Dialog.Root>
        <LoginButton>
          <User weight="fill" size={24}/>
        </LoginButton>
      </Buttons>
    </SearchContainer>
    
  )
}