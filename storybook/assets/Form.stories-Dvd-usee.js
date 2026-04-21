import{j as e}from"./iframe-Dmk7YWbP.js";import{c}from"./Form-lxF2zL-k.js";import{G as d}from"./Grid-D5h-r63o.js";import{G as i}from"./GridItem-D51nVS09.js";import{a as x,R as u}from"./Radio-Cmx3_R-z.js";import{C as I}from"./CheckboxGroup-DqRGK-te.js";import{C as G}from"./Checkbox-D49MWicO.js";import{T as t}from"./TextField-DUYpWoIy.js";import{S as l}from"./Select-CQ3LFGAb.js";import{L as p}from"./ListBoxItem-CWXflaBT.js";import{B as a}from"./Button-BkclXew1.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DQsZ5BW0.js";import"./utils-CZU1a0io.js";import"./clsx-B-dksMZM.js";import"./index-D7ra6ojE.js";import"./index-CGyxxXDN.js";import"./clsx-Ciqy0D92.js";import"./Group-Dd_e3Mvl.js";import"./FieldError-Blg6FnKj.js";import"./Text-C-958akl.js";import"./Text--asL3Zcb.js";import"./Button-F5fRRQra.js";import"./Hidden-j21WNwyS.js";import"./useLabel-DM6ovL82.js";import"./useLabels-BCoT3OdJ.js";import"./useButton-C4S2lX_8.js";import"./SelectionIndicator-B3uAMTLT.js";import"./useField-BTvl88ll.js";import"./VisuallyHidden-CW18ePiJ.js";import"./useControlledState-C7rqhk2c.js";import"./Label-zhkRkTgZ.js";import"./Dialog-z2G2hCwg.js";import"./RSPContexts-BkluUXe_.js";import"./OverlayArrow-2VGgn4IZ.js";import"./useResizeObserver-CNcNfmtM.js";import"./Collection-BUZ2WvuY.js";import"./index-BEEHQsac.js";import"./Separator-DigWaU0m.js";import"./SelectionManager-0hYn_pTl.js";import"./useEvent-DnGv8QpP.js";import"./scrollIntoView-B790B2bQ.js";import"./useDescription-aAvmV4Vy.js";import"./ListKeyboardDelegate-BQY05oIt.js";import"./PressResponder-UF3jWaRV.js";import"./useLocalizedStringFormatter-BZ6VtZ8V.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DdapsBG5.js";import"./getScrollParent-CKQLrhSn.js";import"./ModalOverlay-Dpa5xzh7.js";import"./x-CR8vb-29.js";import"./createLucideIcon-Dl46zayF.js";import"./useLocalizedStringFormatter-BIZu7Yxw.js";import"./Heading-DrckR7wJ.js";import"./info-CachzMjj.js";import"./Popover-CL3r2TAj.js";import"./check-CmPBAhCb.js";import"./useToggleState-CjPdhL_R.js";import"./TextFieldBase-mILG7qwS.js";import"./Input-DJ2I6k99.js";import"./useTextField-D6Ij23Fi.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C6CKNFMg.js";import"./DragAndDrop-eINEXbqk.js";import"./inertValue-hQODrXsP.js";import"./useListState-DseFWFAn.js";import"./TagGroup-BDtMOWAH.js";import"./useHighlightSelectionDescription-9p2XIuL1.js";import"./useUpdateEffect-BPBIoCea.js";import"./useHasTabbableChild-n-J1_Jgh.js";import"./chevron-down-C72SnTLr.js";import"./Virtualizer-CbsWcA2_.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
