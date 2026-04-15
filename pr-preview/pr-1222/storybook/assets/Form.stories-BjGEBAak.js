import{j as e}from"./iframe-CgWG_iU2.js";import{c}from"./Form-CrH2ZpvP.js";import{G as d}from"./Grid-Jf1XZYZl.js";import{G as i}from"./GridItem-BUQ7UEkV.js";import{a as x,R as u}from"./Radio-BaY6pd3D.js";import{C as I}from"./CheckboxGroup-vBeBJWVb.js";import{C as G}from"./Checkbox-Bme3IuLn.js";import{T as t}from"./TextField-D4C-e68T.js";import{S as l}from"./Select-CzsXCljO.js";import{L as p}from"./ListBoxItem-DHDvue0K.js";import{B as a}from"./Button-nHuGQ5i0.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Dsycni8a.js";import"./utils-_M8wNiGT.js";import"./clsx-B-dksMZM.js";import"./index-DxbG3zi7.js";import"./index-BG0K86OR.js";import"./clsx-Ciqy0D92.js";import"./Group-C-cJ-Nhy.js";import"./FieldError-D-IJ4T5L.js";import"./Text-Dj7d9dGS.js";import"./Text-dFUGDIq7.js";import"./Button-ByOlI6-C.js";import"./Hidden-D3aMc9rP.js";import"./useLabel-DU9qnLW0.js";import"./useLabels-D66rAip6.js";import"./useButton-CtVOG2X0.js";import"./SelectionIndicator-C0agU0dY.js";import"./useField-s0ioTJPg.js";import"./VisuallyHidden-oanLmiAX.js";import"./useControlledState-BM6BESXh.js";import"./Label-Bvp9caED.js";import"./Dialog-NxrkXmQs.js";import"./RSPContexts-Bs45BnO9.js";import"./OverlayArrow-CpNrJJvN.js";import"./useResizeObserver-C6DyJ9gC.js";import"./Collection-BcC6_I8T.js";import"./index-Dn0BG2yc.js";import"./Separator-BcQ7oZhF.js";import"./SelectionManager-CTT6WwYs.js";import"./useEvent-FPbp72qp.js";import"./scrollIntoView-CqQuMmwT.js";import"./useDescription-CpHd73jI.js";import"./ListKeyboardDelegate-DqqiQJTe.js";import"./PressResponder-BcFSV-iY.js";import"./useLocalizedStringFormatter-BQ-Yoit3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BG0HieEY.js";import"./getScrollParent-DZ0TSZLG.js";import"./ModalOverlay-CXx03gPK.js";import"./x-Dv2iooYO.js";import"./createLucideIcon-DjCctUN5.js";import"./useLocalizedStringFormatter-Bvq7R4Wr.js";import"./Heading-Cj6qOAV_.js";import"./info-2HeSXoER.js";import"./Popover-uHHf-EWQ.js";import"./check-ECiiDiS4.js";import"./useToggleState-CEAqyIrS.js";import"./TextFieldBase-Ctfn89aR.js";import"./Input-RxD5CMUw.js";import"./useTextField-C28V9mVK.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dbs0cpnv.js";import"./DragAndDrop-8SYpID_Q.js";import"./inertValue-qascYWS8.js";import"./useListState-C1IvmGzw.js";import"./TagGroup-CShZMR6f.js";import"./useHighlightSelectionDescription-CWAW9roR.js";import"./useUpdateEffect-Dx_OmGO6.js";import"./useHasTabbableChild-CfVJvp1m.js";import"./chevron-down-CPDjsaOD.js";import"./Virtualizer-xAGTyn3H.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
