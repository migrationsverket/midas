import{j as e}from"./iframe-DkekDUmt.js";import{$ as c}from"./Form-DLIviGGL.js";import{G as d}from"./Grid-B-E3oEHM.js";import{G as i}from"./GridItem-Bb0WECY5.js";import{T as t}from"./TextField-Bhf34FnH.js";import{S as l}from"./Select-698Ab4gm.js";import{B as a}from"./Button-ByTmb1iy.js";import{R as x,a as u}from"./Radio-CLAfbe8q.js";import{C as I}from"./CheckboxGroup-FdyUooFU.js";import{C as G}from"./Checkbox-BKqGSIX3.js";import{L as p}from"./ListBoxItem-DSZ4l1KM.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BXReLSzV.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CkgdwYyU.js";import"./useFocusRing-cFhFEPkT.js";import"./index-BWGp6XmU.js";import"./index-Dl4xFDvX.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DoT0FYK4.js";import"./TextField-CKDD27a5.js";import"./FieldError-CEappIaf.js";import"./Text-HRZszqtu.js";import"./Text-D-M7BBlz.js";import"./RSPContexts-CpoGppFQ.js";import"./Group-DygO-QMN.js";import"./Input-bzW5NWWM.js";import"./Hidden-C3DRpHWW.js";import"./Button-CPMuKErG.js";import"./useLabels-RwNRRVV1.js";import"./useButton-DGHMXKPK.js";import"./useTextField-Bz31S-zo.js";import"./useControlledState-CpjACMp2.js";import"./useField-BMA0_Hdl.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DVuM6C5j.js";import"./Dialog-BuwsrLx_.js";import"./OverlayArrow-BdpXS5xM.js";import"./useResizeObserver-CKvJ8Afq.js";import"./Collection-ClwlsW-k.js";import"./index-mwX1nWxh.js";import"./Separator-C0rqKJ69.js";import"./SelectionManager-4hWAiqPe.js";import"./useEvent-hPCrmc6p.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-QewNDPGC.js";import"./useDescription-DL-v02pN.js";import"./ListKeyboardDelegate-CdPGoYoU.js";import"./PressResponder-Cl82H1wV.js";import"./useLocalizedStringFormatter-2FeDuEc7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CCUvnScD.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D4lBxf5D.js";import"./x-DOULuHb2.js";import"./createLucideIcon-y8-UPzuM.js";import"./useLocalizedStringFormatter-Cb4oEEvA.js";import"./Heading-BWFYz-Kg.js";import"./info-DjxsNLx0.js";import"./Popover-CdXzXy5J.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CLxBefux.js";import"./DragAndDrop-D36oGGdi.js";import"./inertValue-i948ulcQ.js";import"./useListState-CglbGE43.js";import"./Tag-DDyyyPVw.js";import"./useHighlightSelectionDescription-DmnWCSqD.js";import"./useUpdateEffect-Dv5oLlx5.js";import"./useHasTabbableChild-TkrNM8B8.js";import"./chevron-down-BUgeIrEj.js";import"./Button.module-Co5e5YHp.js";import"./check-BFqxfENi.js";import"./useToggleState-Cd_p2kXT.js";import"./Virtualizer-DGH7zrxk.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
