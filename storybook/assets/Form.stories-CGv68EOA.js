import{j as e}from"./iframe-D6LQdl6O.js";import{c}from"./Form-DJN2nlTm.js";import{G as d}from"./Grid-DooRrJs1.js";import{G as i}from"./GridItem-DT8v75T8.js";import{a as x,R as u}from"./Radio-BxuxtNtc.js";import{C as I}from"./CheckboxGroup-CoM2niGG.js";import{C as G}from"./Checkbox-CQAWWXmJ.js";import{T as t}from"./TextField-BKF-n39z.js";import{S as l}from"./Select-CCfkf9ze.js";import{L as p}from"./ListBoxItem-DD1RMeyR.js";import{B as a}from"./Button-BVWIHAUA.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BDbVtPGE.js";import"./utils-CZfNivSw.js";import"./clsx-B-dksMZM.js";import"./index-DPCjDfDX.js";import"./index-DlVk54G_.js";import"./clsx-Ciqy0D92.js";import"./Group-CxixKFtH.js";import"./FieldError-D0W-ZueW.js";import"./Text-CwW63OZO.js";import"./Text-RYp74C2J.js";import"./Button-9qwLQrmH.js";import"./Hidden-yz3dW65o.js";import"./useLabel-B512jCzb.js";import"./useLabels-CAs9k4GA.js";import"./useButton-CQHMF8NW.js";import"./SelectionIndicator-Dj8nmkfr.js";import"./useField-D9v9VApI.js";import"./VisuallyHidden-Cd1-ui_g.js";import"./useControlledState-FXE_mKkD.js";import"./Label-TJtPOiMs.js";import"./Dialog-CFtv-yBD.js";import"./RSPContexts-wImFRte6.js";import"./OverlayArrow-CfDCqg6_.js";import"./useResizeObserver-CTNNK95Q.js";import"./Collection-LO6NxUTl.js";import"./index-Dp2YHi41.js";import"./Separator-Bwb7CqB-.js";import"./SelectionManager-xlGPflp-.js";import"./useEvent-CZkNrFIT.js";import"./scrollIntoView-DobeBV9b.js";import"./useDescription-Dsci8nVE.js";import"./ListKeyboardDelegate-OVGwDV0D.js";import"./PressResponder-DnVZNDoa.js";import"./useLocalizedStringFormatter-iIj43R9v.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CfkmMHKA.js";import"./getScrollParent-c0trNJuS.js";import"./Dialog-Bdck8RKf.js";import"./x-CNFfLLin.js";import"./createLucideIcon-kgcsXuQA.js";import"./useLocalizedStringFormatter-rG6cuzBW.js";import"./Heading-hpYxgTmD.js";import"./info-6gR5Hkcq.js";import"./Popover-CIoEZ0C_.js";import"./check-COTF4HvK.js";import"./useToggleState-C1b9J6ra.js";import"./TextFieldBase-C5ojUHeb.js";import"./Input-Cmu-G9wA.js";import"./useTextField-C5294WGM.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Bo4JWXXI.js";import"./DragAndDrop-CZUxiZm6.js";import"./inertValue-DaOB47hh.js";import"./useListState-CF1eXiPX.js";import"./TagGroup-lpVUGHYL.js";import"./useHighlightSelectionDescription-CB28Ettz.js";import"./useUpdateEffect-Dq4UlUH9.js";import"./useHasTabbableChild-8xOA84oY.js";import"./chevron-down-DgE6GSB7.js";import"./Virtualizer-BUJBXl2_.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
