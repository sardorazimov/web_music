import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
  export function MenuDashboard() {
    return (
      <Menubar>
        <MenubarMenu >
          <MenubarTrigger className="cursor-pointer">Music</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Music<MenubarShortcut></MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Hit  <MenubarShortcut></MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>New Incognito</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent >
                <MenubarItem className="cursor-pointer hover:bg-muted" >Email link</MenubarItem>
                <MenubarItem className="cursor-pointer hover:bg-muted" >Messages</MenubarItem>
                <MenubarItem className="cursor-pointer hover:bg-muted" >Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Save<MenubarShortcut></MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer hover:bg-muted">Live</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Music <MenubarShortcut></MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Podcast <MenubarShortcut></MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Find</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Search the Music</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Find...</MenubarItem>
                <MenubarItem>Find Podcast</MenubarItem>
                <MenubarItem>Find Radio</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Radio</MenubarItem>
            <MenubarItem>Share</MenubarItem>
            
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Podcast</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem className="cursor-pointer hover:bg-muted">Always Show All </MenubarCheckboxItem>
            <MenubarCheckboxItem checked className="cursor-pointer bg-muted">
              New Podcast
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset className="cursor-pointer hover:bg-muted">
              Reload <MenubarShortcut></MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled inset>
              Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Toggle Fullscreen</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Hide Sidebar</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Edit...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Add Profile...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  }
  