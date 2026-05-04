import{j as e}from"./iframe-CcoWXO6B.js";import{c}from"./Form-JzoeJJ8G.js";import{G as d}from"./Grid-WIt_GGmO.js";import{G as i}from"./GridItem-DRJyL6bT.js";import{a as x,R as u}from"./Radio-BMggsNQm.js";import{C as I}from"./CheckboxGroup-C0OTT0Bl.js";import{C as G}from"./Checkbox-kpC1Tfng.js";import{T as t}from"./TextField-DjpCpqCg.js";import{S as l}from"./Select-bqtMVCN3.js";import{L as p}from"./ListBoxItem-BYC57onr.js";import{B as a}from"./Button-tDMUeh37.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-G8rwOJ76.js";import"./utils-CvmzGVmn.js";import"./clsx-B-dksMZM.js";import"./index-C0yg_Dj0.js";import"./index-CfJimmGR.js";import"./clsx-Ciqy0D92.js";import"./Group-Co4Z1JTg.js";import"./FieldError-C7pmBmh_.js";import"./Text-C1aI8N19.js";import"./Text-_y8SHX-J.js";import"./Button-CqtDw1Oq.js";import"./Hidden-CvcA5WHf.js";import"./useLabel-CGCEMESv.js";import"./useLabels-soLHUhGS.js";import"./useButton-Tnb7auBt.js";import"./SelectionIndicator-Cv50w2_h.js";import"./useField-DGwwU4v2.js";import"./VisuallyHidden-D34CPKZD.js";import"./useControlledState-6QHQ6cmR.js";import"./Label-Dz5b3s2x.js";import"./Dialog-YcwYl4gJ.js";import"./RSPContexts-2FrTYNtF.js";import"./OverlayArrow-0UDGu89H.js";import"./useResizeObserver-B8a0kWth.js";import"./Collection-Csy7u5cV.js";import"./index-BYbSV4b0.js";import"./Separator-BGyYcMKt.js";import"./SelectionManager-BsDWfXhd.js";import"./useEvent-HAa0P1KD.js";import"./scrollIntoView-DAiNmZGo.js";import"./useDescription-YzAHNiST.js";import"./ListKeyboardDelegate-BRi_rYns.js";import"./PressResponder-Cog0uUsK.js";import"./useLocalizedStringFormatter-BR6J7xDD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-gGfbTkXn.js";import"./getScrollParent-CrWEQW42.js";import"./ModalOverlay-NcdcMjL3.js";import"./x-CN2QjC-O.js";import"./createLucideIcon-CUodyQE8.js";import"./useLocalizedStringFormatter-DhaaJ_kE.js";import"./Heading-CQkLHTFo.js";import"./info-rb3vhgVU.js";import"./Popover-CIVNeZMg.js";import"./check-Q5_RgS4y.js";import"./useToggleState-DvDscc3U.js";import"./TextFieldBase--JzlWS8S.js";import"./Input-PZkAC2eI.js";import"./useTextField-By0xorr9.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BHyMaBlC.js";import"./DragAndDrop-CkNMLaai.js";import"./inertValue-BJd9ngPB.js";import"./useListState-CSOw-KB7.js";import"./TagGroup-xPugvMh_.js";import"./useHighlightSelectionDescription-ByND_0OQ.js";import"./useUpdateEffect-DkvOqvkp.js";import"./useHasTabbableChild-CBvfQcK-.js";import"./chevron-down-ChSk-K36.js";import"./Virtualizer-DjCh0j6c.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
