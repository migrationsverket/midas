import{j as e}from"./iframe-u1Lp3cWH.js";import{c}from"./Form-D4DocfVX.js";import{G as d}from"./Grid-BEsMBkOJ.js";import{G as i}from"./GridItem-DaiBCX7c.js";import{a as x,R as u}from"./Radio-Cwt2yXOR.js";import{C as I}from"./CheckboxGroup-B9KSE8Y0.js";import{C as G}from"./Checkbox-C0Fv-s_b.js";import{T as t}from"./TextField-CDxHtsdw.js";import{S as l}from"./Select-ByBzb0KQ.js";import{L as p}from"./ListBoxItem-Fo1iE4WN.js";import{B as a}from"./Button-CeEdTiGh.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Bt9lRSbz.js";import"./utils-Gcf78cCr.js";import"./clsx-B-dksMZM.js";import"./index-vqf3vopk.js";import"./index-CV03FtcW.js";import"./clsx-Ciqy0D92.js";import"./Group-D9LK4iRd.js";import"./FieldError-D-oYDuTv.js";import"./Text-DNrFEZpf.js";import"./Text-slIPEHAS.js";import"./Button-YBWgb3jY.js";import"./Hidden-C90fOqUW.js";import"./useLabel-CfQyR9Ip.js";import"./useLabels-XR_-vmuV.js";import"./useButton-CJlrbFFl.js";import"./SelectionIndicator-CxRRdMcp.js";import"./useField-Dk69aVnb.js";import"./VisuallyHidden-D7l7xynE.js";import"./useControlledState-Dq3PeISU.js";import"./Label-D4g6js0I.js";import"./Dialog-CGsfVXRQ.js";import"./RSPContexts-DkuerkqF.js";import"./OverlayArrow-DEsyUpqU.js";import"./useResizeObserver-F0kdb6Hu.js";import"./Collection-ScDJmlrl.js";import"./index-Y44MDtrN.js";import"./Separator-C9aHwUF3.js";import"./SelectionManager-BfSBhsyy.js";import"./useEvent-Bs3S41aN.js";import"./scrollIntoView-i7bgZAzR.js";import"./useDescription-2tob2pF0.js";import"./ListKeyboardDelegate-DiyRSclW.js";import"./PressResponder-DE-HejzW.js";import"./useLocalizedStringFormatter-BuqYPbAV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DEDnfxzU.js";import"./getScrollParent-dU7UAF5-.js";import"./ModalOverlay-Ly6FYZws.js";import"./x-BwlYKxxl.js";import"./createLucideIcon-DswZ9rJ-.js";import"./useLocalizedStringFormatter-9sVAI35M.js";import"./Heading-D_cJLnK6.js";import"./info-BZoorwl1.js";import"./Popover-CgT6YQ6e.js";import"./check-jP9ITP5y.js";import"./useToggleState-DybUQTsK.js";import"./TextFieldBase-Ozj8clX9.js";import"./Input-BPY-OfvJ.js";import"./useTextField-D94UlNAr.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CNpc5s8Y.js";import"./DragAndDrop-DxTMSuiI.js";import"./inertValue-CFt032H6.js";import"./useListState-DfWPztUL.js";import"./TagGroup-Bay2wZL4.js";import"./useHighlightSelectionDescription-B1Dzd-4J.js";import"./useUpdateEffect-DdPRK9oc.js";import"./useHasTabbableChild-HKvWctr6.js";import"./chevron-down-ClskEzed.js";import"./Virtualizer-CdajvxOl.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
