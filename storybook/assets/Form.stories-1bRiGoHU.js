import{j as e}from"./iframe-BbpEZ5aM.js";import{$ as c}from"./Form-DjKxBtZD.js";import{G as d}from"./Grid-D6IjC5pQ.js";import{G as i}from"./GridItem-BDrCNy1G.js";import{T as t}from"./TextField-Cf_pN3CT.js";import{S as l}from"./Select-CGyDUD-P.js";import{B as a}from"./Button-yWoA7-6W.js";import{R as x,a as u}from"./Radio-qm7A7reQ.js";import{C as I}from"./CheckboxGroup-CVIayXAn.js";import{C as G}from"./Checkbox-BMf4nPh-.js";import{L as p}from"./ListBoxItem-r7all1fh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BdrbvCyg.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-zdZQWnsj.js";import"./useFocusRing-Cb5PiwmC.js";import"./index-B8aZdXXD.js";import"./index-BjFCBoac.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-B6gYpzEd.js";import"./TextField-B2oe5H5n.js";import"./FieldError-BW704g2y.js";import"./Text-8_j-63AW.js";import"./Text-j1d70Osr.js";import"./RSPContexts-x1o6smL2.js";import"./Group-wgdpX8BF.js";import"./Input-DceJBEcF.js";import"./Hidden-BuJG9RrC.js";import"./Button-CtkizHV8.js";import"./useLabels-BZZ1Timc.js";import"./useButton-ldcm24KF.js";import"./useTextField-DwZyKfQ7.js";import"./useControlledState-D9qEZDAW.js";import"./useField-CD0PHX4d.js";import"./TextField.module-CgqiUiYQ.js";import"./Label--seSDiUJ.js";import"./Dialog-DHg71ag_.js";import"./OverlayArrow-C2Yyp8CV.js";import"./useResizeObserver-BE2slcQZ.js";import"./Collection-CMtEzmjM.js";import"./index-Bt1_lDd3.js";import"./Separator-vNtjvz19.js";import"./SelectionManager-Bujgh3G0.js";import"./useEvent-6MY4vP-O.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CMlltGqv.js";import"./useDescription-CuIauOi2.js";import"./ListKeyboardDelegate-Beu6wPs6.js";import"./PressResponder-o9-VTS3S.js";import"./useLocalizedStringFormatter-blmY65Ok.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DN9E854x.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-kdaoL2HV.js";import"./x-Cn4QaZ5X.js";import"./createLucideIcon-CPTKChIs.js";import"./useLocalizedStringFormatter-ChzbMIxf.js";import"./Heading-BpERB3MI.js";import"./info-Bv5upm45.js";import"./Popover-CdlCGMko.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BUhBWd2b.js";import"./DragAndDrop-BFFqR0QL.js";import"./inertValue-Hda6theM.js";import"./useListState-DlaweBl7.js";import"./Tag-BIEcpPAv.js";import"./useHighlightSelectionDescription-DjBbmpHx.js";import"./useUpdateEffect-CgLx_Kf2.js";import"./useHasTabbableChild-APgQxxo4.js";import"./chevron-down-ry94dQr-.js";import"./Button.module-Co5e5YHp.js";import"./check-v9GpQv2G.js";import"./useToggleState-DAURwIzr.js";import"./Virtualizer-BXMOiXBB.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
