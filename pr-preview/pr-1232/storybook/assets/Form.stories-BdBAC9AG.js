import{j as e}from"./iframe-CFSsLpc3.js";import{c}from"./Form-DqURqGCQ.js";import{G as d}from"./Grid-D9qNZ3DK.js";import{G as i}from"./GridItem-ABkGG3qc.js";import{a as x,R as u}from"./Radio-C6jC6CpH.js";import{C as I}from"./CheckboxGroup-CQK0ps38.js";import{C as G}from"./Checkbox-B2WI4JQZ.js";import{T as t}from"./TextField-DqU2m4Gw.js";import{S as l}from"./Select-CnxvEgmw.js";import{L as p}from"./ListBoxItem-DuPe0as4.js";import{B as a}from"./Button-BpZ-gEJa.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BscyqCba.js";import"./utils-CgvAx7Eh.js";import"./clsx-B-dksMZM.js";import"./index-ov8VoHM9.js";import"./index-B-NeDNxk.js";import"./clsx-Ciqy0D92.js";import"./Group-Db9bSCAd.js";import"./FieldError-D6ZDrv96.js";import"./Text-CxyFIK0P.js";import"./Text-DJekINTm.js";import"./Button-BA4ocZWH.js";import"./Hidden-CLuFLk7t.js";import"./useLabel-3d-jaeMs.js";import"./useLabels-CNE6UZfT.js";import"./useButton-ddrptB5P.js";import"./SelectionIndicator-8krNnwqX.js";import"./useField-CPTxJIMP.js";import"./VisuallyHidden-CJUN9Oa8.js";import"./useControlledState-CbBMw6Jg.js";import"./Label-Bgvq3kDD.js";import"./Dialog-CKK-WVHx.js";import"./RSPContexts-Dl7sCpzY.js";import"./OverlayArrow-CSP9UkYr.js";import"./useResizeObserver-CIJyvcl5.js";import"./Collection-Cd7KKzRT.js";import"./index-OvV4dgoH.js";import"./Separator-rmfqRqKb.js";import"./SelectionManager-88QcvJjb.js";import"./useEvent-DS2KGNQU.js";import"./scrollIntoView-DIXoB_F8.js";import"./useDescription-DR9fGcHM.js";import"./ListKeyboardDelegate-DF2nCrcP.js";import"./PressResponder-Ce1RPxUw.js";import"./useLocalizedStringFormatter-kozoot1o.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DG4f8YqV.js";import"./getScrollParent-meA_uFiD.js";import"./ModalOverlay-BVhnULLD.js";import"./x-BqPwmm8B.js";import"./createLucideIcon-DwZpSpKK.js";import"./useLocalizedStringFormatter-9a5YAOSR.js";import"./Heading-BC1iKRRv.js";import"./info-Cko7SSA9.js";import"./Popover-rwzWFW5V.js";import"./check-BC0jy5p5.js";import"./useToggleState-DvUZEIsi.js";import"./TextFieldBase-Df468P-y.js";import"./Input-DlF7f-nw.js";import"./useTextField-B4DwmSYD.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DAA1Ql7A.js";import"./DragAndDrop-C4lzotPp.js";import"./inertValue-yyZ1Cbbp.js";import"./useListState-Gp4vsf8X.js";import"./TagGroup-C0RYMkQx.js";import"./useHighlightSelectionDescription-BYAlR4AM.js";import"./useUpdateEffect-BcB2IZgf.js";import"./useHasTabbableChild-BxZFX4TK.js";import"./chevron-down-C8v5Zlg4.js";import"./Virtualizer-C3piPMTN.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
